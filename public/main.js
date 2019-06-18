(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getCountryData = function (countryName) {
        return this.http.get("https://restcountries.eu/rest/v2/name/" + countryName);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n   height: 100vh;\n   width: 100vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsWUFBWTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgIGhlaWdodDogMTAwdmg7XG4gICB3aWR0aDogMTAwdnc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div></div> -->\n\n<body>\n<router-outlet></router-outlet>\n<!-- <location3></location3> -->\n</body>\n\n\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    <img src=\"{{this.photo}}\" alt=\"\">\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <location1></location1> -->\n<!-- <location3></location3> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { PexelApiService } from './pexel-api.service'
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // title = 'Carmen-Sandiego-FP';
    // photo: any[];
    // nextLocation: string = 'Moscow';
    // randomIndex: number = Math.floor((Math.random() * 9));
    // constructor(private pexelService: PexelApiService) { }
    AppComponent.prototype.ngOnInit = function () {
        // this.pexelService.getLocationPhoto(`${this.nextLocation}`).subscribe(response => {
        //   console.log(this.randomIndex);
        //   this.photo = response[`photos`][`${this.randomIndex}`].src.medium;
        //   console.log(response);
        //   return this.photo;
        // });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _location1_location1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location1/location1.component */ "./src/app/location1/location1.component.ts");
/* harmony import */ var _location2_location2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location2/location2.component */ "./src/app/location2/location2.component.ts");
/* harmony import */ var _location3_location3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location3/location3.component */ "./src/app/location3/location3.component.ts");
/* harmony import */ var _location4_location4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location4/location4.component */ "./src/app/location4/location4.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");














