import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Screens/CreateUser.css'

const CreateUser = () => {
    const navigate = useNavigate()
  const [createdData, setCreatedData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", createdData)
    //   .then((res) => alert("data created successfully"))
    //   .catch((err) => console.log(err));
navigate("/")
  };
  return (
    <form  onSubmit={handleSubmit}>
      <Paper
      className="container"
        elevation={24}
        sx={{ borderRadius:"30px" , margin: "20px auto", position:"relative",top:"80px" , width: "40%", padding: "20px", backdropFilter:"blur(20px)", background:"transparent" }} 
      >
        <Typography align="center" variant="h4" sx={{ mb: 3, color:"white" }}>
          Create User
        </Typography>
        <TextField
          className="feil"
          label ="name"
          fullWidth
          style={{ marginBottom: "26px", color:"white" }}
          sx={{
            '& .MuiInputBase-input': {
                color: 'white',
            },
         
        }}
          required
          onChange={(e) =>
            setCreatedData({ ...createdData, name: e.target.value })
          }
        />
        <TextField
        className="feil"
          label="username"
          fullWidth
          color="primary"
          required
          style={{ marginBottom: "26px", color:"white" }}
          sx={{
            '& .MuiInputBase-input': {
                color: 'white',
            },
         
        }}
          onChange={(e) =>
            setCreatedData({ ...createdData, username: e.target.value })
          }
        />
        <TextField
          className="feil"
          label="email"
          fullWidth
          required
          style={{ marginBottom: "26px", color:"white" }}
          sx={{
            '& .MuiInputBase-input': {
                color: 'white',
            },
         
        }}
          onChange={(e) =>
            setCreatedData({ ...createdData, email: e.target.value })
          }
        />
        <TextField
          className="feil"
          label="phone"
          fullWidth
          required
          style={{ marginBottom: "26px", color:"white" }}
          sx={{
            '& .MuiInputBase-input': {
                color: 'white',
                
            },
         
        }}
          onChange={(e) =>
            setCreatedData({ ...createdData, phone: e.target.value })
          }
        />
        <Button variant="outlined"  sx={{
                color: 'white',
                borderColor: 'white' // Text color white
              // Background color for contrast
              
            }} style={{width:120, height:50}} type="submit">
          Create
        </Button>
      </Paper>
    </form>
  );
};

export default CreateUser;
