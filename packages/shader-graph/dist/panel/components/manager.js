'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounted = exports.methods = exports.components = exports.computed = exports.watch = exports.data = void 0;
const fire_path_1 = __importDefault(require("fire-path"));
const fire_fs_1 = __importDefault(require("fire-fs"));
const shadergraph_1 = __importDefault(require("../operation/shadergraph"));
const globby = require('globby');
const profile = Editor.Profile.load('local://packages/shader-graph.json');
const electron = require('electron');
const projectPath = electron.remote.getGlobal('Editor').Project.path;
exports.data = {
    directories: []
};
exports.watch = {};
exports.computed = {};
exports.components = {};
exports.methods = {
    saveEdit() {
        const vm = this;
        profile.set('shader-graph', {
            directories: vm.directories,
        });
        profile.save();
    },
    onGenerate() {
        exports.data.directories.forEach(data => {
            let destDir = data.dst;
            let graphDir = data.src;
            shadergraph_1.default.subgraphPath = graphDir;
            let paths = globby.sync([
                fire_path_1.default.join(graphDir, '**/*.shadergraph').replace(/\\/g, '/'),
                fire_path_1.default.join(graphDir, '**/*.ShaderGraph').replace(/\\/g, '/')
            ]);
            paths.forEach(graphPath => {
                let relPath = fire_path_1.default.relative(graphDir, graphPath);
                let content = shadergraph_1.default.decode(graphPath);
                let dstPath = fire_path_1.default.join(destDir, fire_path_1.default.dirname(relPath), fire_path_1.default.basenameNoExt(graphPath) + '.effect');
                fire_fs_1.default.ensureDirSync(fire_path_1.default.dirname(dstPath));
                fire_fs_1.default.writeFileSync(dstPath, content);
                relPath = fire_path_1.default.relative(projectPath, dstPath);
                let url = 'db://' + relPath;
                Editor.Ipc.sendToAll('refresh-asset', url);
            });
        });
    },
    remove(d) {
        let index = exports.data.directories.indexOf(d);
        if (index !== -1) {
            exports.data.directories.splice(index, 1);
            this.saveEdit();
        }
    },
    onAdd() {
        exports.data.directories.push({
            src: '',
            dst: fire_path_1.default.join(projectPath, 'assets')
        });
        this.saveEdit();
    }
};
function mounted() { }
exports.mounted = mounted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9wYW5lbC9jb21wb25lbnRzL21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7QUFDYiwwREFBNkI7QUFDN0Isc0RBQXlCO0FBQ3pCLDJFQUFtRDtBQUVuRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUUxRSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDcEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUV4RCxRQUFBLElBQUksR0FBRztJQUNoQixXQUFXLEVBQUUsRUFBRTtDQUNsQixDQUFDO0FBRVcsUUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRVgsUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBRWQsUUFBQSxVQUFVLEdBQUcsRUFDekIsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHO0lBQ25CLFFBQVE7UUFDSixNQUFNLEVBQUUsR0FBUSxJQUFJLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDeEIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNOLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN4QixxQkFBVyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDcEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDcEIsbUJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7Z0JBQzNELG1CQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQzlELENBQUMsQ0FBQztZQUVILEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksT0FBTyxHQUFHLG1CQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDakQsSUFBSSxPQUFPLEdBQUcscUJBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVDLElBQUksT0FBTyxHQUFHLG1CQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxtQkFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDbkcsaUJBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDdkMsaUJBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUVuQyxPQUFPLEdBQUcsbUJBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUUsQ0FBQztRQUNMLElBQUksS0FBSyxHQUFHLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsWUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0QsWUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsbUJBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztTQUN4QyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNKLENBQUM7QUFHRixTQUFnQixPQUFPLEtBQU0sQ0FBQztBQUE5QiwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ2ZpcmUtcGF0aCc7XHJcbmltcG9ydCBmcyBmcm9tICdmaXJlLWZzJztcclxuaW1wb3J0IFNoYWRlckdyYXBoIGZyb20gJy4uL29wZXJhdGlvbi9zaGFkZXJncmFwaCc7XHJcblxyXG5jb25zdCBnbG9iYnkgPSByZXF1aXJlKCdnbG9iYnknKTtcclxuY29uc3QgcHJvZmlsZSA9IEVkaXRvci5Qcm9maWxlLmxvYWQoJ2xvY2FsOi8vcGFja2FnZXMvc2hhZGVyLWdyYXBoLmpzb24nKTtcclxuXHJcbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxyXG5jb25zdCBwcm9qZWN0UGF0aCA9IGVsZWN0cm9uLnJlbW90ZS5nZXRHbG9iYWwoJ0VkaXRvcicpLlByb2plY3QucGF0aDtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gICAgZGlyZWN0b3JpZXM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2F0Y2ggPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wdXRlZCA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0aG9kcyA9IHtcclxuICAgIHNhdmVFZGl0ICgpIHtcclxuICAgICAgICBjb25zdCB2bTogYW55ID0gdGhpcztcclxuICAgICAgICBwcm9maWxlLnNldCgnc2hhZGVyLWdyYXBoJywge1xyXG4gICAgICAgICAgICBkaXJlY3Rvcmllczogdm0uZGlyZWN0b3JpZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvZmlsZS5zYXZlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uR2VuZXJhdGUgKCkge1xyXG4gICAgICAgIGRhdGEuZGlyZWN0b3JpZXMuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGRlc3REaXIgPSBkYXRhLmRzdDtcclxuXHJcbiAgICAgICAgICAgIGxldCBncmFwaERpciA9IGRhdGEuc3JjO1xyXG4gICAgICAgICAgICBTaGFkZXJHcmFwaC5zdWJncmFwaFBhdGggPSBncmFwaERpcjtcclxuICAgICAgICAgICAgbGV0IHBhdGhzID0gZ2xvYmJ5LnN5bmMoW1xyXG4gICAgICAgICAgICAgICAgcGF0aC5qb2luKGdyYXBoRGlyLCAnKiovKi5zaGFkZXJncmFwaCcpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSxcclxuICAgICAgICAgICAgICAgIHBhdGguam9pbihncmFwaERpciwgJyoqLyouU2hhZGVyR3JhcGgnKS5yZXBsYWNlKC9cXFxcL2csICcvJylcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICBwYXRocy5mb3JFYWNoKGdyYXBoUGF0aCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsUGF0aCA9IHBhdGgucmVsYXRpdmUoZ3JhcGhEaXIsIGdyYXBoUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IFNoYWRlckdyYXBoLmRlY29kZShncmFwaFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzdFBhdGggPSBwYXRoLmpvaW4oZGVzdERpciwgcGF0aC5kaXJuYW1lKHJlbFBhdGgpLCBwYXRoLmJhc2VuYW1lTm9FeHQoZ3JhcGhQYXRoKSArICcuZWZmZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKHBhdGguZGlybmFtZShkc3RQYXRoKSlcclxuICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZHN0UGF0aCwgY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVsUGF0aCA9IHBhdGgucmVsYXRpdmUocHJvamVjdFBhdGgsIGRzdFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9ICdkYjovLycgKyByZWxQYXRoO1xyXG4gICAgICAgICAgICAgICAgRWRpdG9yLklwYy5zZW5kVG9BbGwoJ3JlZnJlc2gtYXNzZXQnLCB1cmwpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlIChkKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZGF0YS5kaXJlY3Rvcmllcy5pbmRleE9mKGQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZGF0YS5kaXJlY3Rvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVFZGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkFkZCAoKSB7XHJcbiAgICAgICAgZGF0YS5kaXJlY3Rvcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgZHN0OiBwYXRoLmpvaW4ocHJvamVjdFBhdGgsICdhc3NldHMnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2F2ZUVkaXQoKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRlZCAoKSB7IH1cclxuIl19