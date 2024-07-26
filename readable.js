// module start

const defaultConfig = {
    identifier: ".readable",
    fontWeight: 800,
    fontColor: "black",
    fontSize: "1em",
    scaleAll: true,
};

class ReadAble {
    constructor(config) {
        this.config = {
            ...defaultConfig,
            ...config,
        };

        // select elements with the identifier class
        const elements = document.querySelectorAll(this.config.identifier);

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
        if (this.state === undefined) return;
        this.state = true;

        // apply style to the first letter of each word
        this.style.replaceSync(`
            ${this.config.identifier} span.rdbl {
                font-weight: ${this.config.fontWeight};
                color: ${this.config.fontColor};
                font-size: ${this.config.fontSize};
            }
        `);
        // scale word gaps with first letters
        this.style.insertRule(
            `${this.config.identifier} {
                word-spacing: ${
                    this.config.fontSize.slice(0, this.config.fontSize.length - 2) / 4
                }em;
            }`
        );
        // scale entire texts if enabled (enabled by default)
        if (this.config.scaleAll) {
            this.style.insertRule(
                `${this.config.identifier} {
                    font-size: ${this.config.fontSize} !important;
                }`
            );
        }
        document.adoptedStyleSheets = [this.style];
    }

    disable() {
        if (this.state === undefined) return;
        this.state = false;

        // remove style
        document.adoptedStyleSheets = [];
    }

    toggle() {
        if (this.state) {
            this.disable();
        } else {
            this.enable();
        }
    }

    setConfig(config) {
        this.config = {
            ...this.config,
            ...config,
        };
    }

    setIdentifier(identifier) {
        this.config.identifier = identifier;
    }

    setFontWeight(fontWeight) {
        this.config.fontWeight = fontWeight;
    }

    setFontColor(fontColor) {
        this.config.fontColor = fontColor;
    }

    setFontSize(fontSize) {
        this.config.fontSize = fontSize;
    }

    setScaleAll(scaleAll) {
        this.config.scaleAll = scaleAll;
    }
}
