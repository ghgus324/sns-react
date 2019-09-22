import * as React from "react";
import { FormikProps, Form } from "formik";
import { FormValues, mapStateToProps } from "./Join.container";

type P = FormikProps<FormValues> & ReturnType<typeof mapStateToProps>;

// type P = FormikProps<FormValues> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const JoinForm: React.SFC<P> = props => {
  const { values, errors, isSubmitting, handleChange } = props;

  return (
    <React.Fragment>
      <h2> Join Page</h2>
      <Form>
        <input
          type={"text"}
          name={"id"}
          value={values.id}
          onChange={handleChange}
          // minLength={6}
          maxLength={12}
          placeholder={"id"}
          required
        />
        {errors.id && <div id="IdError">{errors.id}</div>}
        <br />
        <input
          type={"password"}
          name={"password"}
          value={values.password}
          onChange={handleChange}
          //minLength={8}
          maxLength={12}
          placeholder={"password"}
          required
        />
        {errors.password && <div id="PasswordError">{errors.password}</div>}
        <br />
        <input
          type={"password"}
          name={"confirmPassword"}
          value={values.confirmPassword}
          onChange={handleChange}
          minLength={8}
          maxLength={12}
          placeholder={"confirmPassword"}
          required
        />
        {errors.confirmPassword && <div id="ConfPasswordError">{errors.confirmPassword}</div>}
        <br />
        <input type={"text"} name={"mail"} value={values.mail} onChange={handleChange} placeholder={"mail"} required />
        {errors.mail && <div id="MailError">{errors.mail}</div>}
        <br />
        <input
          type={"text"}
          name={"confirmEmail"}
          value={values.confirmEmail}
          onChange={handleChange}
          placeholder={"confirmEmail"}
          required
        />
        {errors.confirmEmail && <div id="ConfEmailError">{errors.confirmEmail}</div>}
        <br />
        <input
          type={"text"}
          name={"nickname"}
          value={values.nickname}
          onChange={handleChange}
          minLength={1}
          maxLength={12}
          placeholder={"nickname"}
          required
        />
        {errors.nickname && <div id="NicknameError">{errors.nickname}</div>}
        <br />
        <input type={"text"} name={"gender"} value={values.gender} onChange={handleChange} placeholder={"gender"} />
        {errors.gender && <div id="GenderError">{errors.gender}</div>}
        <br />
        <button disabled={isSubmitting}>join</button>
      </Form>
    </React.Fragment>
  );
};

export default JoinForm;
