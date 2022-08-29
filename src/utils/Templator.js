import {getContext} from "./getContext";

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
        const regExp = this.TEMPLATE_REGEXP;
        const fullTag = 0;
        const contentTag = 1;
        let template = this._template;
        let brace = null;
        let match = Array.from(template.matchAll(regExp));

        match.map((brace) => {
            if (brace[contentTag]){
                const braceValue = brace[contentTag].trim();
                const data = getContext(ctx, braceValue, "");
                template = template.replaceAll(new RegExp(brace[fullTag], "gi"), data);
            }
        });

        return template;
    }
}