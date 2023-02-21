import React, { useState } from "react";
import InputControl from "../../InputControl/InputControl";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtondisabled] = useState(false);

  const handleSubmission = () => {
    // console.log(values);
    if (!values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtondisabled(true);

    // login method firebase
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtondisabled(false);
        // console.log(res);
      
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtondisabled(false);
        setErrorMsg(err.message);
        // console.log("Error-", err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeHolder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeHolder="Enter your password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
