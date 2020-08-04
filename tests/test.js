const fs = require('fire-fs');
const path = require('fire-path')
const shadergraph = require('./dist/shadergraph');
const globby = require('globby');

// shadergraph.ShaderGraph.subgraphPath = 'D:\\workspace\\unity\\projects\\water\\Assets'

// let graphDir = 'D:\\workspace\\unity\\projects\\water\\Assets\\Samples\\Shader Graph\\7.4.1\\*.shadergraph';

let graphDir = path.join(__dirname, './tests');
shadergraph.ShaderGraph.subgraphPath = graphDir;

let paths = globby.sync([path.join(graphDir, '**/*.shadergraph').replace(/\\/g, '/'), path.join(graphDir, '**/*.ShaderGraph').replace(/\\/g, '/')]);
paths.forEach(graphPath => {
    let relPath = path.relative(graphDir, graphPath);
    content = shadergraph.ShaderGraph.decode(graphPath);
    let dstPath = path.join(__dirname, '../assets/tests/', path.dirname(relPath), path.basenameNoExt(graphPath) + '.effect');
    fs.ensureDirSync(path.dirname(dstPath))
    fs.writeFileSync(dstPath, content);
})

