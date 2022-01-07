import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import LoginLayout from "../../components/layout/loginLayout/LoginLayout";
import { REGISTER, ROOT } from "../../navigation/Routes";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { useLoginUserMutation } from "../../services/AuthApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate(); 

    const { register, handleSubmit,
        formState: { errors } } = useForm();

    toast.configure();

    const [loginUser, { isError, isLoading }] = useLoginUserMutation();

    const onSubmit = (model: any) => {      
        if (!isLoading) {
            loginUser(model)
                .then((response: any) => {
                    if (response.hasOwnProperty("data")) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('tokenExpirationTime', response.data.tokenExpirationTime);
                        localStorage.setItem('id', response.data.id);                     

                        toast.success("Welcome!", { autoClose: 3000 });
                        navigate(ROOT);
                        return;
                    } else if ('password' in response?.error?.data) {
                        toast.error(response?.error?.data.password, { autoClose: 3000 })
                    } else if ('username' in response?.error?.data) {
                        toast.error(response?.error?.data.username, { autoClose: 3000 })
                    }  
                })
                .catch((error: any) => {
                    toast.error(error, { autoClose: 3000 })
                });
        }
    };

    return (
        <LoginLayout>
            <div>
                <h2 className={styles.title}>Welcome to My Emotions</h2>
                <div className={styles.container} id="container">
                    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <h1>Sign in</h1>
                            <Input
                                label="Username"
                                name="username"
                                className={styles.username}
                                type="text"
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Llena el Username",
                                    }
                                }}
                                errorText={errors.username?.message}
                                required={true}
                            />

                            <Input
                                label="Password"
                                name="password"
                                className={styles.password}
                                type="password"
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Llena el Password",
                                    }
                                }}
                                errorText={errors.password?.message}
                                required={true}
                            />

                            <Link
                                to={REGISTER}
                                className={styles.link_holder}
                            >
                                Dont have an account?
                            </Link> <Link
                                to={ROOT}
                                className={styles.link_holder}
                            >
                                or join without account
                            </Link>

                            <Button
                                className={styles.btn_login}
                                isLoading={isLoading}
                                btnType="submit"
                                disabled={isLoading}
                                text="Sign In" />
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}

export default Login;

