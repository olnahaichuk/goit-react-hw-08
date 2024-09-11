import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import css from "./RegistrationForm.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { apiRegister } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';




const validationSchema = Yup.object({
  name: Yup.string()
    .required("Ім'я є обов'язковим!")
    .min(3, "Ім'я має бути мінімум 2 символи")
    .max(50, "Ім'я має бути меншим за 50 символів")
    .required("Обов'язкове значення!"),
   email: Yup.string()
             .email("Некоректна електронна адреса!")
            .required("Електронна адреса є обов'язковою!"),
        password : Yup.string()
            .required("Обов'язкове значення!")
            .min(8, "Повинен бути мінімум 8 символів")
            .max(10, "Максимум 10 символів!")
})

const RegistrationForm = () => {

    const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  }
  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  
    
  }
  return (<Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
           {({errors})=> <Form className={css.form}>
                <div className={css.label}>
                <label htmlFor="name">Ім&apos;я користувача</label>
                <Field name='name' type="text" placeholder="Lisa Humster"  className={css.inputField}></Field>
                <ErrorMessage name="name">
                 {msg => <div className={css.error}>{msg}</div>}
                 </ErrorMessage>
                </div>
                <div className={css.label}>
                    <label >Email</label>
                <Field type="text" name="email" placeholder="franko@gmail.com"  className={css.inputField}></Field>
                    <ErrorMessage name="email" >
                    {msg => <div className={css.error}>{msg}</div>}</ErrorMessage>
          </div>
                <div className={css.label}> <label>Пароль</label>
                <Field name="password" type="password" placeholder="Ведіть свій пароль"  className={css.inputField} ></Field>
                <ErrorMessage name="password">
                 {msg => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
          <button type="submit"
           disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}>Зареєструватися </button>
          {error && (
                        <p className={css.errorText}>Oops...some error occured {error }</p>
                    )}
          
            </Form>}
            
            
        </Formik>
  )
}

export default RegistrationForm
