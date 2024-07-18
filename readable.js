// module start

const $$ = (identifier) => document.querySelectorAll(identifier);

const firstLetterStyle = `
    {
        font-weight: bold;
    }
`;

class ReadAble {
    constructor(identifier) {
        // set identifier
        if (identifier === undefined) {
            identifier = "readable";
        }
        this.identifier = `.${identifier}`;

        // add style
        this.style = new CSSStyleSheet();
        this.style.replaceSync(`${this.identifier} span.rdbl ${firstLetterStyle}`);
        document.adoptedStyleSheets = [this.style];
    }

    enable() {
        // select elements with the identifier class
        const elements = document.querySelectorAll(this.identifier);

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
    }
}
