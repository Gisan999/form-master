import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="border-2 border-green-400 rounded-lg p-10 ">
            <h3  className="text-2xl font-bold text-center pb-8">Aunty</h3>
            <div className="flex gap-3">
                <Cousin name={'Hasan'}></Cousin>
                <Cousin name={'Mahabub'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;