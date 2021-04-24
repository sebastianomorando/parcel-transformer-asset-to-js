const plugin = require("@parcel/plugin");
const { lookup } = require("mime-types");

module.exports = new plugin.Transformer({
  async transform({asset, config, options}) {
    const data = await asset.getBuffer();
    const mimeType = lookup(asset.filePath);
    if (mimeType === false) throw new Error(`cannot determine the mime type for ${asset.filePath}`);

    asset.type = 'js';
    asset.setCode(`
      export const mimeType = '${mimeType}'; 
      export const base64 = '${data.toString('base64')}';
      export default 'data:' + mimeType + ';base64,' + base64;
    `);
    return [asset];
  }
})