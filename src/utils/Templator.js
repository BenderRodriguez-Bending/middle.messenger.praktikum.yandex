import {getContext} from "./getContext";
import {createTemplate} from "./createTemplate";

export class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)}}/gi;

    template(template) {
        this._template = template;
        return this;
    }

    compile(ctx) {
        return this._compileTemplate(ctx);
    }

    _compileTemplate(ctx) {
        let template = this._template;
        let brace = null;
        const regExp = this.TEMPLATE_REGEXP;
        let match = Array.from(template.matchAll(regExp));
        match.map((brace) => {
            if (brace[1]){
                const braceValue = brace[1].trim();
                const data = getContext(ctx, braceValue, "");
                template = template.replaceAll(new RegExp(brace[0], "gi"), data);
            }
        });

        return template;
        //return new createTemplate().create(template); // Тут реализация парсинга строки и создание через createElement
    }
}