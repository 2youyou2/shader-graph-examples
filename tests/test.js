const fs = require('fire-fs');
const path = require('path')
const shadergraph = require('./dist/shadergraph');

shadergraph.ShaderGraph.subgraphPath = 'D:\\workspace\\unity\\projects\\water\\Assets'

let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\dots.shadergraph';
let dstPath = path.join(__dirname, '../assets/tests/dots.effect');

// let graphPath = 'D:\\workspace\\fireball\\projects\\shader-graph\\tests\\tests\\Shader Graph.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/Shader Graph.effect');

fs.ensureDirSync(path.dirname(dstPath))
content = shadergraph.ShaderGraph.decode(graphPath);
fs.writeFileSync(dstPath, content);
