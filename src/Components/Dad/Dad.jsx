import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div className="border-2 border-green-400 rounded-lg p-10 ">
            <h1 className="text-2xl font-bold text-center pb-8">Dad</h1>

          <div className="flex gap-3">
          <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
          </div>
        </div>
    );
};

export default Dad;