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

<<<<<<< HEAD
module.exports = "body {\n   height: 100vh;\n   width: 100vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsWUFBWTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgIGhlaWdodDogMTAwdmg7XG4gICB3aWR0aDogMTAwdnc7XG59XG4iXX0= */"
=======
module.exports = "main{\n    height:900px;\n    width: 400px;\n    /* background: url(CarmenSandiegoLogo.jpg) no-repeat; */\n    background-size: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XG4gICAgaGVpZ2h0OjkwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoQ2FybWVuU2FuZGllZ29Mb2dvLmpwZykgbm8tcmVwZWF0OyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XG59Il19 */"
>>>>>>> master

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\n\n<!-- <div></div> -->\n\n<body>\n<router-outlet></router-outlet>\n<!-- <location3></location3> -->\n</body>\n\n\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    <img src=\"{{this.photo}}\" alt=\"\">\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <location1></location1> -->\n<location3></location3>\n\n\n\n\n"
=======
module.exports = "\n\n<<<<<<< HEAD\n<<<<<<< HEAD\n<!-- <div></div> -->\n\n\n<landing-page></landing-page>\n\n=======\n<div>\n  <home></home>\n<landing-page></landing-page>\n</div>\n=======\n<!-- <div>\n  <home></home> -->\n<!-- <landing-page></landing-page> -->\n<router-outlet></router-outlet>\n<!-- </div> -->\n>>>>>>> upstream/master\n\n<!-- <home></home> -->\n<!-- \n<landing-page></landing-page> -->\n>>>>>>> 3a6facf739ffd90a060e344d752b5d1f76c4dd8c\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    <img src=\"{{this.photo}}\" alt=\"\">\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <location1></location1> -->\n<!-- <location3></location3> -->\n\n\n\n\n"
>>>>>>> master

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

