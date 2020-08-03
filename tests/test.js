const fs = require('fire-fs');
const path = require('fire-path')
const shadergraph = require('./dist/shadergraph');
const globby = require('globby');

shadergraph.ShaderGraph.subgraphPath = 'D:\\workspace\\unity\\projects\\water\\Assets'

// let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\dots.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/dots.effect');

// let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\grid.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/grid.effect');

// let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\brick.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/brick.effect');

// let graphPath = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\bacteria.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/bacteria.effect');

// let graphPath = 'D:\\workspace\\fireball\\projects\\shader-graph\\tests\\tests\\Shader Graph.shadergraph';
// let dstPath = path.join(__dirname, '../assets/tests/Shader Graph.effect');

let graphDir = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\*.shadergraph';

let paths = globby.sync(graphDir.replace(/\\/g, '/'));
paths.forEach(graphPath => {
    content = shadergraph.ShaderGraph.decode(graphPath);
    let dstPath = path.join(__dirname, '../assets/tests/', path.basenameNoExt(graphPath) + '.effect');
    fs.ensureDirSync(path.dirname(dstPath))
    fs.writeFileSync(dstPath, content);
})

