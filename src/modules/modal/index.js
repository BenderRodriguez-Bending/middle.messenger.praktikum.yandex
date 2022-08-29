import {templateModal} from "./modal.tmpl";
import {Templator} from "../../utils/Templator";

export function getModal() {
    let templator = new Templator();
    return templator.template(templateModal()).compile({headerModal: "Загрузите файл", bodyModal: "Lorem Ipsum Dolor, или фото успешно загружено", linkModalText: "Выбрать файл на компьютере?"});
}