# Typewriter

Simulate a typewriter effect.

## Installation

```sh
$ npm install --save Tag
```
## Usage

```js
import Typewriter from "typewriter";

var text = ["Say hello ", "Wave goodbye ", "Peter was here!! "];

<Typewriter text={text} />
```

## options

- `text` a array of text to write

- `typeSpeed` Duration in milliseconds to `type` a single character [default: `50`]

- `deleteSpeed` Duration in milliseconds to `delete` a single character [default: `50`]

- `pauseDuration` Duration in milliseconds to `pause` [default: `2000`]

- `repeat` Whether to repeat the entire sequence indefinitely [default: `false`]
 
