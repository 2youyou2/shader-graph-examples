"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloatString = exports.getJsonObject = void 0;
function getJsonObject(str) {
    let content;
    try {
        content = JSON.parse(str);
    }
    catch (err) {
        console.error(err);
    }
    return content;
}
exports.getJsonObject = getJsonObject;
function getFloatString(value) {
    if (typeof value !== 'number') {
        return value;
    }
    let str = value + '';
    if (!str.includes('.')) {
        str += '.';
    }
    return str;
}
exports.getFloatString = getFloatString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBZ0IsYUFBYSxDQUFFLEdBQVc7SUFDdEMsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJO1FBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7SUFDRCxPQUFPLEdBQUcsRUFBRTtRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBVEQsc0NBU0M7QUFFRCxTQUFnQixjQUFjLENBQUUsS0FBYTtJQUN6QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsR0FBRyxJQUFJLEdBQUcsQ0FBQztLQUNkO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBVkQsd0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEpzb25PYmplY3QgKHN0cjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udGVudCA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZsb2F0U3RyaW5nICh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyID0gdmFsdWUgKyAnJztcclxuICAgIGlmICghc3RyLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgICBzdHIgKz0gJy4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufSJdfQ==