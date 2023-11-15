import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div className="border-2 border-green-400 rounded-lg p-10 ">
            <h2 className="text-2xl font-bold text-center pb-8">Uncle</h2>
            <div className="flex gap-3">
                
            <Cousin name={'Gisan'}></Cousin>
            <Cousin name={'Shamima'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;