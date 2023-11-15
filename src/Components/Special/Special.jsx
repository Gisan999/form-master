import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div className="">
            <h1>Special</h1>
            <div className="flex">
            <p>has:{gift}</p>

            </div>
        </div>
    );
};

export default Special;