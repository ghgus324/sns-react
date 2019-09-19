import { connect } from "react-redux";
import Login from "./Login";
import IRootState from "../store/root-state";
//import { ILoginInfo } from "../models/loginInfo";
export const mapStateToProps = ({ ui }: IRootState) => ({
  //store데이터 들고오는 부분
  isLogin: ui.login.isLogin,
});

//store 추가하거나 변경할때
// export const mapDispatchToProps = (dispatch:IThunkDispatch)=>({

// });

export default connect(
  mapStateToProps,
  {} //mapDispatchToProps있으면 {}대신 mapDispatchToProps로 처리
)(Login);
