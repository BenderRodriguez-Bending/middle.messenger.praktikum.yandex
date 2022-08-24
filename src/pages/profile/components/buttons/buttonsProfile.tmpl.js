import {Templator} from "../../../../utils/Templator";
import {getButton} from "../../../../components/button";

export function templateProfileButtons() {
    let templator = new Templator();
    return "<article class='block-buttons-profile'>" +
        templator.template(getButton()).compile({buttonType: "button", buttonClass: "btn-primary", buttonId: "button-edit", buttonText: "Редактировать профиль" }) +
        templator.template(getButton()).compile({buttonType: "button", buttonClass: "btn-primary", buttonId: "button-pass", buttonText: "Изменить пароль" }) +
        templator.template(getButton()).compile({buttonType: "button", buttonClass: "btn-danger", buttonId: "button-exit", buttonText: "Выход" }) +
        "</article>";
}