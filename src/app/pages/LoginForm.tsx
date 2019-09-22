import * as React from "react";

export interface LoginProps {
  isLogin: boolean;
}

export class LoginForm extends React.Component<LoginProps> {
  render() {
    return (
      <div>
        <p>Login화면</p>
      </div>
    );
  }
}

export default LoginForm;
