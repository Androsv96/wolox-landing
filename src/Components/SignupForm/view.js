import styles from './style.module.scss';
import Button from '../Button/view';
import { useForm } from 'react-hook-form';
import { COUNTRIES, PROVINCES, ROUTES, } from '../../Utils/Constants';
import { SET_COUNTRY_SELECTED, SIGNUP_USER_BEGIN } from '../../Redux/Actions';
import Loading from '../Loading/view';
import { Link } from 'react-router-dom';

export default function SignupForm({ signupReducer, actionDispatcher }) {

    const { selectedCountry, isLoading } = signupReducer;
    const { register, errors, watch, handleSubmit, formState } = useForm({ mode: 'all', });

    const onSelectedCountry = ({ target }) => actionDispatcher(SET_COUNTRY_SELECTED, target.value);
    const submitForm = handleSubmit((data, e) => {
        delete data.repassword;
        actionDispatcher(SIGNUP_USER_BEGIN, data);
    });

    return (
        <div className={styles.signup_section}>


            {
                isLoading ?
                    <Loading />

                    :

                    <>

                        <h2>Sign up</h2>

                        <form onSubmit={submitForm}>

                            <input name="name" placeholder="Nombre"
                                ref={register({
                                    required: { value: true, message: "Required" },
                                    maxLength: { value: 30, message: "Only 30 characters allowed" }
                                })}
                            />
                            {errors.name && <label>{errors.name.message}</label>}


                            <input name="last_name" placeholder="Apellido"
                                ref={register({
                                    required: { value: true, message: "Required" },
                                    maxLength: { value: 30, message: "Only 30 characters allowed" }
                                })}
                            />
                            {errors.last_name && <label>{errors.last_name.message}</label>}


                            <select name="country" ref={register({ required: { value: true, message: "Required" } })} onChange={(e) => onSelectedCountry(e)} >
                                <option hidden value="">País</option>
                                {COUNTRIES.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <label>{errors.country.message}</label>}

                            <select name="province" ref={register({ required: { value: true, message: "Required" } })}  >
                                <option hidden value="">Provincia</option>
                                {PROVINCES[selectedCountry]?.map((val, idx) => (
                                    <option key={idx} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                            {errors.province && <label>{errors.province.message}</label>}

                            <input name="mail" placeholder="Correo"
                                ref={register({
                                    required: { value: true, message: "Required" },
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'Invalid email',
                                    },
                                })} />
                            {errors.mail && <label>{errors.mail.message}</label>}

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

                            <div className={styles.terms_wrapper}>
                                <label className={styles.terms_label} >
                                    <input type="checkbox" className={styles.terms_input} name="terms"
                                        ref={register({
                                            required: { value: true, message: "Required" }
                                        })} />
                                    Acepto <Link target="_blank" to={ROUTES.terms}>términos y condiciones</Link>
                                </label>
                            </div>

                            <div>
                                <Button type="submit" border={formState.isValid ? "contained" : "disabled"}>Enviar</Button>
                            </div>

                        </form>
                    </>

            }
        </div>
    );
}