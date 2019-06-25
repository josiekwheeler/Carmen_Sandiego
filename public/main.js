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
    ClockService.prototype.resetTime = function () {
        this.clock = new Date();
        this.timeLeft = 24;
    };
    ClockService.prototype.getTimeLeft = function () {
        return this.timeLeft;
    };
    ClockService.prototype.getTime = function () {
        return this.clock;
    };
    ClockService.prototype.onClue = function () {
        this.clock.setHours(this.clock.getHours() + 1);
        this.timeLeft--;
        this.isTimeLeft();
    };
    // onClue() {
    // return  this.time -= 1;
    // }
    ClockService.prototype.onFlight = function () {
        this.clock.setHours(this.clock.getHours() + 3);
        this.timeLeft -= 4;
        this.isTimeLeft();
    };
    ClockService.prototype.onWrong = function () {
        this.clock.setHours(this.clock.getHours() + 5);
        this.timeLeft -= 5;
        this.isTimeLeft();
    };
    ClockService.prototype.isTimeLeft = function () {
        console.log("timeleft");
        if (this.timeLeft > 0) {
            console.log("timeleft over 0");
            return;
        }
        else {
            console.log("timeleft under 0");
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
/* harmony import */ var _pexel_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pexel-api.service */ "./src/app/pexel-api.service.ts");





var ClueService = /** @class */ (function () {
    function ClueService(http, router, pexelService) {
        this.http = http;
        this.router = router;
        this.pexelService = pexelService;
        this.locations = ['Paris', 'Moscow', 'Dubai', 'Beijing', 'London', 'Berlin', 'Tokyo', 'Sydney'];
        this.location4 = 'Detroit';
        this.location4redHerring = 'Cleveland';
        this.randomPhoto = Math.floor((Math.random() * 10));
        this.redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Shanghai', 'Liverpool', 'Munich', 'Kyoto', 'Perth'];
        this.redHerrings = [];
        this.wrongLocations = ['Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Rome', 'Warsaw', 'Lisbon', 'Mexico City'];
        this.id = 1;
    }
    ClueService.prototype.getClues = function (nextCity) {
        return this.http.get("http://localhost:3000/clues/" + nextCity, { responseType: 'json' });
    };
    ClueService.prototype.getStolenGoods = function (startingCity) {
        return this.http.get("http://localhost:3000/stolenGoods/" + startingCity, { responseType: 'json' });
    };
    ClueService.prototype.rightChoice = function () {
        this.id++;
        console.log(this.id);
        this.router.navigate(["/location" + this.id]);
    };
    ClueService.prototype.setLocation1 = function () {
        var randomIndex = Math.floor(Math.random() * this.locations.length);
        this.startingCity = this.locations[randomIndex];
        this.locations.splice(randomIndex, 1);
        this.redHerrings.push(this.redHerring[randomIndex]);
        this.redHerring.splice(randomIndex, 1);
        // console.log(this.locations);
        return this.locations;
    };
    ClueService.prototype.setLocation2 = function () {
        var randomIndex = Math.floor(Math.random() * this.locations.length);
        this.secondCity = this.locations[randomIndex];
        this.locations.splice(randomIndex, 1);
        this.redHerrings.push(this.redHerring[randomIndex]);
        this.redHerring.splice(randomIndex, 1);
        // console.log(this.locations);
        return this.locations;
    };
    ClueService.prototype.setLocation3 = function () {
        var randomIndex = Math.floor(Math.random() * this.locations.length);
        this.thirdCity = this.locations[randomIndex];
        this.locations.splice(randomIndex, 1);
        this.redHerrings.push(this.redHerring[randomIndex]);
        this.redHerring.splice(randomIndex, 1);
        // console.log(this.locations);
        // console.log(this.redHerrings);
        return this.locations;
    };
    ClueService.prototype.setLoc1Clues = function () {
        var _this = this;
        this.getClues(this.secondCity).subscribe(function (response) {
            _this.loc1Clues = response;
            _this.loc1Clues.push({ flag: _this.loc1Clues[1].countrycode });
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.secondCity).subscribe(function (response) {
            _this.background2 = response["photos"]["" + _this.randomPhoto].src.original;
            console.log(_this.background2);
            _this.loc1Clues.push({ photo: response["photos"]["" + _this.randomPhoto].src.medium });
        });
    };
    ClueService.prototype.setLoc2Clues = function () {
        var _this = this;
        this.getClues(this.thirdCity).subscribe(function (response) {
            _this.loc2Clues = response;
            _this.loc2Clues.push({ flag: _this.loc2Clues[1].countrycode });
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.thirdCity).subscribe(function (response) {
            _this.background3 = response["photos"]["" + _this.randomPhoto].src.original;
            _this.loc2Clues.push({ photo: response["photos"]["" + _this.randomPhoto].src.medium });
        });
    };
    ClueService.prototype.setLoc3Clues = function () {
        var _this = this;
        this.getClues(this.location4).subscribe(function (response) {
            _this.loc3Clues = response;
            _this.loc3Clues.push({ flag: _this.loc3Clues[1].countrycode });
            // console.log(this.clues);
        });
        this.pexelService.getLocationPhoto(this.location4).subscribe(function (response) {
            _this.loc3Clues.push({ photo: response["photos"][0].src.small });
        });
    };
    ClueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _pexel_api_service__WEBPACK_IMPORTED_MODULE_4__["PexelApiService"]])
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

module.exports = "body {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Bangers', cursive;\n}\n\n.all {\n  width: 90%;\n}\n\nh3 {\n  color: red;\n  display: flex;\n  font-size: 50px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\np {\n  color: white;\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n\n.gif {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n}\n\nbutton {\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgrey;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 40%;\n  height: 30%;\n  font-family: 'Bangers', cursive;\n  margin-top: 35px;\n  font-size: 20px;\n}\n\n/* \nbody {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\nbutton {\n  height: 20px;\n  position: relative;\n  margin: -20px -50px;\n  width: 100px;\n  top: 50%;\n  left: 100%;\n\n\n}\np {\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n  width: 450px\n}\nimg{\n    width: 80%;\n    height: 50%;\n}\n.gif{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n}\n\nh3 {\n  color: red;\n  display: flex;\n  font-size: 50px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n}\n */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW92ZXIvZ2FtZW92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtKQUFrSjtFQUNsSiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0RUFBNEU7RUFDNUUsVUFBVTtFQUNWLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcURFIiwiZmlsZSI6InNyYy9hcHAvZ2FtZW92ZXIvZ2FtZW92ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pMi53cC5jb20vd3d3LmthbHVzYWxvbmFuZHNwYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvYmxhY2stYnJpY2stYmFja2dyb3VuZC1rYWx1LXNhbG9uLWJsYWNrLWZyaWRheS1zYWxlcy13ZWIuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xufVxuXG4uYWxsIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuaDMge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmdpZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG5cbi8qIFxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5idXR0b24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAtMjBweCAtNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwJTtcblxuXG59XG5wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0NTBweFxufVxuaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG4uZ2lme1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuXG5oMyB7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG59XG4gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/gameover/gameover.component.html":
/*!**************************************************!*\
  !*** ./src/app/gameover/gameover.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\"\n  rel=\"stylesheet\"\n/>\n\n<body>\n<div class=\"all\">\n  <div class=\"text\">\n    <h3>GAME OVER!</h3>\n    <p class=\"text\">\n      It looks like you ran out of time and Carmen got away Agent\n      {{ userName }}, better brush up on your skills so that you can capture her\n      next time!\n    </p>\n  </div>\n  <div class=\"gif\">\n      <img src=\"https://media2.giphy.com/media/lkpT33i3KSjN6/giphy.gif?cid=790b76115d0d225872543549731cd040&rid=giphy.gif\" alt=\"\"/>\n      <button\n        type=\"button\"\n        class=\"beginNewCase\"\n        routerLink=\"/landing-page\"\n        routerLinkActive=\"active\">\n        Return to Office</button>\n  </div>\n</div>\n</body>\n"

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

module.exports = "\nbody {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n}\n\n  .acme {\n    font-family: 'Bangers', cursive;\n    font-size: 40px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: lightgrey;\n    border-radius: 8px;\n    width: 90%;\n    height: 60%;\n    font-family: 'Roboto Slab', serif;\n    font-size: 20px;\n    text-align: center;\n  }\n\n  button {\n    font-family: 'Bangers', cursive;\n    font-size: 20px;\n    height:5%;\n    width: 35%;\n    border-radius: 8px;\n    text-align: center;\n    margin-bottom: 3%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .directions, p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0px 25px 0px 25px;\n    text-align: center;\n    opacity: 0.7;\n  }\n\n  @media only screen and (min-width: 1024px) {\n\n  .email {\n    width: 50%;\n    height: 50%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztFQUVFO0lBQ0UsK0JBQStCO0lBQy9CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0RUFBNEU7RUFDOUU7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pMi53cC5jb20vd3d3LmthbHVzYWxvbmFuZHNwYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvYmxhY2stYnJpY2stYmFja2dyb3VuZC1rYWx1LXNhbG9uLWJsYWNrLWZyaWRheS1zYWxlcy13ZWIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbiAgLmFjbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgLmVtYWlsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDo1JTtcbiAgICB3aWR0aDogMzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfVxuXG4gIC5kaXJlY3Rpb25zLCBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuZW1haWwge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n\n  <div class=\"email\" *ngFor=\"let stolengood of stolenGoods\">\n    <p class = \"acme\">ACME HEADQUARTERS</p>\n    <p>Agent {{userName}} </p>\n     <p> {{stolengood.stolengood}} </p>\n    <p class=\"directions\">You must travel around the world to pursue and capture Carmen Sandiego. Each location has 3 clues that provide information about the culprit’s location. You can fly out to the next location at anytime by clicking on the airplane icon. If you need more clues, click on the fingerprint icon and you’ll receive the next clue. Your task is to piece together the clues, choose the correct location and arrest Carmen Sandiego before the 24 hour deadline.</p>\n    <button routerLink=\"/location1\" routerLinkActive=\"active\">BEGIN THE CASE</button>\n  </div>\n\n\n\n</body>\n  \n\n"

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
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clock.service */ "./src/app/clock.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, userService, clueService, clockService) {
        this.route = route;
        this.userService = userService;
        this.clueService = clueService;
        this.clockService = clockService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clockService.resetTime();
        this.startingCity = this.clueService.startingCity;
        this.clueService.getStolenGoods(this.startingCity).subscribe(function (response) {
            _this.stolenGoods = response;
            console.log(_this.stolenGoods);
        });
        this.userName = this.userService.userName;
        console.log(this.userName);
        // this.stolenGood = this.clueService.stolenGood;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_4__["ClueService"], _clock_service__WEBPACK_IMPORTED_MODULE_5__["ClockService"]])
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

module.exports = ".home {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\np {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 5px;\n    margin-top: 2%;\n    opacity: 0.7;\n    /* background-color: white; */\n}\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 40%;\n    width: 90%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.acme {\n    font-family: 'Roboto Slab', serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    margin-top:0px;\n    font-size: 20px;\n}\n\n.newCase {\n  font-family: 'Bangers', cursive;\n  font-size: 20px;\n}\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n    font-family: 'Bangers', cursive;\n}\n\n.beginCase {\n    font-family: 'Bangers', cursive;\n    height: 40%;\n    width: 90%;\n    border-radius: 5px;\n    border: none;\n    opacity: .8;\n    font-size: 18px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Roboto Slab', serif;\n}\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n    font-family: 'Roboto Slab', serif;\n    padding: 10px;\n}\n\ninput {\n    width: 150%;\n    border-radius: 5px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n@media only screen and (min-width: 1024px) {\n\n  .newCase {\n    font-family: 'Bangers', cursive;\n    font-size: 25px;\n  }\n\n  .enterName {\n    margin-top: 0;\n    font-size: 20px;\n    font-family: 'Roboto Slab', serif;\n}\n\n.welcome {\n  font-size: 30px;\n  margin-top: 0px;\n  font-family: 'Bangers', cursive;\n}\n\n.form {\n  margin-top: 30px\n}\n\n.agentForm {\n  height: 50%;\n  width: 50%;\n}\n\n#spotlight {\n  position: fixed;\n  -webkit-animation: bottom-right 4s ease-in-out alternate infinite;\n          animation: bottom-right 4s ease-in-out alternate infinite;\n  border-bottom: none;\n  border-left: solid 30vh transparent;\n  border-right: solid 30vh transparent;\n  border-bottom: solid 200vh rgba(255, 255, 255, .5);\n  transform-origin: top;\n  pointer-events: none;\n}\n\n#spotlight {\n  -webkit-animation: bottom-left 4s ease-in-out alternate infinite;\n          animation: bottom-left 4s ease-in-out alternate infinite;\n  left: auto;\n  right: 0;\n}\n\n@-webkit-keyframes bottom-left {\n  0% {\n    transform: rotate(-30deg);\n  }\n\n  100% {\n    transform: rotate(30deg);\n  }\n}\n\n@keyframes bottom-left {\n  0% {\n    transform: rotate(-30deg);\n  }\n\n  100% {\n    transform: rotate(30deg);\n  }\n}\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7O0FBRUE7O0VBRUU7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLGtEQUFrRDtFQUNsRCxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0VBQXdEO1VBQXhELHdEQUF3RDtFQUN4RCxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFSQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7OztBQUdBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmltZyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuLmFnZW50Rm9ybSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmFjbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5uZXdDYXNlIHtcbiAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ud2VsY29tZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xufVxuXG4uYmVnaW5DYXNlIHtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvcGFjaXR5OiAuODtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbn1cblxuLmVudGVyTmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMTUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAubmV3Q2FzZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAuZW50ZXJOYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweFxufVxuXG4uYWdlbnRGb3JtIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNzcG90bGlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGFuaW1hdGlvbjogYm90dG9tLXJpZ2h0IDRzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDMwdmggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogc29saWQgMzB2aCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMjAwdmggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNzcG90bGlnaHQge1xuICBhbmltYXRpb246IGJvdHRvbS1sZWZ0IDRzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbkBrZXlmcmFtZXMgYm90dG9tLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgfVxufVxuXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\"\n  rel=\"stylesheet\"\n/>\n<body>\n  <section class=\"home\">\n    <img\n      src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\"\n      alt=\"Carmen Sandiego Logo\"\n    />\n    <button class=\"newCase\" (click)=\"toggleDisplay()\">BEGIN THE CASE</button>\n  </section>\n  <div id=\"spotlight\"></div>\n  <section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n    <p class=\"welcome\">Welcome to the ACME Detective Agency!</p>\n    <p class=\"acme\">\n      Our main goal here at ACME is to capture the elusive Carmen Sandiego!\n    </p>\n    <p class=\"enterName\">\n      If you feel up to the task of catching this international criminal, then\n      please...\n    </p>\n    <form class=\"form\" #agentForm=\"ngForm\" (ngSubmit)=\"setUserName(agentForm)\">\n      <label for=\"\">Enter Agent Name:</label>\n      <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" />\n      <button\n        type=\"button\"\n        class=\"beginCase\"\n        routerLink=\"/home\"\n        routerLinkActive=\"active\"\n        (click)=\"setUserName(agentForm)\">\n        Begin The Case\n      </button>\n    </form>\n  </section>\n</body>\n"

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
/* harmony import */ var _clue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clue.service */ "./src/app/clue.service.ts");





var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(route, userService, clueService) {
        this.route = route;
        this.userService = userService;
        this.clueService = clueService;
        this.shouldBeShown = true;
    }
    LandingPageComponent.prototype.ngOnInit = function () { };
    LandingPageComponent.prototype.startGame = function () {
        this.clueService.setLocation1();
        this.clueService.setLocation2();
        this.clueService.setLocation3();
        this.clueService.setLoc1Clues();
        this.clueService.setLoc2Clues();
        this.clueService.setLoc3Clues();
    };
    LandingPageComponent.prototype.toggleDisplay = function () {
        this.shouldBeShown = !this.shouldBeShown;
    };
    LandingPageComponent.prototype.setUserName = function (form) {
        console.log(form);
        this.userService.getUserName(form);
        this.startGame();
        console.log(this.userName);
        // return this.userName
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _clue_service__WEBPACK_IMPORTED_MODULE_4__["ClueService"]])
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

module.exports = " \n \n  span {\n    line-height: 9px;\n    vertical-align: 50%;\n  }\n  \n  .windowBox {\n    background: #ecf0f1;\n    color: #000;\n    font-family: HelveticaNeue, 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;\n    background: #fff;\n    top: 5%;\n    width: 50vw;\n    height: 75vh;\n    margin: auto;\n    margin-top: 12.5vh;\n    border: 1px solid #acacac;\n    border-radius: 6px;\n    box-shadow: 0px 0px 20px #acacac;\n  }\n  \n  .topbar {\n    /* background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -o-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5); */\n    color: #4d494d;\n    font-size: 11pt;\n    line-height: 20px;\n    text-align: center;\n    width: 100%;\n    height: 20px;\n    border-top: 1px solid #f3f1f3;\n    border-bottom: 1px solid #b1aeb1;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    cursor: default;\n  }\n  \n  .macButtons {\n    padding-left: 8px;\n    padding-top: 3px;\n    float: left;\n    line-height: 0px;\n  }\n  \n  .buttons:hover a {\n    visibility: visible;\n  }\n  \n  .close {\n    background: #ff5c5c;\n    font-size: 9pt;\n    width: 11px;\n    height: 11px;\n    border: 1px solid #e33e41;\n    border-radius: 50%;\n    display: inline-block;\n  }\n  \n  .close:active {\n    background: #c14645;\n    border: 1px solid #b03537;\n  }\n  \n  .close:active .closebutton {\n    color: #4e0002;\n  }\n  \n  .closebutton {\n    color: #820005;\n    visibility: hidden;\n    cursor: default;\n  }\n  \n  .minimize {\n    background: #ffbd4c;\n    font-size: 9pt;\n    line-height: 11px;\n    margin-left: 4px;\n    width: 11px;\n    height: 11px;\n    border: 1px solid #e09e3e;\n    border-radius: 50%;\n    display: inline-block;\n  }\n  \n  .minimize:active {\n    background: #c08e38;\n    border: 1px solid #af7c33;\n  }\n  \n  .minimize:active .minimizebutton {\n    color: #5a2607;\n  }\n  \n  .minimizebutton {\n    color: #9a5518;\n    visibility: hidden;\n    cursor: default;\n  }\n  \n  .zoom {\n    background: #00ca56;\n    font-size: 9pt;\n    line-height: 11px;\n    margin-left: 6px;\n    width: 11px;\n    height: 11px;\n    border: 1px solid #14ae46;\n    border-radius: 50%;\n    display: inline-block;\n  }\n  \n  .zoom:active {\n    background: #029740;\n    border: 1px solid #128435;\n  }\n  \n  .zoom:active .zoombutton {\n    color: #003107;\n  }\n  \n  .zoombutton {\n    color: #006519;\n    visibility: hidden;\n    cursor: default;\n  }\n  \n  .content {\n    padding: 10px;\n  }\n  \n  /* window END */\n  \n  /* content BEGIN */\n  \n  h3 {\n    margin-top: 0px;\n  }\n  \n  /* content END */\n  \n  .iTunesImage {\n    width: 150%;\n    height: 90%;\n    background-image: url('itunes.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnRkFBZ0Y7SUFDaEYsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRTs7Ozs7eURBS3FEO0lBQ3JELGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBLGVBQWU7O0VBRWYsa0JBQWtCOztFQUVsQjtJQUNFLGVBQWU7RUFDakI7O0VBRUEsZ0JBQWdCOztFQUVoQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUNBQWdEO0lBQ2hELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsT0FBTztFQUNUIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24xL2xvY2F0aW9uMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuIFxuICBzcGFuIHtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiA1MCU7XG4gIH1cbiAgXG4gIC53aW5kb3dCb3gge1xuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWUsICdIZWx2ZXRpY2EgTmV1ZScsICdMdWNpZGEgR3JhbmRlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0b3A6IDUlO1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTIuNXZoO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2FjYWM7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjYWNhY2FjO1xuICB9XG4gIFxuICAudG9wYmFyIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTsgKi9cbiAgICBjb2xvcjogIzRkNDk0ZDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjFmMztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWViMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgLm1hY0J1dHRvbnMge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgLmJ1dHRvbnM6aG92ZXIgYSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICBcbiAgLmNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY1YzVjO1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTMzZTQxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5jbG9zZTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNjMTQ2NDU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwMzUzNztcbiAgfVxuICBcbiAgLmNsb3NlOmFjdGl2ZSAuY2xvc2VidXR0b24ge1xuICAgIGNvbG9yOiAjNGUwMDAyO1xuICB9XG4gIFxuICAuY2xvc2VidXR0b24ge1xuICAgIGNvbG9yOiAjODIwMDA1O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIC5taW5pbWl6ZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmYmQ0YztcbiAgICBmb250LXNpemU6IDlwdDtcbiAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTA5ZTNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5taW5pbWl6ZTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNjMDhlMzg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmN2MzMztcbiAgfVxuICBcbiAgLm1pbmltaXplOmFjdGl2ZSAubWluaW1pemVidXR0b24ge1xuICAgIGNvbG9yOiAjNWEyNjA3O1xuICB9XG4gIFxuICAubWluaW1pemVidXR0b24ge1xuICAgIGNvbG9yOiAjOWE1NTE4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIC56b29tIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBjYTU2O1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNGFlNDY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLnpvb206YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDI5NzQwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjg0MzU7XG4gIH1cbiAgXG4gIC56b29tOmFjdGl2ZSAuem9vbWJ1dHRvbiB7XG4gICAgY29sb3I6ICMwMDMxMDc7XG4gIH1cbiAgXG4gIC56b29tYnV0dG9uIHtcbiAgICBjb2xvcjogIzAwNjUxOTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLyogd2luZG93IEVORCAqL1xuICBcbiAgLyogY29udGVudCBCRUdJTiAqL1xuICBcbiAgaDMge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICBcbiAgLyogY29udGVudCBFTkQgKi9cblxuICAuaVR1bmVzSW1hZ2Uge1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pdHVuZXMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGxlZnQ6IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <header>\n    <ul class=\"left\">\n      <li><strong>Finder</strong>\n\n      </li>\n      <li>File\n\n      </li>\n      <li>Edit\n\n      </li>\n      <li>View\n\n      </li>\n      <li>Go\n\n      </li>\n      <li>Window\n\n      </li>\n      <li (click)=\"toggleHelp()\">Help\n\n      </li>\n    </ul>\n    <ul class=\"right\">\n      <li>Agent {{userName}}</li>\n    </ul>\n  </header>\n \n\n  <!-- desktop top---------------------------------------------- -->\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n      <div class=\"windowBox\" *ngIf=\"help\">\n          <div class=\"topbar\">\n            <div class=\"macButtons\">\n              <div class=\"close\" (click)=\"toggleHelp()\">\n                <a class=\"closebutton\" ><span><strong>x</strong></span></a>\n                <!-- close button link -->\n              </div>\n              <div class=\"minimize\">\n                <a class=\"minimizebutton\" ><span><strong>&ndash;</strong></span></a>\n                <!-- minimize button link -->\n              </div>\n              <div class=\"zoom\">\n                <a class=\"zoombutton\" ><span><strong>+</strong></span></a>\n                <!-- zoom button link -->\n              </div>\n            </div>\n            Help\n            <!-- window title -->\n          </div>\n          <div class=\"content\">\n            <h3>Need Help, {{userName}}? Here you go</h3>\n            <p class=\"directions\">You must travel around the world to pursue and capture Carmen Sandiego. Each location has 3 clues that provide information about the culprit’s location. You can fly out to the next location at anytime by clicking on the airplane icon. Each clue uses an hour of time, flights take 3 hours, wrong flights will cost your 5 hours. If you need more clues, click on the fingerprint and you’ll receive the next clue. Your task is to piece together the clues, choose the correct location and arrest Carmen Sandiego before the 24 hour deadline.</p>\n            <!-- window content -->\n          </div>\n        </div>\n        <div class=\"iTunesImage\" *ngIf=\"itunes\" (click)=\"stopTheme()\">\n        \n          </div>\n\n    <div class=\"clueOneScreen\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n        <div class=\"thetime\">\n          <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n          <p class=\"date\">{{ time | date}} </p>\n        </div>\n        <i class=\"material-icons\">fingerprint</i>\n        <p class=\"clueText\">Agent {{userName}}, you have a new clue. Click to view.</p>\n        <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\">\n        <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <p class=\"text\" *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n          <ng-template #photo>\n            <p *ngIf=\"clue.photo != undefined; else flag\" class=\"flagClue\"> She dropped this photo: <img class=\"droppedPic\" src=\"{{clue.photo}}\" alt=\"\">\n            </p>\n          </ng-template>\n          <ng-template #flag>\n            <p class=\"flagClue\"> She dropped this flag: <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n          </ng-template>\n          <div class=\"buttons\">\n            <button class=\"finger\" *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                class=\"material-icons\">fingerprint</i></button>\n            <button class=\"plane\" (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n          </div>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"flight\" class=\"flyOut\">\n          <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n            <p class=\"city\">Choose a city</p>\n        <div *ngFor=\"let location of locations\">\n          <label for=\"{{location}}\">\n            <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n            {{location}}\n          </label>\n        </div>\n        <div class=\"flyButtons\">\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation(); stopNoise()\">Fly Out</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n        <button (click)=\"goBackAirport()\">Try Again!</button>\n      </div>\n    </div>\n  </section>\n  <!-- desktop bottom------------------------------------------------ -->\n  <footer>\n    <ul>\n      <li data-title=\"Finder\"><img data-title=\"Finder\"\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n      <li data-title=\"Chrome\"><img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n      <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\" (click)=\"playTheme(); toggleItunes()\"> <img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n      <li data-title=\"Photoshop\"><img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n      <li data-title=\"Clues\"><img\n          src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n      <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n            src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n             -->\n             <li\n            data-title=\"System&nbsp;Preferences\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n      </li>\n      <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n      </li>\n    </ul>\n  </footer>\n</main>"

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
        this.locations = [];
        this.wrong = false;
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
        this.help = false;
        this.itunes = false;
        this.theme = new Audio('../../assets/Theme.mp3');
    }
    Location1Component.prototype.playTheme = function () {
        this.itunes = !this.itunes;
        this.theme = new Audio('../../assets/Theme.mp3');
        this.theme.play();
    };
    Location1Component.prototype.stopTheme = function () {
        this.itunes = !this.itunes;
        this.theme.pause();
    };
    Location1Component.prototype.toggleHelp = function () {
        this.help = !this.help;
    };
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
        this.timeLeft = this.clockService.getTimeLeft();
    };
    Location1Component.prototype.startNoise = function () {
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
        this.backgroundNoise.play();
    };
    Location1Component.prototype.stopNoise = function () {
        this.backgroundNoise.pause();
        console.log('stop the fucking music');
    };
    Location1Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            // this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clueService.rightChoice();
        }
        console.log(this.selectedCity);
    };
    Location1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.currentCity = this.clueService.startingCity; //how data is flowing
        this.nextCity = this.clueService.secondCity;
        this.clues = this.clueService.loc1Clues;
        this.startNoise();
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"][0].src.original;
        });
        // below is used to shuffle clues array and save it as localClues array
        var currentIndex = this.clues.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var temporaryValue = this.clues[currentIndex];
            this.clues[currentIndex] = this.clues[randomIndex];
            this.clues[randomIndex] = temporaryValue;
            this.localClues = this.clues;
            console.log(this.localClues);
        }
        this.redHerring = this.clueService.redHerrings[1];
        this.wrongLocation = this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
        this.locations.push(this.redHerring, this.wrongLocation, this.nextCity);
        console.log(this.locations);
        var thisIndex = 3;
        while (0 !== thisIndex) {
            var randomIndex = Math.floor(Math.random() * thisIndex);
            thisIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[thisIndex];
            this.locations[thisIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
        return this.localClues;
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

module.exports = "<main>\n    <header>\n      <ul class=\"left\">\n        <li><strong>Finder</strong>\n  \n        </li>\n        <li>File\n  \n        </li>\n        <li>Edit\n  \n        </li>\n        <li>View\n  \n        </li>\n        <li>Go\n  \n        </li>\n        <li>Window\n  \n        </li>\n        <li (click)=\"toggleHelp()\">Help\n  \n        </li>\n      </ul>\n      <ul class=\"right\">\n        <li>Agent {{userName}}</li>\n      </ul>\n    </header>\n   \n  \n    <!-- desktop top---------------------------------------------- -->\n  \n    <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n        <div class=\"windowBox\" *ngIf=\"help\">\n            <div class=\"topbar\">\n              <div class=\"macButtons\">\n                <div class=\"close\" (click)=\"toggleHelp()\">\n                  <a class=\"closebutton\" ><span><strong>x</strong></span></a>\n                  <!-- close button link -->\n                </div>\n                <div class=\"minimize\">\n                  <a class=\"minimizebutton\" ><span><strong>&ndash;</strong></span></a>\n                  <!-- minimize button link -->\n                </div>\n                <div class=\"zoom\">\n                  <a class=\"zoombutton\" ><span><strong>+</strong></span></a>\n                  <!-- zoom button link -->\n                </div>\n              </div>\n              Help\n              <!-- window title -->\n            </div>\n            <div class=\"content\">\n              <h3>Need Help, {{userName}}? Here you go</h3>\n              <p class=\"directions\">You must travel around the world to pursue and capture Carmen Sandiego. Each location has 3 clues that provide information about the culprit’s location. You can fly out to the next location at anytime by clicking on the airplane icon. Each clue uses an hour of time, flights take 3 hours, wrong flights will cost your 5 hours. If you need more clues, click on the fingerprint and you’ll receive the next clue. Your task is to piece together the clues, choose the correct location and arrest Carmen Sandiego before the 24 hour deadline.</p>\n              <!-- window content -->\n            </div>\n          </div>\n          <div class=\"iTunesImage\" *ngIf=\"itunes\" (click)=\"stopTheme()\">\n          \n            </div>\n  \n      <div class=\"clueOneScreen\">\n        <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <i class=\"material-icons\">fingerprint</i>\n          <p class=\"clueText\">Agent {{userName}}, you have a new clue. Click to view.</p>\n          <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n        </div>\n  \n        <div *ngFor=\"let clue of localClues; index as i\">\n          <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n            <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n            <p class=\"text\" *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n            <ng-template #photo>\n              <p *ngIf=\"clue.photo != undefined; else flag\" class=\"flagClue\"> She dropped this photo: <img class=\"droppedPic\" src=\"{{clue.photo}}\" alt=\"\">\n              </p>\n            </ng-template>\n            <ng-template #flag>\n              <p class=\"flagClue\"> She dropped this flag: <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n            </ng-template>\n            <div class=\"buttons\">\n              <button class=\"finger\" *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                  class=\"material-icons\">fingerprint</i></button>\n              <button class=\"plane\" (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n            </div>\n          </div>\n        </div>\n  \n  \n        <div *ngIf=\"flight\" class=\"flyOut\">\n            <div class=\"thetime\">\n                <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\">{{ time | date}} </p>\n              </div>\n              <p class=\"city\">Choose a city</p>\n          <div *ngFor=\"let location of locations\">\n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <div class=\"flyButtons\">\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation(); stopNoise()\">Fly Out</button>\n          </div>\n        </div>\n  \n        <div *ngIf=\"wrong\" class=\"wrong\">\n          <h2>Sorry, there's no sign of her here!</h2>\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n        </div>\n      </div>\n    </section>\n    <!-- desktop bottom------------------------------------------------ -->\n    <footer>\n      <ul>\n        <li data-title=\"Finder\"><img data-title=\"Finder\"\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n        <li data-title=\"Chrome\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n        <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\" (click)=\"playTheme(); toggleItunes()\"> <img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n        <li data-title=\"Photoshop\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n        <li data-title=\"Clues\"><img\n            src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n        <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n              src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n               -->\n               <li\n              data-title=\"System&nbsp;Preferences\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n        </li>\n        <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n        </li>\n      </ul>\n    </footer>\n  </main>"

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
        this.randomPhoto = Math.floor((Math.random() * 15)); // used to get a random index number for background photo
        this.locations = [];
        this.wrong = false;
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
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
    Location2Component.prototype.startNoise = function () {
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
        this.backgroundNoise.play();
    };
    Location2Component.prototype.stopNoise = function () {
        this.backgroundNoise.pause();
        console.log('stop the fucking music');
    };
    Location2Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            // this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clueService.rightChoice();
            this.stopNoise();
        }
        console.log(this.selectedCity);
    };
    Location2Component.prototype.ngOnInit = function () {
        this.currentCity = this.clueService.secondCity;
        this.nextCity = this.clueService.thirdCity;
        this.clues = this.clueService.loc2Clues;
        this.photoURL = this.clueService.background2;
        this.startNoise();
        // this gets a random photo of current city to use as background image
        var currentIndex = this.clues.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var temporaryValue = this.clues[currentIndex];
            this.clues[currentIndex] = this.clues[randomIndex];
            this.clues[randomIndex] = temporaryValue;
            this.localClues = this.clues;
            console.log(this.localClues);
        }
        this.redHerring = this.clueService.redHerrings[2];
        this.wrongLocation = this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
        this.locations.push(this.redHerring, this.wrongLocation, this.nextCity);
        console.log(this.locations);
        var thisIndex = 3;
        while (0 !== thisIndex) {
            var randomIndex = Math.floor(Math.random() * thisIndex);
            thisIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[thisIndex];
            this.locations[thisIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
        // gets the redHerring option from service then a wrong city
        return this.localClues;
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

module.exports = "<main>\n    <header>\n      <ul class=\"left\">\n        <li><strong>Finder</strong>\n  \n        </li>\n        <li>File\n  \n        </li>\n        <li>Edit\n  \n        </li>\n        <li>View\n  \n        </li>\n        <li>Go\n  \n        </li>\n        <li>Window\n  \n        </li>\n        <li (click)=\"toggleHelp()\">Help\n  \n        </li>\n      </ul>\n      <ul class=\"right\">\n        <li>Agent {{userName}}</li>\n      </ul>\n    </header>\n   \n  \n    <!-- desktop top---------------------------------------------- -->\n  \n    <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n        <div class=\"windowBox\" *ngIf=\"help\">\n            <div class=\"topbar\">\n              <div class=\"macButtons\">\n                <div class=\"close\" (click)=\"toggleHelp()\">\n                  <a class=\"closebutton\" ><span><strong>x</strong></span></a>\n                  <!-- close button link -->\n                </div>\n                <div class=\"minimize\">\n                  <a class=\"minimizebutton\" ><span><strong>&ndash;</strong></span></a>\n                  <!-- minimize button link -->\n                </div>\n                <div class=\"zoom\">\n                  <a class=\"zoombutton\" ><span><strong>+</strong></span></a>\n                  <!-- zoom button link -->\n                </div>\n              </div>\n              Help\n              <!-- window title -->\n            </div>\n            <div class=\"content\">\n              <h3>Need Help, {{userName}}? Here you go</h3>\n              <p class=\"directions\">You must travel around the world to pursue and capture Carmen Sandiego. Each location has 3 clues that provide information about the culprit’s location. You can fly out to the next location at anytime by clicking on the airplane icon. Each clue uses an hour of time, flights take 3 hours, wrong flights will cost your 5 hours. If you need more clues, click on the fingerprint and you’ll receive the next clue. Your task is to piece together the clues, choose the correct location and arrest Carmen Sandiego before the 24 hour deadline.</p>\n              <!-- window content -->\n            </div>\n          </div>\n          <div class=\"iTunesImage\" *ngIf=\"itunes\" (click)=\"stopTheme()\">\n          \n            </div>\n  \n      <div class=\"clueOneScreen\">\n        <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <i class=\"material-icons\">fingerprint</i>\n          <p class=\"clueText\">Agent {{userName}}, you have a new clue. Click to view.</p>\n          <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n        </div>\n  \n        <div *ngFor=\"let clue of localClues; index as i\">\n          <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n            <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n            <p class=\"text\" *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n            <ng-template #photo>\n              <p *ngIf=\"clue.photo != undefined; else flag\" class=\"flagClue\"> She dropped this photo: <img class=\"droppedPic\" src=\"{{clue.photo}}\" alt=\"\">\n              </p>\n            </ng-template>\n            <ng-template #flag>\n              <p class=\"flagClue\"> She dropped this flag: <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n            </ng-template>\n            <div class=\"buttons\">\n              <button class=\"finger\" *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                  class=\"material-icons\">fingerprint</i></button>\n              <button class=\"plane\" (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n            </div>\n          </div>\n        </div>\n  \n  \n        <div *ngIf=\"flight\" class=\"flyOut\">\n            <div class=\"thetime\">\n                <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n                <p class=\"date\">{{ time | date}} </p>\n              </div>\n              <p class=\"city\">Choose a city</p>\n          <div *ngFor=\"let location of locations\">\n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <div class=\"flyButtons\">\n            <button (click)=\"goBack()\">Return to clue</button>\n            <button (click)=\"selectLocation(); stopNoise()\">Fly Out</button>\n          </div>\n        </div>\n  \n        <div *ngIf=\"wrong\" class=\"wrong\">\n          <h2>Sorry, there's no sign of her here!</h2>\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n        </div>\n      </div>\n    </section>\n    <!-- desktop bottom------------------------------------------------ -->\n    <footer>\n      <ul>\n        <li data-title=\"Finder\"><img data-title=\"Finder\"\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n        <li data-title=\"Chrome\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n        <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\" (click)=\"playTheme(); toggleItunes()\"> <img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n        <li data-title=\"Photoshop\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n        <li data-title=\"Clues\"><img\n            src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n        <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n              src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n               -->\n               <li\n              data-title=\"System&nbsp;Preferences\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n        </li>\n        <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n        </li>\n      </ul>\n    </footer>\n  </main>"

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
        this.randomPhoto = Math.floor((Math.random() * 8)); // used to get a random index number for background photo
        this.locations = [];
        this.wrong = false;
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
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
    Location3Component.prototype.startNoise = function () {
        this.backgroundNoise = new Audio("../../assets/" + this.currentCity + ".mp3");
        this.backgroundNoise.play();
    };
    Location3Component.prototype.stopNoise = function () {
        this.backgroundNoise.pause();
        console.log('stop the fucking music');
    };
    Location3Component.prototype.selectLocation = function () {
        if (this.selectedCity !== this.nextCity) {
            this.flight = !this.flight;
            this.wrong = !this.wrong;
            this.clockService.onWrong();
            // this.clockService.isTimeLeft();
        }
        else {
            this.clockService.onFlight();
            this.clueService.rightChoice();
            this.stopNoise();
        }
        console.log(this.selectedCity);
    };
    Location3Component.prototype.ngOnInit = function () {
        this.currentCity = this.clueService.thirdCity;
        this.clues = this.clueService.loc3Clues;
        this.photoURL = this.clueService.background3;
        this.startNoise();
        // below is used to shuffle clues array and save it as localClues array
        var currentIndex = this.clues.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var temporaryValue = this.clues[currentIndex];
            this.clues[currentIndex] = this.clues[randomIndex];
            this.clues[randomIndex] = temporaryValue;
            this.localClues = this.clues;
            console.log(this.localClues);
        }
        // gets the redHerring option from service then a wrong city
        this.redHerring = this.clueService.location4redHerring;
        this.wrongLocation = this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
        this.locations.push(this.redHerring, this.wrongLocation, this.nextCity);
        console.log(this.locations);
        var thisIndex = 3;
        while (0 !== thisIndex) {
            var randomIndex = Math.floor(Math.random() * thisIndex);
            thisIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[thisIndex];
            this.locations[thisIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
        this.time = this.clockService.getTime();
        this.timeLeft = this.clockService.getTimeLeft();
        this.userName = this.userService.userName;
        return this.localClues;
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

module.exports = "body {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n.page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column-reverse;\n}\n\n.captured {\n  font-size: 30px;\n  font-family: \"Bangers\", cursive;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.images {\n  margin-bottom: 50px;\n}\n\np {\n  margin: 5px;\n  color: white;\n}\n\nimg {\n  display: flex;\n  align-items: center;\n}\n\n#under {\n  position: absolute;\n}\n\n#top {\n  width: 450px;\n}\n\nbutton {\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  height: 15%;\n  width: 50%;\n  border-radius: 5px;\n  margin-top: 2%;\n  opacity: 0.7;\n  background-color: white;\n}\n\n@media only screen and (min-width: 1024px) { \n\n  .captured {\n    font-size: 40px;\n    margin-left: 80%;\n    margin-top: 0px;\n  }\n\n  #under {\n    left: 15%;\n    top: 28%\n  }\n\n  #top {\n    left: 15%;\n    top: 28%;\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb240L2xvY2F0aW9uNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0pBQWtKO0VBQ2xKLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVDtFQUNGOztFQUVBO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uNC9sb2NhdGlvbjQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pMi53cC5jb20vd3d3LmthbHVzYWxvbmFuZHNwYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvYmxhY2stYnJpY2stYmFja2dyb3VuZC1rYWx1LXNhbG9uLWJsYWNrLWZyaWRheS1zYWxlcy13ZWIuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5jYXB0dXJlZCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFuZ2Vyc1wiLCBjdXJzaXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZXMge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3VuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jdG9wIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAxNSU7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG9wYWNpdHk6IDAuNztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7IFxuXG4gIC5jYXB0dXJlZCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgI3VuZGVyIHtcbiAgICBsZWZ0OiAxNSU7XG4gICAgdG9wOiAyOCVcbiAgfVxuXG4gICN0b3Age1xuICAgIGxlZnQ6IDE1JTtcbiAgICB0b3A6IDI4JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/location4/location4.component.html":
/*!****************************************************!*\
  !*** ./src/app/location4/location4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"page\">\n    <div class=\"captured\">\n      <p>Congratulations Agent {{userName}}</p>\n      <p>You have captured Carmen Sandiego!</p>\n      <p>You have been promoted to Sleuth</p>\n      <button type=\"button\" class=\"beginNewCase\" routerLink=\"/landing-page\" routerLinkActive=\"active\">Return To Office</button>\n    </div>\n    <div class=\"images\">\n      <img id=\"under\" src=\"https://vignette.wikia.nocookie.net/qubo-channel/images/e/ed/Carmen_Sandiego.png/revision/latest?cb=20170716201725\"> \n      <img id=\"top\" class=\"animated bounceInDown\" src=\"https://ecowall.com.ua/files/images/fabric/6/4.png\">   \n    </div>\n  </div>\n</body>\n\n\n"

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
        // apiKey:string = "563492ad6f9170000100000128cb04362abc4b32b717e2c8e9125276";
        // second key
        // apiKey:string = "563492ad6f917000010000014a9669d68f174ec5af529706f09b0407";
        // apiKey:string = "563492ad6f91700001000001e6e48cd47bd449b78f60933192bbf8b8";
        this.apiKey = "563492ad6f91700001000001de8fe8f0d0c347eb9f22d6366e0780fd";
        this.randomPhoto = Math.floor((Math.random() * 10));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: "" + this.apiKey
            })
        };
    }
    PexelApiService.prototype.getLocationPhoto = function (location) {
        return this.http.get("https://api.pexels.com/v1/search?query=" + location + "+query&per_page=15&page=1", this.httpOptions);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        this.userName = null;
    }
    UserService.prototype.getUserName = function (form) {
        this.userName = form.value.userName;
        this.router.navigate(['/home']);
        // return this.userName;  
    };
    UserService.prototype.returnUserName = function () {
        return this.userName;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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