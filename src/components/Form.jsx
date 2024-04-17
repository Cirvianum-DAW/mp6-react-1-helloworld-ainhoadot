import React, { useState } from "react";

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
        props.setPlacesDisponibles(props.placesActuals - 1);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white w-1/2 shadow-md rounded-lg px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center mb-8">
                    Detalls d'estudiant: {props.tipusEstudiantSelect}
                </h1>
                <div className="mb-4">
                    <label className="text-gray-700 block mb-2" htmlFor="fname">
                        Nom:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fname"
                        type="text"
                        name="fname"
                        onBlur={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 block mb-2" htmlFor="lname">
                        Cognom:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lname"
                        type="text"
                        name="lname"
                        onBlur={(e) => setLastName(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
                <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
                    {welcomeMessage}
                </label>
            </form>
        </div>
    );
}

export default Form;