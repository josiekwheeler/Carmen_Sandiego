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

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n"

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
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clock.service */ "./src/app/clock.service.ts");
/* harmony import */ var _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gameover/gameover.component */ "./src/app/gameover/gameover.component.ts");
















var appRoutes = [
    { path: "", redirectTo: "/landing-page", pathMatch: "full" },
    { path: "landing-page", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "gameover", component: _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_15__["GameoverComponent"] },
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
                _location4_location4_component__WEBPACK_IMPORTED_MODULE_9__["Location4Component"],
                _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_15__["GameoverComponent"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ClockService = /** @class */ (function () {
    function ClockService(router) {
        this.router = router;
        // clock is to display date and time on screen for user as current date and time
        this.clock = new Date();
        // timeLeft is to keep track of how much time user has left if 0, game is over
        this.timeLeft = 24;
    }
    ClockService.prototype.getTimeLeft = function () {
        return this.timeLeft;
    };
    ClockService.prototype.getTime = function () {
        return this.clock;
    };
    ClockService.prototype.onClue = function () {
        this.clock.setHours(this.clock.getHours() + 1);
        this.timeLeft--;
    };
    // onClue() {
    // return  this.time -= 1;
    // }
    ClockService.prototype.onFlight = function () {
        this.clock.setHours(this.clock.getHours() + 3);
        this.timeLeft -= 4;
    };
    ClockService.prototype.onWrong = function () {
        this.clock.setHours(this.clock.getHours() + 5);
        this.timeLeft -= 5;
    };
    ClockService.prototype.isTimeLeft = function () {
        if (this.timeLeft > 0) {
            return;
        }
        else {
            this.router.navigate(['/gameover']);
        }
    };
    ClockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClueService = /** @class */ (function () {
    function ClueService(http, router) {
        this.http = http;
        this.router = router;
        // array for the locations carmen visits
        this.locations = ['Paris', 'Moscow', 'Dubai', 'Detroit'];
        // locations that are locations that are similar to the real locations, each one has the same index number as the real, to make it easy to match
        this.redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Cleveland'];
        // just random wrong locations to use
        this.wrongLocations = ['London', 'Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Berlin', 'Rome', 'Warsaw'];
        // id is used to keep track of what location component we are in
        this.id = 1;
    }
    ClueService.prototype.getClues = function (nextCity) {
        return this.http.get("http://localhost:3000/clues/" + nextCity, { responseType: 'json' });
    };
    ClueService.prototype.rightChoice = function () {
        this.id++;
        console.log(this.id);
        this.router.navigate(["/location" + this.id]);
    };
    ClueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClueService);
    return ClueService;
}());



/***/ }),

/***/ "./src/app/gameover/gameover.component.css":
/*!*************************************************!*\
  !*** ./src/app/gameover/gameover.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVvdmVyL2dhbWVvdmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gameover/gameover.component.html":
/*!**************************************************!*\
  !*** ./src/app/gameover/gameover.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Oh No!</h3>\n\n<img src=\"giphy-4.gif\" alt=\"\">\n<p> Looks like Carmen got away Agent {{userName}}, better brush up on your skills so that you can capture her next next! </p>"

/***/ }),

/***/ "./src/app/gameover/gameover.component.ts":
/*!************************************************!*\
  !*** ./src/app/gameover/gameover.component.ts ***!
  \************************************************/
