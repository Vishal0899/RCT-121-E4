import React from "react";
import { Route, Routes } from "react-router";
import { Company } from "./Company";
import { Employee } from "./Employee";
import { Employees } from "./Employees";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company" element={<Company />} />
      <Route path="/employee" element={<Employees />} />
      <Route path="/employee/:id" element={<Employee />} />
    </Routes>
  );
};
