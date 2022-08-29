import {Templator} from "../../utils/Templator";
import {getInput} from "../../components/input";
import {getButton} from "../../components/button";

export function templateRegistration() {
    let templator = new Templator();
    return "<form class='block-registration' method='post' action=''>" +
        "<h1>Регистрация</h1>" +
        templator.template(getInput()).compile({inputId: "input_first_name", inputLabel: "Имя", inputName: "first_name", inputType: "text"}) +
        templator.template(getInput()).compile({inputId: "input_second_name", inputLabel: "Фамилия", inputName: "second_name", inputType: "text"}) +
        templator.template(getInput()).compile({inputId: "input_login", inputLabel: "Логин", inputName: "login", inputType: "text"}) +
        templator.template(getInput()).compile({inputId: "input_email", inputLabel: "E-mail", inputName: "email", inputType: "email"}) +
        templator.template(getInput()).compile({inputId: "input_password", inputLabel: "Пароль", inputName: "password", inputType: "password"}) +
        templator.template(getInput()).compile({inputId: "input_phone", inputLabel: "Телефон", inputName: "phone", inputType: "tel"}) +
        templator.template(getButton()).compile({buttonType: "submit", buttonClass: "btn-danger", buttonId: "button-auth", buttonText: "Регистрация"}) +
        "</form>";
}