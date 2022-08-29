import {Templator} from "../../utils/Templator";
import {getButton} from "../../components/button";

export function templateModal() {
    let templator = new Templator();
    return "<div class='block-modal'><div><span>{{ headerModal }}</span><a href='{{ linkModalHref }}'>{{ linkModalText }}</a>" +
        templator.template(getButton()).compile({buttonType: "button", buttonClass: "btn-primary", buttonId: "button-profile", buttonText: "Применить"}) +
        "</div></div>";
}