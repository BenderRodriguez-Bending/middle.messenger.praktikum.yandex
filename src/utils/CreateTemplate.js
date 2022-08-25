export class CreateTemplate {

    ATTRIBUTES = /(.*?)=['"](.*?)["']/gi;
    TAG = /<(.*?)>/gi;
    TAG_FULL = 0;
    TAG_ATTRIBUTES = 1;
    TAG_ATTRIBUTES_VALUE = 2;

    create(template) {
        return this._createTree(template);
    }

    _createTree(template) {
        const regTag = new RegExp(this.TAG, 'gi');
        let element = [];
        let textTag = template.toString();
        let text = "";

        Array.from(template.matchAll(regTag)).forEach((tag) => {
            textTag = textTag.replace(tag[this.TAG_FULL], '');
            if (Array.from(textTag)[0] !== '<'){
                text = textTag.substring(0, textTag.indexOf('<'));
                textTag = textTag.replace(text, '');
            }
            element.push(this._getContent(tag[this.TAG_ATTRIBUTES], text));
        });
    }

    _getContent(string, text) {
        const regAttr = new RegExp(this.ATTRIBUTES, 'gi');
        let attr;
        let tagName;
        let attributes;
        let structureElement = {};
        let attrs;
        let usedAttributes = [];
        let searchAttribute = false;

        if (string.indexOf(' ') !== -1){
            tagName = string.substring(0, string.indexOf(' '));
            searchAttribute = true;
        }else {
            tagName = string.trim();
        }

        structureElement.tag = tagName;

        if (searchAttribute){
            attributes = string.replace(tagName, '');
            structureElement.attributes = [];
            while ((attr = regAttr.exec(attributes))){
                usedAttributes.push(attr[this.TAG_FULL]);
                attrs = {
                    attribute: attr[this.TAG_ATTRIBUTES].trim(),
                    value: attr[this.TAG_ATTRIBUTES_VALUE].trim()
                };
                structureElement.attributes.push(attrs);
            }

            usedAttributes.map(attribute => attributes = attributes.replace(attribute, ''));

            attributes.split(' ').reduce(function (result, attribute){
                if (attribute){
                    structureElement.attributes.push({attribute: attribute});
                }
            });
        }
        if (text){
            structureElement.text = text.trim();
        }

        return structureElement;
    }

    _createElement(element) {
        const newElement = document.createElement(element.tag);
        if (element.attributes) {
            let val = "";
            element.attributes.forEach(function(item) {
                newElement.setAttribute(item.attribute, item.value);
            });
        }
        if (element.text){
            newElement.innerText = element.text;
        }
        return newElement;
    }

}
