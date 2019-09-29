import { object, string, addMethod } from "yup";
import { validCharactors } from "../validCharactors";

addMethod(string, "validCharactors", validCharactors);

export const joinSchema = () => {
  return object().shape({
    id: string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .validCharactors("입력할 수없는 문자입니다", true)
      .required("Required"),
    password: string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .validCharactors("입력할 수없는 문자입니다", true)
      .required("Required")
      .test("password-match", "confirmPassword랑 일치하지않습니다.", function(value) {
        return this.parent.confirmPassword === value;
      }),
    email: string()
      .email("Invalid email")
      .required("Required")
      .validCharactors("입력할 수없는 문자입니다", false)
      .test("email-match", "confirmEmail랑 일치하지않습니다.", function(value) {
        console.log(value);
        console.log(this.parent.confirmEmail);
        return this.parent.confirmEmail === value;
      }),
    nickname: string()
      .min(1, "Too Short!")
      .validCharactors("입력할 수없는 문자입니다", true)
      .max(12, "Too Long!"),
    gender: string().validCharactors("입력할 수없는 문자입니다", true),
  });
};