<<<<<<< HEAD
module.exports = "\n  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device *::before,\n  .device *::after {\n    box-sizing: border-box;\n    display: flex;\n  }\n\n  section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .device {\n    position: relative;\n    transform: scale(1);\n    z-index: 1;\n  }\n\n  .device .device-frame {\n    z-index: 1;\n  }\n\n  .device .device-content {\n    background-position: center center;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .device-macbook-pro {\n    height: 100%;\n    width: 62%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    }\n\n  .device-macbook-pro .device-frame {\n      background: #0d0d0d;\n      border-radius: 20px;\n      box-shadow: inset 0 0 0 2px #c8cacb;\n      height: 650px;\n      margin: 0 auto;\n      padding: 29px 19px 39px 19px;\n      position: relative;\n      width: 1000px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n     }\n\n  .device-macbook-pro .device-frame::after {\n      background: #272626;\n      border-radius: 0 0 20px 20px;\n      bottom: 2px;\n      content: \"\";\n      height: 26px;\n      left: 2px;\n      position: absolute;\n      width: 996px;\n     }\n\n  .device-macbook-pro .device-frame::before {\n      bottom: 10px;\n      color: #c8cacb;\n      content: \"MacBook Pro\";\n      font-size: 12px;\n      height: 16px;\n      left: 56%;\n      line-height: 16px;\n      margin-left: -100px;\n      position: absolute;\n      text-align: center;\n      width: 200px;\n      z-index: 1;\n      font-family: 'Roboto', sans-serif;\n    }\n\n  .device-macbook-pro .device-content {\n      border-radius: 2px;\n      height: 360px;\n      width: 576px;\n    }\n\n  .device-macbook-pro .device-power {\n      background: #e2e3e4;\n      border: solid #d5d6d8;\n      border-radius: 2px 2px 0 0;\n      border-width: 2px 4px 0 4px;\n      height: 20px;\n      margin-top: -10px;\n      position: relative;\n      width: 1050px;\n      z-index: 9;\n     }\n\n  .device-macbook-pro .device-power::after,\n    .device-macbook-pro .device-power::before {\n      content: \"\";\n      position: absolute;\n    }\n\n  .device-macbook-pro .device-power::after {\n      background: #d5d6d8;\n      border-radius: 0 0 10px 10px;\n      box-shadow: inset 0 0 4px 2px #babdbf;\n      height: 10px;\n      left: 50%;\n      margin-left: -60px;\n      top: -2px;\n      width: 120px;\n    }\n\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n\n  .device-macbook-pro.device-spacegray .device-frame {\n      box-shadow: inset 0 0 0 2px #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power {\n      background: #909496;\n      border-color: #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::after {\n      background: #83878a;\n      box-shadow: inset 0 0 4px 2px #6a6d70;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::before {\n      background: #515456;\n      box-shadow: inset 0 -2px 6px 0 black;\n    }\n\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  /* \n.fade {\n    animation: fade 5s;\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n} */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n} */\n\n  /* The circle on the bottom of the device\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n} */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n} */\n\n  /* \n@media only screen and (min-width: 768px) { */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  } */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n   */\n\n  /* The circle on the bottom of the device */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n   */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 50%;\n    height: 40%;\n    border-radius: 8px;\n    opacity: 0.7;\n  }\n}\n\n@media only screen and (min-width: 1024px) { */\n\n  /* The laptop with borders */\n\n  /* .smartphone {\n    transform-origin: 0 0;\n    transform: scale(.7) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px; */\n\n  /* background-color: black;\n    border-top-width: none;\n    border-bottom-width: none;\n    margin-top: 150px;\n  } */\n\n  /* The keyboard of the laptop */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  } */\n\n  /* The top of the keyboard */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  } */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  } */\n\n  .content {\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 8px;\n    opacity: 0.7;\n    width: 80%;\n    height: 70%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n  }\n\n  button {\n    font-family: 'Roboto', sans-serif;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOzs7Ozs7SUFNRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsbUNBQW1DO01BQ25DLGFBQWE7TUFDYixjQUFjO01BQ2QsNEJBQTRCO01BQzVCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7S0FDcEI7O0VBRUE7TUFDQyxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsWUFBWTtLQUNiOztFQUVEO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLFlBQVk7TUFDWixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsaUNBQWlDO0lBQ25DOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFVBQVU7S0FDWDs7RUFFRDs7TUFFRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLDRCQUE0QjtNQUM1QixxQ0FBcUM7TUFDckMsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFlBQVk7SUFDZDs7RUFFRDtJQUNDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0dBQ2Q7O0VBRUM7TUFDRSxtQ0FBbUM7SUFDckM7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLHFDQUFxQztJQUN2Qzs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixvQ0FBb0M7SUFDdEM7O0VBR0Y7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCw2SUFBNkk7SUFDN0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7RUFFRjs7Ozs7Ozs7O0VBU0U7O0VBRUYsNEJBQTRCOztFQUM1Qjs7Ozs7Ozs7O0dBU0c7O0VBRUQsaURBQWlEOztFQUNuRDs7Ozs7Ozs7Ozs7R0FXRzs7RUFFSDs7Ozs7Ozs7Ozs7O0dBWUc7O0VBRUQsMENBQTBDOztFQUM1Qzs7OztHQUlHOztFQUVIOzZDQUM2Qzs7RUFFekMsNEJBQTRCOztFQUNoQzs7Ozs7Ozs7O0tBU0s7O0VBRUgsaURBQWlEOztFQUNqRDs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMkNBQTJDOztFQUMzQzs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMENBQTBDOztFQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXFCNEM7O0VBRTFDLDRCQUE0Qjs7RUFDaEM7Ozs7Ozs7Ozs7bUNBVW1DOztFQUMvQjs7OztLQUlDOztFQUVILCtCQUErQjs7RUFDL0I7Ozs7Ozs7Ozs7OztLQVlHOztFQUVILDRCQUE0Qjs7RUFDNUI7Ozs7Ozs7Ozs7Ozs7O0tBY0c7O0VBRUgsMENBQTBDOztFQUMxQzs7Ozs7OztLQU9HOztFQUVIO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUlBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlICo6OmJlZm9yZSxcbiAgLmRldmljZSAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmRldmljZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmRldmljZSAuZGV2aWNlLWZyYW1lIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZGV2aWNlIC5kZXZpY2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kZXZpY2UtbWFjYm9vay1wcm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNjIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNjOGNhY2I7XG4gICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyOXB4IDE5cHggMzlweCAxOXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIH1cbiAgICBcbiAgICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjcyNjI2O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA5OTZweDtcbiAgICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YmVmb3JlIHtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjYzhjYWNiO1xuICAgICAgY29udGVudDogXCJNYWNCb29rIFByb1wiO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbGVmdDogNTYlO1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgIHdpZHRoOiA1NzZweDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMmUzZTQ7XG4gICAgICBib3JkZXI6IHNvbGlkICNkNWQ2ZDg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICAgIGJvcmRlci13aWR0aDogMnB4IDRweCAwIDRweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwNTBweDtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Q1ZDZkODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjYmFiZGJmO1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNhMGEzYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMTA1MHB4OztcbiAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzkwOTQ5NjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjNmE2ZDcwO1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gICAgfVxuICBcbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY5MDYzL3BleGVscy1waG90by0yNjkwNjMuanBlZz9hdXRvPWZvcm1hdCUyQ2NvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbi8qIFxuLmZhZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZSA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICAwJSB7b3BhY2l0eTogMH1cbiAgICA1MCUge29wYWNpdHk6IDF9XG59XG4gKi9cblxuLyogVGhlIGRldmljZSB3aXRoIGJvcmRlcnMgKi9cbi8qIC5zbWFydHBob25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMTZweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbn0gKi9cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4vKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG4gIFxuLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2VcbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gKi9cbiAgXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbi8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0gKi9cblxuLyogXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG5cbiAgICAvKiBUaGUgZGV2aWNlIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjY4cHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxNnB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICB9ICovXG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbiAgLyogLnNtYXJ0cGhvbmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogLTFweDtcbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7ICovXG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH0gKi9cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9ICovXG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9ICovXG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfSAqL1xuXG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG5cblxuICAuZW1haWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIH1cbiJdfQ== */"
=======
module.exports = "p {\n    font-size: 20px;\n    color: red;\n    text-align: center;\n}\n\n.fade {\n    -webkit-animation: fade 5s;\n            animation: fade 5s;\n}\n\n@-webkit-keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n\n/* The device with borders */\n\n.smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n}\n\n/* The horizontal line on the top of the device */\n\n.smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n}\n\n/* The circle on the bottom of the device */\n\n.littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n}\n\n/* The screen (or content) of the device */\n\n.smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n}\n\n@media only screen and (min-width: 768px) {\n\n    /* The device with borders */\n.smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  }\n  \n  /* The horizontal line on the top of the device */\n  .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n  \n  /* The circle on the bottom of the device */\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n  \n  /* The screen (or content) of the device */\n  .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n\n    /* The laptop with borders */\n.smartphone {\n    transform-origin: 0 0;\n    transform: scale(.6) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px;\n    /* background-color: black; */\n    border-top-width: none;\n    border-bottom-width: none\n  \n  }\n  \n  /* The keyboard of the laptop */\n  .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  }\n  \n  /* The top of the keyboard */\n  .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  }\n  \n  /* The screen (or content) of the device */\n  .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUFrQjtZQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBSEE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBR0EsNEJBQTRCOztBQUM1QjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUUsaURBQWlEOztBQUNuRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQ0FBMkM7O0FBQ3pDO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVFLDBDQUEwQzs7QUFDNUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBLGlEQUFpRDtFQUNqRDtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQSwyQ0FBMkM7RUFDM0M7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEI7O0VBRUY7O0VBRUEsK0JBQStCO0VBQy9CO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7RUFDWDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixRQUFRO0VBQ1Y7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYWRlIHtcbiAgICBhbmltYXRpb246IGZhZGUgNXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUge29wYWNpdHk6IDB9XG4gICAgNTAlIHtvcGFjaXR5OiAxfVxufVxuXG5cbi8qIFRoZSBkZXZpY2Ugd2l0aCBib3JkZXJzICovXG4uc21hcnRwaG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDE2cHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogNjBweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG59XG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuLnNtYXJ0cGhvbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuICBcbi8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4uc21hcnRwaG9uZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC8qIFRoZSBkZXZpY2Ugd2l0aCBib3JkZXJzICovXG4uc21hcnRwaG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDE2cHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogNjBweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIH1cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4gIC5zbWFydHBob25lOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2UgKi9cbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLyogVGhlIHNjcmVlbiAob3IgY29udGVudCkgb2YgdGhlIGRldmljZSAqL1xuICAuc21hcnRwaG9uZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDY2OHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAtMXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC42KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmVcbiAgXG4gIH1cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9XG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn0iXX0= */"
>>>>>>> master

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<body>\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n              <div class=\"email\">\n              <p>ACME HEADQUARTERS</p>\n              <p>Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n              <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n    </div>\n  </section>\n</body>\n  "
=======
module.exports = "<!-- <section>\n  <div class=\"smartphone\" [ngClass]=\"isOn ? 'lockscreen' : 'none'\" [ngStyle]=\"{'background-color': (isOn ? 'white' : 'rgb(37, 37, 37)')} \">\n    <div >\n      <p>ACME HEADQUARTERS</p>\n      <div (click)=\"onFlip()\" class=\"littlebtn\"></div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"smartphone\">\n    <div class=\"fade\">\n      <div>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n        <p>ACME HEADQUARTERS</p>\n      </div>\n    </div>\n    <div class=\"littlebtn\"></div>\n  </div>\n</section>"
>>>>>>> master

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

