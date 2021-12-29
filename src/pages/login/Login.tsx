import { Link } from "react-router-dom";
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

    const { register, handleSubmit,
        formState: { errors } } = useForm();

    toast.configure();

    const [loginUser, { isError, isLoading }] = useLoginUserMutation();

    const onSubmit = (model: any) => {
        if (!isError && !isLoading) {
            loginUser(model)
                .then((response: any) => {
                    if ('password' in response?.error?.data) {
                        toast.error(response?.error?.data.password, { autoClose: 3000 })
                    } else if ('username' in response?.error?.data) {
                        toast.error(response?.error?.data.username, { autoClose: 3000 })
                    } else {
                        console.log(response);
                        localStorage.setItem('token', response.token)
                        localStorage.setItem(
                            'tokenExpirationTime',
                            response.tokenExpirationTime
                        )
                        localStorage.setItem('id', response.id)
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

