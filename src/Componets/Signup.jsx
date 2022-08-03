import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Style/Signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import { firebaseapp } from "../fire_config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Register = async () => {
    const Auth = getAuth();
    await createUserWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        if (res.operationType === "signIn") {
          navigate("/");
        }
      })
      .catch((error) => alert(error.code));
  };
  return (
    <>
      <div className="main_div">
        <h2>Register</h2>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className="outlined_basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          className="outlined_basic"
          label="Password"
          variant="outlined"
          type={"password"}
        />
        <Button onClick={() => Register()} variant="contained" color="success">
          Register
        </Button>
        <br />
        <a href="/">Have Account Already</a>
      </div>
    </>
  );
};
