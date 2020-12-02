import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import Button from "../Button/view";
import { useForm } from "react-hook-form";
import { COUNTRIES, PROVINCES, ROUTES, } from "../../Utils/Constants";
import { SET_COUNTRY_SELECTED, SIGNUP_USER_BEGIN } from "../../Redux/Actions";
import Loading from "../Loading/view";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

SignupForm.propTypes = {
	selectedCountry: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	actionDispatcher: PropTypes.func.isRequired
};

export default function SignupForm({ selectedCountry, isLoading, actionDispatcher }) {

	const { t, } = useTranslation();

	const { register, errors, watch, handleSubmit, formState } = useForm({ mode: "all", });

	const onSelectedCountry = ({ target }) => actionDispatcher(SET_COUNTRY_SELECTED, target.value);
	const submitForm = handleSubmit((data) => {
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

						<h2>{t("signup.first")}</h2>

						<form onSubmit={submitForm}>

							<input name="name" placeholder={t("signup.firstname")}
								ref={register({
									required: { value: true, message: t("signup.required") },
									maxLength: { value: 30, message: t("signup.max_30") }
								})}
							/>
							{errors.name && <label>{errors.name.message}</label>}


							<input name="last_name" placeholder={t("signup.lastname")}
								ref={register({
									required: { value: true, message: t("signup.required") },
									maxLength: { value: 30, message: t("signup.max_30") }
								})}
							/>
							{errors.last_name && <label>{errors.last_name.message}</label>}


							<select name="country" ref={register({ required: { value: true, message: t("signup.required") } })} onChange={(e) => onSelectedCountry(e)} >
								<option hidden value="">{t("signup.country")}</option>
								{COUNTRIES.map(({ id, name }) => (
									<option key={id} value={id}>
										{name}
									</option>
								))}
							</select>
							{errors.country && <label>{errors.country.message}</label>}

							<select name="province" ref={register({ required: { value: true, message: t("signup.required") } })}  >
								<option hidden value="">{t("signup.province")}</option>
								{PROVINCES[selectedCountry]?.map(val => (
									<option key={val} value={val}>
										{val}
									</option>
								))}
							</select>
							{errors.province && <label>{errors.province.message}</label>}

							<input name="mail" placeholder={t("signup.mail")}
								ref={register({
									required: { value: true, message: t("signup.required") },
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: t("signup.invalid_email"),
									},
								})} />
							{errors.mail && <label>{errors.mail.message}</label>}

							<input name="phone" placeholder={t("signup.phone")} type="number"
								ref={register({
									required: { value: true, message: t("signup.required") },
									maxLength: { value: 10, message: t("signup.max_10") },
									pattern: {
										value: /^[0-9]*$/,
										message: t("signup.invalid_phone")
									}
								})}
							/>
							{errors.phone && <label>{errors.phone.message}</label>}

							<input name="password" placeholder={t("signup.password")} type="password"
								ref={register({
									required: { value: true, message: t("signup.required") },
									minLength: { value: 6, message: "Minimum 6 characters allowed" },
									pattern: {
										value: /^[a-zA-Z0-9]+$/,
										message: t("signup.alphanumerics_only"),
									},
								})}
							/>
							{errors.password && <label>{errors.password.message}</label>}

							<input name="repassword" placeholder={t("signup.repassword")} type="password"
								ref={register({
									required: { value: true, message: t("signup.required") },
									validate: (value) => value === watch("password") || t("signup.password_not_match"),
								})}
							/>
							{errors.repassword && <label>{errors.repassword.message}</label>}

							<div className={styles.terms_wrapper}>
								<label className={styles.terms_label} >
									<input type="checkbox" className={styles.terms_input} name="terms"
										ref={register({
											required: { value: true, message: t("signup.required") }
										})} />
									<span>{t("signup.terms_accept")}</span> <Link target="_blank" to={ROUTES.terms}>{t("signup.terms")}</Link>
								</label>
							</div>

							<div>
								<Button type="submit" border={formState.isValid ? "contained" : "disabled"}>{t("signup.submit")}</Button>
							</div>

						</form>
					</>

			}
		</div>
	);
}