import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Button colorScheme='blue'><Link style={{textDecoration : "none", color:"black"}} to="company">COMPANIES</Link></Button>
      <br/>
      <br/>
      <Button colorScheme='blue'><Link style={{textDecoration : "none", color :"black"}} to="employee">EMPLOYEES</Link></Button>
    </div>
  );
};
