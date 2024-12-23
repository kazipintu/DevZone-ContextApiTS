/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode } from "react";
//typescript version
export const contextAPI = createContext<any>(undefined);

// for typescript we must interface

// ==== interface ==== //
// interface ContextProps {
//   children: ReactNode
// }

// ==== mention the type of data ==== //
type ContextParameter = {
  children: ReactNode
}

const Context = ({ children }: ContextParameter) => {

  const nameList = [
    "Rahim", "Mahi", "Makbul"
  ]

  const student = {
    name: "bashir", age: 25, dept: "anatomy"
  }

  const data = { nameList, student }

  return (
    <contextAPI.Provider value={data}>
      {children}
    </contextAPI.Provider>
  );
};

export default Context;