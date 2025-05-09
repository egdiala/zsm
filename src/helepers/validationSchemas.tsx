import * as Yup from "yup";

// const phoneRegex = /^(\+?234|0)([789]\d{9})$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*()])[a-zA-Z0-9@$%!#^&*()]{8,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,12}$/;
// const phoneValidation = Yup.string().matches(phoneRegex, "Invalid phone number").required("Phone Number is required");
const passwordValidation = (regexMatchErrorMessage?: string, requiredErrorMessage?: string) =>
  Yup.string()
    .matches(passwordRegex, regexMatchErrorMessage || "Password must follow the described format")
    .required(requiredErrorMessage || "Password is required");

const stringRequired = (fieldName: string) => Yup.string().required(`${fieldName} is required`);
const email = (fieldName: string) => stringRequired(fieldName).email("Invalid email format");

// const emailValidation = Yup.string().email("Invalid email address").required("Email is required");

export const loginSchema = Yup.object({
  email: email("Email"),
  password: stringRequired("Password").max(20, "Must be 20 characters or less"),
});

export const verifyEmailSchema = Yup.object({
  email: email("Email"),
});

export const resetPasswordsSchema = Yup.object({
  newPassword: passwordValidation("Password must match the required format.", "Please enter a new password."),
  newPassword2: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please re-enter a new password."),
});

export const resetPasswordsSchema2 = Yup.object({
  currentPassword: stringRequired("Password"),
  newPassword: passwordValidation("Password must match the required format.", "Please enter a new password.").notOneOf([Yup.ref("currentPassword")], "New password must be different from the current password."),
  newPassword2: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please re-enter a new password."),
});
