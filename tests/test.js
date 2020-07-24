const fs = require('fs');
const path = require('path')
const shadergraph = require('./dist/shadergraph');

let content = fs.readFileSync(path.join(__dirname, './tests/Shader Graph.shadergraph'), 'utf-8');
content = shadergraph.ShaderGraph.decode(content);
fs.writeFileSync(path.join(__dirname, './tests/Shader Graph.effect'), content);
