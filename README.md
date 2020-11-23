<h1 align="center">Welcome to markdown-render-a11y-emojis 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/markdown-render-a11y-emojis" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/markdown-render-a11y-emojis.svg">
  </a>
  <a href="fffff" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/danestves" target="_blank">
    <img alt="Twitter: danestves" src="https://img.shields.io/twitter/follow/danestves.svg?style=social" />
  </a>
</p>

> Return markdown text with accesible emojis

## Install

```sh
npm install markdown-render-a11y-emojis
```

## Usage

```js
// ES5
const markdownEmojiParser = require("markdown-render-a11y-emojis");
// Or in ES6
import markdownEmojiParser from "markdown-render-a11y-emojis";

const markdown = "# Hi this is my title h1 😅";
markdownEmojiParser(markdown);

// It will render to
// # Hi this is my title h1 <span role="img" aria-label="grinning face with sweat">😅</span>
```

## Author

👤 **Daniel Esteves**

- Website: https://danestves.com/
- Twitter: [@danestves](https://twitter.com/danestves)
- Github: [@danestves](https://github.com/danestves)
- LinkedIn: [@danestves](https://linkedin.com/in/danestves)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/danestves/markdown-rend). You can also take a look at the [contributing guide](dfds).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Daniel Esteves](https://github.com/danestves).<br />
This project is [MIT](fffff) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
