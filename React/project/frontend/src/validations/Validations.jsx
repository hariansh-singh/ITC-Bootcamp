import * as Yup from "yup";

const logInValidationRules = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters long and include at least one letter and one number"
    ),
});

const registerValidationRules = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters long and include at least one letter and one number"
    ),
  age: Yup.string().required("Age is required"),
});

export { logInValidationRules, registerValidationRules };
