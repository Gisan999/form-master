

// eslint-disable-next-line react/prop-types
const Cousin = ({name}) => {
    return (
        <div className=" p-5 border-2 border-purple-500 rounded-lg">
            <h1 className="text-xl font-medium">Cousin</h1>
            <p>{name}</p>
        </div>
    );
};

export default Cousin;