var appRoutes = [
    { path: "", redirectTo: "/landing-page", pathMatch: "full" },
    { path: "landing-page", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "location1", component: _location1_location1_component__WEBPACK_IMPORTED_MODULE_6__["Location1Component"] },
    { path: "location2", component: _location2_location2_component__WEBPACK_IMPORTED_MODULE_7__["Location2Component"] },
    { path: "location3", component: _location3_location3_component__WEBPACK_IMPORTED_MODULE_8__["Location3Component"] },
    { path: "location4", component: _location4_location4_component__WEBPACK_IMPORTED_MODULE_9__["Location4Component"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _location1_location1_component__WEBPACK_IMPORTED_MODULE_6__["Location1Component"],
                _location2_location2_component__WEBPACK_IMPORTED_MODULE_7__["Location2Component"],
                _location3_location3_component__WEBPACK_IMPORTED_MODULE_8__["Location3Component"],
                _location4_location4_component__WEBPACK_IMPORTED_MODULE_9__["Location4Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clue.service.ts":
/*!*********************************!*\
  !*** ./src/app/clue.service.ts ***!
  \*********************************/
/*! exports provided: ClueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClueService", function() { return ClueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ClueService = /** @class */ (function () {
    function ClueService(http) {
        this.http = http;
    }
    ClueService.prototype.getClues = function (nextCity) {
        return this.http.get("http://localhost:3000/clues/" + nextCity, { responseType: 'json' });
    };
    ClueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClueService);
    return ClueService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device *::before,\n  .device *::after {\n    box-sizing: border-box;\n    display: block;\n  }\n\n  section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n  }\n\n  .device {\n    position: relative;\n    transform: scale(1);\n    z-index: 1;\n  }\n\n  .device .device-frame {\n    z-index: 1;\n  }\n\n  .device .device-content {\n    background-color: #fff;\n    background-position: center center;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: relative;\n  }\n\n  .device-macbook-pro {\n      height: 444px;\n      width: 740px;\n    }\n\n  .device-macbook-pro .device-frame {\n      background: #0d0d0d;\n      border-radius: 20px;\n      box-shadow: inset 0 0 0 2px #c8cacb;\n      height: 650px;\n      margin: 0 auto;\n      padding: 29px 19px 39px 19px;\n      position: relative;\n      width: 1000px;\n     }\n\n  .device-macbook-pro .device-frame::after {\n      background: #272626;\n      border-radius: 0 0 20px 20px;\n      bottom: 2px;\n      content: \"\";\n      height: 26px;\n      left: 2px;\n      position: absolute;\n      width: 996px;\n     }\n\n  .device-macbook-pro .device-frame::before {\n      bottom: 10px;\n      color: #c8cacb;\n      content: \"MacBook Pro\";\n      font-size: 12px;\n      height: 16px;\n      left: 50%;\n      line-height: 16px;\n      margin-left: -100px;\n      position: absolute;\n      text-align: center;\n      width: 200px;\n      z-index: 1;\n    }\n\n  .device-macbook-pro .device-content {\n      border: 2px solid #121212;\n      border-radius: 2px;\n      height: 360px;\n      width: 576px;\n    }\n\n  .device-macbook-pro .device-power {\n      background: #e2e3e4;\n      border: solid #d5d6d8;\n      border-radius: 2px 2px 0 0;\n      border-width: 2px 4px 0 4px;\n      height: 20px;\n      margin-top: -10px;\n      position: relative;\n      width: 1050px;\n      z-index: 9;\n     }\n\n  .device-macbook-pro .device-power::after,\n    .device-macbook-pro .device-power::before {\n      content: \"\";\n      position: absolute;\n    }\n\n  .device-macbook-pro .device-power::after {\n      background: #d5d6d8;\n      border-radius: 0 0 10px 10px;\n      box-shadow: inset 0 0 4px 2px #babdbf;\n      height: 10px;\n      left: 50%;\n      margin-left: -60px;\n      top: -2px;\n      width: 120px;\n    }\n\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n\n  .device-macbook-pro.device-spacegray .device-frame {\n      box-shadow: inset 0 0 0 2px #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power {\n      background: #909496;\n      border-color: #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::after {\n      background: #83878a;\n      box-shadow: inset 0 0 4px 2px #6a6d70;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::before {\n      background: #515456;\n      box-shadow: inset 0 -2px 6px 0 black;\n    }\n\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  /* \n.fade {\n    animation: fade 5s;\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n} */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n} */\n\n  /* The circle on the bottom of the device\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n} */\n\n  /* The screen (or content) of the device */\n\n  .smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n}\n\n  .email {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  width: 50%;\n  height: 40%;\n  border-radius: 8px;\n  opacity: 0.7;\n}\n\n  /* \n@media only screen and (min-width: 768px) { */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  } */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n   */\n\n  /* The circle on the bottom of the device */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n   */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 50%;\n    height: 40%;\n    border-radius: 8px;\n    opacity: 0.7;\n  }\n}\n\n@media only screen and (min-width: 1024px) { */\n\n  /* The laptop with borders */\n\n  /* .smartphone {\n    transform-origin: 0 0;\n    transform: scale(.7) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px; */\n\n  /* background-color: black;\n    border-top-width: none;\n    border-bottom-width: none;\n    margin-top: 150px;\n  } */\n\n  /* The keyboard of the laptop */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  } */\n\n  /* The top of the keyboard */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  } */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  } */\n\n  .content {\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 50%;\n    height: 40%;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-family: 'Roboto', sans-serif;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOzs7Ozs7SUFNRSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxhQUFhO01BQ2IsWUFBWTtJQUNkOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixtQ0FBbUM7TUFDbkMsYUFBYTtNQUNiLGNBQWM7TUFDZCw0QkFBNEI7TUFDNUIsa0JBQWtCO01BQ2xCLGFBQWE7S0FDZDs7RUFFQTtNQUNDLG1CQUFtQjtNQUNuQiw0QkFBNEI7TUFDNUIsV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osU0FBUztNQUNULGtCQUFrQjtNQUNsQixZQUFZO0tBQ2I7O0VBRUQ7TUFDRSxZQUFZO01BQ1osY0FBYztNQUNkLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsWUFBWTtNQUNaLFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFVBQVU7SUFDWjs7RUFFQTtNQUNFLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVk7SUFDZDs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsMEJBQTBCO01BQzFCLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsVUFBVTtLQUNYOztFQUVEOztNQUVFLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLHFDQUFxQztNQUNyQyxZQUFZO01BQ1osU0FBUztNQUNULGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWTtJQUNkOztFQUVEO0lBQ0MsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7R0FDZDs7RUFFQztNQUNFLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixxQkFBcUI7SUFDdkI7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUNBQXFDO0lBQ3ZDOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLG9DQUFvQztJQUN0Qzs7RUFHRjtJQUNFLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLDZJQUE2STtJQUM3SSw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztFQUVGOzs7Ozs7Ozs7RUFTRTs7RUFFRiw0QkFBNEI7O0VBQzVCOzs7Ozs7Ozs7R0FTRzs7RUFFRCxpREFBaUQ7O0VBQ25EOzs7Ozs7Ozs7OztHQVdHOztFQUVIOzs7Ozs7Ozs7Ozs7R0FZRzs7RUFFRCwwQ0FBMEM7O0VBQzVDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0VBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0VBQ0E7NkNBQzZDOztFQUV6Qyw0QkFBNEI7O0VBQ2hDOzs7Ozs7Ozs7S0FTSzs7RUFFSCxpREFBaUQ7O0VBQ2pEOzs7Ozs7Ozs7Ozs7SUFZRTs7RUFDRiwyQ0FBMkM7O0VBQzNDOzs7Ozs7Ozs7Ozs7SUFZRTs7RUFDRiwwQ0FBMEM7O0VBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBcUI0Qzs7RUFFMUMsNEJBQTRCOztFQUNoQzs7Ozs7Ozs7OzttQ0FVbUM7O0VBQy9COzs7O0tBSUM7O0VBRUgsK0JBQStCOztFQUMvQjs7Ozs7Ozs7Ozs7O0tBWUc7O0VBRUgsNEJBQTRCOztFQUM1Qjs7Ozs7Ozs7Ozs7Ozs7S0FjRzs7RUFFSCwwQ0FBMEM7O0VBQzFDOzs7Ozs7O0tBT0c7O0VBRUg7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlICo6OmJlZm9yZSxcbiAgLmRldmljZSAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5kZXZpY2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5kZXZpY2UgLmRldmljZS1mcmFtZSB7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmRldmljZSAuZGV2aWNlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmRldmljZS1tYWNib29rLXBybyB7XG4gICAgICBoZWlnaHQ6IDQ0NHB4O1xuICAgICAgd2lkdGg6IDc0MHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWUge1xuICAgICAgYmFja2dyb3VuZDogIzBkMGQwZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2M4Y2FjYjtcbiAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDI5cHggMTlweCAzOXB4IDE5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwMHB4O1xuICAgICB9XG4gICAgXG4gICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzI3MjYyNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gICAgICBib3R0b206IDJweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogOTk2cHg7XG4gICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWU6OmJlZm9yZSB7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogI2M4Y2FjYjtcbiAgICAgIGNvbnRlbnQ6IFwiTWFjQm9vayBQcm9cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1jb250ZW50IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjEyMTI7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgd2lkdGg6IDU3NnB4O1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UyZTNlNDtcbiAgICAgIGJvcmRlcjogc29saWQgI2Q1ZDZkODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xuICAgICAgYm9yZGVyLXdpZHRoOiAycHggNHB4IDAgNHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTA1MHB4O1xuICAgICAgei1pbmRleDogOTtcbiAgICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIsXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZDVkNmQ4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMnB4ICNiYWJkYmY7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgICB0b3A6IC0ycHg7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNhMGEzYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMTA1MHB4OztcbiAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzkwOTQ5NjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjNmE2ZDcwO1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gICAgfVxuICBcbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY5MDYzL3BleGVscy1waG90by0yNjkwNjMuanBlZz9hdXRvPWZvcm1hdCUyQ2NvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbi8qIFxuLmZhZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZSA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICAwJSB7b3BhY2l0eTogMH1cbiAgICA1MCUge29wYWNpdHk6IDF9XG59XG4gKi9cblxuLyogVGhlIGRldmljZSB3aXRoIGJvcmRlcnMgKi9cbi8qIC5zbWFydHBob25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMTZweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbn0gKi9cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4vKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG4gIFxuLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2VcbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gKi9cbiAgXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbi5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmVtYWlsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLyogXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG5cbiAgICAvKiBUaGUgZGV2aWNlIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjY4cHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxNnB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICB9ICovXG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbiAgLyogLnNtYXJ0cGhvbmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogLTFweDtcbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7ICovXG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH0gKi9cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9ICovXG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9ICovXG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfSAqL1xuXG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n              <div class=\"email\">\n              <p>ACME HEADQUARTERS</p>\n              <p>Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n              <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n    </div>\n  </section>\n</body>\n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    // isOn: boolean = false;
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 8px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.acme {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    font-size: 20px;\n}\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n}\n\n.beginCase {\n    height: 40%;\n    width: 90%;\n    border-radius: 8px;\n    color: black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.form {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n}\n\ninput {\n    width:300%;\n    border-radius: 8px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5pbWcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDc4LCA3OCk7XG59XG5cbi5hZ2VudEZvcm0ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hY21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYmVnaW5DYXNlIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbnRlck5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6MzAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <main>\n  <h1>\n    Welcome to ACME Detective Agency!\n  </h1>\n\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\n  <button>Start</button>\n  <form action=\"\" #loadForm=\"ngForm\" >\n\n    <p>Pop up text when form loads.</p>\n    <h3>ACME</h3>\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\n      you feel up to the task of catching this international criminal, then please...</p>\n      Enter Name:<input type=\"text\">\n    <button>Begin Case!</button>\n  </form>\n\n\n  <h6>Where in the World is Carmen Sandiego!</h6>\n</main> -->\n<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">Start A New Case</button>\n</section>\n\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to caputre the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\">\n    <button class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\">Begin Case</button>\n  </form>\n</section>\n</body>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(route) {
        this.route = route;
        this.shouldBeShown = true;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.toggleDisplay = function () {
        this.shouldBeShown = !this.shouldBeShown;
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/location1/location1.component.css":
/*!***************************************************!*\
  !*** ./src/app/location1/location1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device *::before,\n  .device *::after {\n   box-sizing: border-box;\n   display: block;\n  }\n  ​\n  .device {\n   position: relative;\n   transform: scale(1);\n   z-index: 1;\n  }\n  ​\n  .device .device-frame {\n   z-index: 1;\n  }\n  ​\n  .device .device-content {\n   background-color: #fff;\n   background-position: center center;\n   background-size: cover;\n   -o-object-fit: cover;\n      object-fit: cover;\n   position: relative;\n  }\n  ​\n  \n    .device-macbook-pro {\n    height: 444px;\n    width: 740px;\n    }\n  .device-macbook-pro .device-frame {\n    background: #0d0d0d;\n    border-radius: 20px;\n    box-shadow: inset 0 0 0 2px #c8cacb;\n    height: 650px;\n    margin: 0 auto;\n    padding: 29px 19px 39px 19px;\n    position: relative;\n    width: 1000px;\n   }\n  .device-macbook-pro .device-frame::after {\n    background: #272626;\n    border-radius: 0 0 20px 20px;\n    bottom: 2px;\n    content: \"\";\n    height: 26px;\n    left: 2px;\n    position: absolute;\n    width: 996px;\n   }\n  .device-macbook-pro .device-frame::before {\n    bottom: 10px;\n    color: #c8cacb;\n    content: \"MacBook Pro\";\n    font-size: 12px;\n    height: 16px;\n    left: 50%;\n    line-height: 16px;\n    margin-left: -100px;\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    z-index: 1;\n   }\n  .device-macbook-pro .device-content {\n    border: 2px solid #121212;\n    border-radius: 2px;\n    height: 360px;\n    width: 576px;\n   }\n  .device-macbook-pro .device-power {\n    background: #e2e3e4;\n    border: solid #d5d6d8;\n    border-radius: 2px 2px 0 0;\n    border-width: 2px 4px 0 4px;\n    height: 20px;\n    margin-top: -10px;\n    position: relative;\n    width: 1050px;\n    z-index: 9;\n   }\n  .device-macbook-pro .device-power::after,\n   .device-macbook-pro .device-power::before {\n    content: \"\";\n    position: absolute;\n   }\n  .device-macbook-pro .device-power::after {\n    background: #d5d6d8;\n    border-radius: 0 0 10px 10px;\n    box-shadow: inset 0 0 4px 2px #babdbf;\n    height: 10px;\n    left: 50%;\n    margin-left: -60px;\n    top: -2px;\n    width: 120px;\n   }\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n  .device-macbook-pro.device-spacegray .device-frame {\n    box-shadow: inset 0 0 0 2px #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power {\n    background: #909496;\n    border-color: #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power::after {\n    background: #83878a;\n    box-shadow: inset 0 0 4px 2px #6a6d70;\n   }\n  .device-macbook-pro.device-spacegray .device-power::before {\n    background: #515456;\n    box-shadow: inset 0 -2px 6px 0 black;\n   }\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  /* Below delays the clue pop-up for 2seconds  */\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  .cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 300px;\n    height: 100px;\n    \n}\n  .messageIcon {\n  color: green;\n}\n  .clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\n  form{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n  .clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  border-radius: 20px;\n  width: 30%;\n  height: 700px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n}\n  .time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n  .time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n  .date {\n  color: white;\n  margin-top: 0px;\n}\n  .clueDiv {\n  background-color: white;\n  opacity: 0.75;\n  border-radius: 20px;\n  height: 300px;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 75px;\n  flex-direction: column;\n}\n  .buttons {\n  display: flex;\n  flex-direction: row;\n}\n  .clueText {\n  font-size: 25px;\n}\n  .icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n  .material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: rgb(206, 35, 35);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFOzs7Ozs7R0FNQyxzQkFBc0I7R0FDdEIsY0FBYztFQUNmO0VBQ0E7O0dBRUMsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixVQUFVO0VBQ1g7RUFDQTs7R0FFQyxVQUFVO0VBQ1g7RUFDQTs7R0FFQyxzQkFBc0I7R0FDdEIsa0NBQWtDO0dBQ2xDLHNCQUFzQjtHQUN0QixvQkFBaUI7TUFBakIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtFQUNuQjtFQUNBOzs7SUFHRSxhQUFhO0lBQ2IsWUFBWTtJQUNaO0VBRUQ7SUFDQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtHQUNkO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtHQUNiO0VBRUE7SUFDQyxZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7R0FDWDtFQUVBO0lBQ0MseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtHQUNiO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7R0FDWDtFQUVBOztJQUVDLFdBQVc7SUFDWCxrQkFBa0I7R0FDbkI7RUFFQTtJQUNDLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0dBQ2I7RUFFQTtJQUNDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0dBQ2Q7RUFFQTtJQUNDLG1DQUFtQztHQUNwQztFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLHFCQUFxQjtHQUN0QjtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLHFDQUFxQztHQUN0QztFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLG9DQUFvQztHQUNyQztFQUVEO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsNklBQTZJO0lBQzdJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBRUYsK0NBQStDO0VBQy9DLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7RUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtFQUMxRDtFQUNFLG1CQUFtQjtJQUNqQixTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsOEJBQThCO0lBRTlCLHNCQUFzQjtJQUN0QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osYUFBYTs7QUFFakI7RUFDQTtFQUNFLFlBQVk7QUFDZDtFQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7RUFFQTtFQUNFLDRDQUE0QztBQUM5QztFQUVBO0VBQ0UsMEZBQTBGO0VBQzFGLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7RUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7RUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtFQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7RUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtFQUVBO0VBQ0UsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0VBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjEvbG9jYXRpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5kZXZpY2UsXG4gIC5kZXZpY2U6OmJlZm9yZSxcbiAgLmRldmljZTo6YWZ0ZXIsXG4gIC5kZXZpY2UgKixcbiAgLmRldmljZSAqOjpiZWZvcmUsXG4gIC5kZXZpY2UgKjo6YWZ0ZXIge1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICB6LWluZGV4OiAxO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIC5kZXZpY2UtZnJhbWUge1xuICAgei1pbmRleDogMTtcbiAgfVxuICDigItcbiAgLmRldmljZSAuZGV2aWNlLWNvbnRlbnQge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAg4oCLXG4gIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8ge1xuICAgIGhlaWdodDogNDQ0cHg7XG4gICAgd2lkdGg6IDc0MHB4O1xuICAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZDBkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNjOGNhY2I7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyOXB4IDE5cHggMzlweCAxOXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWU6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNjI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gICAgYm90dG9tOiAycHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbGVmdDogMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTk2cHg7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YmVmb3JlIHtcbiAgICBib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICNjOGNhY2I7XG4gICAgY29udGVudDogXCJNYWNCb29rIFByb1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjEyMTI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDU3NnB4O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMmUzZTQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjZDVkNmQ4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDRweCAwIDRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgei1pbmRleDogOTtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjphZnRlcixcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogI2Q1ZDZkODtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMnB4ICNiYWJkYmY7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNhMGEzYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMTA1MHB4OztcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtZnJhbWUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjNzY3YTdkO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlciB7XG4gICAgYmFja2dyb3VuZDogIzkwOTQ5NjtcbiAgICBib3JkZXItY29sb3I6ICM3NjdhN2Q7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzgzODc4YTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjNmE2ZDcwO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTE1NDU2O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCBibGFjaztcbiAgIH1cbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY5MDYzL3BleGVscy1waG90by0yNjkwNjMuanBlZz9hdXRvPWZvcm1hdCUyQ2NvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuLyogQmVsb3cgZGVsYXlzIHRoZSBjbHVlIHBvcC11cCBmb3IgMnNlY29uZHMgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBcbn1cbi5tZXNzYWdlSWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jbHVlVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbmZvcm17XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC43MTkpO1xufVxuXG4uY2x1ZU9uZVNjcmVlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5pY2xhcmlmaWVkLmNvbS9pbWFnZXMvbmV3cy82MDg4Ni8yOTIzODAvMjkyMzgwLTEyODAucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGltZSwgLmNsdWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IDc1cHg7XG4gIG1hcmdpbjogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jbHVlRGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jbHVlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMTI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDM1LCAzNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<body>\n\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n          <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n            <div *ngIf=\"clueNumber === -1\" class=\"cluePopUp\" >\n              <p class=\"clueText\">Hi i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n            </div>\n\n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"flight\" class=\"flyOut\">  \n            <form action=\"\">Fly Out\n              <input type=\"radio\"> City 1\n              <input type=\"radio\"> City 2\n              <input type=\"radio\"> City 3\n              <button>Fly Out!</button>\n            </form>\n          <button (click)=\"goBack()\">Go Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/location1/location1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/location1/location1.component.ts ***!
  \**************************************************/
/*! exports provided: Location1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location1Component", function() { return Location1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");
/* harmony import */ var _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pexel-api.service */ "./src/app/pexel-api.service.ts");

// import { Component, OnInit } from '@angular/core';



var Location1Component = /** @class */ (function () {
    function Location1Component(clueService, pexelService) {
        this.clueService = clueService;
        this.pexelService = pexelService;
        this.clueNumber = -1;
        this.tempClueNumber = 0;
        this.flight = false;
        this.nextCity = ['Detroit'];
        this.currentCity = 'Dubai';
        this.randomPhoto = Math.floor((Math.random() * 9));
        this.randomDetroitPhoto = Math.floor((Math.random() * 2));
    }
    Location1Component.prototype.showClue = function () {
        console.log(this.clueNumber);
        this.clueNumber++;
        console.log(this.clueNumber);
    };
    Location1Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    Location1Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = !this.flight;
    };
    Location1Component.prototype.nextClue = function () {
        this.clueNumber++;
    };
    Location1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomDetroitPhoto].src.small });
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.portrait;
            // console.log(this.photoURL);
            var currentIndex = 3;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                console.log(_this.localClues);
            }
            return _this.localClues;
        });
    };
    Location1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location1',
            template: __webpack_require__(/*! ./location1.component.html */ "./src/app/location1/location1.component.html"),
            styles: [__webpack_require__(/*! ./location1.component.css */ "./src/app/location1/location1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"]])
    ], Location1Component);
    return Location1Component;
}());

