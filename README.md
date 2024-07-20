# ReadAble

A JavaScript library to make text on your websites quicker to read.

## Usage

### CDN

Add this to your HTML before any other script tags:

```html
<script async src="https://cdn.jsdelivr.net/gh/cybardev/ReadAble@latest/readable.js"></script>
```

### Manual

- download `readable.js`
- place `readable.js` in your project adjacent to other script files
- include it in HTML via `<script>` tag

## Customization

In your JS script file, add and edit this variable:

```js
firstLetterStyle = `
    {
        font-weight: 800;
    }
`;
```

Adjust the `font-weight` to control the first letters' level of "boldness".

**PS**: `font-weight` must be > 400, as 400 is normal text, and anything below gets thinner. Maximum `font-weight` is 900.

## Example

Live website: <https://readable.cybar.dev>

![screenshot](https://github.com/user-attachments/assets/9f538888-6984-44bf-826f-847d6819ccc3 "Screenshot of webpage that uses this library")

Check the [`example/`](example/) directory for code.
