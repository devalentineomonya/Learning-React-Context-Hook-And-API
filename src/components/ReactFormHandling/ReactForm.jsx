import React, { useState } from "react";
import "./reactform.css";
import InputElement from "./InputElement";

const ReactForm = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const formInputs = [
    {
      id: 1,
      name: "username",

      placeholder: "Username",
      label: "Username",
      errorText: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern:"^[A-Za-z]{3, 16}$",
      required:true,
},
{
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Your Email",
    label: "Email",
    errorText: "You should enter a valid email address",
    required:true,
},
{
    id: 3,
    name: "dateOfBirth",
    type: "date",
    label: "Date Of Birth",
    required:true,
},
{
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    errorText:
    "Password should container 8 - 20 characters and include at least 1 letter 1 number and 1 special character",
    required:true,
},
{
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    errorText: "Passwords don't match!",
    pattern:registrationData.password, 
    required:true,
},
  ];
  //   function handleRegister(e) {
  //     e.preventDefault();
  //     const registrationData = new FormData(e.target);
  //     const registrationDataObject = Object.fromEntries(
  //       registrationData.entries()
  //     );
  //     validateRegistration(registrationDataObject);
  //   }
  const onChangeHandler = (e) => {
    setRegistrationData({...registrationData,[e.target.name]:e.target.value});
  }
  console.log(registrationData);
  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Register</h2>
        <div className="form-content">
          <form action="" method="post">
            {formInputs.map((inputField) => (
              <InputElement key={inputField.id} {...inputField} value={registrationData[inputField.name]} onChange={onChangeHandler}/>
            ))}

            <div className="form-element">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReactForm;