<<<<<<< HEAD
module.exports = "body {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 8px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.acme {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    font-size: 20px;\n}\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n}\n\n.beginCase {\n    height: 40%;\n    width: 90%;\n    border-radius: 8px;\n    color: black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.form {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n}\n\ninput {\n    width:300%;\n    border-radius: 8px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5pbWcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDc4LCA3OCk7XG59XG5cbi5hZ2VudEZvcm0ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hY21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYmVnaW5DYXNlIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbnRlck5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6MzAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4iXX0= */"
=======
module.exports = "*{\n    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Srtm_ramp2.world.21600x10800.jpg/1280px-Srtm_ramp2.world.21600x10800.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUpBQW1KO0lBQ25KLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzE1L1NydG1fcmFtcDIud29ybGQuMjE2MDB4MTA4MDAuanBnLzEyODBweC1TcnRtX3JhbXAyLndvcmxkLjIxNjAweDEwODAwLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59Il19 */"
>>>>>>> master

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<!-- <main>\n  <h1>\n    Welcome to ACME Detective Agency!\n  </h1>\n\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\n  <button>Start</button>\n  <form action=\"\" #loadForm=\"ngForm\" >\n\n    <p>Pop up text when form loads.</p>\n    <h3>ACME</h3>\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\n      you feel up to the task of catching this international criminal, then please...</p>\n      Enter Name:<input type=\"text\">\n    <button>Begin Case!</button>\n  </form>\n\n\n  <h6>Where in the World is Carmen Sandiego!</h6>\n</main> -->\n<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">Start A New Case</button>\n</section>\n\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to caputre the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\">\n    <button class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\">Begin Case</button>\n  </form>\n</section>\n</body>\n"
=======
module.exports = "<main>\n  <h1>\n    Welcome to ACME Detective Agency!\n  </h1>\n\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\n  <button>Start</button>\n  <form action=\"\" #loadForm=\"ngForm\" >\n\n    <p>Pop up text when form loads.</p>\n    <h3>ACME</h3>\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\n      you feel up to the task of catching this international criminal, then please...</p>\n    Enter Name:<input type=\"text\">\n    <button>Begin Case!</button>\n  </form>\n\n\n  <h6>Where in the World is Carmen Sandiego!</h6>\n\n\n<!-- <home></home> -->"
>>>>>>> master

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