// locationClues() {
//   while (this.localClues <= 3 ) {
//     let i = Math.floor((Math.random() * (this.clues.length - 1)));
//     console.log(i);
//     this.localClues.push(this.clues[i]);
//   }
//   console.log(this.localClues);
// }


/***/ }),

/***/ "./src/app/location2/location2.component.css":
/*!***************************************************!*\
  !*** ./src/app/location2/location2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMi9sb2NhdGlvbjIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/location2/location2.component.html":
/*!****************************************************!*\
  !*** ./src/app/location2/location2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  location2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/location2/location2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/location2/location2.component.ts ***!
  \**************************************************/
/*! exports provided: Location2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location2Component", function() { return Location2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Location2Component = /** @class */ (function () {
    function Location2Component() {
    }
    Location2Component.prototype.ngOnInit = function () {
    };
    Location2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location2',
            template: __webpack_require__(/*! ./location2.component.html */ "./src/app/location2/location2.component.html"),
            styles: [__webpack_require__(/*! ./location2.component.css */ "./src/app/location2/location2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Location2Component);
    return Location2Component;
}());



/***/ }),

/***/ "./src/app/location3/location3.component.css":
/*!***************************************************!*\
  !*** ./src/app/location3/location3.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".locationLanding {\n  /* background-image: url(../../assets/dubai.jpg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 15vh;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n}\n.clue {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n}\n.flyOut {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZHViYWkuanBnKTsgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogOTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG4ubWVzc2FnZUljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jbHVlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG59XG4uZmx5T3V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/location3/location3.component.html":
/*!****************************************************!*\
  !*** ./src/app/location3/location3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"locationLanding\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n    <div *ngIf=\"clueNumber === -1\" class=\"cluePopUp\" >\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n     \n      <p >\n      Hi i am a Clue<button (click)=\"showClue()\">Let's Party!</button>\n      </p>\n      \n</div>\n  <div  *ngFor=\"let clue of localClues; index as i\" >\n    <div *ngIf=\"i === this.clueNumber\" class=\"clue\"> \n    <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n    <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">\n        fingerprint\n        </i></button> <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">\n            airplanemode_active\n            </i> </button>\n          </div>\n  </div>\n\n  <div *ngIf=\"flight\" class=\"flyOut\">  \n      <form action=\"\">Fly Out\n      <input type=\"radio\"> City 1\n      <input type=\"radio\"> City 2\n      <input type=\"radio\"> City 3\n      <button>Fly Out!</button>\n      </form>\n      <button (click)=\"goBack()\">Go Back</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/location3/location3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/location3/location3.component.ts ***!
  \**************************************************/
