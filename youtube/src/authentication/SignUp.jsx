import { useState } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import app from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useStyles = styled((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        const user = result.user;
        console.log("Google Sign-In successful. User:", user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google Sign-In error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LogIn
          </Button>
        </form>
      </div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleGoogleSignIn}
        className={classes.submit}
      >
        <GoogleIcon style={{ marginRight: "1rem" }} />
        LogIn with Google
      </Button>
      <Typography varient="h1">
        NEw user? : <Link to="/signin">SignUp</Link>
      </Typography>
    </Container>
  );
};

export default SignUp;