<<<<<<< HEAD
module.exports = "  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device ::before,\n  .device ::after {\n   box-sizing: border-box;\n   display: block;\n  }\n  ​\n  .device {\n   position: relative;\n   transform: scale(1);\n   z-index: 1;\n  }\n  ​\n  .device .device-frame {\n   z-index: 1;\n  }\n  ​\n  .device .device-content {\n   background-color: #fff;\n   background-position: center center;\n   background-size: cover;\n   -o-object-fit: cover;\n      object-fit: cover;\n   position: relative;\n   \n  }\n  ​\n  \n    .device-macbook-pro {\n    height: 444px;\n    width: 740px;\n    }\n  .device-macbook-pro .device-frame {\n    background: #0d0d0d;\n    border-radius: 20px;\n    box-shadow: inset 0 0 0 2px #c8cacb;\n    height: 650px;\n    margin: 0 auto;\n    padding: 29px 19px 39px 19px;\n    position: relative;\n    width: 1000px;\n   }\n  .device-macbook-pro .device-frame::after {\n    background: #272626;\n    border-radius: 0 0 20px 20px;\n    bottom: 2px;\n    content: \"\";\n    height: 26px;\n    left: 2px;\n    position: absolute;\n    width: 996px;\n   }\n  .device-macbook-pro .device-frame::before {\n    bottom: 10px;\n    color: #c8cacb;\n    content: \"MacBook Pro\";\n    font-size: 12px;\n    height: 16px;\n    left: 50%;\n    line-height: 16px;\n    margin-left: -100px;\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    z-index: 1;\n    font-family: 'Roboto', sans-serif;\n   }\n  .device-macbook-pro .device-content {\n    border: 2px solid #121212;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n   }\n  .device-macbook-pro .device-power {\n    background: #e2e3e4;\n    border: solid #d5d6d8;\n    border-radius: 2px 2px 0 0;\n    border-width: 2px 4px 0 4px;\n    height: 20px;\n    margin-top: -10px;\n    position: relative;\n    width: 1050px;\n    z-index: 9;\n   }\n  .device-macbook-pro .device-power::after,\n   .device-macbook-pro .device-power::before {\n    content: \"\";\n    position: absolute;\n   }\n  .device-macbook-pro .device-power::after {\n    background: #d5d6d8;\n    border-radius: 0 0 10px 10px;\n    box-shadow: inset 0 0 4px 2px #babdbf;\n    height: 10px;\n    left: 50%;\n    margin-left: -60px;\n    top: -2px;\n    width: 120px;\n   }\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n  .device-macbook-pro.device-spacegray .device-frame {\n    box-shadow: inset 0 0 0 2px #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power {\n    background: #909496;\n    border-color: #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power::after {\n    background: #83878a;\n    box-shadow: inset 0 0 4px 2px #6a6d70;\n   }\n  .device-macbook-pro.device-spacegray .device-power::before {\n    background: #515456;\n    box-shadow: inset 0 -2px 6px 0 black;\n   }\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  /* Below delays the clue pop-up for 2seconds  */\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  .cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 300px;\n    height: 100px;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    \n}\n  .messageIcon {\n  color: green;\n}\n  .clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\n  form{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n  .clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 50%;\n  height: 100%;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  /* padding-top: 200px;\n  padding-left: 90px; */\n}\n  .background-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n  .time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n  .date {\n  color: white;\n  margin-top: 0px;\n}\n  .clueDiv {\n  background-color: white;\n  /* opacity: 0.75; */\n  border-radius: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex !important;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n}\n  .buttons {\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100%;\n}\n  button {\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .clueText {\n  font-size: 25px;\n}\n  .icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n  .material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFOzs7Ozs7R0FNQyxzQkFBc0I7R0FDdEIsY0FBYztFQUNmO0VBQ0E7O0dBRUMsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixVQUFVO0VBQ1g7RUFDQTs7R0FFQyxVQUFVO0VBQ1g7RUFDQTs7R0FFQyxzQkFBc0I7R0FDdEIsa0NBQWtDO0dBQ2xDLHNCQUFzQjtHQUN0QixvQkFBaUI7TUFBakIsaUJBQWlCO0dBQ2pCLGtCQUFrQjs7RUFFbkI7RUFDQTs7O0lBR0UsYUFBYTtJQUNiLFlBQVk7SUFDWjtFQUVEO0lBQ0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7R0FDYjtFQUVBO0lBQ0MsWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUNBQWlDO0dBQ2xDO0VBRUE7SUFDQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7R0FDcEI7RUFFQTtJQUNDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtHQUNYO0VBRUE7O0lBRUMsV0FBVztJQUNYLGtCQUFrQjtHQUNuQjtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7R0FDYjtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7R0FDZDtFQUVBO0lBQ0MsbUNBQW1DO0dBQ3BDO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUJBQXFCO0dBQ3RCO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUNBQXFDO0dBQ3RDO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0dBQ3JDO0VBRUQ7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCw2SUFBNkk7SUFDN0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFFRiwrQ0FBK0M7RUFDL0MsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtFQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0VBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2QjtFQUNBO0VBQ0UsWUFBWTtBQUNkO0VBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztFQUVBO0VBQ0UsNENBQTRDO0FBQzlDO0VBRUE7RUFDRSwwRkFBMEY7RUFDMUYsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDO3VCQUNxQjtBQUN2QjtFQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtFQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7RUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0VBRUE7RUFDRSxlQUFlO0FBQ2pCO0VBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7RUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuZGV2aWNlLFxuICAuZGV2aWNlOjpiZWZvcmUsXG4gIC5kZXZpY2U6OmFmdGVyLFxuICAuZGV2aWNlICosXG4gIC5kZXZpY2UgOjpiZWZvcmUsXG4gIC5kZXZpY2UgOjphZnRlciB7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAg4oCLXG4gIC5kZXZpY2Uge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgIHotaW5kZXg6IDE7XG4gIH1cbiAg4oCLXG4gIC5kZXZpY2UgLmRldmljZS1mcmFtZSB7XG4gICB6LWluZGV4OiAxO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIC5kZXZpY2UtY29udGVudCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICB9XG4gIOKAi1xuICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIHtcbiAgICBoZWlnaHQ6IDQ0NHB4O1xuICAgIHdpZHRoOiA3NDBweDtcbiAgICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZSB7XG4gICAgYmFja2dyb3VuZDogIzBkMGQwZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYzhjYWNiO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjlweCAxOXB4IDM5cHggMTlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzI3MjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xuICAgIGJvdHRvbTogMnB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDk5NnB4O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWU6OmJlZm9yZSB7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjYzhjYWNiO1xuICAgIGNvbnRlbnQ6IFwiTWFjQm9vayBQcm9cIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtY29udGVudCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzEyMTIxMjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTJlM2U0O1xuICAgIGJvcmRlcjogc29saWQgI2Q1ZDZkODtcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICBib3JkZXItd2lkdGg6IDJweCA0cHggMCA0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHotaW5kZXg6IDk7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIsXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkNWQ2ZDg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjYmFiZGJmO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgIHRvcDogLTJweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTBhM2E3O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxODBweCAxODBweC8gMCAwIDEycHggMTJweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgIzQ3NGE0ZDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgbGVmdDogLTRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwNTBweDs7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLWZyYW1lIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICAgIGJhY2tncm91bmQ6ICM5MDk0OTY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzY3YTdkO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAycHggIzZhNmQ3MDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzUxNTQ1NjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gICB9XG4gIFxuICBib2R5IHtcbiAgICBtYXJnaW46MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI2OTA2My9wZXhlbHMtcGhvdG8tMjY5MDYzLmpwZWc/YXV0bz1mb3JtYXQlMkNjb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbi8qIEJlbG93IGRlbGF5cyB0aGUgY2x1ZSBwb3AtdXAgZm9yIDJzZWNvbmRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbi5jbHVlUG9wVXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7IFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cbi5tZXNzYWdlSWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jbHVlVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbmZvcm17XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC43MTkpO1xufVxuXG4uY2x1ZU9uZVNjcmVlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5pY2xhcmlmaWVkLmNvbS9pbWFnZXMvbmV3cy82MDg4Ni8yOTIzODAvMjkyMzgwLTEyODAucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgLyogcGFkZGluZy10b3A6IDIwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7ICovXG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLCAuY2x1ZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNsdWVEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogb3BhY2l0eTogMC43NTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsdWVUZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"
=======
module.exports = ".locationLanding {\n  background-image: url('paris.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* Below delays the clue pop-up for 2seconds  */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 15vh;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\nform{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n.clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  border-radius: 20px;\n  width: 50%;\n  height: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n}\n.time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n.time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n.date {\n  color: white;\n  margin-top: 0px;\n}\n.clueDiv {\n  background-color: white;\n  opacity: 0.75;\n  border-radius: 20px;\n  height: 300px;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 75px;\n}\n.clueText {\n  font-size: 25px;\n}\n.icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n.material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: rgb(206, 35, 35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsK0NBQStDO0FBQy9DLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUMxRDtFQUNFLG1CQUFtQjtJQUNqQixTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsOEJBQThCO0lBRTlCLHNCQUFzQjtJQUN0QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSwwRkFBMEY7RUFDMUYsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjEvbG9jYXRpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYXRpb25MYW5kaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9wYXJpcy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHdpZHRoOiA5NXZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIEJlbG93IGRlbGF5cyB0aGUgY2x1ZSBwb3AtdXAgZm9yIDJzZWNvbmRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbi5jbHVlUG9wVXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7IFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuLm1lc3NhZ2VJY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNsdWVUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuZm9ybXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjcxOSk7XG59XG5cbi5jbHVlT25lU2NyZWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LmljbGFyaWZpZWQuY29tL2ltYWdlcy9uZXdzLzYwODg2LzI5MjM4MC8yOTIzODAtMTI4MC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpbWUsIC5jbHVlRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiA3NXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2x1ZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLmNsdWVUZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMzUsIDM1KTtcbn0iXX0= */"
>>>>>>> master

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = " <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<body>\n\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n          <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n            <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n              <p class=\"clueText\">Hi i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n            </div>\n\n\n<!-- /*Include Clock*/ -->\n<!-- <span>CLOCK</span>\n<div class=\"locationLanding\">\n    <div class=\"cluePopUp\" *ngFor=\"let clue of clues, \">\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n      <p>\n       {{clue.city}}<button>Let's Party!</button>\n      </p> -->\n      \n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"flight\" class=\"flyOut\">  \n            <form action=\"\">Fly Out\n              <input type=\"radio\"> City 1\n              <input type=\"radio\"> City 2\n              <input type=\"radio\"> City 3\n              <button>Fly Out!</button>\n            </form>\n          <button (click)=\"goBack()\">Go Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n  </div>\n</section>"
=======
module.exports = "\n<p>\n  location1 works!\n</p>\n\n<<<<<<< HEAD\n<!--  /*Include Clock*/ -->\n=======\n\n<!-- /*Include Clock*/ -->\n<span>CLOCK</span>\n>>>>>>> upstream/master\n<div class=\"locationLanding\">\n    <div class=\"cluePopUp\" *ngFor=\"let clue of clues, \">\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n      <p>\n       {{clue.city}}<button>Let's Party!</button>\n      </p>\n      \n    </div>\n  </div>\n  <form action=\"\">Fly Out\n  <input type=\"radio\"> City 1\n  <input type=\"radio\"> City 2\n  <input type=\"radio\"> City 3\n  <button>Fly Out!</button>\n  </form>\n\n <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n\n<section class=\"clueOneScreen\">\n    <p class=\"time\">12:01</p>\n    <p class=\"date\">Friday, June 28</p>\n  <div class=\"clueDiv\">\n    <p class=\"clueText\">This is the capital of Russia</p>\n  </div>\n  <div class=\"icons\">\n    <i class=\"material-icons\">message</i>\n    <i class=\"material-icons\">airplanemode_active</i>\n    <!-- <button class=\"clueIcon\"></button>\n    <button class=\"planeIcon\"></button> -->\n  </div>\n</section>\n"
>>>>>>> master

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
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.large;
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

