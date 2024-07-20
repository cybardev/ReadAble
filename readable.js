// module start

const firstLetterStyle = `
    {
        font-weight: 800;
    }
`;

class ReadAble {
    constructor(identifier) {
        // set identifier
        if (identifier === undefined) {
            identifier = "readable";
        }
        this.identifier = `.${identifier}`;

        // select elements with the identifier class
        const elements = document.querySelectorAll(this.identifier);

        // wrap first letter of each word with <span> HTML tag and .rdbl class
        for (let i = 0; i < elements.length; i++) {
            let htmlContent = elements[i].innerHTML;
            const modifiedContent = htmlContent.replace(
                /(?:<[^>]*>)|(\b[a-z])([a-z]+)?\b/gim,
                function (match, p1, p2) {
                    if (p1) {
                        return "<span class='rdbl'>" + p1 + "</span>" + (p2 || "");
                    } else {
                        return match; // preserve HTML tags
                    }
                }
            );
            elements[i].innerHTML = modifiedContent;
        }

        // add stylesheet
        this.style = new CSSStyleSheet();

        // maintain state
        this.state = false;
    }

    enable() {
        // apply style to the first letter of each word
        this.style.replaceSync(`${this.identifier} span.rdbl ${firstLetterStyle}`);
        document.adoptedStyleSheets = [this.style];

        this.state = true;
    }

    disable() {
        // remove style
        document.adoptedStyleSheets = [];

        this.state = false;
    }

    toggle() {
        if (this.state === undefined) return;
        if (this.state) {
            this.disable();
        } else {
            this.enable();
        }
    }
}
