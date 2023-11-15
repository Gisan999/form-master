

// eslint-disable-next-line react/prop-types
const ReusableForm = ({ formTitle, handleSubmit, children, formBtn = "Submit" }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handleSubmit(data)
    }


    return (
        <div className="space-y-3">
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input className="pl-8 pr-20 py-1 mb-2" type="text" name="name" placeholder="Name" />
                <br />
                <input className="pl-8 pr-20 py-1 mb-2" type="email" name="email" id="" placeholder="Email" />
                <br />
                <input className="pl-8 pr-20 py-1 mb-2" type="password" name="password" id="" placeholder="Password" />
                <br />

                <input type="submit" value={formBtn} />
            </form>
        </div>
    );
};

export default ReusableForm;