'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.beforeClose = exports.ready = exports.messages = exports.methods = exports.$ = exports.template = exports.style = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const profile = Editor.Profile.load('local://packages/shader-graph.json');
const Vue = require('vue/dist/vue.js');
Vue.config.productionTip = false;
Vue.config.devtools = false;
let panel = null;
let $vm;
exports.style = fs_1.readFileSync(path_1.join(__dirname, '../index.css'));
exports.template = fs_1.readFileSync(path_1.join(__dirname, '../../static/template/index.html'));
exports.$ = {
    shadergraph: '.shadergraph',
};
exports.methods = {};
exports.messages = {};
function ready(tab, params) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        panel = this;
        const manager = require('./components/manager');
        manager.el = panel.$.shadergraph;
        const data = profile.get('shader-graph');
        if (data) {
            for (let key in data) {
                manager.data[key] = data[key];
            }
        }
        $vm = new Vue(manager);
    });
}
exports.ready = ready;
// 关闭之前需要获取当前的焦点元素将其焦点丢失以触发 ui 组件的 confirm 事件保存配置
function beforeClose() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.beforeClose = beforeClose;
function close() {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.close = close;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2UvcGFuZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7QUFFYiwyQkFBc0M7QUFDdEMsK0JBQTRCO0FBQzVCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFFMUUsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUU1QixJQUFJLEtBQUssR0FBUSxJQUFJLENBQUM7QUFDdEIsSUFBSSxHQUFRLENBQUM7QUFDQSxRQUFBLEtBQUssR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUV0RCxRQUFBLFFBQVEsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBRTdFLFFBQUEsQ0FBQyxHQUFHO0lBQ2IsV0FBVyxFQUFFLGNBQWM7Q0FDOUIsQ0FBQztBQUdXLFFBQUEsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUEsUUFBUSxHQUFHLEVBRXZCLENBQUM7QUFFRixTQUFzQixLQUFLLENBQUMsR0FBVyxFQUFFLE1BQVc7O1FBRWhELGFBQWE7UUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLElBQUcsSUFBSSxFQUFFO1lBQ0wsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7UUFDRCxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUFBO0FBZEQsc0JBY0M7QUFFRCxpREFBaUQ7QUFDakQsU0FBc0IsV0FBVzs7SUFFakMsQ0FBQztDQUFBO0FBRkQsa0NBRUM7QUFFRCxTQUFzQixLQUFLOzBEQUFJLENBQUM7Q0FBQTtBQUFoQyxzQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZnMsIHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmNvbnN0IHByb2ZpbGUgPSBFZGl0b3IuUHJvZmlsZS5sb2FkKCdsb2NhbDovL3BhY2thZ2VzL3NoYWRlci1ncmFwaC5qc29uJyk7XHJcblxyXG5jb25zdCBWdWUgPSByZXF1aXJlKCd2dWUvZGlzdC92dWUuanMnKTtcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XHJcblZ1ZS5jb25maWcuZGV2dG9vbHMgPSBmYWxzZTtcclxuXHJcbmxldCBwYW5lbDogYW55ID0gbnVsbDtcclxubGV0ICR2bTogYW55O1xyXG5leHBvcnQgY29uc3Qgc3R5bGUgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLi9pbmRleC5jc3MnKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLi8uLi9zdGF0aWMvdGVtcGxhdGUvaW5kZXguaHRtbCcpKTtcclxuXHJcbmV4cG9ydCBjb25zdCAkID0ge1xyXG4gICAgc2hhZGVyZ3JhcGg6ICcuc2hhZGVyZ3JhcGgnLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtZXRob2RzID0ge307XHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWR5KHRhYjogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHBhbmVsID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21hbmFnZXInKTtcclxuICAgIG1hbmFnZXIuZWwgPSBwYW5lbC4kLnNoYWRlcmdyYXBoO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb2ZpbGUuZ2V0KCdzaGFkZXItZ3JhcGgnKTtcclxuICAgIGlmKGRhdGEpIHtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuZGF0YVtrZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR2bSA9IG5ldyBWdWUobWFuYWdlcik7XHJcbn1cclxuXHJcbi8vIOWFs+mXreS5i+WJjemcgOimgeiOt+WPluW9k+WJjeeahOeEpueCueWFg+e0oOWwhuWFtueEpueCueS4ouWkseS7peinpuWPkSB1aSDnu4Tku7bnmoQgY29uZmlybSDkuovku7bkv53lrZjphY3nva5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJlZm9yZUNsb3NlKCkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsb3NlKCkge31cclxuIl19