/*! exports provided: GameoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameoverComponent", function() { return GameoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var GameoverComponent = /** @class */ (function () {
    function GameoverComponent(userService) {
        this.userService = userService;
    }
    GameoverComponent.prototype.ngOnInit = function () {
        this.userName = this.userService.returnUserName();
        console.log(this.userName);
        this.userName = this.userService.userName;
    };
    ;
    GameoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gameover',
            template: __webpack_require__(/*! ./gameover.component.html */ "./src/app/gameover/gameover.component.html"),
            styles: [__webpack_require__(/*! ./gameover.component.css */ "./src/app/gameover/gameover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GameoverComponent);
    return GameoverComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device *::before,\n  .device *::after {\n    box-sizing: border-box;\n    display: flex;\n  }\n\n  section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .device {\n    position: relative;\n    transform: scale(1);\n    z-index: 1;\n  }\n\n  .device .device-frame {\n    z-index: 1;\n  }\n\n  .device .device-content {\n    background-position: center center;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .device-macbook-pro {\n    height: 100%;\n    width: 62%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    }\n\n  .device-macbook-pro .device-frame {\n      background: #0d0d0d;\n      border-radius: 20px;\n      box-shadow: inset 0 0 0 2px #c8cacb;\n      height: 650px;\n      margin: 0 auto;\n      padding: 29px 19px 39px 19px;\n      position: relative;\n      width: 1000px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n     }\n\n  .device-macbook-pro .device-frame::after {\n      background: #272626;\n      border-radius: 0 0 20px 20px;\n      bottom: 2px;\n      content: \"\";\n      height: 26px;\n      left: 2px;\n      position: absolute;\n      width: 996px;\n     }\n\n  .device-macbook-pro .device-frame::before {\n      bottom: 10px;\n      color: #c8cacb;\n      content: \"MacBook Pro\";\n      font-size: 12px;\n      height: 16px;\n      left: 56%;\n      line-height: 16px;\n      margin-left: -100px;\n      position: absolute;\n      text-align: center;\n      width: 200px;\n      z-index: 1;\n      font-family: 'Roboto', sans-serif;\n    }\n\n  .device-macbook-pro .device-content {\n      border-radius: 2px;\n      height: 360px;\n      width: 576px;\n    }\n\n  .device-macbook-pro .device-power {\n      background: #e2e3e4;\n      border: solid #d5d6d8;\n      border-radius: 2px 2px 0 0;\n      border-width: 2px 4px 0 4px;\n      height: 20px;\n      margin-top: -10px;\n      position: relative;\n      width: 1050px;\n      z-index: 9;\n     }\n\n  .device-macbook-pro .device-power::after,\n    .device-macbook-pro .device-power::before {\n      content: \"\";\n      position: absolute;\n    }\n\n  .device-macbook-pro .device-power::after {\n      background: #d5d6d8;\n      border-radius: 0 0 10px 10px;\n      box-shadow: inset 0 0 4px 2px #babdbf;\n      height: 10px;\n      left: 50%;\n      margin-left: -60px;\n      top: -2px;\n      width: 120px;\n    }\n\n  .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n\n  .device-macbook-pro.device-spacegray .device-frame {\n      box-shadow: inset 0 0 0 2px #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power {\n      background: #909496;\n      border-color: #767a7d;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::after {\n      background: #83878a;\n      box-shadow: inset 0 0 4px 2px #6a6d70;\n    }\n\n  .device-macbook-pro.device-spacegray .device-power::before {\n      background: #515456;\n      box-shadow: inset 0 -2px 6px 0 black;\n    }\n\n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  /* \n.fade {\n    animation: fade 5s;\n}\n\n@keyframes fade {\n    0% {opacity: 0}\n    50% {opacity: 1}\n}\n */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 320px;\n    height: 500px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n} */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n} */\n\n  /* The circle on the bottom of the device\n  .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n} */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 320px;\n    height: 500px;\n    background: white;\n} */\n\n  /* \n@media only screen and (min-width: 768px) { */\n\n  /* The device with borders */\n\n  /* .smartphone {\n    position: relative;\n    width: 668px;\n    height: 700px;\n    margin: auto;\n    border: 16px black solid;\n    border-top-width: 60px;\n    border-bottom-width: 60px;\n    border-radius: 36px;\n  } */\n\n  /* The horizontal line on the top of the device */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 5px;\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 10px;\n  }\n   */\n\n  /* The circle on the bottom of the device */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    bottom: -65px;\n    transform: translate(-50%, -50%);\n    background: #333;\n    border-radius: 50%;\n  }\n   */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 668px;\n    height: 700px;\n    background: white;\n    margin: -1px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 50%;\n    height: 40%;\n    border-radius: 8px;\n    opacity: 0.7;\n  }\n}\n\n@media only screen and (min-width: 1024px) { */\n\n  /* The laptop with borders */\n\n  /* .smartphone {\n    transform-origin: 0 0;\n    transform: scale(.7) translate(-50%); \n    left: 50%;\n    position: absolute;\n    width: 1366px;\n    height: 800px;\n    border-radius: 6px;\n    border-style: solid;\n    border-color: black;\n    border-width: 24px 24px 80px; */\n\n  /* background-color: black;\n    border-top-width: none;\n    border-bottom-width: none;\n    margin-top: 150px;\n  } */\n\n  /* The keyboard of the laptop */\n\n  /* .littlebtn {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1600px;\n    height: 60px;\n    margin: 80px 0 0 -110px;\n    background: black;\n    border-radius: 6px;\n    transform: none;\n    left: 0;\n    bottom: 0;\n  } */\n\n  /* The top of the keyboard */\n\n  /* .smartphone:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 10px;\n    bottom: -110px;\n    left: 50%;\n    transform: translate(-50%);\n    background: #f1f1f1;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 1;\n    top: 95%;\n  } */\n\n  /* The screen (or content) of the device */\n\n  /* .smartphone .content {\n    width: 1366px;\n    height: 800px;\n    overflow: hidden;\n    border: none;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  } */\n\n  .content {\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 8px;\n    opacity: 0.7;\n    width: 80%;\n    height: 70%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n  }\n\n  button {\n    font-family: 'Roboto', sans-serif;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOzs7Ozs7SUFNRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsbUNBQW1DO01BQ25DLGFBQWE7TUFDYixjQUFjO01BQ2QsNEJBQTRCO01BQzVCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7S0FDcEI7O0VBRUE7TUFDQyxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsWUFBWTtLQUNiOztFQUVEO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLFlBQVk7TUFDWixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsaUNBQWlDO0lBQ25DOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFVBQVU7S0FDWDs7RUFFRDs7TUFFRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLDRCQUE0QjtNQUM1QixxQ0FBcUM7TUFDckMsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFlBQVk7SUFDZDs7RUFFRDtJQUNDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0dBQ2Q7O0VBRUM7TUFDRSxtQ0FBbUM7SUFDckM7O0VBRUE7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UsbUJBQW1CO01BQ25CLHFDQUFxQztJQUN2Qzs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixvQ0FBb0M7SUFDdEM7O0VBR0Y7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCw2SUFBNkk7SUFDN0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7RUFFRjs7Ozs7Ozs7O0VBU0U7O0VBRUYsNEJBQTRCOztFQUM1Qjs7Ozs7Ozs7O0dBU0c7O0VBRUQsaURBQWlEOztFQUNuRDs7Ozs7Ozs7Ozs7R0FXRzs7RUFFSDs7Ozs7Ozs7Ozs7O0dBWUc7O0VBRUQsMENBQTBDOztFQUM1Qzs7OztHQUlHOztFQUVIOzZDQUM2Qzs7RUFFekMsNEJBQTRCOztFQUNoQzs7Ozs7Ozs7O0tBU0s7O0VBRUgsaURBQWlEOztFQUNqRDs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMkNBQTJDOztFQUMzQzs7Ozs7Ozs7Ozs7O0lBWUU7O0VBQ0YsMENBQTBDOztFQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXFCNEM7O0VBRTFDLDRCQUE0Qjs7RUFDaEM7Ozs7Ozs7Ozs7bUNBVW1DOztFQUMvQjs7OztLQUlDOztFQUVILCtCQUErQjs7RUFDL0I7Ozs7Ozs7Ozs7OztLQVlHOztFQUVILDRCQUE0Qjs7RUFDNUI7Ozs7Ozs7Ozs7Ozs7O0tBY0c7O0VBRUgsMENBQTBDOztFQUMxQzs7Ozs7OztLQU9HOztFQUVIO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUlBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlICo6OmJlZm9yZSxcbiAgLmRldmljZSAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmRldmljZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmRldmljZSAuZGV2aWNlLWZyYW1lIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZGV2aWNlIC5kZXZpY2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kZXZpY2UtbWFjYm9vay1wcm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNjIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNjOGNhY2I7XG4gICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyOXB4IDE5cHggMzlweCAxOXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIH1cbiAgICBcbiAgICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjcyNjI2O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA5OTZweDtcbiAgICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YmVmb3JlIHtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjYzhjYWNiO1xuICAgICAgY29udGVudDogXCJNYWNCb29rIFByb1wiO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbGVmdDogNTYlO1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgIHdpZHRoOiA1NzZweDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMmUzZTQ7XG4gICAgICBib3JkZXI6IHNvbGlkICNkNWQ2ZDg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICAgIGJvcmRlci13aWR0aDogMnB4IDRweCAwIDRweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwNTBweDtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIFxuICAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Q1ZDZkODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjYmFiZGJmO1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNhMGEzYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCA2cHggMCAjNDc0YTRkO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMTA1MHB4OztcbiAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzkwOTQ5NjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgICB9XG4gICAgXG4gICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDJweCAjNmE2ZDcwO1xuICAgIH1cbiAgICBcbiAgICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gICAgfVxuICBcbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY5MDYzL3BleGVscy1waG90by0yNjkwNjMuanBlZz9hdXRvPWZvcm1hdCUyQ2NvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbi8qIFxuLmZhZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZSA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICAwJSB7b3BhY2l0eTogMH1cbiAgICA1MCUge29wYWNpdHk6IDF9XG59XG4gKi9cblxuLyogVGhlIGRldmljZSB3aXRoIGJvcmRlcnMgKi9cbi8qIC5zbWFydHBob25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMTZweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbn0gKi9cbiAgXG4gIC8qIFRoZSBob3Jpem9udGFsIGxpbmUgb24gdGhlIHRvcCBvZiB0aGUgZGV2aWNlICovXG4vKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG4gIFxuLyogVGhlIGNpcmNsZSBvbiB0aGUgYm90dG9tIG9mIHRoZSBkZXZpY2VcbiAgLmxpdHRsZWJ0biB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAtNjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gKi9cbiAgXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbi8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0gKi9cblxuLyogXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG5cbiAgICAvKiBUaGUgZGV2aWNlIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjY4cHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxNnB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICB9ICovXG4gIFxuICAvKiBUaGUgaG9yaXpvbnRhbCBsaW5lIG9uIHRoZSB0b3Agb2YgdGhlIGRldmljZSAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBjaXJjbGUgb24gdGhlIGJvdHRvbSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTY1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgICovXG4gIC8qIFRoZSBzY3JlZW4gKG9yIGNvbnRlbnQpIG9mIHRoZSBkZXZpY2UgKi9cbiAgLyogLnNtYXJ0cGhvbmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2NjhweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogLTFweDtcbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7ICovXG5cbiAgICAvKiBUaGUgbGFwdG9wIHdpdGggYm9yZGVycyAqL1xuLyogLnNtYXJ0cGhvbmUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KSB0cmFuc2xhdGUoLTUwJSk7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzNjZweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyNHB4IDI0cHggODBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItdG9wLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH0gKi9cbiAgXG4gIC8qIFRoZSBrZXlib2FyZCBvZiB0aGUgbGFwdG9wICovXG4gIC8qIC5saXR0bGVidG4ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDgwcHggMCAwIC0xMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9ICovXG4gIFxuICAvKiBUaGUgdG9wIG9mIHRoZSBrZXlib2FyZCAqL1xuICAvKiAuc21hcnRwaG9uZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IC0xMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogOTUlO1xuICB9ICovXG4gIFxuICAvKiBUaGUgc2NyZWVuIChvciBjb250ZW50KSBvZiB0aGUgZGV2aWNlICovXG4gIC8qIC5zbWFydHBob25lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTM2NnB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfSAqL1xuXG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG5cblxuICAuZW1haWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<section>\n    <div class=\"device device-macbook-pro \">\n      <div class=\"device-frame\">\n        <div class=\"device-content\">\n              <div class=\"email\">\n              <p>ACME HEADQUARTERS</p>\n              <p>Agent {{userName}} we have just been informed that Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n              <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n    </div>\n</section>\n</body>\n  "

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var HomeComponent = /** @class */ (function () {
    // isOn: boolean = false;
    function HomeComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userName = this.userService.userName;
        console.log(this.userName);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = ".home {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 8px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.acme {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    font-size: 20px;\n}\n\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n}\n\n\n.beginCase {\n    height: 40%;\n    width: 90%;\n    border-radius: 8px;\n    color: black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.form {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n}\n\n\ninput {\n    width:300%;\n    border-radius: 8px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0FBQ2hGOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pMi53cC5jb20vd3d3LmthbHVzYWxvbmFuZHNwYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvYmxhY2stYnJpY2stYmFja2dyb3VuZC1rYWx1LXNhbG9uLWJsYWNrLWZyaWRheS1zYWxlcy13ZWIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5pbWcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDc4LCA3OCk7XG59XG5cbi5hZ2VudEZvcm0ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5hY21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYmVnaW5DYXNlIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbnRlck5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6MzAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">Start A New Case</button>\n</section>\n\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to caputre the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\" #agentForm=\"ngForm\" (ngSubmit)=\"setUserName(agentForm)\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\" [(ngModel)]=\"userName\"  name=\"userName\"/>\n    <button type=\"button\" class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"setUserName(agentForm)\">Begin Case</button>\n  </form>\n</section>\n</body>\n\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.shouldBeShown = true;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.toggleDisplay = function () {
        this.shouldBeShown = !this.shouldBeShown;
    };
    LandingPageComponent.prototype.setUserName = function (form) {
        console.log(form);
        this.userService.getUserName(form);
        console.log(this.userName);
        // return this.userName
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "\n  \n  \n  body {\n    margin:0;\n    height: 100%;\n    width: 100%;\n    background-image: url(https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n/* Below delays the clue pop-up for 2seconds  */\n  \n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 300px;\n    height: 100px;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    \n}\n  \n.messageIcon {\n  color: green;\n}\n  \n.clueTop {\n  display: flex;\n  justify-content: space-between;\n\n}\n  \nform{\n  background-color: rgba(247, 241, 233, 0.719);\n}\n  \n.clueOneScreen {\n  background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 100vw;\n  height: 100vh;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  /* padding-top: 200px;\n  padding-left: 90px; */\n}\n  \n.background-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n.time, .clueDiv {\n  display: flex;\n  justify-content: center;\n}\n  \n.time {\n  font-size: 75px;\n  margin: 30px;\n  margin-bottom: 0px;\n  color: white;\n}\n  \n.date {\n  color: white;\n  margin-top: 0px;\n}\n  \n.clueDiv {\n  background-color: white;\n  /* opacity: 0.75; */\n  border-radius: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex !important;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n}\n  \n.buttons {\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100%;\n}\n  \nbutton {\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  \n.clueText {\n  font-size: 25px;\n}\n  \n.icons {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  width: 90%;\n  height: 70px;\n  margin-top: 125px;\n  margin-bottom: 20px;\n  align-items: center;\n  background-color: white;\n  opacity: 0.75;\n}\n  \n.material-icons {\n  width: 10%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n  \n.thetime {\n  position: relative;\n  bottom: 70%;\n  display: flex;\n  flex-direction: column;\n}\n  \n.clock, .date {\n  color: white;\n  text-align: center;\n}\n  \n.clock {\n  font-size: 70px;\n}\n  \n.date {\n  font-size: 45px;\n}\n  \n@media only screen and (min-width: 1024px) {\n  .clueOneScreen {\n    background-image: url(https://www.iclarified.com/images/news/60886/292380/292380-1280.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: lightblue;\n    width: 50%;\n    height: 100%;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    /* padding-top: 200px;\n    padding-left: 90px; */\n  }\n  \n  .device,\n  .device::before,\n  .device::after,\n  .device *,\n  .device ::before,\n  .device ::after {\n   box-sizing: border-box;\n   /* display: block; */\n  }\n  ​\n  .device {\n   position: relative;\n   transform: scale(1);\n   z-index: 1;\n  }\n  ​\n  .device .device-frame {\n   z-index: 1;\n  }\n  ​\n  .device .device-content {\n   background-color: #fff;\n   background-position: center center;\n   background-size: cover;\n   -o-object-fit: cover;\n      object-fit: cover;\n   position: relative;\n   \n  }\n  ​\n  \n    .device-macbook-pro {\n    height: 444px;\n    width: 740px;\n    }\n   \n   .device-macbook-pro .device-frame {\n    background: #0d0d0d;\n    border-radius: 20px;\n    box-shadow: inset 0 0 0 2px #c8cacb;\n    height: 650px;\n    margin: 0 auto;\n    padding: 29px 19px 39px 19px;\n    position: relative;\n    width: 1000px;\n   }\n   \n   .device-macbook-pro .device-frame::after {\n    background: #272626;\n    border-radius: 0 0 20px 20px;\n    bottom: 2px;\n    content: \"\";\n    height: 26px;\n    left: 2px;\n    position: absolute;\n    width: 996px;\n   }\n   \n   .device-macbook-pro .device-frame::before {\n    bottom: 10px;\n    color: #c8cacb;\n    content: \"MacBook Pro\";\n    font-size: 12px;\n    height: 16px;\n    left: 50%;\n    line-height: 16px;\n    margin-left: -100px;\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    z-index: 1;\n    font-family: 'Roboto', sans-serif;\n   }\n   \n   .device-macbook-pro .device-content {\n    border: 2px solid #121212;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n   }\n   \n   .device-macbook-pro .device-power {\n    background: #e2e3e4;\n    border: solid #d5d6d8;\n    border-radius: 2px 2px 0 0;\n    border-width: 2px 4px 0 4px;\n    height: 20px;\n    margin-top: -10px;\n    position: relative;\n    width: 1050px;\n    z-index: 9;\n   }\n   \n   .device-macbook-pro .device-power::after,\n   .device-macbook-pro .device-power::before {\n    content: \"\";\n    position: absolute;\n   }\n   \n   .device-macbook-pro .device-power::after {\n    background: #d5d6d8;\n    border-radius: 0 0 10px 10px;\n    box-shadow: inset 0 0 4px 2px #babdbf;\n    height: 10px;\n    left: 50%;\n    margin-left: -60px;\n    top: -2px;\n    width: 120px;\n   }\n   \n   .device-macbook-pro .device-power::before {\n    background: #a0a3a7;\n    border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n    box-shadow: inset 0 -2px 6px 0 #474a4d;\n    height: 18px;\n    left: -4px;\n    margin: 0 auto;\n    top: 15px;\n    width: 1050px;;\n   }\n   \n   .device-macbook-pro.device-spacegray .device-frame {\n    box-shadow: inset 0 0 0 2px #767a7d;\n   }\n   \n   .device-macbook-pro.device-spacegray .device-power {\n    background: #909496;\n    border-color: #767a7d;\n   }\n   \n   .device-macbook-pro.device-spacegray .device-power::after {\n    background: #83878a;\n    box-shadow: inset 0 0 4px 2px #6a6d70;\n   }\n   \n   .device-macbook-pro.device-spacegray .device-power::before {\n    background: #515456;\n    box-shadow: inset 0 -2px 6px 0 black;\n   }\n\n   /* desktop styling------------------------------------ */\n.thetime {\n  position: absolute;\n  display: flex;\n  flex-direction: column-reverse;\n  border: 5px solid white;\n  background-color: silver;\n  bottom: 7%;\n  right: 104%;\n  width: 18%;\n  padding: 1%;\n}\n\n.clock{\n  color: cyan;\n  text-align: center;\n  font-size: 25px;\n}\n\n.date {\n  font-size: 15px;\n  text-align: center;\n}\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUdFO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsNklBQTZJO0lBQzdJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztBQUVGLCtDQUErQzs7QUFDL0MsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFDMUQ7RUFDRSxtQkFBbUI7SUFDakIsU0FBUztJQUNULGtDQUFrQztJQUVsQywwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUVwQyw0QkFBNEI7O0lBRTVCLDhCQUE4QjtJQUU5QixzQkFBc0I7SUFDdEIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSwwRkFBMEY7RUFDMUYsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDO3VCQUNxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsMEZBQTBGO0lBQzFGLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQzt5QkFDcUI7RUFDdkI7O0VBRUE7Ozs7OztHQU1DLHNCQUFzQjtHQUN0QixvQkFBb0I7RUFDckI7RUFDQTs7R0FFQyxrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLFVBQVU7RUFDWDtFQUNBOztHQUVDLFVBQVU7RUFDWDtFQUNBOztHQUVDLHNCQUFzQjtHQUN0QixrQ0FBa0M7R0FDbEMsc0JBQXNCO0dBQ3RCLG9CQUFpQjtNQUFqQixpQkFBaUI7R0FDakIsa0JBQWtCOztFQUVuQjtFQUNBOzs7SUFHRSxhQUFhO0lBQ2IsWUFBWTtJQUNaOztHQUVEO0lBQ0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDs7R0FFQTtJQUNDLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0dBQ2I7O0dBRUE7SUFDQyxZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQ0FBaUM7R0FDbEM7O0dBRUE7SUFDQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7R0FDcEI7O0dBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7R0FDWDs7R0FFQTs7SUFFQyxXQUFXO0lBQ1gsa0JBQWtCO0dBQ25COztHQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7R0FDYjs7R0FFQTtJQUNDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0dBQ2Q7O0dBRUE7SUFDQyxtQ0FBbUM7R0FDcEM7O0dBRUE7SUFDQyxtQkFBbUI7SUFDbkIscUJBQXFCO0dBQ3RCOztHQUVBO0lBQ0MsbUJBQW1CO0lBQ25CLHFDQUFxQztHQUN0Qzs7R0FFQTtJQUNDLG1CQUFtQjtJQUNuQixvQ0FBb0M7R0FDckM7O0dBRUEsd0RBQXdEO0FBQzNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjEvbG9jYXRpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIFxuICBib2R5IHtcbiAgICBtYXJnaW46MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI2OTA2My9wZXhlbHMtcGhvdG8tMjY5MDYzLmpwZWc/YXV0bz1mb3JtYXQlMkNjb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbi8qIEJlbG93IGRlbGF5cyB0aGUgY2x1ZSBwb3AtdXAgZm9yIDJzZWNvbmRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbi5jbHVlUG9wVXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7IFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cbi5tZXNzYWdlSWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jbHVlVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbmZvcm17XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDEsIDIzMywgMC43MTkpO1xufVxuXG4uY2x1ZU9uZVNjcmVlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5pY2xhcmlmaWVkLmNvbS9pbWFnZXMvbmV3cy82MDg4Ni8yOTIzODAvMjkyMzgwLTEyODAucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgLyogcGFkZGluZy10b3A6IDIwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7ICovXG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLCAuY2x1ZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNsdWVEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogb3BhY2l0eTogMC43NTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsdWVUZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRoZXRpbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2xvY2ssIC5kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2xvY2sge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuY2x1ZU9uZVNjcmVlbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LmljbGFyaWZpZWQuY29tL2ltYWdlcy9uZXdzLzYwODg2LzI5MjM4MC8yOTIzODAtMTI4MC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgLyogcGFkZGluZy10b3A6IDIwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogOTBweDsgKi9cbiAgfVxuICBcbiAgLmRldmljZSxcbiAgLmRldmljZTo6YmVmb3JlLFxuICAuZGV2aWNlOjphZnRlcixcbiAgLmRldmljZSAqLFxuICAuZGV2aWNlIDo6YmVmb3JlLFxuICAuZGV2aWNlIDo6YWZ0ZXIge1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICB6LWluZGV4OiAxO1xuICB9XG4gIOKAi1xuICAuZGV2aWNlIC5kZXZpY2UtZnJhbWUge1xuICAgei1pbmRleDogMTtcbiAgfVxuICDigItcbiAgLmRldmljZSAuZGV2aWNlLWNvbnRlbnQge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBcbiAgfVxuICDigItcbiAgXG4gICAgLmRldmljZS1tYWNib29rLXBybyB7XG4gICAgaGVpZ2h0OiA0NDRweDtcbiAgICB3aWR0aDogNzQwcHg7XG4gICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWUge1xuICAgIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2M4Y2FjYjtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDI5cHggMTlweCAzOXB4IDE5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyNzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICBib3R0b206IDJweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMjZweDtcbiAgICBsZWZ0OiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5OTZweDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjpiZWZvcmUge1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogI2M4Y2FjYjtcbiAgICBjb250ZW50OiBcIk1hY0Jvb2sgUHJvXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjEyMTI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlciB7XG4gICAgYmFja2dyb3VuZDogI2UyZTNlNDtcbiAgICBib3JkZXI6IHNvbGlkICNkNWQ2ZDg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggNHB4IDAgNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB6LWluZGV4OiA5O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuICAgLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDVkNmQ4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAycHggI2JhYmRiZjtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2EwYTNhNztcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTgwcHggMTgwcHgvIDAgMCAxMnB4IDEycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDZweCAwICM0NzRhNGQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGxlZnQ6IC00cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMDUwcHg7O1xuICAgfVxuICAgXG4gICAuZGV2aWNlLW1hY2Jvb2stcHJvLmRldmljZS1zcGFjZWdyYXkgLmRldmljZS1mcmFtZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICM3NjdhN2Q7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTA5NDk2O1xuICAgIGJvcmRlci1jb2xvcjogIzc2N2E3ZDtcbiAgIH1cbiAgIFxuICAgLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM4NzhhO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMnB4ICM2YTZkNzA7XG4gICB9XG4gICBcbiAgIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICM1MTU0NTY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDZweCAwIGJsYWNrO1xuICAgfVxuXG4gICAvKiBkZXNrdG9wIHN0eWxpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50aGV0aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gIGJvdHRvbTogNyU7XG4gIHJpZ2h0OiAxMDQlO1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxJTtcbn1cblxuLmNsb2Nre1xuICBjb2xvcjogY3lhbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<section>\n  <div class=\"device device-macbook-pro \">\n    <div class=\"device-frame\">\n      <div class=\"device-content\">\n        <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n          <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\">\n            <div class=\"clock\">\n              <p> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\"> {{ time | date}} </p>\n            </div>\n\n            <p class=\"clueText\">Hi Agent {{userName}}i am a Clue</p>\n            <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n\n          <div *ngFor=\"let clue of localClues; index as i\">\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n              <div class=\"clock\">\n                <p> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\"> {{ time | date}} </p>\n              </div>\n              <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n              <ng-template #photo>\n                <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\">\n                </p>\n              </ng-template>\n              <ng-template #flag>\n                <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n              </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i\n                    class=\"material-icons\">fingerprint</i></button>\n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"flight\" class=\"flyOut\">\n            <div class=\"flyOutClock\">\n              <p> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\"> {{ time | date}} </p>\n            </div>\n            <div *ngFor=\"let location of locations\">\n              <label for=\"{{location}}\">\n                <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n                {{location}}\n              </label>\n            </div>\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation()\">Fly Out</button>\n          </div>\n          <div *ngIf=\"wrong\" class=\"wrong\">\n            <button (click)=\"goBackAirport()\">Try Again!</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"device-stripe\"></div>\n      <div class=\"device-header\"></div>\n      <div class=\"device-sensors\"></div>\n      <div class=\"device-btns\"></div>\n      <div class=\"device-power\"></div>\n    </div>\n  </div>\n</section>\n\n"

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
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock.service */ "./src/app/clock.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var Location1Component = /** @class */ (function () {
    function Location1Component(userService, clueService, pexelService, clockService) {
        this.userService = userService;
        this.clueService = clueService;
        this.pexelService = pexelService;
        this.clockService = clockService;
        this.clueNumber = -2; // variable that is used for ngIfs to only show one pop-up message/clue at a time
        this.tempClueNumber = 0; // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
        this.flight = false; //  used to toggle flight screen or not
        this.nextCity = 'Moscow'; // what the next city location is
        this.currentCity = 'Paris'; // current city
        this.randomPhoto = Math.floor((Math.random() * 9)); // used to get a random index number for background photo
        this.randomDetroitPhoto = Math.floor((Math.random() * 2)); // detroit only had 3 photos, this selects on of those
        this.locations = [];
        this.wrong = false;
    }
    // method that increases clueNumber so we can show the next clue
    Location1Component.prototype.showClue = function () {
        this.clueNumber = 0;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        // console.log(this.clueNumber);
    };
    // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
    Location1Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
    Location1Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = false;
        this.wrong = false;
    };
    Location1Component.prototype.goBackAirport = function () {
        this.wrong = !this.wrong;
        this.flight = !this.flight;
    };
    // increase clueNumber to display next clue
    Location1Component.prototype.nextClue = function () {
        this.clueNumber++;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        this.clockService.isTimeLeft();
        this.timeLeft = this.clockService.getTimeLeft();
    };
    Location1Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clockService.isTimeLeft();
            this.clueService.rightChoice();
        }
        console.log(this.selectedCity);
    };
    Location1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.userService.returnUserName();
        console.log(this.userName);
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
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
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
    };
    Location1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location1',
            template: __webpack_require__(/*! ./location1.component.html */ "./src/app/location1/location1.component.html"),
            styles: [__webpack_require__(/*! ./location1.component.css */ "./src/app/location1/location1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
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

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\nrel=\"stylesheet\">\n\n\n<section>\n<div class=\"device device-macbook-pro \">\n<div class=\"device-frame\">\n  <div class=\"device-content\">\n    <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n        <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n        <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n        <button (click)=\"showClue()\">Let's Party!</button>\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\" >\n          <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n            <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n            <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n            <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n            <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n            <div class=\"buttons\">\n              <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n              <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n            </div>\n          </div>\n        </div>\n    \n        <div *ngIf=\"flight\" class=\"flyOut\"> \n            <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div *ngFor=\"let location of locations\"> \n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation()\">Fly Out</button>\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n            </div>\n</div>\n</div>\n<div class=\"device-stripe\"></div>\n<div class=\"device-header\"></div>\n<div class=\"device-sensors\"></div>\n<div class=\"device-btns\"></div>\n<div class=\"device-power\"></div>\n</div>\n</div>\n</section>"

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
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");
/* harmony import */ var _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pexel-api.service */ "./src/app/pexel-api.service.ts");
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock.service */ "./src/app/clock.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var Location2Component = /** @class */ (function () {
    function Location2Component(userService, clueService, pexelService, clockService) {
        this.userService = userService;
        this.clueService = clueService;
        this.pexelService = pexelService;
        this.clockService = clockService;
        this.clueNumber = -2; // variable that is used for ngIfs to only show one pop-up message/clue at a time
        this.tempClueNumber = 0; // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
        this.flight = false; //  used to toggle flight screen or not
        this.nextCity = 'Dubai'; // what the next city location is
        this.currentCity = 'Moscow'; // current city
        this.randomPhoto = Math.floor((Math.random() * 9)); // used to get a random index number for background photo
        this.randomDetroitPhoto = Math.floor((Math.random() * 2)); // detroit only had 3 photos, this selects on of those
        this.locations = [];
        this.wrong = false;
    }
    // method that increases clueNumber so we can show the next clue
    Location2Component.prototype.showClue = function () {
        this.clueNumber = 0;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        // console.log(this.clueNumber);
    };
    // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
    Location2Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
    Location2Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = false;
        this.wrong = false;
    };
    Location2Component.prototype.goBackAirport = function () {
        this.wrong = !this.wrong;
        this.flight = !this.flight;
    };
    // increase clueNumber to display next clue
    Location2Component.prototype.nextClue = function () {
        this.clueNumber++;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        this.clockService.isTimeLeft();
        this.timeLeft = this.clockService.getTimeLeft();
    };
    Location2Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clockService.isTimeLeft();
            this.clueService.rightChoice();
        }
        console.log(this.selectedCity);
    };
    Location2Component.prototype.ngOnInit = function () {
        var _this = this;
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
            _this.userName = _this.userService.returnUserName();
            console.log(_this.userName);
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
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
            _this.redHerring = _this.clueService.redHerring[2];
            _this.wrongLocation = _this.clueService.wrongLocations[3];
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
    };
    Location2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location2',
            template: __webpack_require__(/*! ./location2.component.html */ "./src/app/location2/location2.component.html"),
            styles: [__webpack_require__(/*! ./location2.component.css */ "./src/app/location2/location2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
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

module.exports = ".locationLanding {\n  /* background-image: url(../../assets/dubai.jpg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: lightblue;\n  width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.cluePopUp {\n  border-radius: 10px;\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n\n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n\n    -webkit-animation-duration:0.5;\n    animation-duration:0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: rgba(247, 241, 233, 0.801);\n    width: 80vw;\n    height: 25vh;\n}\n.clock {\n  position: relative;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-20%);\n  font-size: 30px;\n  font-weight: 500;\n  width: auto;\n  color: white;\n  margin-bottom: 0;\n  line-height: 0;\n}\n.flyOutClock {\n  position: fixed;\n  top: 5%;\n  font-size: 30px;\n  font-weight: 500;\n  width: auto;\n  color: white;\n  margin-bottom: 0;\n  line-height: 0;\n}\n.date {\n  font-size: 20px;\n  font-weight: 400;\n  color: white;\n}\n.messageIcon {\n  color: green;\n}\n.clueTop {\n  display: flex;\n  justify-content: space-between;\n}\n.clue {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 35vh;\n}\n.flyOut {\n  border-radius: 10px;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 80vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrong {\n  background-image: url(https://media.giphy.com/media/Wq9RLX06zRg4UM42Qf/giphy.gif);\n  background-size: cover;\n  height: 80vh;\n  width: 95vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24zL2xvY2F0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBQzFEO0VBQ0UsbUJBQW1CO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlGQUFpRjtFQUNqRixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMy9sb2NhdGlvbjMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbkxhbmRpbmcge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2R1YmFpLmpwZyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgd2lkdGg6IDk1dnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbi5jbHVlUG9wVXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7IFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0MSwgMjMzLCAwLjgwMSk7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiAyNXZoO1xufVxuLmNsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuLmZseU91dENsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuLmRhdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZXNzYWdlSWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jbHVlVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNsdWUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMzV2aDtcbn1cbi5mbHlPdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud3Jvbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvV3E5UkxYMDZ6Umc0VU00MlFmL2dpcGh5LmdpZik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDk1dnc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/location3/location3.component.html":
/*!****************************************************!*\
  !*** ./src/app/location3/location3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\nrel=\"stylesheet\">\n\n\n<section>\n<div class=\"device device-macbook-pro \">\n<div class=\"device-frame\">\n  <div class=\"device-content\">\n    <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n        <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n\n        <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n        <button (click)=\"showClue()\">Let's Party!</button>\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\" >\n          <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n            <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n            <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n            <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n            <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n            <div class=\"buttons\">\n              <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n              <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n            </div>\n          </div>\n        </div>\n\n    \n        <div *ngIf=\"flight\" class=\"flyOut\"> \n            <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div *ngFor=\"let location of locations\"> \n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation()\">Fly Out</button>\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n            </div>\n</div>\n</div>\n<div class=\"device-stripe\"></div>\n<div class=\"device-header\"></div>\n<div class=\"device-sensors\"></div>\n<div class=\"device-btns\"></div>\n<div class=\"device-power\"></div>\n</div>\n</div>\n</section>\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var Location3Component = /** @class */ (function () {
    function Location3Component(userService, clueService, pexelService, clockService) {
        this.userService = userService;
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
        this.locations = [];
        this.wrong = false;
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
        this.flight = false;
        this.wrong = false;
    };
    Location3Component.prototype.goBackAirport = function () {
        this.wrong = !this.wrong;
        this.flight = !this.flight;
    };
    // increase clueNumber to display next clue
    Location3Component.prototype.nextClue = function () {
        this.clueNumber++;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        this.clockService.isTimeLeft();
        this.timeLeft = this.clockService.getTimeLeft();
    };
    Location3Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clockService.isTimeLeft();
            this.clueService.rightChoice();
        }
        console.log(this.selectedCity);
    };
    Location3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.userService.returnUserName();
        console.log(this.userName);
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
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
    };
    Location3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location3',
            template: __webpack_require__(/*! ./location3.component.html */ "./src/app/location3/location3.component.html"),
            styles: [__webpack_require__(/*! ./location3.component.css */ "./src/app/location3/location3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
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

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n  rel=\"stylesheet\">\n<body>\n  \n<section>\n  <div class=\"device device-macbook-pro \">\n    <div class=\"device-frame\">\n      <div class=\"device-content\">\n        <div class=\"clueOneScreen\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n          <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n            <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n            <p class=\"clueText\">Hi i am a Clue</p>\n            <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n\n        <div *ngFor=\"let clue of localClues; index as i\" >\n          <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n            <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n            <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n            <ng-template #photo> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\">  </ng-template>\n            <div class=\"buttons\">\n              <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n              <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n            </div>\n          </div>\n        </div>\n      \n        <div *ngIf=\"flight\" class=\"flyOut\">  \n          <form action=\"\">Fly Out\n            <input type=\"radio\"> City 1\n            <input type=\"radio\"> City 2\n            <input type=\"radio\"> City 3\n            <button>Fly Out!</button>\n          </form>\n        <button (click)=\"goBack()\">Go Back</button>\n     </div>\n   </div>\n<!-- </section> -->"

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
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");
/* harmony import */ var _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pexel-api.service */ "./src/app/pexel-api.service.ts");
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock.service */ "./src/app/clock.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var Location4Component = /** @class */ (function () {
    function Location4Component(userService, clueService, pexelService, clockService) {
        this.userService = userService;
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
    Location4Component.prototype.showClue = function () {
        this.clueNumber = 0;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
        // console.log(this.clueNumber);
    };
    // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
    Location4Component.prototype.flyOut = function () {
        this.tempClueNumber = this.clueNumber;
        this.clueNumber = -1;
        this.flight = true;
    };
    // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
    Location4Component.prototype.goBack = function () {
        this.clueNumber = this.tempClueNumber;
        this.flight = !this.flight;
    };
    // increase clueNumber to display next clue
    Location4Component.prototype.nextClue = function () {
        this.clueNumber++;
        this.clockService.onClue();
        this.time = this.clockService.getTime();
    };
    Location4Component.prototype.ngOnInit = function () {
        var _this = this;
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);  this.userName = this.userService.returnUserName();
            console.log(_this.userName);
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
        this.userName = this.userService.userName;
    };
    Location4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location4',
            template: __webpack_require__(/*! ./location4.component.html */ "./src/app/location4/location4.component.html"),
            styles: [__webpack_require__(/*! ./location4.component.css */ "./src/app/location4/location4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
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
        // second key
        // apiKey:string = "563492ad6f917000010000014a9669d68f174ec5af529706f09b0407";
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

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.userName = null;
    }
    UserService.prototype.getUserName = function (form) {
        this.userName = form.value.userName;
        console.log(this.userName);
        // return this.userName;  
    };
    UserService.prototype.returnUserName = function () {
        return this.userName;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/brittanyhardy/Desktop/Boot_Camp/BootCamp-VSCODE/Projects/Carmen-Sandiego-FP/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map