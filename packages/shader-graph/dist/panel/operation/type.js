"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalSpace = exports.PositionSpace = exports.TextureConcretePrecision = exports.ConcretePrecisionType = void 0;
var ConcretePrecisionType;
(function (ConcretePrecisionType) {
    ConcretePrecisionType[ConcretePrecisionType["Min"] = 0] = "Min";
    ConcretePrecisionType[ConcretePrecisionType["Max"] = 1] = "Max";
    ConcretePrecisionType[ConcretePrecisionType["Fixed"] = 2] = "Fixed";
    ConcretePrecisionType[ConcretePrecisionType["Texture"] = 3] = "Texture";
})(ConcretePrecisionType = exports.ConcretePrecisionType || (exports.ConcretePrecisionType = {}));
var TextureConcretePrecision;
(function (TextureConcretePrecision) {
    TextureConcretePrecision[TextureConcretePrecision["Texture2D"] = 100] = "Texture2D";
    TextureConcretePrecision[TextureConcretePrecision["TextureCube"] = 101] = "TextureCube";
})(TextureConcretePrecision = exports.TextureConcretePrecision || (exports.TextureConcretePrecision = {}));
;
var PositionSpace;
(function (PositionSpace) {
    PositionSpace[PositionSpace["Object"] = 0] = "Object";
    PositionSpace[PositionSpace["View"] = 1] = "View";
    PositionSpace[PositionSpace["World"] = 2] = "World";
    PositionSpace[PositionSpace["Tangent"] = 3] = "Tangent";
    PositionSpace[PositionSpace["AbsoluteWorld"] = 4] = "AbsoluteWorld";
})(PositionSpace = exports.PositionSpace || (exports.PositionSpace = {}));
var NormalSpace;
(function (NormalSpace) {
    NormalSpace[NormalSpace["Object"] = 0] = "Object";
    NormalSpace[NormalSpace["View"] = 1] = "View";
    NormalSpace[NormalSpace["World"] = 2] = "World";
    NormalSpace[NormalSpace["Tangent"] = 3] = "Tangent";
})(NormalSpace = exports.NormalSpace || (exports.NormalSpace = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLHFCQUtYO0FBTEQsV0FBWSxxQkFBcUI7SUFDN0IsK0RBQUcsQ0FBQTtJQUNILCtEQUFHLENBQUE7SUFDSCxtRUFBSyxDQUFBO0lBQ0wsdUVBQU8sQ0FBQTtBQUNYLENBQUMsRUFMVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUtoQztBQUVELElBQVksd0JBR1g7QUFIRCxXQUFZLHdCQUF3QjtJQUNoQyxtRkFBZSxDQUFBO0lBQ2YsdUZBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLHdCQUF3QixHQUF4QixnQ0FBd0IsS0FBeEIsZ0NBQXdCLFFBR25DO0FBQUEsQ0FBQztBQUdGLElBQVksYUFNWDtBQU5ELFdBQVksYUFBYTtJQUNyQixxREFBTSxDQUFBO0lBQ04saURBQUksQ0FBQTtJQUNKLG1EQUFLLENBQUE7SUFDTCx1REFBTyxDQUFBO0lBQ1AsbUVBQWEsQ0FBQTtBQUNqQixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEI7QUFFRCxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDbkIsaURBQU0sQ0FBQTtJQUNOLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0lBQ0wsbURBQU8sQ0FBQTtBQUNYLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZW51bSBDb25jcmV0ZVByZWNpc2lvblR5cGUge1xyXG4gICAgTWluLFxyXG4gICAgTWF4LFxyXG4gICAgRml4ZWQsXHJcbiAgICBUZXh0dXJlLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUZXh0dXJlQ29uY3JldGVQcmVjaXNpb24ge1xyXG4gICAgVGV4dHVyZTJEID0gMTAwLFxyXG4gICAgVGV4dHVyZUN1YmUgPSAxMDFcclxufTsgXHJcblxyXG5cclxuZXhwb3J0IGVudW0gUG9zaXRpb25TcGFjZSB7XHJcbiAgICBPYmplY3QsXHJcbiAgICBWaWV3LFxyXG4gICAgV29ybGQsXHJcbiAgICBUYW5nZW50LFxyXG4gICAgQWJzb2x1dGVXb3JsZFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBOb3JtYWxTcGFjZSB7XHJcbiAgICBPYmplY3QsXHJcbiAgICBWaWV3LFxyXG4gICAgV29ybGQsXHJcbiAgICBUYW5nZW50LFxyXG59XHJcbiJdfQ==