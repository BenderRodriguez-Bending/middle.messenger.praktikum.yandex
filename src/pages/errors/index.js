import {templateErrors} from "./errors.tmpl";
import {Templator} from "../../utils/Templator";

export function getErrors(ctx) {
    let templator = new Templator();
    return templator.template(templateErrors()).compile(ctx);
}