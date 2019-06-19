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

module.exports = "main{\n    height:900px;\n    width: 400px;\n    /* background: url(CarmenSandiegoLogo.jpg) no-repeat; */\n    background-size: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XG4gICAgaGVpZ2h0OjkwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoQ2FybWVuU2FuZGllZ29Mb2dvLmpwZykgbm8tcmVwZWF0OyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<<<<<<< HEAD\n<<<<<<< HEAD\n<!-- <div></div> -->\n\n\n<landing-page></landing-page>\n\n=======\n<div>\n  <home></home>\n<landing-page></landing-page>\n</div>\n=======\n<!-- <div>\n  <home></home> -->\n<!-- <landing-page></landing-page> -->\n<router-outlet></router-outlet>\n<!-- </div> -->\n>>>>>>> upstream/master\n\n<!-- <home></home> -->\n<!-- \n<landing-page></landing-page> -->\n>>>>>>> 3a6facf739ffd90a060e344d752b5d1f76c4dd8c\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    <img src=\"{{this.photo}}\" alt=\"\">\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <location1></location1> -->\n<!-- <location3></location3> -->\n\n\n\n\n"

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
            selector: 'app',
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
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clock.service */ "./src/app/clock.service.ts");















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
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_14__["ClockService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clock.service.ts":
/*!**********************************!*\
  !*** ./src/app/clock.service.ts ***!
  \**********************************/
/*! exports provided: ClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockService", function() { return ClockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClockService = /** @class */ (function () {
    function ClockService() {
        this.clock = new Date(2019, 5, 28, 12, 0, 0);
        this.time = 24;
    }
    ClockService.prototype.getTime = function () {
        return this.clock;
    };
    ClockService.prototype.onClue = function () {
        this.clock.setHours(this.clock.getHours() + 1);
    };
    // onClue() {
    // return  this.time -= 1;
    // }
    ClockService.prototype.onFlight = function () {
        return this.time -= 3;
    };
    ClockService.prototype.onWrong = function () {
        return this.time -= 2;
    };
    ClockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockService);
    return ClockService;
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
        this.locations = ['Paris', 'Moscow', 'Dubai', 'Detroit'];
        this.redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Cleveland'];
        this.wrongLocations = ['London', 'Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Berlin', 'Rome', 'Warsaw'];
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

module.exports = "p {\n    font-size: 20px;\n    color: red;\n    text-align: center;\n}\n\n.fade {\n    -webkit-animation: fade 5s;\n            animation: fade 5s;\n}\n\n@-webkit-keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n\n/* The device with borders */\n\n.smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n}\n\n/* The horizontal line on the top of the device */\n\n.smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n}\n\n/* The circle on the bottom of the device */\n\n.littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n}\n\n/* The screen (or content) of the device */\n\n.smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n}\n\n@media only screen and (min-width: 768px) {\n\n    /* The device with borders */\n.smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  }\n  \n  /* The horizontal line on the top of the device */\n  .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n  \n  /* The circle on the bottom of the device */\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n  \n  /* The screen (or content) of the device */\n  .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n\n    /* The laptop with borders */\n.smartphone {\n    transform-origin: 0 0;\n    transform: scale(.6) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px;\n    /* background-color: black; */\n    border-top-width: none;\n    border-bottom-width: none\n  \n  }\n  \n  /* The keyboard of the laptop */\n  .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  }\n  \n  /* The top of the keyboard */\n  .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  }\n  \n  /* The screen (or content) of the device */\n  .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUFrQjtZQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBSEE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBR0EsNEJBQTRCOztBQUM1QjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUUsaURBQWlEOztBQUNuRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQ0FBMkM7O0FBQ3pDO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVFLDBDQUEwQzs7QUFDNUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBLGlEQUFpRDtFQUNqRDtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQSwyQ0FBMkM7RUFDM0M7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEI7O0VBRUY7O0VBRUEsK0JBQStCO0VBQy9CO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7RUFDWDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixRQUFRO0VBQ1Y7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYWRlIHtcbiAgICBhbmltYXRpb246IGZhZGUgNXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUge29wYWNpdHk6IDB9XG4gICAgNTAlIHtvcGFjaXR5OiAxfVxufVxuXG5cbi8qIFRoZSBkZXZpY2Ugd2l0aCBib3JkZXJzICovXG4uc21hcnRwaG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDE2cHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogNjBweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG59XG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuLnNtYXJ0cGhvbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuICBcbi8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4uc21hcnRwaG9uZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC8qIFRoZSBkZXZpY2Ugd2l0aCBib3JkZXJzICovXG4uc21hcnRwaG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDE2cHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogNjBweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIH1cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4gIC5zbWFydHBob25lOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2UgKi9cbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLyogVGhlIHNjcmVlbiAob3IgY29udGVudCkgb2YgdGhlIGRldmljZSAqL1xuICAuc21hcnRwaG9uZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDY2OHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAtMXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC42KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmVcbiAgXG4gIH1cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9XG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section>\n  <div class=\"smartphone\" [ngClass]=\"isOn ? 'lockscreen' : 'none'\" [ngStyle]=\"{'background-color': (isOn ? 'white' : 'rgb(37, 37, 37)')} \">\n    <div >\n      <p>ACME HEADQUARTERS</p>\n      <div (click)=\"onFlip()\" class=\"littlebtn\"></div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"smartphone\">\n    <div class=\"fade\">\n      <div>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n      </div>\n    </div>\n    <div class=\"littlebtn\"></div>\n  </div>\n</section>"

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


var HomeComponent = /** @class */ (function () {
    // isOn: boolean = false;
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "*{\n    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Srtm_ramp2.world.21600x10800.jpg/1280px-Srtm_ramp2.world.21600x10800.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUpBQW1KO0lBQ25KLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzE1L1NydG1fcmFtcDIud29ybGQuMjE2MDB4MTA4MDAuanBnLzEyODBweC1TcnRtX3JhbXAyLndvcmxkLjIxNjAweDEwODAwLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h1>\n    Welcome to ACME Detective Agency!\n  </h1>\n\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\n  <button>Start</button>\n  <form action=\"\" #loadForm=\"ngForm\" >\n\n    <p>Pop up text when form loads.</p>\n    <h3>ACME</h3>\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\n      you feel up to the task of catching this international criminal, then please...</p>\n    Enter Name:<input type=\"text\">\n    <button>Begin Case!</button>\n  </form>\n\n\n  <h6>Where in the World is Carmen Sandiego!</h6>\n\n\n<!-- <home></home> -->"

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


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".locationLanding {\n  background-image: url('paris.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* Below delays the clue pop-up for 2seconds  */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 15vh;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\nform{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n.clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  border-radius: 20px;\n  width: 50%;\n  height: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n}\n.time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n.time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n.date {\n  color: white;\n  margin-top: 0px;\n}\n.clueDiv {\n  background-color: white;\n  opacity: 0.75;\n  border-radius: 20px;\n  height: 300px;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 75px;\n}\n.clueText {\n  font-size: 25px;\n}\n.icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n.material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: rgb(206, 35, 35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsK0NBQStDO0FBQy9DLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUMxRDtFQUNFLG1CQUFtQjtJQUNqQixTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsOEJBQThCO0lBRTlCLHNCQUFzQjtJQUN0QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSwwRkFBMEY7RUFDMUYsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjEvbG9jYXRpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYXRpb25MYW5kaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9wYXJpcy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHdpZHRoOiA5NXZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIEJlbG93IGRlbGF5cyB0aGUgY2x1ZSBwb3AtdXAgZm9yIDJzZWNvbmRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbi5jbHVlUG9wVXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7IFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuLm1lc3NhZ2VJY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNsdWVUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuZm9ybXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjcxOSk7XG59XG5cbi5jbHVlT25lU2NyZWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LmljbGFyaWZpZWQuY29tL2ltYWdlcy9uZXdzLzYwODg2LzI5MjM4MC8yOTIzODAtMTI4MC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpbWUsIC5jbHVlRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiA3NXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2x1ZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLmNsdWVUZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMzUsIDM1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  location1 works!\n</p>\n\n<<<<<<< HEAD\n<!--  /*Include Clock*/ -->\n=======\n\n<!-- /*Include Clock*/ -->\n<span>CLOCK</span>\n>>>>>>> upstream/master\n<div class=\"locationLanding\">\n    <div class=\"cluePopUp\" *ngFor=\"let clue of clues, \">\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n      <p>\n       {{clue.city}}<button>Let's Party!</button>\n      </p>\n      \n    </div>\n  </div>\n  <form action=\"\">Fly Out\n  <input type=\"radio\"> City 1\n  <input type=\"radio\"> City 2\n  <input type=\"radio\"> City 3\n  <button>Fly Out!</button>\n  </form>\n\n <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n\n<section class=\"clueOneScreen\">\n    <p class=\"time\">12:01</p>\n    <p class=\"date\">Friday, June 28</p>\n  <div class=\"clueDiv\">\n    <p class=\"clueText\">This is the capital of Russia</p>\n  </div>\n  <div class=\"icons\">\n    <i class=\"material-icons\">message</i>\n    <i class=\"material-icons\">airplanemode_active</i>\n    <!-- <button class=\"clueIcon\"></button>\n    <button class=\"planeIcon\"></button> -->\n  </div>\n</section>\n"

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


var Location1Component = /** @class */ (function () {
    function Location1Component() {
    }
    Location1Component.prototype.ngOnInit = function () {
    };
    Location1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location1',
            template: __webpack_require__(/*! ./location1.component.html */ "./src/app/location1/location1.component.html"),
            styles: [__webpack_require__(/*! ./location1.component.css */ "./src/app/location1/location1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Location1Component);
    return Location1Component;
}());



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

module.exports = ".locationLanding {\n  /* background-image: url(../../assets/dubai.jpg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 25vh;\n}\n.clock {\n  position: relative;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-20%);\n  font-size: 30px;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 0;\n  line-height: 0;\n}\n.date {\n  font-size: 20px;\n  font-weight: 400;\n  color: white;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n}\n.clue {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 35vh;\n}\n.flyOut {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZHViYWkuanBnKTsgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogOTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDI1dmg7XG59XG4uY2xvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVzc2FnZUljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jbHVlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDM1dmg7XG59XG4uZmx5T3V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/location3/location3.component.html":
/*!****************************************************!*\
  !*** ./src/app/location3/location3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- the ngStyle here is used to apply the random background image to the location -->\n<!-- the ngIf clueNumber starts at -1 since the ngFor below brings in array of clues and the index there starts at 0 -->\n<div class=\"locationLanding\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n      <div *ngIf=\"clueNumber === -2\" >\n          <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div class=\"cluePopUp\">\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n    <!-- <p>You have {{time}} hours left to capture Carmen Agent!</p> -->\n      <p>\n      Hi i am a Clue<button (click)=\"showClue()\">Let's Party!</button>\n      </p>\n    </div>\n      \n</div>\n<!-- ngFor to display all our beautiful clues with ngIf to only show 1 at a time -->\n  <div  *ngFor=\"let clue of localClues; index as i\" >\n    <div *ngIf=\"i === this.clueNumber\" class=\"clue\"> \n        <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n      <!-- this ngIf is if the clue is not a photo show the text clue -->\n    <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n    <!-- this ng-template loads the photo if the clue is a photo -->\n    <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n    <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">\n        fingerprint\n        </i></button> <button (click)=\"flyOut(); onFlight()\">Fly Out<i class=\"material-icons\">\n            airplanemode_active\n            </i> </button>\n            <!-- <p>You now have {{ time | date: 'medium'}} hours left to capture Carmen Agent!</p> -->\n          </div>\n  </div>\n\n  <div *ngIf=\"flight\" class=\"flyOut\">  \n      <form action=\"\">Fly Out\n        <!-- below calls on the variables declared for the next city, a fake-out city, and a wrong location -->\n      <input type=\"radio\"> {{this.nextCity}}\n      <input type=\"radio\"> {{this.redHerring}}\n      <input type=\"radio\"> {{this.wrongLocation}}\n      <button>Fly Out!</button>\n      </form>\n      <button (click)=\"goBack()\">Go Back</button>\n    </div>\n\n\n\n  </div>"

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
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock.service */ "./src/app/clock.service.ts");





var Location3Component = /** @class */ (function () {
    function Location3Component(clueService, pexelService, clockService) {
        this.clueService = clueService;
        this.pexelService = pexelService;
        this.clockService = clockService;
        this.clueNumber = -2; // variable that is used for ngIfs to only show one pop-up message/clue at a time
        this.tempClueNumber = 0; // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
        this.flight = false; //  used to toggle flight screen or not
        this.nextCity = 'Detroit'; // what the next city location is
        this.currentCity = 'Dubai'; // current city
        this.randomPhoto = Math.floor((Math.random() * 9)); // used to get a random index number for background photo
        this.randomDetroitPhoto = Math.floor((Math.random() * 2)); // detroit only had 3 photos, this selects on of those
    }
    // method that increases clueNumber so we can show the next clue
    Location3Component.prototype.showClue = function () {
        this.clueNumber = 0;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        // console.log(this.clueNumber);
    };
    // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
    Location3Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
    Location3Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = !this.flight;
    };
    // increase clueNumber to display next clue
    Location3Component.prototype.nextClue = function () {
        this.clueNumber++;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
    };
    Location3Component.prototype.ngOnInit = function () {
        var _this = this;
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomDetroitPhoto].src.small });
            // console.log(this.clues);
        });
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.large;
            // below is used to shuffle clues array and save it as localClues array
            var currentIndex = _this.clues.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                // console.log(this.localClues);
            }
            // gets the redHerring option from service then a wrong city
            _this.redHerring = _this.clueService.redHerring[3];
            _this.wrongLocation = _this.clueService.wrongLocations[2];
            return _this.localClues;
        });
        this.time = this.clockService.getTime();
    };
    Location3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location3',
            template: __webpack_require__(/*! ./location3.component.html */ "./src/app/location3/location3.component.html"),
            styles: [__webpack_require__(/*! ./location3.component.css */ "./src/app/location3/location3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
    ], Location3Component);
    return Location3Component;
}());



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