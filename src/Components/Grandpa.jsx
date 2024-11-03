import React, { createContext, useState } from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunty from "./Aunty";
import "./grandpa.css";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

export default function Grandpa() {
    const [money, setMoney] = useState(1000);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <h5>Net Worth: {money}</h5>
      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContext.Provider value="gold">
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

/**
 * If u want to use context you need to-->
 * 1. Create a context ans export it.
 * 2. Add provider for the context with a value. value could be anything.
 * 3. useContext to access value in the API.
 */
