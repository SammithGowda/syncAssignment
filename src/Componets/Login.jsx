import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Style/Login.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import { firebaseapp } from "../fire_config";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Submitaccount = async () => {
    const Auth = getAuth();
    await signInWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        console.log(res._tokenResponse.refreshToken);
        sessionStorage.setItem("Token", res._tokenResponse.refreshToken);
        navigate("/dashbord");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <>
      <div className="main_login_div">
        <h2>Login</h2>
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
        <Button
          onClick={() => Submitaccount()}
          variant="contained"
          color="success"
        >
          Login
        </Button>
        <br />
        <a href="/signup">Don't Have Account</a>
      </div>
    </>
  );
};
