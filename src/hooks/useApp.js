import AppContext from "@/context/AppContext";
import { useContext } from "react";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
