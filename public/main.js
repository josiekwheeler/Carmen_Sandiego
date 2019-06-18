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
module.exports = "main{\r\n    height:900px;\r\n    width: 400px;\r\n    /* background: url(CarmenSandiegoLogo.jpg) no-repeat; */\r\n    background-size: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICBoZWlnaHQ6OTAwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoQ2FybWVuU2FuZGllZ29Mb2dvLmpwZykgbm8tcmVwZWF0OyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcclxufSJdfQ== */"
=======
module.exports = "body {\n   height: 100vh;\n   width: 100vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsWUFBWTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgIGhlaWdodDogMTAwdmg7XG4gICB3aWR0aDogMTAwdnc7XG59XG4iXX0= */"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\r\n\r\n<!-- <div>\r\n  <home></home> -->\r\n<!-- <landing-page></landing-page> -->\r\n<router-outlet></router-outlet>\r\n<!-- </div> -->\r\n\r\n<!-- <home></home> -->\r\n<!-- \r\n<landing-page></landing-page> -->\r\n<!-- \r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    <img src=\"{{this.photo}}\" alt=\"\">\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div> -->\r\n<!-- <location1></location1> -->\r\n<location3></location3>\r\n\r\n\r\n\r\n\r\n"
=======
module.exports = "\n\n<!-- <div></div> -->\n\n<body>\n<router-outlet></router-outlet>\n<!-- <location3></location3> -->\n</body>\n\n\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    <img src=\"{{this.photo}}\" alt=\"\">\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <location1></location1> -->\n<!-- <location3></location3> -->\n\n\n\n\n"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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

