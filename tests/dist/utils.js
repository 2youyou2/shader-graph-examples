"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueConcretePrecision = exports.getValueElementStr = exports.getValueElement = exports.getFloatString = exports.getJsonObject = void 0;
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
let ValueElements = {
    vector: ['x', 'y', 'z', 'w'],
    color: ['r', 'g', 'b', 'a'],
    mat4: ['e00', 'e01', 'e02', 'e03']
};
function getValueElement(value, index) {
    if (typeof value === 'number') {
        return value;
    }
    let elements;
    if (value.x !== undefined) {
        elements = ValueElements.vector;
    }
    else if (value.r !== undefined) {
        elements = ValueElements.color;
    }
    else if (value.e00 !== undefined) {
        elements = ValueElements.mat4;
    }
    return value[elements[index]] || 0;
}
exports.getValueElement = getValueElement;
function getValueElementStr(value, index) {
    return getFloatString(getValueElement(value, index));
}
exports.getValueElementStr = getValueElementStr;
function getValueConcretePrecision(value) {
    let valueConretePresition = 1;
    if (typeof value === 'object') {
        if (value.w !== undefined || value.a !== undefined) {
            valueConretePresition = 4;
        }
        else if (value.z !== undefined || value.b !== undefined) {
            valueConretePresition = 3;
        }
        else if (value.y !== undefined || value.g !== undefined) {
            valueConretePresition = 2;
        }
    }
    return valueConretePresition;
}
exports.getValueConcretePrecision = getValueConcretePrecision;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBZ0IsYUFBYSxDQUFFLEdBQVc7SUFDdEMsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJO1FBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7SUFDRCxPQUFPLEdBQUcsRUFBRTtRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBVEQsc0NBU0M7QUFFRCxTQUFnQixjQUFjLENBQUUsS0FBYTtJQUN6QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsR0FBRyxJQUFJLEdBQUcsQ0FBQztLQUNkO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBVkQsd0NBVUM7QUFFRCxJQUFJLGFBQWEsR0FBRztJQUNoQixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDNUIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzNCLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztDQUNyQyxDQUFBO0FBRUQsU0FBZ0IsZUFBZSxDQUFFLEtBQXNCLEVBQUUsS0FBYTtJQUNsRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksUUFBUSxDQUFDO0lBRWIsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUN2QixRQUFRLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUNuQztTQUNJLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDNUIsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDbEM7U0FDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQzlCLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFsQkQsMENBa0JDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsS0FBc0IsRUFBRSxLQUFhO0lBQ3BFLE9BQU8sY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRkQsZ0RBRUM7QUFFRCxTQUFnQix5QkFBeUIsQ0FBRSxLQUFLO0lBQzVDLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDaEQscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQ0ksSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNyRCxxQkFBcUIsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFDSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ3JELHFCQUFxQixHQUFHLENBQUMsQ0FBQztTQUM3QjtLQUNKO0lBQ0QsT0FBTyxxQkFBcUIsQ0FBQztBQUNqQyxDQUFDO0FBZEQsOERBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEpzb25PYmplY3QgKHN0cjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udGVudCA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZsb2F0U3RyaW5nICh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyID0gdmFsdWUgKyAnJztcclxuICAgIGlmICghc3RyLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgICBzdHIgKz0gJy4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxubGV0IFZhbHVlRWxlbWVudHMgPSB7XHJcbiAgICB2ZWN0b3I6IFsneCcsICd5JywgJ3onLCAndyddLFxyXG4gICAgY29sb3I6IFsncicsICdnJywgJ2InLCAnYSddLFxyXG4gICAgbWF0NDogWydlMDAnLCAnZTAxJywgJ2UwMicsICdlMDMnXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVFbGVtZW50ICh2YWx1ZTogb2JqZWN0IHwgbnVtYmVyLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbGVtZW50cztcclxuXHJcbiAgICBpZiAodmFsdWUueCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBWYWx1ZUVsZW1lbnRzLnZlY3RvcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHZhbHVlLnIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsZW1lbnRzID0gVmFsdWVFbGVtZW50cy5jb2xvcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHZhbHVlLmUwMCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBWYWx1ZUVsZW1lbnRzLm1hdDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlW2VsZW1lbnRzW2luZGV4XV0gfHwgMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRWxlbWVudFN0cih2YWx1ZTogb2JqZWN0IHwgbnVtYmVyLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRGbG9hdFN0cmluZyhnZXRWYWx1ZUVsZW1lbnQodmFsdWUsIGluZGV4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUNvbmNyZXRlUHJlY2lzaW9uICh2YWx1ZSkge1xyXG4gICAgbGV0IHZhbHVlQ29ucmV0ZVByZXNpdGlvbiA9IDE7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmICh2YWx1ZS53ICE9PSB1bmRlZmluZWQgfHwgdmFsdWUuYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhbHVlQ29ucmV0ZVByZXNpdGlvbiA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLnogIT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5iICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWVDb25yZXRlUHJlc2l0aW9uID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUueSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YWx1ZUNvbnJldGVQcmVzaXRpb24gPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZUNvbnJldGVQcmVzaXRpb247XHJcbn1cclxuIl19