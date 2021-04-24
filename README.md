# parcel-transformer-asset-to-js

A Parcel 2 transformer plugin to import binary assets as javascript modules.  
Each module is imported as a base64 dataURL string.

## Installation

```bash
npm install parcel-transformer-asset-to-js -D
```
or
```bash
yarn add install parcel-transformer-asset-to-js -D
```

After this you should configure in `.parcelrc` the transformation for Svelte files:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{jpg,png}": ["parcel-transformer-asset-to-js"]
  }
}
```

## Usage

```js
import dataUrl, { base64, mimeType } from "../assets/image.png";

const image = new Image();
image.src = dataUrl;
document.appendChild(image);
```

## License

MIT License