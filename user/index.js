import { createRequire } from "module";

const require = createRequire(import.meta.url);

// This will use NODE_PATH, unlike import statements.
const loader_in_layer = require("loader_in_layer");

// Dynamic import exposed from the layer, using layer path as resolution.
const layer_import = loader_in_layer.import;

// Import ESM packages from the layer.
const s3 = await layer_import("esm_in_layer");

export const handler = async () => {
    return s3.hello();
}
