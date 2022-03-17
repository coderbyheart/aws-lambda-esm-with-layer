> ℹ️ *Note*: [symlinking the node_modules folder](https://github.com/vibe/aws-esm-modules-layer-support) is a simpler solution.

## Instructions

1. Run `make`.
1. Create a Node JS 14 Lambda Function from `dist/lambda-nodejs14.zip`.
1. Create a Lambda Layer from `dist/layer.zip`.
1. Attach layer to the function.
1. Invoke function. Function will load an ESM from the layer.

---

The `NODE_PATH` variable is not supported by the ESM loader in Node, as seen [here](https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_no_node_path). In addition, the `NODE_PATH` is not part of resolving import specifiers, which means the layer cannot be reached.

The [workaround](./user/index.js) would be to use a module from a layer, which would be to expose the dynamic import function from the module that you require.

---

> Using that workaround I cannot `import { s3 } from 'esm_in_layer'` but use explicit, async loading. Adding this boilerplate code to all lambdas adds additional workload which I want to avoid. 
