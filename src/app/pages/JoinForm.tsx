import * as React from "react";
import { FormikProps, Form } from "formik";
import { FormValues, mapStateToProps } from "./Join.container";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type P = FormikProps<FormValues> & ReturnType<typeof mapStateToProps>;

// type P = FormikProps<FormValues> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const JoinForm: React.SFC<P> = props => {
  const { values, errors, isSubmitting, handleChange } = props;

  return (
    <React.Fragment>
      <h2> Join Page</h2>
      <Form>
        <TextField
          label="ID"
          type="text"
          name="id"
          value={values.id}
          onChange={handleChange}
          inputProps={{
            maxLength: 12,
          }}
          placeholder="id"
          required
        />
        {errors.id && <div id="IdError">{errors.id}</div>}
        <br />
        <TextField
          label="PASSWORD"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          inputProps={{
            maxLength: 12,
          }}
          placeholder="password"
          required
        />
        {errors.password && <div id="PasswordError">{errors.password}</div>}
        <br />
        <TextField
          label="PASSWORD AGAIN"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          inputProps={{
            minLength: 8,
            maxLength: 12,
          }}
          placeholder="confirmPassword"
          required
        />
        {errors.confirmPassword && <div id="ConfPasswordError">{errors.confirmPassword}</div>}
        <br />
        <TextField
          label="MAIL"
          type="text"
          name="mail"
          value={values.mail}
          onChange={handleChange}
          placeholder="mail"
          required
        />
        {errors.mail && <div id="MailError">{errors.mail}</div>}
        <br />
        <TextField
          label="MAIL AGAIN"
          type="text"
          name="confirmEmail"
          value={values.confirmEmail}
          onChange={handleChange}
          placeholder="confirmEmail"
          required
        />
        {errors.confirmEmail && <div id="ConfEmailError">{errors.confirmEmail}</div>}
        <br />
        <TextField
          label="NICKNAME"
          type="text"
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
          inputProps={{
            minLength: 1,
            maxLength: 12,
          }}
          placeholder="nickname"
          required
        />
        {errors.nickname && <div id="NicknameError">{errors.nickname}</div>}
        <br />
        <TextField
          label="GENDER"
          type="text"
          name="gender"
          value={values.gender}
          onChange={handleChange}
          placeholder="gender"
        />
        {errors.gender && <div id="GenderError">{errors.gender}</div>}
        <br />
        <Button variant="contained" color="primary" disabled={isSubmitting}>
          join
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default JoinForm;
