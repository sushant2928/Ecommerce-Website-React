import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Input, SubmitBtn } from "react-formik-ui";
import { emailPasswordSignUp, emailPasswordSignIn } from "../firebase";
import { selectIsUserLoggedIn } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Authentication = () => {
  const [buttonsDisabled, setbuttonsDisabled] = useState(false);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  function handleSignIn(data) {
    setbuttonsDisabled(true);
    emailPasswordSignIn(
      data.email_signIn,
      data.password_signIn,
      setbuttonsDisabled
    ); // dispatch(addUser(user));
  }
  function handleSignUp(data) {
    emailPasswordSignUp(
      data.userName_signUp,
      data.email_signUp,
      data.password_signUp,
      setbuttonsDisabled
    );
  }
  const signUpValidation = () => {
    return yup.object().shape({
      userName_signUp: yup.string().required("Name is required"),
      email_signUp: yup
        .string()
        .email("Wrong format")
        .required("Email is required"),
      password_signUp: yup.string().required("Password is required"),
    });
  };
  const signInValidation = () => {
    return yup.object().shape({
      email_signIn: yup
        .string()
        .email("Wrong format")
        .required("Email is required"),
      password_signIn: yup.string().required("Password is required"),
    });
  };
  return (
    <>
      {isUserLoggedIn && <Redirect to="/cart" />}

      <div className="flex flex-col justify-between m-2 md:flex-row md:justify-evenly md:items-center h-screen">
        {buttonsDisabled ? (
          <p className="text-2xl font-bold">Loading...</p>
        ) : (
          <>
            <Formik
              initialValues={{
                userName_signUp: "",
                email_signUp: "",
                password_signUp: "",
              }}
              validationSchema={signUpValidation}
              onSubmit={handleSignUp}
            >
              <Form className="shadow-lg p-5 md:w-1/3" styling="theme">
                <fieldset>
                  <legend className="text-lg md:text-xl lg:text-2xl font-bold mb-5">
                    New User? Sign Up
                  </legend>
                  <Input
                    name="userName_signUp"
                    label="Username"
                    hint="Enter Your Name"
                    required
                  />

                  <Input
                    name="email_signUp"
                    label="Email"
                    hint="Enter your email"
                    required
                  />
                  <Input
                    name="password_signUp"
                    label="Password"
                    hint="Enter your password"
                    required
                  />

                  <SubmitBtn
                    className="bg-black text-white font-semibold rounded w-full px-3 py-1.5"
                    text="Sign Up"
                    disabled={buttonsDisabled}
                  />
                </fieldset>
              </Form>
            </Formik>
            <Formik
              initialValues={{
                email_signIn: "",
                password_signIn: "",
              }}
              validationSchema={signInValidation}
              onSubmit={handleSignIn}
            >
              <Form className="shadow-lg p-5 md:w-1/3" styling="theme">
                <fieldset>
                  <legend className="text-lg md:text-xl lg:text-2xl font-bold mb-5">
                    Already a User? Sign In
                  </legend>

                  <Input
                    name="email_signIn"
                    label="Email"
                    hint="Enter your email"
                    required
                  />
                  <Input
                    name="password_signIn"
                    label="Password"
                    hint="Enter your password"
                    required
                  />

                  <SubmitBtn
                    className="bg-black text-white font-semibold rounded w-full px-3 py-1.5"
                    text="Sign In"
                    disabled={buttonsDisabled}
                  />
                </fieldset>
              </Form>
            </Formik>
          </>
        )}
      </div>
    </>
  );
};

export default Authentication;
