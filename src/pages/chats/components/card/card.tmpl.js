export function templateCard() {
    return "<div class='block-card {{ cardClass }}'>" +
        "<div><span>{{ cardUserName }}</span><small>{{ cardTime }}</small></div>" +
        "<p>{{ cardTextPreview }}</p>" +
        "</div>";
}