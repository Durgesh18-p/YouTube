/* eslint-disable react/prop-types */
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

const Login = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  handleGoogleSignIn,
}) => {
  const classes = useStyles();

  return (
    <Container
      style={{
        marginTop: "5rem",
      }}
    >
      <Container component="main" maxWidth="xs">
        <div className={classes.container}>
          <Typography varient="h1">
            Welcome to{" "}
            <span
              style={{
                color: "#ffc3a0",
                fontSize: "1.5rem",
              }}
            >
              ContentHub
            </span>
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              Sign In
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
          Sign In with Google
        </Button>
        <Typography varient="h1">
          Already have an account : <Link to="/login">LogIn</Link>
        </Typography>
      </Container>
    </Container>
  );
};

export default Login;
