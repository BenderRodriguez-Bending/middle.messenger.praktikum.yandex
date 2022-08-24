export function templateInput() {
    return "<div class='block-input'>" +
        "<label for='{{ inputId }}'>{{ inputLabel }}</label>" +
        "<input id='{{ inputId }}' name='{{ inputName }}' type='{{ inputType }}' placeholder='{{ inputPlaceholder }}' value='{{ inputValue }}' {{ inputAttribute }}>" +
        "</div>";
}