import { useState } from "react";



const StateFulForm = () => {
    const [nameValue, setNameValue] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e.target.name.value)
        console.log(nameValue, email, password)
    }

    const changeName = e => {
        setNameValue(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={changeName}
                    type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePassword}
                type="password" name="password" id="" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default StateFulForm;