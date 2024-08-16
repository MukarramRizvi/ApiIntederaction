import React, { useEffect, useState } from "react";
import CustomizedTables from "../Component/Tables";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dta, setDta] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setDta(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => navigate("/create")}
        sx={{ float: "right", margin: "10px 0px", padding: "10px" ,
color: 'white',
                borderColor: 'white',
                backgroundColor:'black',
         }}
      >
        Create User
      </Button>
      <CustomizedTables data={dta} />
    </div>
  );
};

export default Home;
