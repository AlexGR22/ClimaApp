import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";


const useCLima = () => useContext(ClimaContext);
export default useCLima