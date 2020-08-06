"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionSpace = exports.TextureConcretePrecision = exports.ConcretePrecisionType = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLHFCQUtYO0FBTEQsV0FBWSxxQkFBcUI7SUFDN0IsK0RBQUcsQ0FBQTtJQUNILCtEQUFHLENBQUE7SUFDSCxtRUFBSyxDQUFBO0lBQ0wsdUVBQU8sQ0FBQTtBQUNYLENBQUMsRUFMVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUtoQztBQUVELElBQVksd0JBR1g7QUFIRCxXQUFZLHdCQUF3QjtJQUNoQyxtRkFBZSxDQUFBO0lBQ2YsdUZBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLHdCQUF3QixHQUF4QixnQ0FBd0IsS0FBeEIsZ0NBQXdCLFFBR25DO0FBQUEsQ0FBQztBQUdGLElBQVksYUFNWDtBQU5ELFdBQVksYUFBYTtJQUNyQixxREFBTSxDQUFBO0lBQ04saURBQUksQ0FBQTtJQUNKLG1EQUFLLENBQUE7SUFDTCx1REFBTyxDQUFBO0lBQ1AsbUVBQWEsQ0FBQTtBQUNqQixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGVudW0gQ29uY3JldGVQcmVjaXNpb25UeXBlIHtcclxuICAgIE1pbixcclxuICAgIE1heCxcclxuICAgIEZpeGVkLFxyXG4gICAgVGV4dHVyZSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGV4dHVyZUNvbmNyZXRlUHJlY2lzaW9uIHtcclxuICAgIFRleHR1cmUyRCA9IDEwMCxcclxuICAgIFRleHR1cmVDdWJlID0gMTAxXHJcbn07IFxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFBvc2l0aW9uU3BhY2Uge1xyXG4gICAgT2JqZWN0LFxyXG4gICAgVmlldyxcclxuICAgIFdvcmxkLFxyXG4gICAgVGFuZ2VudCxcclxuICAgIEFic29sdXRlV29ybGRcclxufVxyXG4iXX0=