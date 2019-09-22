import { connect } from "react-redux";
import { withFormik } from "formik";
import { joinSchema } from "../lib/validation/schema/joinSchema";
import JoinForm from "./JoinForm";
export const mapStateToProps = () => ({});

// export const mapDispatchToProps = (dispatch:IThunkDispatch) => ({

// });

export interface FormValues {
  //Form에서 사용할려면 변수 선언해야함(밑에 초기치도 같이 설정해줘야함)
  id: string;
  password: string;
  confirmPassword: string;
  mail: string;
  confirmEmail: string;
  nickname: string;
  gender: string;
}

type FormProps = ReturnType<typeof mapStateToProps>;
//type FormProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Form = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      //초기치 설정 부분
      id: "",
      password: "",
      confirmPassword: "",
      mail: "",
      confirmEmail: "",
      nickname: "",
      gender: "",
    };
  },

  validationSchema: joinSchema,

  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    JSON.stringify(values);
    setSubmitting(false);
  },
})(JoinForm);

export default connect(
  mapStateToProps,
  {}
)(Form);
