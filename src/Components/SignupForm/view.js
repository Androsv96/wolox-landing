import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { COUNTRIES, PROVINCES } from '../../Utils/Constants';

export default function SignupForm() {

    const { register, errors, watch, handleSubmit, formState } = useForm({ mode: 'all', });
    console.log(errors)
    return (
        <div className={styles.signup_section}>

            <h2>Register</h2>

            <form>

                <input name="name" placeholder="Nombre"
                    ref={register({
                        required: { value: true, message: "Required" },
                        maxLength: { value: 30, message: "Only 30 characters allowed" }
                    })}
                />
                {errors.name && <label>{errors.name.message}</label>}


                <input name="lastname" placeholder="Apellido"
                    ref={register({
                        required: { value: true, message: "Required" },
                        maxLength: { value: 30, message: "Only 30 characters allowed" }
                    })}
                />
                {errors.lastname && <label>{errors.lastname.message}</label>}


                <select name="country" ref={register({ required: { value: true, message: "Required" } })} >
                    <option value=""></option>
                    {COUNTRIES.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </select>
                {errors.country && <label>{errors.country.message}</label>}

                <input name="email" placeholder="Correo"
                    ref={register({
                        required: { value: true, message: "Required" },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Invalid email',
                        },
                    })} />
                {errors.email && <label>{errors.email.message}</label>}

                <input name="phone" placeholder="Teléfono" type="number"
                    ref={register({
                        required: { value: true, message: "Required" },
                        maxLength: { value: 10, message: "Only 10 characters allowed" },
                        pattern: {
                            value: /^[0-9]*$/,
                            message: "Invalid phone number"
                        }
                    })}
                />
                {errors.phone && <label>{errors.phone.message}</label>}

                <input name="password" placeholder="Contraseña" type="password"
                    ref={register({
                        required: { value: true, message: "Required" },
                        minLength: { value: 6, message: "Minimum 6 characters allowed" },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: 'Must only contain alphanumerics',
                        },
                    })}
                />
                {errors.password && <label>{errors.password.message}</label>}

                <input name="repassword" placeholder="Confirme contraseña" type="password"
                    ref={register({
                        required: { value: true, message: "Required" },
                        validate: (value) => value === watch('password') || 'Passwords does not match',
                    })}
                />
                {errors.repassword && <label>{errors.repassword.message}</label>}

            </form>
        </div>
    );
}