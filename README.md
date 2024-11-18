# ![](favicon.ico) Hammer

Hyperscript tools for web craftsmen.

[![Demo](https://img.shields.io/badge/Demo-blue)](https://marcodpt.github.io/hammer/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Tag](https://img.shields.io/github/v/tag/marcodpt/hammer)](https://github.com/marcodpt/hammer/tags)
[![bundlejs](https://deno.bundlejs.com/badge?q=https://raw.githubusercontent.com/marcodpt/hammer/main/index.js&treeshake=[*])](https://bundlejs.com/?q=https://raw.githubusercontent.com/marcodpt/hammer/main/index.js&treeshake=[*])

## ❤️ Features
 - [ES6 module](https://github.com/marcodpt/hammer/blob/main/index.js).
 - Optimized syntax for readability and clarity:
   - All `HTML` tags without introducing global variables.
   - `Attributes` are `objects` and always precede `children`.
   - `Style` attribute can be `string` or `object`.
   - `Class` attribute can be `string` or `array`.
   - Automatic transformation from `camelCase` to `kebab-case` in `attribute`
and `style` keys.
   - `Children` are always `arrays` and falsy values are automatically ignored.
 - Flexibility taken to the extreme:
   - Template engine producing well-formatted HTML. Can be used in any
JavaScript runtime (
[NodeJS](https://nodejs.org/en),
[Deno](https://deno.com/),
[Bun](https://bun.sh/),
[txiki.js](https://bettercallsaghul.com/txiki.js/api/index.html)).
   - DOM Node generation in pure JavaScript, supported in any modern browser.
   - Easy integration with any framework using virtual dom:
     - Example with [hyperapp](https://github.com/jorgebucaran/hyperapp).
     - Example with [superfine](https://github.com/jorgebucaran/superfine).

## 📢 Motivation
`Hyperscript` is a fantastic technique for writing `HTML`, using any
programming language.

The advantages of using `hyperscript` to produce `HTML` elements are many:

 - No build steps required.
 - No special text editor support required.
 - No need to learn a new templating language.
  - Standard debug and error analysis tools work normally.
 - It is possible to use well-tested and defined functions to produce `HTML`
elements.
 - It is possible to combine elements to produce complex applications.
 - It can be used to generate `HTML` text, `DOM` node, virtual `DOM`, both in
the browser and on the server.
 - Can be combined with any framework or library, both in the browser and on
the server.
 - Frameworks and libraries go in and out of use, `hyperscript` is just a
function that will always be supported.

Most `hyperscript` implementations are made with a specific use in mind,
associated with a framework, library or browser.

The objective of this module is to deliver a `hyperscript` implementation that
allows a clear and expressive syntax to read, without making any assumptions
about its use.

This way, it is possible to use `hyperscript` to create views and elements,
without being tied to a technology or page rendering strategy.

## 🤝 Contributing
It's a very simple project.
Any contribution, any feedback is greatly appreciated.

## ⭐ Support
If this project was useful to you, consider giving it a star on github, it's a
way to increase evidence and attract more contributors.

## 🙏 Acknowledgment
This work is hugely influenced by these amazing projects:
 - [hyperscript](https://github.com/hyperhype/hyperscript)
 - [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
 - [hyperapp](https://github.com/jorgebucaran/hyperapp)
 - [superfine](https://github.com/jorgebucaran/superfine)
 - [mercury](https://github.com/Raynos/mercury)
 - [jquery](https://github.com/jquery/jquery)

A huge thank you to all the people who contributed to these projects.
