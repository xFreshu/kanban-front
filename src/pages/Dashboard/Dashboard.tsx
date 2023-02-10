import React from "react";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import classes from "./Dashboard.module.scss";
import HeaderApp from "../../components/organisms/HeaderApp/HeaderApp";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className={classes.parent}>
        <Sidebar />
        <HeaderApp />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
