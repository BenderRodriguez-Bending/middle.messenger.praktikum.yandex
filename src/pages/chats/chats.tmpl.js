import {Templator} from "../../utils/Templator";
import {getAsideChats} from "./components/aside";
import {getEnter} from "./components/enter";

export function templateChats() {
    let templator = new Templator();
    return "<div class='block-chat'><div><section class='block-chat__correspondence'>Выберите чат для общения</section>" + templator.template(getEnter()).compile() + "</div>" +
    templator.template(getAsideChats()).compile();
}