<<<<<<< HEAD
module.exports = "p {\r\n    font-size: 20px;\r\n    color: red;\r\n    text-align: center;\r\n}\r\n\r\n.fade {\r\n    -webkit-animation: fade 5s;\r\n            animation: fade 5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n    0% {opacity: 0}\r\n    50% {opacity: 1}\r\n}\r\n\r\n@keyframes fade {\r\n    0% {opacity: 0}\r\n    50% {opacity: 1}\r\n}\r\n\r\n/* The device with borders */\r\n\r\n.smartphone {\r\n    position: relative;\r\n    width: 320px;\r\n    height: 500px;\r\n    margin: auto;\r\n    border: 16px black solid;\r\n    border-top-width: 60px;\r\n    border-bottom-width: 60px;\r\n    border-radius: 36px;\r\n}\r\n\r\n/* The horizontal line on the top of the device */\r\n\r\n.smartphone:before {\r\n    content: '';\r\n    display: block;\r\n    width: 60px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #333;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* The circle on the bottom of the device */\r\n\r\n.littlebtn {\r\n    content: '';\r\n    display: block;\r\n    width: 35px;\r\n    height: 35px;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: -65px;\r\n    transform: translate(-50%, -50%);\r\n    background: #333;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* The screen (or content) of the device */\r\n\r\n.smartphone .content {\r\n    width: 320px;\r\n    height: 500px;\r\n    background: white;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\r\n    /* The device with borders */\r\n.smartphone {\r\n    position: relative;\r\n    width: 668px;\r\n    height: 700px;\r\n    margin: auto;\r\n    border: 16px black solid;\r\n    border-top-width: 60px;\r\n    border-bottom-width: 60px;\r\n    border-radius: 36px;\r\n  }\r\n  \r\n  /* The horizontal line on the top of the device */\r\n  .smartphone:before {\r\n    content: '';\r\n    display: block;\r\n    width: 60px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #333;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  /* The circle on the bottom of the device */\r\n  .littlebtn {\r\n    content: '';\r\n    display: block;\r\n    width: 35px;\r\n    height: 35px;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: -65px;\r\n    transform: translate(-50%, -50%);\r\n    background: #333;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  /* The screen (or content) of the device */\r\n  .smartphone .content {\r\n    width: 668px;\r\n    height: 700px;\r\n    background: white;\r\n    margin: -1px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    /* The laptop with borders */\r\n.smartphone {\r\n    transform-origin: 0 0;\r\n    transform: scale(.6) translate(-50%); \r\n    left: 50%;\r\n    position: absolute;\r\n    width: 1366px;\r\n    height: 800px;\r\n    border-radius: 6px;\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 24px 24px 80px;\r\n    /* background-color: black; */\r\n    border-top-width: none;\r\n    border-bottom-width: none\r\n  \r\n  }\r\n  \r\n  /* The keyboard of the laptop */\r\n  .littlebtn {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 1600px;\r\n    height: 60px;\r\n    margin: 80px 0 0 -110px;\r\n    background: black;\r\n    border-radius: 6px;\r\n    transform: none;\r\n    left: 0;\r\n    bottom: 0;\r\n  }\r\n  \r\n  /* The top of the keyboard */\r\n  .smartphone:before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 60%;\r\n    height: 10px;\r\n    bottom: -110px;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n    background: #f1f1f1;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    z-index: 1;\r\n    top: 95%;\r\n  }\r\n  \r\n  /* The screen (or content) of the device */\r\n  .smartphone .content {\r\n    width: 1366px;\r\n    height: 800px;\r\n    overflow: hidden;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUFrQjtZQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBSEE7SUFDSSxJQUFJLFVBQVU7SUFDZCxLQUFLLFVBQVU7QUFDbkI7O0FBR0EsNEJBQTRCOztBQUM1QjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUUsaURBQWlEOztBQUNuRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQ0FBMkM7O0FBQ3pDO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVFLDBDQUEwQzs7QUFDNUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBLGlEQUFpRDtFQUNqRDtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQSwyQ0FBMkM7RUFDM0M7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEI7O0VBRUY7O0VBRUEsK0JBQStCO0VBQy9CO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7RUFDWDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixRQUFRO0VBQ1Y7O0VBRUEsMENBQTBDO0VBQzFDO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSA1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIDAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG59XHJcblxyXG5cclxuLyogVGhlIGRldmljZSB3aXRoIGJvcmRlcnMgKi9cclxuLnNtYXJ0cGhvbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMTZweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcclxufVxyXG4gIFxyXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXHJcbi5zbWFydHBob25lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAgXHJcbi8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXHJcbiAgLmxpdHRsZWJ0biB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IC02NXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiAgXHJcbiAgLyogVGhlIHNjcmVlbiAob3IgY29udGVudCkgb2YgdGhlIGRldmljZSAqL1xyXG4uc21hcnRwaG9uZSAuY29udGVudCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAvKiBUaGUgZGV2aWNlIHdpdGggYm9yZGVycyAqL1xyXG4uc21hcnRwaG9uZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjY4cHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxNnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogNjBweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xyXG4gIC5zbWFydHBob25lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgY2lyY2xlIG9uIHRoZSBib3R0b20gb2YgdGhlIGRldmljZSAqL1xyXG4gIC5saXR0bGVidG4ge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiAtNjVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNjcmVlbiAob3IgY29udGVudCkgb2YgdGhlIGRldmljZSAqL1xyXG4gIC5zbWFydHBob25lIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA2NjhweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLyogVGhlIGxhcHRvcCB3aXRoIGJvcmRlcnMgKi9cclxuLnNtYXJ0cGhvbmUge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNikgdHJhbnNsYXRlKC01MCUpOyBcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzY2cHg7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDI0cHggMjRweCA4MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogbm9uZVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAvKiBUaGUga2V5Ym9hcmQgb2YgdGhlIGxhcHRvcCAqL1xyXG4gIC5saXR0bGVidG4ge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHRvcCBvZiB0aGUga2V5Ym9hcmQgKi9cclxuICAuc21hcnRwaG9uZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IC0xMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiA5NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cclxuICAuc21hcnRwaG9uZSAuY29udGVudCB7XHJcbiAgICB3aWR0aDogMTM2NnB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn0iXX0= */"
=======
module.exports = "\n  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device *::before,\n  .device *::after {\n    box-sizing: border-box;\n    display: flex;\n  }\n\n  section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .device {\n    position: relative;\n    transform: scale(1);\n    z-index: 1;\n  }\n\n  .device .device-frame {\n    z-index: 1;\n  }\n\n  .device .device-content {\n    background-position: center center;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .device-macbook-pro {\n    height: 100%;\n    width: 62%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    }\n\n  .device-macbook-pro .device-frame {\n      background: #0d0d0d;\n      border-radius: 20px;\n      box-shadow: inset 0 0 0 2px #c8cacb;\n      height: 650px;\n      margin: 0 auto;\n      padding: 29px 19px 39px 19px;\n      position: relative;\n      width: 1000px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n     }\n\n  .device-macbook-pro .device-frame::after {\n      background: #272626;\n      border-radius: 0 0 20px 20px;\n      bottom: 2px;\n      content: \"\";\n      height: 26px;\n      left: 2px;\n      position: absolute;\n      width: 996px;\n     }\n\n  .device-macbook-pro .device-frame::before {\n      bottom: 10px;\n      color: #c8cacb;\n      content: \"MacBook Pro\";\n      font-size: 12px;\n      height: 16px;\n      left: 56%;\n      line-height: 16px;\n      margin-left: -100px;\n      position: absolute;\n      text-align: center;\n      width: 200px;\n      z-index: 1;\n      font-family: 'Roboto', sans-serif;\n    }\n\n  .device-macbook-pro .device-content {\n      border-radius: 2px;\n      height: 360px;\n      width: 576px;\n    }\n\n  .device-macbook-pro .device-power {\n      background: #e2e3e4;\n      border: solid #d5d6d8;\n      border-radius: 2px 2px 0 0;\n      border-width: 2px 4px 0 4px;\n      height: 20px;\n      margin-top: -10px;\n      position: relative;\n      width: 1050px;\n      z-index: 9;\n     }\n\n  .device-macbook-pro .device-power::after,\n    .device-macbook-pro .device-power::before {\n      content: \"\";\n      position: absolute;\n    }\n\n  .device-macbook-pro .device-power::after {\n      background: #d5d6d8;\n      border-radius: 0 0 10px 10px;\n      box-shadow: inset 0 0 4px 2px #babdbf;\n      height: 10px;\n      left: 50%;\n      margin-left: -60px;\n      top: -2px;\n      width: 120px;\n    }\n\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n\n  .device-macbook-pro.device-spacegray .device-frame {\n      box-shadow: inset 0 0 0 2px #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power {\n      background: #909496;\n      border-color: #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::after {\n      background: #83878a;\n      box-shadow: inset 0 0 4px 2px #6a6d70;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::before {\n      background: #515456;\n      box-shadow: inset 0 -2px 6px 0 black;\n    }\n\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  /* \n.fade {\n    animation: fade 5s;\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n} */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n} */\n\n  /* The circle on the bottom of the device\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n} */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n} */\n\n  /* \n@media only screen and (min-width: 768px) { */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  } */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n   */\n\n  /* The circle on the bottom of the device */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n   */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 50%;\n    height: 40%;\n    border-radius: 8px;\n    opacity: 0.7;\n  }\n}\n\n@media only screen and (min-width: 1024px) { */\n\n  /* The laptop with borders */\n\n  /* .smartphone {\n    transform-origin: 0 0;\n    transform: scale(.7) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px; */\n\n  /* background-color: black;\n    border-top-width: none;\n    border-bottom-width: none;\n    margin-top: 150px;\n  } */\n\n  /* The keyboard of the laptop */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  } */\n\n  /* The top of the keyboard */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  } */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  } */\n\n  .content {\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 8px;\n    opacity: 0.7;\n    width: 80%;\n    height: 70%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n  }\n\n  button {\n    font-family: 'Roboto', sans-serif;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOzs7Ozs7SUFNRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsbUNBQW1DO01BQ25DLGFBQWE7TUFDYixjQUFjO01BQ2QsNEJBQTRCO01BQzVCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7S0FDcEI7O0VBRUE7TUFDQyxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsWUFBWTtLQUNiOztFQUVEO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLFlBQVk7TUFDWixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsaUNBQWlDO0lBQ25DOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFVBQVU7S0FDWDs7RUFFRDs7TUFFRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLDRCQUE0QjtNQUM1QixxQ0FBcUM7TUFDckMsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFlBQVk7SUFDZDs7RUFFRDtJQUNDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0dBQ2Q7O0VBRUM7TUFDRSxtQ0FBbUM7SUFDckM7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLHFDQUFxQztJQUN2Qzs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixvQ0FBb0M7SUFDdEM7O0VBR0Y7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCw2SUFBNkk7SUFDN0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7RUFFRjs7Ozs7Ozs7O0VBU0U7O0VBRUYsNEJBQTRCOztFQUM1Qjs7Ozs7Ozs7O0dBU0c7O0VBRUQsaURBQWlEOztFQUNuRDs7Ozs7Ozs7Ozs7R0FXRzs7RUFFSDs7Ozs7Ozs7Ozs7O0dBWUc7O0VBRUQsMENBQTBDOztFQUM1Qzs7OztHQUlHOztFQUVIOzZDQUM2Qzs7RUFFekMsNEJBQTRCOztFQUNoQzs7Ozs7Ozs7O0tBU0s7O0VBRUgsaURBQWlEOztFQUNqRDs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMkNBQTJDOztFQUMzQzs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMENBQTBDOztFQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXFCNEM7O0VBRTFDLDRCQUE0Qjs7RUFDaEM7Ozs7Ozs7Ozs7bUNBVW1DOztFQUMvQjs7OztLQUlDOztFQUVILCtCQUErQjs7RUFDL0I7Ozs7Ozs7Ozs7OztLQVlHOztFQUVILDRCQUE0Qjs7RUFDNUI7Ozs7Ozs7Ozs7Ozs7O0tBY0c7O0VBRUgsMENBQTBDOztFQUMxQzs7Ozs7OztLQU9HOztFQUVIO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUlBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlICo6OmJlZm9yZSxcbiAgLmRldmljZSAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmRldmljZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmRldmljZSAuZGV2aWNlLWZyYW1lIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZGV2aWNlIC5kZXZpY2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kZXZpY2UtbWFjYm9vay1wcm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNjIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNjOGNhY2I7XG4gICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyOXB4IDE5cHggMzlweCAxOXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIH1cbiAgICBcbiAgICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjcyNjI2O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA5OTZweDtcbiAgICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YmVmb3JlIHtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjYzhjYWNiO1xuICAgICAgY29udGVudDogXCJNYWNCb29rIFByb1wiO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbGVmdDogNTYlO1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgIHdpZHRoOiA1NzZweDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMmUzZTQ7XG4gICAgICBib3JkZXI6IHNvbGlkICNkNWQ2ZDg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICAgIGJvcmRlci13aWR0aDogMnB4IDRweCAwIDRweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwNTBweDtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Q1ZDZkODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjYmFiZGJmO1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNhMGEzYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMTA1MHB4OztcbiAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzkwOTQ5NjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjNmE2ZDcwO1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gICAgfVxuICBcbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY5MDYzL3BleGVscy1waG90by0yNjkwNjMuanBlZz9hdXRvPWZvcm1hdCUyQ2NvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbi8qIFxuLmZhZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZSA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICAwJSB7b3BhY2l0eTogMH1cbiAgICA1MCUge29wYWNpdHk6IDF9XG59XG4gKi9cblxuLyogVGhlIGRldmljZSB3aXRoIGJvcmRlcnMgKi9cbi8qIC5zbWFydHBob25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMTZweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbn0gKi9cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4vKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG4gIFxuLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2VcbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gKi9cbiAgXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbi8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0gKi9cblxuLyogXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG5cbiAgICAvKiBUaGUgZGV2aWNlIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjY4cHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxNnB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICB9ICovXG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbiAgLyogLnNtYXJ0cGhvbmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogLTFweDtcbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7ICovXG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH0gKi9cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9ICovXG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9ICovXG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfSAqL1xuXG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG5cblxuICAuZW1haWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIH1cbiJdfQ== */"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<!-- <section>\r\n  <div class=\"smartphone\" [ngClass]=\"isOn ? 'lockscreen' : 'none'\" [ngStyle]=\"{'background-color': (isOn ? 'white' : 'rgb(37, 37, 37)')} \">\r\n    <div >\r\n      <p>ACME HEADQUARTERS</p>\r\n      <div (click)=\"onFlip()\" class=\"littlebtn\"></div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n\r\n<section>\r\n  <div class=\"smartphone\">\r\n    <div class=\"fade\">\r\n      <div>\r\n        <p>ACME HEADQUARTERS</p>\r\n        <p>ACME HEADQUARTERS</p>\r\n        <p>ACME HEADQUARTERS</p>\r\n        <p>ACME HEADQUARTERS</p>\r\n        <p>ACME HEADQUARTERS</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"littlebtn\"></div>\r\n  </div>\r\n</section>"
=======
module.exports = "<body>\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n              <div class=\"email\">\n              <p>ACME HEADQUARTERS</p>\n              <p>Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n              <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n    </div>\n  </section>\n</body>\n  "
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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
<<<<<<< HEAD
=======
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c


