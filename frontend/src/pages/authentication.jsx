import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

const theme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      setError("");

      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result || "Registration successful");
        setOpen(true);
        setFormState(0);
        setUsername("");
        setPassword("");
        setName("");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* MAIN PAGE LAYOUT */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        {/* LEFT AUTH PANEL */}
        <Box
          sx={{
            flex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper elevation={6} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Button
                  variant={formState === 0 ? "contained" : "outlined"}
                  onClick={() => setFormState(0)}
                >
                  Sign In
                </Button>
                <Button
                  variant={formState === 1 ? "contained" : "outlined"}
                  onClick={() => setFormState(1)}
                >
                  Sign Up
                </Button>
              </Box>

              {formState === 1 && (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                fullWidth
                margin="normal"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <Box sx={{ color: "red", mt: 1 }}>{error}</Box>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* RIGHT IMAGE PANEL */}
        <Box
          sx={{
            flex: 7,
            backgroundImage: "url('/logo193.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </ThemeProvider>
  );
}
