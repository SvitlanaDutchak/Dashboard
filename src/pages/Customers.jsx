import React from "react";
import { CustomersData } from "../components/CustomersData";

export const Customers = () => {
  return (
    <section className="customers">
      <h2 className="title-page">Hello Evano 👋🏼,</h2>
      <div className="customers__content">
        <h3 className="sub-title">All Customers</h3>
        <CustomersData  />
      </div>
    </section>
  );
};