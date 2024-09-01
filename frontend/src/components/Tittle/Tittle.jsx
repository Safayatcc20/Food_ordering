import React from "react";
import classes from "./tittle.module.css";

export const Tittle = ({ tittle, fontSize, margin }) => {
  return <h1 style={{ fontSize, margin, color: "#616161" }}>{tittle}</h1>;
};
