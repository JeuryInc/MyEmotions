import { Link, useNavigate } from "react-router-dom";
import LoginLayout from "../../components/layout/loginLayout/LoginLayout";
import { LOGIN, ROOT } from "../../navigation/Routes";
import styles from "./Register.module.scss";
import { useRegisterUserMutation } from "../../services/AuthApi";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { register, handleSubmit,
        formState: { errors } } = useForm();

    const navigate = useNavigate();

    toast.configure();

    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const onSubmit = (model: any) => {
        if (!isLoading) {
            registerUser(model)
                .then((response: any) => {
                    if (response.hasOwnProperty("data")) {
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem( 'tokenExpirationTime', response.data.tokenExpirationTime);
                        localStorage.setItem('id', response.data.id);
                        toast.success("User registred", { autoClose: 3000 });
                        navigate(ROOT);

                    } else if (response.hasOwnProperty("error")) {
                        const { status } = response?.error;

                        if (status === 400) {
                            const { password, username } = response?.error?.data;
                            if (password) {
                                return toast.error(response?.error?.data.password, { autoClose: 3000 })
                            } else if (username) {
                                return toast.error(response?.error?.data.username, { autoClose: 3000 })
                            }
                        }

                        let passwordError = response?.error?.data?.errors?.Password;

                        if (passwordError !== undefined) {
                            for (let index = 0; index < passwordError.length; index++) {
                                toast.error(passwordError[index], { autoClose: 3000 });
                            }
                        }
                    }
                })
                .catch((error: any) => {
                    toast.error("Something really bad happenned", { autoClose: 3000 });
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
                            <h1>Register</h1>
                            <Input
                                label="Name"
                                name="name"
                                type="text"
                                className={`${styles.name}`}
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Llena el from",
                                    }
                                }}
                                errorText={errors.name?.message}
                                required={true}
                            />
                            <Input
                                label="Username"
                                name="username"
                                type="text"
                                className={`${styles.username}`}
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Llena el username",
                                    }
                                }}
                                errorText={errors.username?.message}
                                required={true}
                            />
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                className={`${styles.password}`}
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Llena el password",
                                    }
                                }}
                                errorText={errors.password?.message}
                                required={true}
                            />
                            <Link
                                to={LOGIN}
                                className={styles.link_holder}
                            >
                                have an account?
                            </Link>
                            <Link
                                to={ROOT}
                                className={styles.link_holder}
                            >
                                or join without account
                            </Link>
                            <Button
                                className={styles.btn_register}
                                isLoading={isLoading}
                                btnType="submit"
                                disabled={isLoading}
                                text="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}

export default Register;