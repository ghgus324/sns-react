import { connect } from "react-redux";
import Login from "./Login";
import IRootState from "../store/root-state";
//import { ILoginInfo } from "../models/loginInfo";
export const mapStateToProps = ({ ui }: IRootState) => ({
  isLogin: ui.login.isLogin,
});

// export const mapDispatchToProps = (dispatch:IThunkDispatch)=>({

// });

export default connect(
  mapStateToProps,
  {}
)(Login);
