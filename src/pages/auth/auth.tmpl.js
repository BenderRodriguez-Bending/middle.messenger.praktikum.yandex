import {getInput} from "../../components/input";
import {Templator} from "../../utils/Templator";
import {getButton} from "../../components/button";

export function templateAuth() {
    let templator = new Templator();
    return "<form class='block-auth' method='post' action=''>" +
        "<h1>Вход</h1>" +
        templator.template(getInput()).compile({inputId: "input_login", inputLabel: "Логин", inputName: "login", inputType: "text"}) +
        templator.template(getInput()).compile({inputId: "input_password", inputLabel: "Пароль", inputName: "password", inputType: "password"}) +
        templator.template(getButton()).compile({buttonType: "submit", buttonClass: "btn-primary", buttonId: "button-auth", buttonText: "Войти"}) +
        "<a href='registartion'>Нет аккаунта?</a> " +
        "</form>";
}