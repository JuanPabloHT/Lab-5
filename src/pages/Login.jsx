import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate()

    const handleLogin = () => {
        if(username === "admin" && password === "1234"){
            navigate("/dashboard");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return(
        <Box sx={{ maxWidth: 500, mx: "auto", mt: 10 }}>
      <Typography variant="h4" mb={2}>Login</Typography>
      <TextField label="Usuario" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Contraseña" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Iniciar Sesión</Button>
    </Box>

    );
};

export default Login;