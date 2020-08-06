'use strict';
import path from 'fire-path';
import fs from 'fire-fs';
import ShaderGraph from '../operation/shadergraph';

const globby = require('globby');
const profile = Editor.Profile.load('local://packages/shader-graph.json');

const electron = require('electron')
const projectPath = electron.remote.getGlobal('Editor').Project.path;

export const data = {
    directories: []
};

export const watch = {};

export const computed = {};

export const components = {
};

export const methods = {
    saveEdit () {
        const vm: any = this;
        profile.set('shader-graph', {
            directories: vm.directories,
        });
        profile.save();
    },

    onGenerate () {
        data.directories.forEach(data => {
            let destDir = data.dst;

            let graphDir = data.src;
            ShaderGraph.subgraphPath = graphDir;
            let paths = globby.sync([
                path.join(graphDir, '**/*.shadergraph').replace(/\\/g, '/'),
                path.join(graphDir, '**/*.ShaderGraph').replace(/\\/g, '/')
            ]);

            paths.forEach(graphPath => {
                let relPath = path.relative(graphDir, graphPath);
                let content = ShaderGraph.decode(graphPath);
                let dstPath = path.join(destDir, path.dirname(relPath), path.basenameNoExt(graphPath) + '.effect');
                fs.ensureDirSync(path.dirname(dstPath))
                fs.writeFileSync(dstPath, content);

                relPath = path.relative(projectPath, dstPath);
                let url = 'db://' + relPath;
                Editor.Ipc.sendToAll('refresh-asset', url)
            })
        })
    },

    remove (d) {
        let index = data.directories.indexOf(d);
        if (index !== -1) {
            data.directories.splice(index, 1);
            this.saveEdit();
        }
    },

    onAdd () {
        data.directories.push({
            src: '',
            dst: path.join(projectPath, 'assets')
        })

        this.saveEdit();
    }
};


export function mounted () { }
