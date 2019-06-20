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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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

module.exports = "<h1>\n\n  Yo! You lost, that ain't gucci!\n\n</h1>\n"

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


var GameoverComponent = /** @class */ (function () {
    function GameoverComponent() {
    }
    GameoverComponent.prototype.ngOnInit = function () {
    };
    GameoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gameover',
            template: __webpack_require__(/*! ./gameover.component.html */ "./src/app/gameover/gameover.component.html"),
            styles: [__webpack_require__(/*! ./gameover.component.css */ "./src/app/gameover/gameover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "body {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* position: absolute; */\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n    height: 100vh;\n    width: 100vw;\n}\n\nsection {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.email {\n    background: white;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 50%;\n    height: 50%;\n    font-family: 'Roboto', sans-serif;\n    opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrSkFBa0o7SUFDbEosNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEI7OzswQkFHc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVtYWlsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIG9wYWNpdHk6IDAuNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <section>\n\n        <div class=\"email\">\n            <p>ACME HEADQUARTERS</p>\n            <p>Agent {{userName}} we have just been informed that Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n            <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n        </div>\n\n    </section>\n</body>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMS9sb2NhdGlvbjEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> \n <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n  \n          <div class=\"clueOneScreen\">\n              <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n           \n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n              <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"flight\" class=\"flyOut\"> \n              <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n            <div *ngFor=\"let location of locations\"> \n              <label for=\"{{location}}\">\n                <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n                {{location}}\n              </label>\n            </div>\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation()\">Fly Out</button>\n        </div>\n\n          <div *ngIf=\"wrong\" class=\"wrong\">\n            <button (click)=\"goBackAirport()\">Try Again!</button>\n          </div>\n     \n\n    </div>\n    \n</section>\n"

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
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
            console.log(_this.clues);
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
            _this.redHerring = _this.clueService.redHerring[1];
            _this.wrongLocation = _this.clueService.wrongLocations[1];
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

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n\n    <div class=\"clueOneScreen\">\n        <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\">\n            <div class=\"clock\">\n                <p> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\"> {{ time | date}} </p>\n            </div>\n            <p class=\"clueText\">Agent {{userName}} You just missed her! Look through the clues to try to catch her.</p>\n            <button (click)=\"showClue()\">Go To Clues</button>\n        </div>\n\n        <div *ngFor=\"let clue of localClues; index as i\">\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n                <div class=\"clock\">\n                    <p> {{ time | date: 'shortTime'}} </p>\n                    <p class=\"date\"> {{ time | date}} </p>\n                </div>\n                <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n                <ng-template #photo>\n                    <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\"> </p>\n                </ng-template>\n                <ng-template #flag>\n                    <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n                </ng-template>\n                <div class=\"buttons\">\n                    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button>\n                    <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"flight\" class=\"flyOut\">\n            <div class=\"flyOutClock\">\n                <p> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\"> {{ time | date}} </p>\n            </div>\n            <div *ngFor=\"let location of locations\">\n                <label for=\"{{location}}\">\n               <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n               {{location}}\n             </label>\n            </div>\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation()\">Fly Out</button>\n        </div>\n\n        <div *ngIf=\"wrong\" class=\"wrong\">\n            <button (click)=\"goBackAirport()\">Try Again!</button>\n        </div>\n\n\n    </div>\n\n</section>"

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
        this.currentCity = 'Moscow'; // current cityx
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
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
            console.log(_this.clues);
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
            _this.redHerring = _this.clueService.redHerring[1];
            _this.wrongLocation = _this.clueService.wrongLocations[1];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMy9sb2NhdGlvbjMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/location3/location3.component.html":
/*!****************************************************!*\
  !*** ./src/app/location3/location3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n\n    <div class=\"clueOneScreen\">\n        <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\">\n            <div class=\"clock\">\n                <p> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\"> {{ time | date}} </p>\n            </div>\n            <p class=\"clueText\">Agent {{userName}} You just missed her! Look through the clues to try to catch her.</p>\n            <button (click)=\"showClue()\">Go To Clues</button>\n        </div>\n\n        <div *ngFor=\"let clue of localClues; index as i\">\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n                <div class=\"clock\">\n                    <p> {{ time | date: 'shortTime'}} </p>\n                    <p class=\"date\"> {{ time | date}} </p>\n                </div>\n                <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n                <ng-template #photo>\n                    <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\"> </p>\n                </ng-template>\n                <ng-template #flag>\n                    <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n                </ng-template>\n                <div class=\"buttons\">\n                    <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button>\n                    <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"flight\" class=\"flyOut\">\n            <div class=\"flyOutClock\">\n                <p> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\"> {{ time | date}} </p>\n            </div>\n            <div *ngFor=\"let location of locations\">\n                <label for=\"{{location}}\">\n               <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n               {{location}}\n             </label>\n            </div>\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation()\">Fly Out</button>\n        </div>\n\n        <div *ngIf=\"wrong\" class=\"wrong\">\n            <button (click)=\"goBackAirport()\">Try Again!</button>\n        </div>\n\n\n    </div>\n\n</section>"

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
        // this brings in the clues from the DB and adds them to clues array on load
        this.clueService.getClues(this.nextCity).subscribe(function (response) {
            _this.clues = response;
            _this.clues.push({ flag: _this.clues[1].countrycode });
            // console.log(this.clues);
        });
        // gets a random photo for clue and adds it to clues array
        this.pexelService.getLocationPhoto(this.nextCity).subscribe(function (response) {
            _this.clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
            console.log(_this.clues);
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
            _this.redHerring = _this.clueService.redHerring[1];
            _this.wrongLocation = _this.clueService.wrongLocations[1];
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

module.exports = "body {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* position: absolute; */\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n    height: 100vh;\n    width: 100vw;\n}\n\nsection {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.captured {\n    display: flex;\n    flex-direction: column;\n    color: white;\n}\n\np {\n    display: flex;\n    font-size: 40px;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Bangers', cursive;\n    margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb240L2xvY2F0aW9uNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCOzs7MEJBR3NCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjQvbG9jYXRpb240LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pMi53cC5jb20vd3d3LmthbHVzYWxvbmFuZHNwYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvYmxhY2stYnJpY2stYmFja2dyb3VuZC1rYWx1LXNhbG9uLWJsYWNrLWZyaWRheS1zYWxlcy13ZWIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXB0dXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/location4/location4.component.html":
/*!****************************************************!*\
  !*** ./src/app/location4/location4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\" rel=\"stylesheet\">\n\n<body>\n    <section>\n\n        <div class=\"captured\">\n            <p>YOU CAUGHT HER!</p>\n            <p>Good Work Agent {{userName}}</p>\n            <img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n        </div>\n\n    </section>\n</body>"

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





var Location4Component = /** @class */ (function () {
    function Location4Component(clueService, pexelService, clockService) {
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
    Location4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location4',
            template: __webpack_require__(/*! ./location4.component.html */ "./src/app/location4/location4.component.html"),
            styles: [__webpack_require__(/*! ./location4.component.css */ "./src/app/location4/location4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clue_service__WEBPACK_IMPORTED_MODULE_2__["ClueService"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_3__["PexelApiService"], _clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]])
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

module.exports = __webpack_require__(/*! /Users/josiekwheeler/Documents/Carmen_Sandiego/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map