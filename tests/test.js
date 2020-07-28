const fs = require('fs');
const path = require('path')
const shadergraph = require('./dist/shadergraph');

shadergraph.ShaderGraph.subgraphPath = 'D:\\workspace\\unity\\projects\\water\\Assets'

// let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\dots.shadergraph';
let graphPath = 'D:\\workspace\\fireball\\projects\\shader-graph\\tests\\tests\\Shader Graph.shadergraph';
content = shadergraph.ShaderGraph.decode(graphPath);
fs.writeFileSync(path.join(__dirname, './tests/Shader Graph.effect'), content);
