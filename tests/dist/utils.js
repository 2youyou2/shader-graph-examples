"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonObject = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBZ0IsYUFBYSxDQUFFLEdBQVc7SUFDdEMsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJO1FBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7SUFDRCxPQUFPLEdBQUcsRUFBRTtRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBVEQsc0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEpzb25PYmplY3QgKHN0cjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udGVudCA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG4iXX0=