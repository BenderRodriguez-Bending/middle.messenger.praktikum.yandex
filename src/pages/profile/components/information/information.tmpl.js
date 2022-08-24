import {Templator} from "../../../../utils/Templator";
import {getInput} from "../../../../components/input";

export function templateInformation() {
    let templator = new Templator();
    return "<article class='block-information'>" +
        templator.template(getInput()).compile({inputId: "input_first_name", inputLabel: "Имя", inputName: "first_name", inputType: "text", inputValue: "Ярослав", inputAttribute: "disabled"}) +
        templator.template(getInput()).compile({inputId: "input_second_name", inputLabel: "Фамилия", inputName: "second_name", inputType: "text", inputValue: "Куляскин", inputAttribute: "disabled"}) +
        templator.template(getInput()).compile({inputId: "input_login", inputLabel: "Логин", inputName: "login", inputType: "text", inputValue: "YarStorm", inputAttribute: "disabled"}) +
        templator.template(getInput()).compile({inputId: "input_email", inputLabel: "E-mail", inputName: "email", inputType: "email", inputValue: "yaroslav3787@yandex.ru", inputAttribute: "disabled"}) +
        templator.template(getInput()).compile({inputId: "input_password", inputLabel: "Пароль", inputName: "password", inputType: "password", inputValue: "123456789", inputAttribute: "disabled"}) +
        templator.template(getInput()).compile({inputId: "input_phone", inputLabel: "Телефон", inputName: "phone", inputType: "tel", inputValue: "89998707877", inputAttribute: "disabled"}) +
        "</article>";
}