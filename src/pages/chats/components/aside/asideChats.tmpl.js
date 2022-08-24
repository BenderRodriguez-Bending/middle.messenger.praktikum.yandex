import {Templator} from "../../../../utils/Templator";
import {getButton} from "../../../../components/button";
import {getInput} from "../../../../components/input";
import {getCard} from "../card";

export function templateAsideChats() {
    let templator = new Templator();
    return "<aside class='block-aside-chats'>" +
        "<div class='block-aside-chats__header'>" +
        templator.template(getButton()).compile({buttonType: "button", buttonClass: "btn-primary", buttonId: "button-profile", buttonText: "Профиль"}) +
        templator.template(getInput()).compile({inputId: "search-input", inputName: "search", inputType: "text", inputPlaceholder: "Поиск", inputValue: ""}) +
        "</div>" +
        "<div class='block-aside-chats__list scroll scroll-thin'>" +
        templator.template(getCard()).compile({cardClass: "", cardUserName: "Вася", cardTime: "09:15", cardTextPreview: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так..."}) +
        templator.template(getCard()).compile({cardClass: "is_new", cardUserName: "Петя", cardTime: "13:55", cardTextPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}) +
        templator.template(getCard()).compile({cardClass: "", cardUserName: "Серёжа", cardTime: "12:36", cardTextPreview: "But I must explain to you how all this mistaken idea of denouncing pleasure..."}) +
        templator.template(getCard()).compile({cardClass: "", cardUserName: "Вася", cardTime: "09:15", cardTextPreview: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так..."}) +
        templator.template(getCard()).compile({cardClass: "is_new", cardUserName: "Петя", cardTime: "13:55", cardTextPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}) +
        templator.template(getCard()).compile({cardClass: "", cardUserName: "Серёжа", cardTime: "12:36", cardTextPreview: "But I must explain to you how all this mistaken idea of denouncing pleasure..."}) +
        "</div>" +
        "</aside>";
}