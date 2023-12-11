import renderer from "react-test-renderer";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginForm from "./LoginForm";


describe('Login form', () => {
  it("Renderiza o formulario", () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("testa o botão de envio", () => {
    const loginMock = jest.fn();
    const { getByTestId } = render(<LoginForm login = {loginMock} />);

    console.log("Antes de clickar:", loginMock.mock.calls.length);
  
    const submitButton = getByTestId("submitButton");
    fireEvent.press(submitButton);

    console.log("Depois de clicar:", loginMock.mock.calls.length);
  
    expect(loginMock).toHaveBeenCalled();


  });

});

