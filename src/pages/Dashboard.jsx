import React from "react";
import PropTypes from "prop-types";
import TableData from "../components/TableData";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <TableData />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