<<<<<<< HEAD
module.exports = ".device,\n.device::before,\n.device::after,\n.device *,\n.device ::before,\n.device ::after {\n box-sizing: border-box;\n display: block;\n}\n​\n.device {\n position: relative;\n transform: scale(1);\n z-index: 1;\n}\n​\n.device .device-frame {\n z-index: 1;\n}\n​\n.device .device-content {\n background-color: #fff;\n background-position: center center;\n background-size: cover;\n -o-object-fit: cover;\n    object-fit: cover;\n position: relative;\n \n}\n​\n\n  .device-macbook-pro {\n  height: 444px;\n  width: 740px;\n  }\n.device-macbook-pro .device-frame {\n  background: #0d0d0d;\n  border-radius: 20px;\n  box-shadow: inset 0 0 0 2px #c8cacb;\n  height: 650px;\n  margin: 0 auto;\n  padding: 29px 19px 39px 19px;\n  position: relative;\n  width: 1000px;\n }\n.device-macbook-pro .device-frame::after {\n  background: #272626;\n  border-radius: 0 0 20px 20px;\n  bottom: 2px;\n  content: \"\";\n  height: 26px;\n  left: 2px;\n  position: absolute;\n  width: 996px;\n }\n.device-macbook-pro .device-frame::before {\n  bottom: 10px;\n  color: #c8cacb;\n  content: \"MacBook Pro\";\n  font-size: 12px;\n  height: 16px;\n  left: 50%;\n  line-height: 16px;\n  margin-left: -100px;\n  position: absolute;\n  text-align: center;\n  width: 200px;\n  z-index: 1;\n  font-family: 'Roboto', sans-serif;\n }\n.device-macbook-pro .device-content {\n  border: 2px solid #121212;\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n }\n.device-macbook-pro .device-power {\n  background: #e2e3e4;\n  border: solid #d5d6d8;\n  border-radius: 2px 2px 0 0;\n  border-width: 2px 4px 0 4px;\n  height: 20px;\n  margin-top: -10px;\n  position: relative;\n  width: 1050px;\n  z-index: 9;\n }\n.device-macbook-pro .device-power::after,\n .device-macbook-pro .device-power::before {\n  content: \"\";\n  position: absolute;\n }\n.device-macbook-pro .device-power::after {\n  background: #d5d6d8;\n  border-radius: 0 0 10px 10px;\n  box-shadow: inset 0 0 4px 2px #babdbf;\n  height: 10px;\n  left: 50%;\n  margin-left: -60px;\n  top: -2px;\n  width: 120px;\n }\n.device-macbook-pro .device-power::before {\n  background: #a0a3a7;\n  border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n  box-shadow: inset 0 -2px 6px 0 #474a4d;\n  height: 18px;\n  left: -4px;\n  margin: 0 auto;\n  top: 15px;\n  width: 1050px;;\n }\n.device-macbook-pro.device-spacegray .device-frame {\n  box-shadow: inset 0 0 0 2px #767a7d;\n }\n.device-macbook-pro.device-spacegray .device-power {\n  background: #909496;\n  border-color: #767a7d;\n }\n.device-macbook-pro.device-spacegray .device-power::after {\n  background: #83878a;\n  box-shadow: inset 0 0 4px 2px #6a6d70;\n }\n.device-macbook-pro.device-spacegray .device-power::before {\n  background: #515456;\n  box-shadow: inset 0 -2px 6px 0 black;\n }\nbody {\n  margin:0;\n  height: 100%;\n  width: 100%;\n  background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* Below delays the clue pop-up for 2seconds  */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\nborder-radius: 10px;\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:0.5;\n  animation-duration:0.5;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 300px;\n  height: 100px;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  \n}\n.clock {\n  position: relative;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-20%);\n  font-size: 30px;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 0;\n  line-height: 0;\n}\n.date {\n  font-size: 20px;\n  font-weight: 400;\n  color: white;\n}\n.messageIcon {\ncolor: green;\n}\n.clueTop {\ndisplay: flex;\njustify-content: space-between;\n}\nform{\nbackground-color: rgba(247, 241, 233, 0.719);\n}\n.clueOneScreen {\nbackground-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\nbackground-repeat: no-repeat;\nbackground-size: cover;\nbackground-color: lightblue;\nwidth: 50%;\nheight: 100%;\ndisplay: flex !important;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nfont-family: 'Roboto', sans-serif;\n/* padding-top: 200px;\npadding-left: 90px; */\n}\n.background-image {\nheight: 100%;\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n.time, .clueDiv {\ndisplay: flex;\njustify-content: center;\n}\n.time {\nfont-size: 75px;\nmargin: 30px;\nmargin-bottom: 0px;\ncolor: white;\n}\n.date {\ncolor: white;\nmargin-top: 0px;\n}\n.clueDiv {\nbackground-color: white;\n/* opacity: 0.75; */\nborder-radius: 20px;\nheight: 300px;\nwidth: 300px;\ndisplay: flex !important;\njustify-content: space-evenly;\nalign-items: center;\nflex-direction: column;\n}\n.buttons {\ndisplay: flex !important;\nflex-direction: row;\njustify-content: space-evenly;\nwidth: 100%;\n}\nbutton {\nborder-radius: 10px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n.clueText {\nfont-size: 25px;\n}\n.icons {\ndisplay: flex;\njustify-content: space-around;\nborder-radius: 10px;\nwidth: 90%;\nheight: 70px;\nmargin-top: 125px;\nmargin-bottom: 20px;\nalign-items: center;\nbackground-color: white;\nopacity: 0.75;\n}\n.material-icons {\nwidth: 10%;\nheight: 75%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Q0FNQyxzQkFBc0I7Q0FDdEIsY0FBYztBQUNmO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxzQkFBc0I7Q0FDdEIsa0NBQWtDO0NBQ2xDLHNCQUFzQjtDQUN0QixvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjs7QUFFbkI7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLFlBQVk7RUFDWjtBQUVEO0VBQ0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjtBQUVBO0VBQ0MsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUNBQWlDO0NBQ2xDO0FBRUE7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFFQTtFQUNDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtDQUNYO0FBRUE7O0VBRUMsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjtBQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7Q0FDYjtBQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7Q0FDZDtBQUVBO0VBQ0MsbUNBQW1DO0NBQ3BDO0FBRUE7RUFDQyxtQkFBbUI7RUFDbkIscUJBQXFCO0NBQ3RCO0FBRUE7RUFDQyxtQkFBbUI7RUFDbkIscUNBQXFDO0NBQ3RDO0FBRUE7RUFDQyxtQkFBbUI7RUFDbkIsb0NBQW9DO0NBQ3JDO0FBRUQ7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCw2SUFBNkk7RUFDN0ksNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQSwrQ0FBK0M7QUFDL0MsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0FBQ0EsbUJBQW1CO0VBQ2pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFFbEMsMEJBQTBCOztFQUUxQixvQ0FBb0M7RUFFcEMsNEJBQTRCOztFQUU1Qiw4QkFBOEI7RUFFOUIsc0JBQXNCO0VBQ3RCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCO0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFFQTtBQUNBLDBGQUEwRjtBQUMxRiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixVQUFVO0FBQ1YsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixpQ0FBaUM7QUFDakM7cUJBQ3FCO0FBQ3JCO0FBRUE7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CO0FBRUE7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCO0FBRUE7QUFDQSxlQUFlO0FBQ2YsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixXQUFXO0FBQ1g7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjtBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBRUE7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1gsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldmljZSxcbi5kZXZpY2U6OmJlZm9yZSxcbi5kZXZpY2U6OmFmdGVyLFxuLmRldmljZSAqLFxuLmRldmljZSA6OmJlZm9yZSxcbi5kZXZpY2UgOjphZnRlciB7XG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcbiBkaXNwbGF5OiBibG9jaztcbn1cbuKAi1xuLmRldmljZSB7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gei1pbmRleDogMTtcbn1cbuKAi1xuLmRldmljZSAuZGV2aWNlLWZyYW1lIHtcbiB6LWluZGV4OiAxO1xufVxu4oCLXG4uZGV2aWNlIC5kZXZpY2UtY29udGVudCB7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gb2JqZWN0LWZpdDogY292ZXI7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuIFxufVxu4oCLXG5cbiAgLmRldmljZS1tYWNib29rLXBybyB7XG4gIGhlaWdodDogNDQ0cHg7XG4gIHdpZHRoOiA3NDBweDtcbiAgfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZSB7XG4gIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYzhjYWNiO1xuICBoZWlnaHQ6IDY1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjlweCAxOXB4IDM5cHggMTlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwMHB4O1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzI3MjYyNjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgYm90dG9tOiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgbGVmdDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5OTZweDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjpiZWZvcmUge1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjYzhjYWNiO1xuICBjb250ZW50OiBcIk1hY0Jvb2sgUHJvXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsZWZ0OiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1jb250ZW50IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzEyMTIxMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyIHtcbiAgYmFja2dyb3VuZDogI2UyZTNlNDtcbiAgYm9yZGVyOiBzb2xpZCAjZDVkNmQ4O1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgYm9yZGVyLXdpZHRoOiAycHggNHB4IDAgNHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDUwcHg7XG4gIHotaW5kZXg6IDk7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIsXG4gLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZDVkNmQ4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjYmFiZGJmO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB0b3A6IC0ycHg7XG4gIHdpZHRoOiAxMjBweDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYTBhM2E3O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTgwcHggMTgwcHgvIDAgMCAxMnB4IDEycHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxlZnQ6IC00cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDUwcHg7O1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjNzY3YTdkO1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlciB7XG4gIGJhY2tncm91bmQ6ICM5MDk0OTY7XG4gIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzgzODc4YTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAycHggIzZhNmQ3MDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCBibGFjaztcbiB9XG5cbmJvZHkge1xuICBtYXJnaW46MDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI2OTA2My9wZXhlbHMtcGhvdG8tMjY5MDYzLmpwZWc/YXV0bz1mb3JtYXQlMkNjb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQmVsb3cgZGVsYXlzIHRoZSBjbHVlIHBvcC11cCBmb3IgMnNlY29uZHMgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OjA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG59XG5cbi5jbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuLmRhdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2VJY29uIHtcbmNvbG9yOiBncmVlbjtcbn1cblxuLmNsdWVUb3Age1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9ybXtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC43MTkpO1xufVxuXG4uY2x1ZU9uZVNjcmVlbiB7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cuaWNsYXJpZmllZC5jb20vaW1hZ2VzL25ld3MvNjA4ODYvMjkyMzgwLzI5MjM4MC0xMjgwLnBuZyk7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbndpZHRoOiA1MCU7XG5oZWlnaHQ6IDEwMCU7XG5kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuLyogcGFkZGluZy10b3A6IDIwMHB4O1xucGFkZGluZy1sZWZ0OiA5MHB4OyAqL1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG5oZWlnaHQ6IDEwMCU7XG53aWR0aDogMTAwJTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLCAuY2x1ZURpdiB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbmZvbnQtc2l6ZTogNzVweDtcbm1hcmdpbjogMzBweDtcbm1hcmdpbi1ib3R0b206IDBweDtcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGUge1xuY29sb3I6IHdoaXRlO1xubWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2x1ZURpdiB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8qIG9wYWNpdHk6IDAuNzU7ICovXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xuaGVpZ2h0OiAzMDBweDtcbndpZHRoOiAzMDBweDtcbmRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idXR0b25zIHtcbmRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbndpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuYm9yZGVyLXJhZGl1czogMTBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbHVlVGV4dCB7XG5mb250LXNpemU6IDI1cHg7XG59XG5cbi5pY29ucyB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xud2lkdGg6IDkwJTtcbmhlaWdodDogNzBweDtcbm1hcmdpbi10b3A6IDEyNXB4O1xubWFyZ2luLWJvdHRvbTogMjBweDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbm9wYWNpdHk6IDAuNzU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG53aWR0aDogMTAlO1xuaGVpZ2h0OiA3NSU7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"
=======
module.exports = ".locationLanding {\n  /* background-image: url(../../assets/dubai.jpg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 25vh;\n}\n.clock {\n  position: relative;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-20%);\n  font-size: 30px;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 0;\n  line-height: 0;\n}\n.date {\n  font-size: 20px;\n  font-weight: 400;\n  color: white;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n}\n.clue {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 35vh;\n}\n.flyOut {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZHViYWkuanBnKTsgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogOTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDI1dmg7XG59XG4uY2xvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVzc2FnZUljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jbHVlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDM1dmg7XG59XG4uZmx5T3V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"
>>>>>>> master

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