import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('gold')

const Grandpa = () => {
    return (
        <div className="max-w-screen-xl mx-auto space-y-5 mt-12 border-2 border-green-400 rounded-lg p-8 ">
            <div>
                <h2 className="text-2xl font-bold text-center">Grandpa</h2>
            </div>
          <AssetContext.Provider value="gold">
          <div className="flex gap-5 justify-center">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
          </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;