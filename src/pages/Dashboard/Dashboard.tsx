import React, { useState } from "react";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import classes from "./Dashboard.module.scss";
import HeaderApp from "../../components/organisms/HeaderApp/HeaderApp";
import { Outlet } from "react-router-dom";

type ContextType = {};

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={classes.parent}>
        <Sidebar />
        <HeaderApp />
        <Outlet context={isOpen} />
      </div>
    </>
  );
};

export default Dashboard;
