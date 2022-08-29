import {Templator} from "../../../../utils/Templator";
import {getButton} from "../../../../components/button";
import {getTextarea} from "../../../../components/textarea";

export function templateEnter() {
    let templator = new Templator();
    return "<section class='block-enter'>" +
        templator.template(getButton()).compile({buttonClass: "btn-primary", buttonId: "button-send", buttonText: "Отправить", buttonType: "button"}) +
        templator.template(getTextarea()).compile({textareaPlaceholder: "Введите сообщение", textareaId: "send_message", textareaName: "send_message"}) +
        "</section>";
}