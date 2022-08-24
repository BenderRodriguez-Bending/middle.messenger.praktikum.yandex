export class createTemplate {

    TAG = /<(.*?)>/gi;
    ATTRIBUTES = /(.*?)=['"](.*?)["']/gi;

    create(template) {
        return this._createTree(template);
    }

    _createTree(template) {
        const regTag = new RegExp(this.TAG, 'gi');
        let attr, element = [], textTag = template.toString(), text = "";
        attr = Array.from(template.matchAll(regTag));

        attr.forEach((item) => {
            textTag = textTag.replace(item[0], '');
            if (Array.from(textTag)[0] !== '<'){
                text = textTag.substring(0, textTag.indexOf('<'));
                textTag = textTag.replace(text, '');
            }
            element.push(this._getContent(item[1], text));
        });

        //console.log(template)
        console.log(element)


    }

    _getContent(string, text) {
        const regAttr = new RegExp(this.ATTRIBUTES, 'gi');
        let attr, tagName, attributes;
        let structureElement = {}, attrs, usedAttributes = [], searchAttribute = false;

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
                usedAttributes.push(attr[0]);
                attrs = {
                    attribute: attr[1].trim(),
                    value: attr[2].trim()
                };
                structureElement.attributes.push(attrs);
            }

            usedAttributes.map(item => attributes = attributes.replace(item, ''));

            attributes.split(' ').reduce(function (result, item){
                if (item){
                    structureElement.attributes.push({attribute: item});
                }
            });
        }
        if (text){
            structureElement.text = text.trim();
        }

        return structureElement;
    }

    _createElement(element) {
        const result = document.createElement(element.tag);
        if (element.attributes) {
            let val = "";
            element.attributes.forEach(function(item) {
                result.setAttribute(item.attribute, item.value);
            });
        }
        if (element.text){
            result.innerText = element.text;
        }
        //console.log(result);
        return result;
    }

}