/*! exports provided: Location3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location3Component", function() { return Location3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");
/* harmony import */ var _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pexel-api.service */ "./src/app/pexel-api.service.ts");




var Location3Component = /** @class */ (function () {
    function Location3Component(clueService, pexelService) {
        this.clueService = clueService;
        this.pexelService = pexelService;
        this.clueNumber = -1;
        this.tempClueNumber = 0;
        this.flight = false;
        this.nextCity = ['Detroit'];
        this.currentCity = 'Dubai';
        this.randomPhoto = Math.floor((Math.random() * 9));
        this.randomDetroitPhoto = Math.floor((Math.random() * 2));
    }
    Location3Component.prototype.showClue = function () {
        console.log(this.clueNumber);
        this.clueNumber++;
        console.log(this.clueNumber);
    };
    Location3Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    Location3Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = !this.flight;
    };
    Location3Component.prototype.nextClue = function () {
        this.clueNumber++;
    };
    Location3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomDetroitPhoto].src.small });
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.portrait;
            // console.log(this.photoURL);
            var currentIndex = 3;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                console.log(_this.localClues);
            }
            return _this.localClues;
        });
    };
    Location3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location3',
            template: __webpack_require__(/*! ./location3.component.html */ "./src/app/location3/location3.component.html"),
            styles: [__webpack_require__(/*! ./location3.component.css */ "./src/app/location3/location3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"]])
    ], Location3Component);
    return Location3Component;
}());