var HomeComponent = /** @class */ (function () {
    // isOn: boolean = false;
<<<<<<< HEAD
    function HomeComponent() {
=======
    function HomeComponent(route) {
        this.route = route;
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
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
module.exports = "*{\r\n    background: red;\r\n    color: aliceblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59Il19 */"
=======
module.exports = "body {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 8px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.acme {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    font-size: 20px;\n}\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n}\n\n.beginCase {\n    height: 40%;\n    width: 90%;\n    border-radius: 8px;\n    color: black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.form {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n}\n\ninput {\n    width:300%;\n    border-radius: 8px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5pbWcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDc4LCA3OCk7XG59XG5cbi5hZ2VudEZvcm0ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hY21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYmVnaW5DYXNlIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbnRlck5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6MzAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4iXX0= */"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<main>\r\n  <h1>\r\n    Welcome to ACME Detective Agency!\r\n  </h1>\r\n\r\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\r\n  <button>Start</button>\r\n  <form action=\"\" #loadForm=\"ngForm\" >\r\n\r\n    <p>Pop up text when form loads.</p>\r\n    <h3>ACME</h3>\r\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\r\n      you feel up to the task of catching this international criminal, then please...</p>\r\n    Enter Name:<input type=\"text\">\r\n    <button>Begin Case!</button>\r\n  </form>\r\n\r\n\r\n  <h6>Where in the World is Carmen Sandiego!</h6>\r\n</main>"
=======
module.exports = "<!-- <main>\n  <h1>\n    Welcome to ACME Detective Agency!\n  </h1>\n\n<img src=\"../../assets/carmen-sandiego-1.png\" alt=\"\">\n  <button>Start</button>\n  <form action=\"\" #loadForm=\"ngForm\" >\n\n    <p>Pop up text when form loads.</p>\n    <h3>ACME</h3>\n    <p>Welcome to the ACME Detective Agency! Our main goal here at ACME is to caputre the elusive Carmen Sandiego! If\n      you feel up to the task of catching this international criminal, then please...</p>\n      Enter Name:<input type=\"text\">\n    <button>Begin Case!</button>\n  </form>\n\n\n  <h6>Where in the World is Carmen Sandiego!</h6>\n</main> -->\n<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">Start A New Case</button>\n</section>\n\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to caputre the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\">\n    <button class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\">Begin Case</button>\n  </form>\n</section>\n</body>\n"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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
<<<<<<< HEAD


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
=======
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
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
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
module.exports = ".locationLanding {\r\n  background-image: url('paris.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-color: lightblue;\r\n  width: 95vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* Below delays the clue pop-up for 2seconds  */\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.cluePopUp {\r\n  border-radius: 10px;\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n\r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n\r\n    -webkit-animation-duration:0.5;\r\n    animation-duration:0.5;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n    background-color: rgba(247, 241, 233, 0.801);\r\n    width: 80vw;\r\n    height: 15vh;\r\n}\r\n.messageIcon {\r\n  color: green;\r\n}\r\n.clueTop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\nform{\r\n  background-color: rgba(247, 241, 233, 0.719);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsK0NBQStDO0FBQy9DLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUMxRDtFQUNFLG1CQUFtQjtJQUNqQixTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsOEJBQThCO0lBRTlCLHNCQUFzQjtJQUN0QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9wYXJpcy5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgd2lkdGg6IDk1dnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiBCZWxvdyBkZWxheXMgdGhlIGNsdWUgcG9wLXVwIGZvciAyc2Vjb25kcyAgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbi5jbHVlUG9wVXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG4ubWVzc2FnZUljb24ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4uY2x1ZVRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG5mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC43MTkpO1xyXG59Il19 */"
=======
module.exports = "  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device ::before,\n  .device ::after {\n   box-sizing: border-box;\n   display: block;\n  }\n  ​\n  .device {\n   position: relative;\n   transform: scale(1);\n   z-index: 1;\n  }\n  ​\n  .device .device-frame {\n   z-index: 1;\n  }\n  ​\n  .device .device-content {\n   background-color: #fff;\n   background-position: center center;\n   background-size: cover;\n   -o-object-fit: cover;\n      object-fit: cover;\n   position: relative;\n   \n  }\n  ​\n  \n    .device-macbook-pro {\n    height: 444px;\n    width: 740px;\n    }\n  .device-macbook-pro .device-frame {\n    background: #0d0d0d;\n    border-radius: 20px;\n    box-shadow: inset 0 0 0 2px #c8cacb;\n    height: 650px;\n    margin: 0 auto;\n    padding: 29px 19px 39px 19px;\n    position: relative;\n    width: 1000px;\n   }\n  .device-macbook-pro .device-frame::after {\n    background: #272626;\n    border-radius: 0 0 20px 20px;\n    bottom: 2px;\n    content: \"\";\n    height: 26px;\n    left: 2px;\n    position: absolute;\n    width: 996px;\n   }\n  .device-macbook-pro .device-frame::before {\n    bottom: 10px;\n    color: #c8cacb;\n    content: \"MacBook Pro\";\n    font-size: 12px;\n    height: 16px;\n    left: 50%;\n    line-height: 16px;\n    margin-left: -100px;\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    z-index: 1;\n    font-family: 'Roboto', sans-serif;\n   }\n  .device-macbook-pro .device-content {\n    border: 2px solid #121212;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n   }\n  .device-macbook-pro .device-power {\n    background: #e2e3e4;\n    border: solid #d5d6d8;\n    border-radius: 2px 2px 0 0;\n    border-width: 2px 4px 0 4px;\n    height: 20px;\n    margin-top: -10px;\n    position: relative;\n    width: 1050px;\n    z-index: 9;\n   }\n  .device-macbook-pro .device-power::after,\n   .device-macbook-pro .device-power::before {\n    content: \"\";\n    position: absolute;\n   }\n  .device-macbook-pro .device-power::after {\n    background: #d5d6d8;\n    border-radius: 0 0 10px 10px;\n    box-shadow: inset 0 0 4px 2px #babdbf;\n    height: 10px;\n    left: 50%;\n    margin-left: -60px;\n    top: -2px;\n    width: 120px;\n   }\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n  .device-macbook-pro.device-spacegray .device-frame {\n    box-shadow: inset 0 0 0 2px #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power {\n    background: #909496;\n    border-color: #767a7d;\n   }\n  .device-macbook-pro.device-spacegray .device-power::after {\n    background: #83878a;\n    box-shadow: inset 0 0 4px 2px #6a6d70;\n   }\n  .device-macbook-pro.device-spacegray .device-power::before {\n    background: #515456;\n    box-shadow: inset 0 -2px 6px 0 black;\n   }\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  /* Below delays the clue pop-up for 2seconds  */\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  .cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 300px;\n    height: 100px;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    \n}\n  .messageIcon {\n  color: green;\n}\n  .clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\n  form{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n  .clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 50%;\n  height: 100%;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  /* padding-top: 200px;\n  padding-left: 90px; */\n}\n  .background-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n  .time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n  .date {\n  color: white;\n  margin-top: 0px;\n}\n  .clueDiv {\n  background-color: white;\n  opacity: 0.75;\n  border-radius: 20px;\n  height: 300px;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 75px;\n  flex-direction: column;\n}\n  .buttons {\n  display: flex;\n  flex-direction: row;\n}\n  .clueText {\n  font-size: 25px;\n}\n  .icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n  .material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: rgb(206, 35, 35);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFOzs7Ozs7R0FNQyxzQkFBc0I7R0FDdEIsY0FBYztFQUNmO0VBQ0E7O0dBRUMsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixVQUFVO0VBQ1g7RUFDQTs7R0FFQyxVQUFVO0VBQ1g7RUFDQTs7R0FFQyxzQkFBc0I7R0FDdEIsa0NBQWtDO0dBQ2xDLHNCQUFzQjtHQUN0QixvQkFBaUI7TUFBakIsaUJBQWlCO0dBQ2pCLGtCQUFrQjs7RUFFbkI7RUFDQTs7O0lBR0UsYUFBYTtJQUNiLFlBQVk7SUFDWjtFQUVEO0lBQ0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7R0FDYjtFQUVBO0lBQ0MsWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUNBQWlDO0dBQ2xDO0VBRUE7SUFDQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7R0FDcEI7RUFFQTtJQUNDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtHQUNYO0VBRUE7O0lBRUMsV0FBVztJQUNYLGtCQUFrQjtHQUNuQjtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7R0FDYjtFQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7R0FDZDtFQUVBO0lBQ0MsbUNBQW1DO0dBQ3BDO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUJBQXFCO0dBQ3RCO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUNBQXFDO0dBQ3RDO0VBRUE7SUFDQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0dBQ3JDO0VBRUQ7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCw2SUFBNkk7SUFDN0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFFRiwrQ0FBK0M7RUFDL0MsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtFQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0VBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2QjtFQUNBO0VBQ0UsWUFBWTtBQUNkO0VBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztFQUVBO0VBQ0UsNENBQTRDO0FBQzlDO0VBRUE7RUFDRSwwRkFBMEY7RUFDMUYsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDO3VCQUNxQjtBQUN2QjtFQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtFQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0VBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0VBRUE7RUFDRSxlQUFlO0FBQ2pCO0VBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7RUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMS9sb2NhdGlvbjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlIDo6YmVmb3JlLFxuICAuZGV2aWNlIDo6YWZ0ZXIge1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICB6LWluZGV4OiAxO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIC5kZXZpY2UtZnJhbWUge1xuICAgei1pbmRleDogMTtcbiAgfVxuICDigItcbiAgLmRldmljZSAuZGV2aWNlLWNvbnRlbnQge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBcbiAgfVxuICDigItcbiAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyB7XG4gICAgaGVpZ2h0OiA0NDRweDtcbiAgICB3aWR0aDogNzQwcHg7XG4gICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWUge1xuICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2M4Y2FjYjtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDI5cHggMTlweCAzOXB4IDE5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyNzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICBib3R0b206IDJweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMjZweDtcbiAgICBsZWZ0OiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5OTZweDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjpiZWZvcmUge1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogI2M4Y2FjYjtcbiAgICBjb250ZW50OiBcIk1hY0Jvb2sgUHJvXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjEyMTI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlciB7XG4gICAgYmFja2dyb3VuZDogI2UyZTNlNDtcbiAgICBib3JkZXI6IHNvbGlkICNkNWQ2ZDg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggNHB4IDAgNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB6LWluZGV4OiA5O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDVkNmQ4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAycHggI2JhYmRiZjtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2EwYTNhNztcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTgwcHggMTgwcHgvIDAgMCAxMnB4IDEycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDZweCAwICM0NzRhNGQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGxlZnQ6IC00cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMDUwcHg7O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICM3NjdhN2Q7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTA5NDk2O1xuICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM4NzhhO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMnB4ICM2YTZkNzA7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDZweCAwIGJsYWNrO1xuICAgfVxuICBcbiAgYm9keSB7XG4gICAgbWFyZ2luOjA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNjkwNjMvcGV4ZWxzLXBob3RvLTI2OTA2My5qcGVnP2F1dG89Zm9ybWF0JTJDY29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4vKiBCZWxvdyBkZWxheXMgdGhlIGNsdWUgcG9wLXVwIGZvciAyc2Vjb25kcyAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4uY2x1ZVBvcFVwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OjA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOyBcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC44MDEpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4ubWVzc2FnZUljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG5mb3Jte1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuNzE5KTtcbn1cblxuLmNsdWVPbmVTY3JlZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cuaWNsYXJpZmllZC5jb20vaW1hZ2VzL25ld3MvNjA4ODYvMjkyMzgwLzI5MjM4MC0xMjgwLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIC8qIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4OyAqL1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGltZSwgLmNsdWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IDc1cHg7XG4gIG1hcmdpbjogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jbHVlRGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jbHVlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMTI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDM1LCAzNSk7XG59XG4iXX0= */"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\r\n\r\n\r\n<!-- /*Include Clock*/ -->\r\n<div class=\"locationLanding\">\r\n    <div class=\"cluePopUp\" *ngFor=\"let clue of clues, \">\r\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\r\n          textsms\r\n          </i> MESSAGES   </span> <span>now</span></p> \r\n      <p>\r\n       {{clue.city}}<button>Let's Party!</button>\r\n      </p>\r\n      \r\n    </div>\r\n  </div>\r\n  <form action=\"\">Fly Out\r\n  <input type=\"radio\"> City 1\r\n  <input type=\"radio\"> City 2\r\n  <input type=\"radio\"> City 3\r\n  <button>Fly Out!</button>\r\n  </form>\r\n\r\n"
=======
module.exports = " <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<body>\n\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n          <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n            <div *ngIf=\"clueNumber === -1\" class=\"cluePopUp\" >\n              <p class=\"clueText\">Hi i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n            </div>\n\n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"flight\" class=\"flyOut\">  \n            <form action=\"\">Fly Out\n              <input type=\"radio\"> City 1\n              <input type=\"radio\"> City 2\n              <input type=\"radio\"> City 3\n              <button>Fly Out!</button>\n            </form>\n          <button (click)=\"goBack()\">Go Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n  </div>\n</section>"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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
<<<<<<< HEAD


var Location1Component = /** @class */ (function () {
    function Location1Component() {
    }
    Location1Component.prototype.ngOnInit = function () {
=======
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
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    };
    Location1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location1',
            template: __webpack_require__(/*! ./location1.component.html */ "./src/app/location1/location1.component.html"),
            styles: [__webpack_require__(/*! ./location1.component.css */ "./src/app/location1/location1.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"]])
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    ], Location1Component);
    return Location1Component;
}());

<<<<<<< HEAD
=======
// locationClues() {
//   while (this.localClues <= 3 ) {
//     let i = Math.floor((Math.random() * (this.clues.length - 1)));
//     console.log(i);
//     this.localClues.push(this.clues[i]);
//   }
//   console.log(this.localClues);
// }
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c


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

<<<<<<< HEAD
module.exports = "<p>\r\n  location2 works!\r\n</p>\r\n"
=======
module.exports = "<p>\n  location2 works!\n</p>\n"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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
module.exports = ".locationLanding {\r\n  /* background-image: url(../../assets/dubai.jpg); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-color: lightblue;\r\n  width: 95vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.cluePopUp {\r\n  border-radius: 10px;\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n\r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n\r\n    -webkit-animation-duration:0.5;\r\n    animation-duration:0.5;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n    background-color: rgba(247, 241, 233, 0.801);\r\n    width: 80vw;\r\n    height: 15vh;\r\n}\r\n.messageIcon {\r\n  color: green;\r\n}\r\n.clueTop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.clue {\r\n  border-radius: 10px;\r\n  background-color: rgba(247, 241, 233, 0.801);\r\n  width: 80vw;\r\n  height: 15vh;\r\n}\r\n.flyOut {\r\n  border-radius: 10px;\r\n  background-color: rgba(247, 241, 233, 0.801);\r\n  width: 80vw;\r\n  height: 15vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9kdWJhaS5qcGcpOyAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgd2lkdGg6IDk1dnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuLmNsdWVQb3BVcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOyBcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcbi5tZXNzYWdlSWNvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5jbHVlVG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2x1ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IDE1dmg7XHJcbn1cclxuLmZseU91dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"
=======
module.exports = ".locationLanding {\n  /* background-image: url(../../assets/dubai.jpg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 15vh;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n}\n.clue {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n}\n.flyOut {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uTGFuZGluZyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZHViYWkuanBnKTsgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogOTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuLmNsdWVQb3BVcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczsgXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG4ubWVzc2FnZUljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jbHVlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG59XG4uZmx5T3V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

/***/ }),

