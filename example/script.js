let rdbl = undefined;

const config = {
    fontSize: "1.02em",
};

function init() {
    rdbl = new ReadAble(config);
}

function toggle() {
    rdbl.toggle();
}
