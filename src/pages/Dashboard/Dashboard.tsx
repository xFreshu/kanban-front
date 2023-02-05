import React from "react";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import classes from "./Dashboard.module.scss";
import HeaderApp from "../../components/organisms/HeaderApp/HeaderApp";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <HeaderApp />
    </div>
  );
};

export default Dashboard;
