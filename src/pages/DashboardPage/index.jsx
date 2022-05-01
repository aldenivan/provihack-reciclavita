import React from "react";
import Header from "../../components/Header";
import MyComponent from "../../components/Map/index";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <h1>
        <MyComponent />
      </h1>
    </>
  );
};
export default DashboardPage;
