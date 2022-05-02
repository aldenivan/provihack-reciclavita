import React from "react";
import Header from "../../components/Header";
import MyComponent from "../../components/Map/";
import Footer from "../../components/Footer";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <h1>
        <MyComponent />
      </h1>
      <Footer />
    </>
  );
};
export default DashboardPage;
