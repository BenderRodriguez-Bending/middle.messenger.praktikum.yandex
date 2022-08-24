import {Templator} from "../../utils/Templator";
import {getAvatar} from "./components/avatar";
import {getButtonsProfile} from "./components/buttons";
import {getInformation} from "./components/information";

export function templateProfile() {
    let templator = new Templator();
    return "<section class='block-profile'>" +
        templator.template(getAvatar()).compile({avatarPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En", avatarAlt: "avatar_alt"}) +
        templator.template(getInformation()).compile() +
        templator.template(getButtonsProfile()).compile() +
        "</section>";
}