/***/ "./src/app/location3/location3.component.html":
/*!****************************************************!*\
  !*** ./src/app/location3/location3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<section>\r\n<!-- the ngStyle here is used to apply the random background image to the location -->\r\n<!-- the ngIf clueNumber starts at -1 since the ngFor below brings in array of clues and the index there starts at 0 -->\r\n<div class=\"locationLanding\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\r\n    <div *ngIf=\"clueNumber === -1\" class=\"cluePopUp\" >\r\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\r\n          textsms\r\n          </i> MESSAGES   </span> <span>now</span></p> \r\n     \r\n      <p >\r\n      Hi i am a Clue<button (click)=\"showClue()\">Let's Party!</button>\r\n      </p>\r\n      \r\n</div>\r\n<!-- ngFor to display all our beautiful clues with ngIf to only show 1 at a time -->\r\n  <div  *ngFor=\"let clue of localClues; index as i\" >\r\n    <div *ngIf=\"i === this.clueNumber\" class=\"clue\"> \r\n      <!-- this ngIf is if the clue is not a photo show the text clue -->\r\n    <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\r\n    <!-- this ng-template loads the photo if the clue is a photo -->\r\n    <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\r\n    <ng-template #flag> <p> She drop this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\r\n    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">\r\n        fingerprint\r\n        </i></button> <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">\r\n            airplanemode_active\r\n            </i> </button>\r\n          </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"flight\" class=\"flyOut\">  \r\n      <form action=\"\">Fly Out\r\n      <input type=\"radio\"> City 1\r\n      <input type=\"radio\"> City 2\r\n      <input type=\"radio\"> City 3\r\n      <button>Fly Out!</button>\r\n      </form>\r\n      <button (click)=\"goBack()\">Go Back</button>\r\n    </div>\r\n  </div>\r\n  </section>"
=======
module.exports = "<div class=\"locationLanding\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n    <div *ngIf=\"clueNumber === -1\" class=\"cluePopUp\" >\n       <p class=\"clueTop\"><span><i class=\"material-icons messageIcon\">\n          textsms\n          </i> MESSAGES   </span> <span>now</span></p> \n     \n      <p >\n      Hi i am a Clue<button (click)=\"showClue()\">Let's Party!</button>\n      </p>\n      \n</div>\n  <div  *ngFor=\"let clue of localClues; index as i\" >\n    <div *ngIf=\"i === this.clueNumber\" class=\"clue\"> \n    <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n    <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Search For More Clues <i class=\"material-icons\">\n        fingerprint\n        </i></button> <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">\n            airplanemode_active\n            </i> </button>\n          </div>\n  </div>\n\n  <div *ngIf=\"flight\" class=\"flyOut\">  \n      <form action=\"\">Fly Out\n      <input type=\"radio\"> City 1\n      <input type=\"radio\"> City 2\n      <input type=\"radio\"> City 3\n      <button>Fly Out!</button>\n      </form>\n      <button (click)=\"goBack()\">Go Back</button>\n    </div>\n  </div>"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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
<<<<<<< HEAD
        this.clueNumber = -1; // variable that is used for ngIfs to only show one pop-up message/clue at a time
        this.tempClueNumber = 0; // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
        this.flight = false; //  used to toggle flight screen or not
        this.nextCity = 'Detroit'; // what the next city location is
        this.currentCity = 'Dubai'; // current city
        this.randomPhoto = Math.floor((Math.random() * 9)); // used to get a random index number for background photo
        this.randomDetroitPhoto = Math.floor((Math.random() * 2)); // detroit only had 3 photos, this selects on of those
    }
    // method that increases clueNumber so we can show the next clue
    Location3Component.prototype.showClue = function () {
        this.clueNumber++;
        // console.log(this.clueNumber);
    };
    // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
=======
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
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    Location3Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
<<<<<<< HEAD
    // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
=======
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    Location3Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = !this.flight;
    };
<<<<<<< HEAD
    // increase clueNumber to display next clue
=======
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
    Location3Component.prototype.nextClue = function () {
        this.clueNumber++;
    };
    Location3Component.prototype.ngOnInit = function () {
        var _this = this;
<<<<<<< HEAD
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
        });
        // gets a random photo for clue and adds it to clues array
=======
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            // console.log(this.clues);
        });
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomDetroitPhoto].src.small });
            // console.log(this.clues);
        });
<<<<<<< HEAD
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.portrait;
            // console.log(this.photoURL);
            // below is used to shuffle clues array and save it as localClues array
            var currentIndex = _this.clues.length;
=======
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.portrait;
            // console.log(this.photoURL);
            var currentIndex = 3;
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c
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

<<<<<<< HEAD
=======
// locationClues() {
//   while (this.localClues <= 3 ) {
//     let i = Math.floor((Math.random() * (this.clues.length - 1)));
//     console.log(i);
//     this.localClues.push(this.clues[i]);
//   }
//   console.log(this.localClues);
// }
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c


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

<<<<<<< HEAD
module.exports = "<p>\r\n  location4 works!\r\n</p>\r\n"
=======
module.exports = "<p>\n  location4 works!\n</p>\n"
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c

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

<<<<<<< HEAD
module.exports = __webpack_require__(/*! C:\Users\jeffr\Documents\bootcamp\angular\Carmen_Sandiego\src\main.ts */"./src/main.ts");
=======
module.exports = __webpack_require__(/*! /Users/josiekwheeler/Documents/Carmen_Sandiego/src/main.ts */"./src/main.ts");
>>>>>>> d91983f700a2f806d4b1da89c199a934a25c711c


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map