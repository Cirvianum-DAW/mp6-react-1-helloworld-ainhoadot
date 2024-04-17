import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleClick = (event) => {
    handleInputReset('', '', '');
    setWelcomeMessage(
      `${firstName} ${lastName} enregistrat. Email enviat a ${email}`,
    );
    props.setPlacesDisponibles(props.placesActuals - 1);
    event.preventDefault(); // Necessari per evitar que el form es refresqui
  };

  //change of input value set method
  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  //set input fields
  const handleInputReset = (firstName, lastName, email) => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
  };

  return (
    <div className="flex h-screen justify-center">
      <form className="enrolForm w-3/4" name="enrolForm">
        <ul className="ulEnrol">
          <li className="mb-2">
            <input
              className="border-1 mb-4 w-full rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="text"
              name="firstname"
              placeholder="Nom"
              value={firstName}
              onChange={(event) => handleInputChange(setFirstName, event)}
            />
          </li>
          <li>
            <input
              className="border-1 mb-4 w-full rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="text"
              name="lastname"
              placeholder="Cognom"
              value={lastName}
              onChange={(event) => handleInputChange(setLastName, event)}
            />
          </li>
          <li>
            <input
              className="border-1 mb-4 w-full rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => handleInputChange(setEmail, event)}
            />
          </li>
          <li>
            <input
              className="mb-4 w-full rounded bg-blue-500 p-2 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="submit"
              name="Enrol"
              alt="Enrol"
              value="Inscripció"
              onClick={handleClick}
            />
          </li>
          <li>
            <label className="mb-4 block w-full p-2 text-2xl" id="studentMsg">
              {welcomeMessage}
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;