import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import css from "./LoginForm.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { apiLoginIn } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';


const loginValidationSchema = Yup.object({
 
   email: Yup.string()
             .email("Некоректна електронна адреса!")
            .required("Електронна адреса є обов'язковою!"),
        password : Yup.string()
            .required("Обов'язкове значення!")
            .min(8, "Повинен бути мінімум 8 символів")
            .max(10, "Максимум 10 символів!")
})



const LoginForm = () => {
     const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  }
  const handleSubmit = (values) => {
    dispatch(apiLoginIn(values));
    
    
  }

  return (
     <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}>
           {({errors})=> 
            <Form className={css.form}>
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
                        className={css.submitBtn}>Залогінитися </button>
                    {error && (
                        <p className={css.errorText}>Oops...some error occured {error }</p>
                    )}
            </Form>
            }
        </Formik>
  )
  
}

export default LoginForm
