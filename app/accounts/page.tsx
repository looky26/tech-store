import React from "react";
import AccountClientSide from "./components/AccountClientSide";
import { getXataClient } from "@/src/xata";
import { auth } from "@clerk/nextjs";

const xata = getXataClient();

const Accounts = async () => {


  return (
    <div>
      <AccountClientSide />
    </div>
  );
};

export default Accounts;
