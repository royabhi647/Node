import React, { useState } from "react";
import InputControl from "../../InputControl/InputControl";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtondisabled] = useState(false);

  const handleSubmission = () => {
    // console.log(values);
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtondisabled(true);

    // signup method firebase
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtondisabled(false);
        // console.log(res);
        const user = res.user;
        // console.log(user);
        await updateProfile(user, {
          displayName: values.name,
        });
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
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeHolder="Enter your name"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeHolder="Enter email address"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeHolder="Enter your password"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
