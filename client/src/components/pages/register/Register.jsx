import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/style/theme";
import { GlobalStyle } from "../../../assets/style/globalStyles";
import FormInput from "../../atoms/formInput/FormInput";
import { Link } from "react-router-dom";

export const RegisterWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.teal};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterFormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px;
  border-radius: 30px;
  form {
    input {
      display: block;
    }
    div {
      text-align: center;
      margin-top: 15px;
      button {
        border: none;
        border-radius: 30px;
        padding: 10px 30px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.transparent};
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    a {
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
  }
`;

const Register = () => {
  //data for register fields
  const registerInputs = [
    { id: 1, name: "username", type: "text", label: "Nazwa użytkownika:" },
    { id: 2, name: "email", type: "email", label: "Adres e-mail:" },
    { id: 3, name: "password", type: "password", label: "Hasło:" },
    { id: 4, name: "confirm", type: "password", label: "Potwierdź hasło:" },
  ];

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const changeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userData);
  };

  console.log(process.env.REACT_APP_DB_PWD)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RegisterWrapper>
        <RegisterFormWrapper>
          <form>
            {registerInputs.map(({ id, ...item }) => (
              <FormInput
                key={id}
                {...item}
                onChange={changeHandler}
                value={userData[item.name]}
              />
            ))}
            <div>
              <button>Zarejestuj</button>
            </div>
            <p>
              Masz już konto? <br /> <Link to="/login">Zaloguj się.</Link>
            </p>
          </form>
        </RegisterFormWrapper>
      </RegisterWrapper>
    </ThemeProvider>
  );
};

export default Register;