// locationClues() {
//   while (this.localClues <= 3 ) {
//     let i = Math.floor((Math.random() * (this.clues.length - 1)));
//     console.log(i);
//     this.localClues.push(this.clues[i]);
//   }
//   console.log(this.localClues);
// }


/***/ }),

/***/ "./src/app/location4/location4.component.css":
/*!***************************************************!*\
  !*** ./src/app/location4/location4.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uNC9sb2NhdGlvbjQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/location4/location4.component.html":
/*!****************************************************!*\
  !*** ./src/app/location4/location4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  location4 works!\n</p>\n"

/***/ }),

/***/ "./src/app/location4/location4.component.ts":
/*!**************************************************!*\
  !*** ./src/app/location4/location4.component.ts ***!
  \**************************************************/
/*! exports provided: Location4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location4Component", function() { return Location4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Location4Component = /** @class */ (function () {
    function Location4Component() {
    }
    Location4Component.prototype.ngOnInit = function () {
    };
    Location4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location4',
            template: __webpack_require__(/*! ./location4.component.html */ "./src/app/location4/location4.component.html"),
            styles: [__webpack_require__(/*! ./location4.component.css */ "./src/app/location4/location4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Location4Component);
    return Location4Component;
}());



/***/ }),

/***/ "./src/app/pexel-api.service.ts":
/*!**************************************!*\
  !*** ./src/app/pexel-api.service.ts ***!
  \**************************************/
/*! exports provided: PexelApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PexelApiService", function() { return PexelApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PexelApiService = /** @class */ (function () {
    function PexelApiService(http) {
        this.http = http;
        this.apiKey = "563492ad6f9170000100000128cb04362abc4b32b717e2c8e9125276";
        // location:string;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: "" + this.apiKey
            })
        };
    }
    PexelApiService.prototype.getLocationPhoto = function (location) {
        return this.http.get("https://api.pexels.com/v1/search?query=" + location + "+query&per_page=10&page=1", this.httpOptions);
    };
    PexelApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PexelApiService);
    return PexelApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josiekwheeler/Documents/Carmen_Sandiego/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map