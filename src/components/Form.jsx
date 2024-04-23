import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (event) => {
    handleInputReset('', '', '');
    props.setPlacesDisponibles(props.placesActuals - 1);
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    let id = randomKey;
    props.setDetallsEstudiant({
      key: id,
      fname: firstName,
      lname: lastName,
      programGrup: props.tipusEstudiantSelect,
      email: email,
    });
    event.preventDefault(); 
  };

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  const handleInputReset = (firstName, lastName, email) => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
  };

  return (
    <div className="flex">
      <form className="enrolForm w-3/4" name="enrolForm">
        <ul className="ulEnrol">
          <li>
            <input
              className="border-1 mb-4 w-96 justify-center rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="text"
              name="firstname"
              placeholder="Nom"
              value={firstName}
              onChange={(event) => handleInputChange(setFirstName, event)}
            />
          </li>
          <li>
            <input
              className="border-1 mb-4 w-96 justify-center rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="text"
              name="lastname"
              placeholder="Cognom"
              value={lastName}
              onChange={(event) => handleInputChange(setLastName, event)}
            />
          </li>
          <li>
            <input
              className="border-1 mb-4 w-96 justify-center rounded-lg border-dotted border-black bg-gray-200 p-2"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => handleInputChange(setEmail, event)}
            />
          </li>
          <li>
            <input
              className="mb-4 w-96 justify-center rounded bg-blue-500 p-2 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="submit"
              name="Enrol"
              alt="Enrol"
              value="Inscripció"
              onClick={handleClick}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;