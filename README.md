# ReadAble

A JavaScript library to make text on your websites quicker to read.

## Example

Live website: <https://readable.cybar.dev>

![screenshot](https://github.com/user-attachments/assets/9f538888-6984-44bf-826f-847d6819ccc3 "Screenshot of webpage that uses this library")

Check the [`example/`](example/) directory for code.

## Usage

### CDN

Add this to your HTML before any other script tags:

```html
<script async src="https://cdn.jsdelivr.net/gh/cybardev/ReadAble@v2/readable.js"></script>
```

### Manual

- download `readable.js`
- place `readable.js` in your project adjacent to other script files
- include it in HTML via `<script>` tag

## Customization

In your JS script file, pass in a config object as parameter to the `ReadAble` constructor:

```js
const config = {
    identifier: ".readable",
    fontWeight: 800,
    fontColor: "black",
    fontSize: "1em",
    scaleAll: true,
};

let rdbl = new ReadAble(config);
```

Adjust the values to control the first letters' style.

**PS**: `font*` values are CSS styles; `identifier` is a CSS selector. Check source code to see how they're used. Default values will be used if no parameter is given.

## Credits

- Code to wrap first letter of inner text in `<span>`: <https://stackoverflow.com/a/77084508>
