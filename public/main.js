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
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");

















var appRoutes = [
    { path: "", redirectTo: "/landing-page", pathMatch: "full" },
    { path: "landing-page", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "gameover", component: _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_15__["GameoverComponent"] },
    { path: "location1", component: _location1_location1_component__WEBPACK_IMPORTED_MODULE_6__["Location1Component"] },
    { path: "location2", component: _location2_location2_component__WEBPACK_IMPORTED_MODULE_7__["Location2Component"] },
    { path: "location3", component: _location3_location3_component__WEBPACK_IMPORTED_MODULE_8__["Location3Component"] },
    { path: "location4", component: _location4_location4_component__WEBPACK_IMPORTED_MODULE_9__["Location4Component"] },
    { path: "scores", component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_16__["ScoresComponent"] }
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
                _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_15__["GameoverComponent"],
                _scores_scores_component__WEBPACK_IMPORTED_MODULE_16__["ScoresComponent"]
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

module.exports = "\nbody {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\nbutton {\n  height: 20px;\n  position: relative;\n  margin: -20px -50px;\n  width: 100px;\n  top: 50%;\n  left: 100%;\n\n\n}\np {\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n  margin-top: 0px;\n  margin-top: 25px;\n  margin-right: 10px;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n  width: 450px\n}\nimg{\n    width: 80%;\n    height: 50%;\n}\n.gif{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n}\nh3 {\n  color: red;\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers',\n    cursive;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW92ZXIvZ2FtZW92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrSkFBa0o7RUFDbEosNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVOzs7QUFHWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjtBQUNGO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7O0FBRXhCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO1dBQ1M7O0FBRVgiLCJmaWxlIjoic3JjL2FwcC9nYW1lb3Zlci9nYW1lb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaTIud3AuY29tL3d3dy5rYWx1c2Fsb25hbmRzcGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAxL2JsYWNrLWJyaWNrLWJhY2tncm91bmQta2FsdS1zYWxvbi1ibGFjay1mcmlkYXktc2FsZXMtd2ViLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbmJ1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IC0yMHB4IC01MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxMDAlO1xuXG5cbn1cbnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0NTBweFxufVxuaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG4uZ2lme1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuaDMge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0JhbmdlcnMnLFxuICAgIGN1cnNpdmU7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/gameover/gameover.component.html":
/*!**************************************************!*\
  !*** ./src/app/gameover/gameover.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\" rel=\"stylesheet\">\n\n<body>\n  <div>\n<h3>GAME OVER!</h3>\n<p>\n  It looks like you ran out of time and Carmen got away Agent {{userName}}, better brush up on your skills so that you\n  can capture her next\n  time! </p>\n</div>\n<div>\n<p class=\"gif\">\n    <img src=\"https://media2.giphy.com/media/lkpT33i3KSjN6/giphy.gif?cid=790b76115d0d225872543549731cd040&rid=giphy.gif\"\n      alt=\"\">\n      <button type=\"button\" class=\"beginNewCase\" routerLink=\"/landing-page\" routerLinkActive=\"active\">Return to\n        Office</button>\n</p>\n</div>\n\n\n\n</body>"

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

module.exports = "\nbody {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n}\n\n  .acme {\n    font-family: 'Bangers', cursive;\n    font-size: 40px;\n  }\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: white;\n    border-radius: 8px;\n    opacity: 0.7;\n    width: 90%;\n    height: 70%;\n    font-family: 'Roboto Slab', serif;\n    font-size: 20px;\n    text-align: center;\n  }\n\n  button {\n    font-family: 'Bangers', cursive;\n    font-size: 20px;\n    height: 8%;\n    width: 40%;\n    border-radius: 8px;\n    text-align: center;\n    margin-bottom: 3%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .directions, p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0px 25px 0px 25px;\n    text-align: center;\n    opacity: 0.7;\n    background-color: white;\n  }\n\n  @media only screen and (min-width: 1024px) {\n\n  .email {\n    width: 50%;\n    height: 50%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztFQUVFO0lBQ0UsK0JBQStCO0lBQy9CLGVBQWU7RUFDakI7O0VBSUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEVBQTRFO0VBQzlFOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuICAuYWNtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuXG5cbiAgLmVtYWlsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogOCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIH1cblxuICAuZGlyZWN0aW9ucywgcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmVtYWlsIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG59XG4iXX0= */"

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

module.exports = ".home {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 5px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 40%;\n    width: 90%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.acme {\n    font-family: 'Roboto Slab', serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    margin-top:0px;\n    font-size: 15px;\n}\n\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n    font-family: 'Bangers', cursive;\n}\n\n\n.beginCase {\n    font-family: 'Bangers', cursive;\n    height: 40%;\n    width: 90%;\n    border-radius: 5px;\n    border: none;\n    opacity: .8;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Roboto Slab', serif;\n}\n\n\n.enterName {\n    margin-top: 0;\n    font-size: 15px;\n    font-family: 'Roboto Slab', serif;\n}\n\n\ninput {\n    width: 150%;\n    border-radius: 5px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n@media only screen and (min-width: 1024px) {\n\n  .enterName {\n    margin-top: 0;\n    font-size: 20px;\n    font-family: 'Roboto Slab', serif;\n}\n\n.welcome {\n  font-size: 30px;\n  margin-top: 0px;\n  font-family: 'Bangers', cursive;\n}\n\n.form {\n  margin-top: 30px\n}\n\n.agentForm {\n  height: 50%;\n  width: 50%;\n}\n\n#spotlight {\n  position: fixed;\n  -webkit-animation: bottom-right 4s ease-in-out alternate infinite;\n          animation: bottom-right 4s ease-in-out alternate infinite;\n  border-bottom: none;\n  border-left: solid 30vh transparent;\n  border-right: solid 30vh transparent;\n  border-bottom: solid 200vh rgba(255, 255, 255, .5);\n  transform-origin: top;\npointer-events: none;\n}\n\n#spotlight {\n  -webkit-animation: bottom-left 4s ease-in-out alternate infinite;\n          animation: bottom-left 4s ease-in-out alternate infinite;\n  left: auto;\n  right: 0;\n}\n\n@-webkit-keyframes bottom-left {\n  0% {\n    transform: rotate(-30deg);\n  }\n\n  100% {\n    transform: rotate(30deg);\n  }\n}\n\n@keyframes bottom-left {\n  0% {\n    transform: rotate(-30deg);\n  }\n\n  100% {\n    transform: rotate(30deg);\n  }\n}\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDRFQUE0RTtBQUNoRjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7OztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlFQUF5RDtVQUF6RCx5REFBeUQ7RUFDekQsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsa0RBQWtEO0VBQ2xELHFCQUFxQjtBQUN2QixvQkFBb0I7QUFDcEI7O0FBRUE7RUFDRSxnRUFBd0Q7VUFBeEQsd0RBQXdEO0VBQ3hELFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQVJBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaTIud3AuY29tL3d3dy5rYWx1c2Fsb25hbmRzcGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAxL2JsYWNrLWJyaWNrLWJhY2tncm91bmQta2FsdS1zYWxvbi1ibGFjay1mcmlkYXktc2FsZXMtd2ViLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc3LCA3OCwgNzgpO1xufVxuXG4uYWdlbnRGb3JtIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWNtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLndlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbn1cblxuLmJlZ2luQ2FzZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbn1cblxuLmVudGVyTmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmVudGVyTmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xufVxuXG4ud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHhcbn1cblxuLmFnZW50Rm9ybSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4jc3BvdGxpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBhbmltYXRpb246IGJvdHRvbS1yaWdodCA0cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzMHZoIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDMwdmggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDIwMHZoIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG5wb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI3Nwb3RsaWdodCB7XG4gIGFuaW1hdGlvbjogYm90dG9tLWxlZnQgNHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbn1cblxuQGtleWZyYW1lcyBib3R0b20tbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB9XG59XG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\" rel=\"stylesheet\">\n<body>\n \n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">BEGIN THE CASE</button>\n</section>\n<div id=\"spotlight\"></div>\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to capture the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\" #agentForm=\"ngForm\" (ngSubmit)=\"setUserName(agentForm)\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\" [(ngModel)]=\"userName\"  name=\"userName\"/>\n    <button type=\"button\" class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"setUserName(agentForm)\">Begin The Case</button>\n  </form>\n</section>\n<!-- <audio controls autoplay loop>\n  <source\n    src=\"/Users/brittanyhardy/Desktop/Boot_Camp/BootCamp-VSCODE/Projects/Carmen-Sandiego-FP/src/app/landing-page/Where In The World Is Carmen Sandiego.mp3\"\n    type=\"audio/ogg\">\n  <embed\n    src=\"/Users/brittanyhardy/Desktop/Boot_Camp/BootCamp-VSCODE/Projects/Carmen-Sandiego-FP/src/app/landing-page/Where In The World Is Carmen Sandiego.mp3\"\n    autostart=\"true\" loop=\"true\" hidden=\"true\">\n</audio> -->\n</body>\n\n"

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

module.exports = "<main>\n  <header>\n    <ul class=\"left\">\n      <li><strong>Finder</strong>\n\n      </li>\n      <li>File\n\n      </li>\n      <li>Edit\n\n      </li>\n      <li>View\n\n      </li>\n      <li>Go\n\n      </li>\n      <li>Window\n\n      </li>\n      <li (click)=\"toggleHelp()\">Help\n\n      </li>\n    </ul>\n    <ul class=\"right\">\n      <li>Agent {{userName}}</li>\n    </ul>\n  </header>\n \n\n  <!-- desktop top---------------------------------------------- -->\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n      <div class=\"windowBox\" *ngIf=\"help\">\n          <div class=\"topbar\">\n            <div class=\"macButtons\">\n              <div class=\"close\" (click)=\"toggleHelp()\">\n                <a class=\"closebutton\" ><span><strong>x</strong></span></a>\n                <!-- close button link -->\n              </div>\n              <div class=\"minimize\">\n                <a class=\"minimizebutton\" ><span><strong>&ndash;</strong></span></a>\n                <!-- minimize button link -->\n              </div>\n              <div class=\"zoom\">\n                <a class=\"zoombutton\" ><span><strong>+</strong></span></a>\n                <!-- zoom button link -->\n              </div>\n            </div>\n            Help\n            <!-- window title -->\n          </div>\n          <div class=\"content\">\n            <h3>Need Help, {{userName}}? Here you go</h3>\n            <p class=\"directions\">You must travel around the world to pursue and capture Carmen Sandiego. Each location has 3 clues that provide information about the culprit’s location. You can fly out to the next location at anytime by clicking on the airplane icon. Each clue uses an hour of time, flights take 3 hours, wrong flights will cost your 5 hours. If you need more clues, click on the fingerprint and you’ll receive the next clue. Your task is to piece together the clues, choose the correct location and arrest Carmen Sandiego before the 24 hour deadline.</p>\n            <!-- window content -->\n          </div>\n        </div>\n        <div class=\"iTunesImage\" *ngIf=\"itunes\" (click)=\"stopTheme()\">\n        \n          </div>\n\n    <div class=\"clueOneScreen\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n        <div class=\"thetime\">\n          <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n          <p class=\"date\">{{ time | date}} </p>\n        </div>\n        <img class=\"contact\" src=\"http://www.iconarchive.com/download/i86753/ccard3dev/dynamic-yosemite/Contacts.ico\" alt=\"\">\n        <p class=\"clueText\">Agent {{userName}}, you have a new clue. Click to view.</p>\n        <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\">\n        <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n          <ng-template #photo>\n            <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\">\n            </p>\n          </ng-template>\n          <ng-template #flag>\n            <p> She dropped this flag <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n          </ng-template>\n          <div class=\"buttons\">\n            <button class=\"finger\" *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                class=\"material-icons\">fingerprint</i></button>\n            <button class=\"plane\" (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n          </div>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"flight\" class=\"flyOut\">\n          <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n            <p class=\"city\">Choose a city</p>\n        <div *ngFor=\"let location of locations\">\n          <label for=\"{{location}}\">\n            <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n            {{location}}\n          </label>\n        </div>\n        <button (click)=\"goBack()\">Return to clue</button>\n        <button (click)=\"selectLocation(); stopNoise()\">Fly Out</button>\n\n      </div>\n\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n        <button (click)=\"goBackAirport()\">Try Again!</button>\n      </div>\n    </div>\n  </section>\n  <!-- desktop bottom------------------------------------------------ -->\n  <footer>\n    <ul>\n      <li data-title=\"Finder\"><img data-title=\"Finder\"\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n      <li data-title=\"Chrome\"><img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n      <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\" (click)=\"playTheme(); toggleItunes()\"> <img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n      <li data-title=\"Photoshop\"><img\n          src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n      <li data-title=\"Clues\"><img\n          src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n      <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n            src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n             -->\n             <li\n            data-title=\"System&nbsp;Preferences\"><img\n            src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n      </li>\n      <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n      </li>\n    </ul>\n  </footer>\n</main>"

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

module.exports = "\n@-webkit-keyframes x {\n  to {\n    left: 145px;\n  }\n\n  from {\n    left: 0;\n  }\n}\n\n@keyframes x {\n  to {\n    left: 145px;\n  }\n\n  from {\n    left: 0;\n  }\n}\n\n@-webkit-keyframes y {\n  to {\n    top: 0;\n  }\n\n  from {\n    top: 145px;\n  }\n}\n\n@keyframes y {\n  to {\n    top: 0;\n  }\n\n  from {\n    top: 145px;\n  }\n}\n\nimg {\n  -webkit-animation: x 1.5s linear infinite, y 1.5s ease-in infinite both;\n}\n\n.gotAway img {\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24yL2xvY2F0aW9uMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsT0FBTztFQUNUO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxNQUFNO0VBQ1I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsTUFBTTtFQUNSOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx1RUFBdUU7QUFDekU7O0FBSUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24yL2xvY2F0aW9uMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5Aa2V5ZnJhbWVzIHgge1xuICB0byB7XG4gICAgbGVmdDogMTQ1cHg7XG4gIH1cblxuICBmcm9tIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgeSB7XG4gIHRvIHtcbiAgICB0b3A6IDA7XG4gIH1cblxuICBmcm9tIHtcbiAgICB0b3A6IDE0NXB4O1xuICB9XG59XG5cbmltZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB4IDEuNXMgbGluZWFyIGluZmluaXRlLCB5IDEuNXMgZWFzZS1pbiBpbmZpbml0ZSBib3RoO1xufVxuXG5cblxuLmdvdEF3YXkgaW1nIHtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/location2/location2.component.html":
/*!****************************************************!*\
  !*** ./src/app/location2/location2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <header>\n    <ul class=\"left\">\n      <li><strong>Finder</strong>\n\n      </li>\n      <li>File\n\n      </li>\n      <li>Edit\n\n      </li>\n      <li>View\n\n      </li>\n      <li>Go\n\n      </li>\n      <li>Window\n\n      </li>\n      <li>Help\n\n      </li>\n    </ul>\n    <ul class=\"right\">\n      <li>Agent {{userName}}</li>\n    </ul>\n  </header>\n\n  <!-- desktop top---------------------------------------------- -->\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n    <div class=\"animated bounceInDown>\n <img  src=\"https://media1.tenor.com/images/da099e784637d8479d509d7e0ba2601b/tenor.gif?itemid=10058320\" alt=\"\">\n    </div>   \n <div class=\"clueOneScreen\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n        <div class=\"thetime\">\n          <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n          <p class=\"date\">{{ time | date}} </p>\n        </div>\n        <img class=\"contact\" src=\"http://www.iconarchive.com/download/i86753/ccard3dev/dynamic-yosemite/Contacts.ico\" alt=\"\">\n        <p class=\"clueText\">ATTENTION Agent {{userName}} You have a new clue!</p>\n\n        <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\">\n        <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n          <ng-template #photo>\n            <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\">\n            </p>\n          </ng-template>\n          <ng-template #flag>\n            <p> She dropped this flag <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n          </ng-template>\n          <div class=\"buttons\">\n            <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                class=\"material-icons\">fingerprint</i></button>\n            <button (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n\n          </div>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"flight\" class=\"flyOut\">\n          <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n            <p class=\"city\">Choose a city</p>\n\n        <div *ngFor=\"let location of locations\">\n          <label for=\"{{location}}\">\n            <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n            {{location}}\n          </label>\n        </div>\n        <button (click)=\"goBack()\">Return to clue</button>\n        <button (click)=\"selectLocation()\">Fly Out</button>\n\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n        <button (click)=\"goBackAirport()\">Try Again!</button>\n      </div>\n    </div>\n  </section>\n  <!-- desktop bottom------------------------------------------------ -->\n  <footer>\n      <ul>\n          <li data-title=\"Finder\"><img data-title=\"Finder\"\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n          <li data-title=\"Chrome\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n          <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n          <li data-title=\"Photoshop\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n          <li data-title=\"Clues\"><img\n              src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n          <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n                src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n                 -->\n                 <li\n                data-title=\"System&nbsp;Preferences\"><img\n                src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n          </li>\n          <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n          </li>\n        </ul>\n  </footer>\n</main>"

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

module.exports = "<main>\n  <header>\n    <ul class=\"left\">\n      <li><strong>Finder</strong>\n\n      </li>\n      <li>File\n\n      </li>\n      <li>Edit\n\n      </li>\n      <li>View\n\n      </li>\n      <li>Go\n\n      </li>\n      <li>Window\n\n      </li>\n      <li>Help\n\n      </li>\n    </ul>\n    <ul class=\"right\">\n      <li>Agent {{userName}}</li>\n    </ul>\n  </header>\n\n  <!-- desktop top---------------------------------------------- -->\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n <div class=\"gotAway\">\n   <img src=\"https://media1.tenor.com/images/da099e784637d8479d509d7e0ba2601b/tenor.gif?itemid=10058320\" alt=\"\">\n </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n        <button (click)=\"goBackAirport()\">Try Again!</button>\n      </div>\n    <div class=\"clueOneScreen\">\n      <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" (click)=\"showClue()\">\n        <div class=\"thetime\">\n          <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n          <p class=\"date\">{{ time | date}} </p>\n        </div>\n        <img class=\"contact\" src=\"http://www.iconarchive.com/download/i86753/ccard3dev/dynamic-yosemite/Contacts.ico\" alt=\"\">\n        <p class=\"clueText\">ATTENTION Agent {{userName}} You have a new clue!</p>\n\n        <!-- <button (click)=\"showClue()\">Let's Party!</button> -->\n      </div>\n\n      <div *ngFor=\"let clue of localClues; index as i\">\n        <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\">\n          <div class=\"thetime\">\n            <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n            <p class=\"date\">{{ time | date}} </p>\n          </div>\n          <p *ngIf=\"clue.clues != undefined; else photo\"> {{clue.clues}} </p>\n          <ng-template #photo>\n            <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\" alt=\"\">\n            </p>\n          </ng-template>\n          <ng-template #flag>\n\n            <p> She dropped this flag <img class=\"flag\" src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p>\n          </ng-template>\n          <div class=\"buttons\">\n            <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\"><i\n                class=\"material-icons\">fingerprint</i></button>\n            <button (click)=\"flyOut()\"><i class=\"material-icons\">airplanemode_active</i> </button>\n\n          </div>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"flight\" class=\"flyOut\">\n          <div class=\"thetime\">\n              <p class=\"clock\"> {{ time | date: 'shortTime'}} </p>\n              <p class=\"date\">{{ time | date}} </p>\n            </div>\n\n            <p class=\"city\">Choose a city</p>\n\n        <div *ngFor=\"let location of locations\">\n          <label for=\"{{location}}\">\n            <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n            {{location}}\n          </label>\n        </div>\n        <button (click)=\"goBack()\">Return to clue</button>\n        <button (click)=\"selectLocation()\">Fly Out</button>\n\n      </div>\n    \n    </div>\n  </section>\n  <!-- desktop bottom------------------------------------------------ -->\n  <footer>\n    <ul>\n          <li data-title=\"Finder\"><img data-title=\"Finder\"\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/finder.png\"></li>\n          <li data-title=\"Chrome\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png\"></li>\n          <li data-title=\"iTunes\" class=\"closed\" id=\"iTunes\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/iTunes-logo.svg\"></li>\n          <li data-title=\"Photoshop\"><img\n              src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/Adobe_Photoshop_CS6_icon.png\"></li>\n          <li data-title=\"Clues\"><img\n              src=\"../../assets/fingerprint.png\" (click)=\"showClue()\" class =\"clueIcon \"></li>\n          <!-- <li data-title=\"LinkedIn\"><a href=\"https://www.linkedin.com/in/james-g-bosley/\"><img\n                src=http://www.hr.ubc.ca/hr-networks/files/2014/04/linkedin-300x300.png> </a> </li>\n                 -->\n                 <li\n                data-title=\"System&nbsp;Preferences\"><img\n                src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/20140418_System_Preferences.png\">\n          </li>\n          <li data-title=\"Trash\"><img src=\"https://harnerdesigns.com/wp-content/uploads/2018/05/512-TrashIcon-macosx1.png\">\n          </li>\n        </ul>\n  </footer>\n</main>"

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

module.exports = "body {\n\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n\n}\n\nbutton {\n  height: 20px;\n  position: relative;\n  margin: -20px -50px;\n  width: 100px;\n  top: 50%;\n  left: 50%;\n\n}\n\np {\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n  margin-top: 0px;\n  margin-top: 25px;\n  margin-right: 10px;\ncolor: white;\nflex-direction: column;\ntext-align: center;\nwidth: 450px\n}\n\n#top {\n  left: 15%;\n  top: 20%;\n  position: absolute;\n  width: 400px;\n  height: 400px\n}\n\n#under {\n  left: 15%;\n  top: 20%;\n  position: absolute;\n  width: 385px;\n  height: 385px\n}\n\n.jail{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Bangers', cursive;\n    /* margin-top: 0px;\n    position: absolute;*/\n    margin-top: 250px;\n    margin-right:100px; \n    flex-direction: column;\n    height: 50%;\n    width: 50%\n}\n\n/* \n#spotlight {\n  animation: bottom-right 6s ease-in-out alternate infinite;\n  border-bottom: none;\n  border-left: solid 30vh transparent;\n  border-right: solid 30vh transparent;\n  border-bottom: solid 200vh rgba(255, 255, 255, .5);\n  transform-origin: top;\n\n}\n#spotlight {\n  animation: bottom-left 4s ease-in-out alternate infinite;\n  left: auto;\n  right: 0;\n}\n@keyframes bottom-left {\n  0% {\n    transform: rotate(-10deg);\n  }\n\n  100% {\n    transform: rotate(70deg);\n  }\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb240L2xvY2F0aW9uNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtKQUFrSjtFQUNsSiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUzs7QUFFWDs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0I7d0JBQ29CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWDtBQUNKOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRyIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uNC9sb2NhdGlvbjQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG5cbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogLTIwcHggLTUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcblxufVxucCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuY29sb3I6IHdoaXRlO1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbndpZHRoOiA0NTBweFxufVxuXG4jdG9wIHtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHhcbn1cblxuI3VuZGVyIHtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzg1cHg7XG4gIGhlaWdodDogMzg1cHhcbn1cblxuLmphaWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gICAgLyogbWFyZ2luLXRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xuICAgIG1hcmdpbi1yaWdodDoxMDBweDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlXG59XG4vKiBcbiNzcG90bGlnaHQge1xuICBhbmltYXRpb246IGJvdHRvbS1yaWdodCA2cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzMHZoIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDMwdmggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDIwMHZoIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG5cbn1cbiNzcG90bGlnaHQge1xuICBhbmltYXRpb246IGJvdHRvbS1sZWZ0IDRzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5Aa2V5ZnJhbWVzIGJvdHRvbS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZyk7XG4gIH1cbn0gKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/location4/location4.component.html":
/*!****************************************************!*\
  !*** ./src/app/location4/location4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"captured\">\n    <p >Congradualtions agent {{userName}}.</p>\n    <p >You have captured Carmen Sandiego!</p>\n    <p> You have been promoted to Sleuth.</p>\n      <button type=\"button\" class=\"beginNewCase\" routerLink=\"/landing-page\" routerLinkActive=\"active\">Return to\n        Office</button>\n  </div>\n\n<div class=\"jail\">\n\n<img id=\"under\"\nsrc=\"https://vignette.wikia.nocookie.net/qubo-channel/images/e/ed/Carmen_Sandiego.png/revision/latest?cb=20170716201725\"> \n\n   <img id=\"top\" class=\"animated bounceInDown\"\n      src=\"https://ecowall.com.ua/files/images/fabric/6/4.png\"> \n    \n</div>\n <!-- <div id=\"spotlight\"></div> -->\n</body>\n\n\n"

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
        this.apiKey = "563492ad6f91700001000001e6e48cd47bd449b78f60933192bbf8b8";
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

/***/ "./src/app/scores/scores.component.css":
/*!*********************************************!*\
  !*** ./src/app/scores/scores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3Jlcy9zY29yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scores/scores.component.html":
/*!**********************************************!*\
  !*** ./src/app/scores/scores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  scores works!\n</p>\n"

/***/ }),

/***/ "./src/app/scores/scores.component.ts":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScoresComponent = /** @class */ (function () {
    function ScoresComponent() {
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/scores/scores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScoresComponent);
    return ScoresComponent;
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

module.exports = __webpack_require__(/*! /Users/brittanyhardy/Desktop/Boot_Camp/BootCamp-VSCODE/Projects/Carmen-Sandiego-FP/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map