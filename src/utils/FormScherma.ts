import * as yup from "yup";

export const createUserFormsSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email e um campo obrigatorio")
    .matches(
      /^([-_\D\d.+_-])+@([a-zA-Z0–9\d])+((\.+[a-zA-Z0–9]{2,10}){1,10})$/,
      "E-mail incorreto"
    ),

  password: yup
    .string()
    .required("Password e um campo obrigatorio")
    .min(5, "A senha deve ser de no minimo 5 digitos"),
});
