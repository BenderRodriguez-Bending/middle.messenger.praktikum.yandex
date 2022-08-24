export function templateTextarea() {
    return "<div class='block-textarea'>" +
        "<label for='{{ textareaId }}'>{{ textareaLabel }}</label>" +
        "<textarea name='{{ textareaName }}' id='{{ textareaId }}' placeholder='{{ textareaPlaceholder }}'></textarea>" +
        "</div>";
}