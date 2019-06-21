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
        this.id = 0;
    }
    ClueService.prototype.getClues = function (nextCity) {
        return this.http.get("http://localhost:3000/clues/" + nextCity, { responseType: 'json' });
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
        console.log(this.locations);
        return this.locations;
    };
    ClueService.prototype.setLocation2 = function () {
        var randomIndex = Math.floor(Math.random() * this.locations.length);
        this.secondCity = this.locations[randomIndex];
        this.locations.splice(randomIndex, 1);
        this.redHerrings.push(this.redHerring[randomIndex]);
        this.redHerring.splice(randomIndex, 1);
        console.log(this.locations);
        return this.locations;
    };
    ClueService.prototype.setLocation3 = function () {
        var randomIndex = Math.floor(Math.random() * this.locations.length);
        this.thirdCity = this.locations[randomIndex];
        this.locations.splice(randomIndex, 1);
        this.redHerrings.push(this.redHerring[randomIndex]);
        this.redHerring.splice(randomIndex, 1);
        console.log(this.locations);
        console.log(this.redHerrings);
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
            _this.loc1Clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
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
            _this.loc2Clues.unshift({ photo: response["photos"]["" + _this.randomPhoto].src.small });
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
            _this.loc3Clues.unshift({ photo: response["photos"][0].src.small });
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

module.exports = "body {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\nbutton {\n  height: 20px;\n  position: relative;\n  margin: -20px -50px;\n  width: 100px;\n  top: 50%;\n  left: 100%;\n\n}\np {\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n  margin-top: 0px;\n  margin-top: 25px;\n  margin-right: 10px;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n  width: 450px\n}\nimg{\n    width: 80%;\n    height: 50%;\n}\n.gif{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n}\nh3 {\n  color: red;\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers',\n    cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW92ZXIvZ2FtZW92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtKQUFrSjtFQUNsSiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7O0FBRVo7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7QUFDRjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtXQUNTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9nYW1lb3Zlci9nYW1lb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5idXR0b24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAtMjBweCAtNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwJTtcblxufVxucCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQ1MHB4XG59XG5pbWd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cbi5naWZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5oMyB7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsXG4gICAgY3Vyc2l2ZTtcbn0iXX0= */"

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

module.exports = "body{\n   background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n   background-repeat: no-repeat;\n   background-size: cover;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   height: 100%;\n   width: 100%;\n}\n\n  .email {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 8px;\n    opacity: 0.7;\n    width: 80%;\n    height: 70%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n  }\n\n  button {\n    font-family: 'Roboto', sans-serif;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrSkFBa0o7R0FDbEosNEJBQTRCO0dBQzVCLHNCQUFzQjtHQUN0QixhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLHVCQUF1QjtHQUN2QixtQkFBbUI7R0FDbkIsWUFBWTtHQUNaLFdBQVc7QUFDZDs7RUFFRTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4gIC5lbWFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    \n              <div class=\"email\">\n              <p>ACME HEADQUARTERS</p>\n\n              <p>\n                <!-- <img src=\"src/app/home/giphy-3.gif\" alt=\"\"> -->\n              </p>\n              <p>Agent {{userName}} we have just been informed that Carmen Sandiego has stolen the Eiffel Tower! You need to catch her</p>\n              <p>You have 24 hours to capture Carmen before the trail goes cold, hurry Agent {{userName}}, don't let Carmen escape! </p>\n              <button routerLink=\"/location1\" routerLinkActive=\"active\">View Message</button>\n            </div>\n        \n   \n</body>\n  "

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

module.exports = ".home {\n    background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n\nimg {\n    height: 500px;\n    width: 500px;\n}\n\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    height: 5%;\n    width: 30%;\n    border-radius: 8px;\n    margin-top: 2%;\n    opacity: 0.7;\n    background-color: white;\n    border-color: rgb(77, 78, 78);\n}\n\n\n.agentForm {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n    background-color: lightgray;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.acme {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0px;\n    font-size: 20px;\n}\n\n\n.welcome {\n    font-size: 30px;\n    margin-top: 0px;\n}\n\n\n.beginCase {\n    height: 40%;\n    width: 90%;\n    border-radius: 8px;\n    color: black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n.form {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\nform {\n    background-color: lightgray;\n}\n\n\n.enterName {\n    margin-top: 0;\n    font-size: 20px;\n}\n\n\ninput {\n    width:300%;\n    border-radius: 8px;\n    height: 30px;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n#spotlight {\n  -webkit-animation: bottom-right 6s ease-in-out alternate infinite;\n          animation: bottom-right 6s ease-in-out alternate infinite;\n  border-bottom: none;\n  border-left: solid 30vh transparent;\n  border-right: solid 30vh transparent;\n  border-bottom: solid 200vh rgba(255, 255, 255, .5);\n  transform-origin: top;\n\n}\n\n\n#spotlight {\n  -webkit-animation: bottom-left 4s ease-in-out alternate infinite;\n          animation: bottom-left 4s ease-in-out alternate infinite;\n  left: auto;\n  right: 0;\n}\n\n\n@-webkit-keyframes bottom-left {\n  0% {\n    transform: rotate(-10deg);\n  }\n\n  100% {\n    transform: rotate(70deg);\n  }\n}\n\n\n@keyframes bottom-left {\n  0% {\n    transform: rotate(-10deg);\n  }\n\n  100% {\n    transform: rotate(70deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0pBQWtKO0lBQ2xKLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0RUFBNEU7QUFDaEY7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0FBQ2hGOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7OztBQUdBO0VBQ0UsaUVBQXlEO1VBQXpELHlEQUF5RDtFQUN6RCxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxrREFBa0Q7RUFDbEQscUJBQXFCOztBQUV2Qjs7O0FBRUE7RUFDRSxnRUFBd0Q7VUFBeEQsd0RBQXdEO0VBQ3hELFVBQVU7RUFDVixRQUFRO0FBQ1Y7OztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7O0FBUkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kyLndwLmNvbS93d3cua2FsdXNhbG9uYW5kc3BhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9ibGFjay1icmljay1iYWNrZ3JvdW5kLWthbHUtc2Fsb24tYmxhY2stZnJpZGF5LXNhbGVzLXdlYi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmltZyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHJnYig3NywgNzgsIDc4KTtcbn1cblxuLmFnZW50Rm9ybSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmFjbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLndlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5iZWdpbkNhc2Uge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5lbnRlck5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6MzAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4jc3BvdGxpZ2h0IHtcbiAgYW5pbWF0aW9uOiBib3R0b20tcmlnaHQgNnMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogc29saWQgMzB2aCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzMHZoIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAyMDB2aCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuXG59XG5cbiNzcG90bGlnaHQge1xuICBhbmltYXRpb246IGJvdHRvbS1sZWZ0IDRzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbkBrZXlmcmFtZXMgYm90dG9tLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n<section class=\"home\">\n<img src=\"http://penrycreative.com/wp-content/uploads/2016/08/Carmen-Sandiego_Circular-Logo-Design.png\" alt=\"Carmen Sandiego Logo\">\n<button class=\"newCase\" (click)=\"toggleDisplay()\">Start A New Case</button>\n</section>\n\n<section class=\"agentForm\" *ngIf=\"!shouldBeShown\">\n  <p class=\"welcome\">Welcome to the ACME Detective Agency! </p>\n  <p class=\"acme\">Our main goal here at ACME is to caputre the elusive Carmen Sandiego!</p>\n  <p class=\"enterName\">If you feel up to the task of catching this international criminal, then please...</p>\n  <form class=\"form\" #agentForm=\"ngForm\" (ngSubmit)=\"setUserName(agentForm)\">\n    <label for=\"\">Enter Agent Name:</label>\n    <input type=\"text\" [(ngModel)]=\"userName\"  name=\"userName\"/>\n    <button type=\"button\" class=\"beginCase\" routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"setUserName(agentForm)\">Begin Case</button>\n  </form>\n</section>\n <div id=\"spotlight\"></div>\n</body>\n\n"

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
    LandingPageComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uMS9sb2NhdGlvbjEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/location1/location1.component.html":
/*!****************************************************!*\
  !*** ./src/app/location1/location1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\nrel=\"stylesheet\">\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n  \n        <div class=\"clueOneScreen\">\n              <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n           \n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n              <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n\n        <div *ngIf=\"flight\" class=\"flyOut\"> \n            <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div *ngFor=\"let location of locations\"> \n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation()\">Fly Out</button>\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n            </div>\n</div>\n</section>\n\n"

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
        this.randomPhoto = Math.floor((Math.random() * 15)); // used to get a random index number for background photo
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
        this.currentCity = this.clueService.startingCity;
        this.nextCity = this.clueService.secondCity;
        this.clues = this.clueService.loc1Clues;
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.landscape;
            // below is used to shuffle clues array and save it as localClues array
            var currentIndex = _this.clues.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                console.log(_this.localClues);
            }
            // gets the redHerring option from service then a wrong city
            _this.redHerring = _this.clueService.redHerrings[1];
            _this.wrongLocation = _this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        var currentIndex = this.locations.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[currentIndex];
            this.locations[currentIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
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

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\nrel=\"stylesheet\">\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n  \n        <div class=\"clueOneScreen\">\n              <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n           \n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n              <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n\n        <div *ngIf=\"flight\" class=\"flyOut\"> \n            <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div *ngFor=\"let location of locations\"> \n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation()\">Fly Out</button>\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n            </div>\n</div>\n</section>\n\n"

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
        this.currentCity = this.clueService.secondCity;
        this.nextCity = this.clueService.thirdCity;
        this.clues = this.clueService.loc2Clues;
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.landscape;
            // below is used to shuffle clues array and save it as localClues array
            var currentIndex = _this.clues.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                console.log(_this.localClues);
            }
            // gets the redHerring option from service then a wrong city
            _this.redHerring = _this.clueService.redHerrings[2];
            _this.wrongLocation = _this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        var currentIndex = this.locations.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[currentIndex];
            this.locations[currentIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
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

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Roboto:100&display=swap\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\nrel=\"stylesheet\">\n\n  <section class=\"background-image\" [ngStyle]=\"{'background-image': 'url('+ photoURL+')'}\">\n  \n        <div class=\"clueOneScreen\">\n              <div *ngIf=\"clueNumber === -2\" class=\"cluePopUp\" >\n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p class=\"clueText\">Hi Agent {{userName}} i am a Clue</p>\n              <button (click)=\"showClue()\">Let's Party!</button>\n          </div>\n           \n          <div *ngFor=\"let clue of localClues; index as i\" >\n            <div class=\"clueDiv\" *ngIf=\"i === this.clueNumber\" > \n              <div class=\"clock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n              <p *ngIf=\"clue.clues != undefined; else photo\" > {{clue.clues}} </p>\n              <ng-template #photo> <p *ngIf=\"clue.photo != undefined; else flag\"> She dropped this photo: <img src=\"{{clue.photo}}\"  alt=\"\"> </p> </ng-template>\n              <ng-template #flag> <p> She dropped this flag <img src=\"https://www.countryflags.io/{{clue.flag}}/shiny/64.png\"> </p> </ng-template>\n              <div class=\"buttons\">\n                <button *ngIf=\"this.clueNumber < 2\" (click)=\"nextClue()\">Clues <i class=\"material-icons\">fingerprint</i></button> \n                <button (click)=\"flyOut()\">Fly Out<i class=\"material-icons\">airplanemode_active</i> </button>\n              </div>\n            </div>\n          </div>\n\n        <div *ngIf=\"flight\" class=\"flyOut\"> \n            <div class=\"flyOutClock\"> <p> {{ time | date: 'shortTime'}} </p> <p class=\"date\"> {{ time | date}} </p> </div>\n          <div *ngFor=\"let location of locations\"> \n            <label for=\"{{location}}\">\n              <input type=\"radio\" id=\"{{location}}\" name=\"nextCity\" [value]=\"location\" [(ngModel)]=\"selectedCity\">\n              {{location}}\n            </label>\n          </div>\n          <button (click)=\"goBack()\">Return to clue</button>\n          <button (click)=\"selectLocation()\">Fly Out</button>\n      </div>\n      <div *ngIf=\"wrong\" class=\"wrong\">\n        <h2>Sorry, there's no sign of her here!</h2>\n          <button (click)=\"goBackAirport()\">Try Again!</button>\n            </div>\n</div>\n</section>\n\n"

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
        this.currentCity = this.clueService.thirdCity;
        this.clues = this.clueService.loc3Clues;
        // this gets a random photo of current city to use as background image
        this.pexelService.getLocationPhoto(this.currentCity).subscribe(function (response) {
            _this.photoURL = response["photos"]["" + _this.randomPhoto].src.landscape;
            // below is used to shuffle clues array and save it as localClues array
            var currentIndex = _this.clues.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                var temporaryValue = _this.clues[currentIndex];
                _this.clues[currentIndex] = _this.clues[randomIndex];
                _this.clues[randomIndex] = temporaryValue;
                _this.localClues = _this.clues;
                console.log(_this.localClues);
            }
            // gets the redHerring option from service then a wrong city
            _this.redHerring = _this.clueService.location4redHerring;
            _this.wrongLocation = _this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
            _this.locations.push(_this.redHerring, _this.wrongLocation, _this.nextCity);
            console.log(_this.locations);
            return _this.localClues;
        });
        var currentIndex = this.locations.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var tempArray = [];
            var temporaryValue = this.locations[currentIndex];
            this.locations[currentIndex] = this.locations[randomIndex];
            this.locations[randomIndex] = temporaryValue;
            tempArray = this.locations;
            this.locations = tempArray;
            console.log(this.locations);
        }
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

module.exports = "body {\n  background: url(https://i2.wp.com/www.kalusalonandspa.com/wp-content/uploads/2017/01/black-brick-background-kalu-salon-black-friday-sales-web.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\nbutton {\n  height: 20px;\n  position: relative;\n  margin: -20px -50px;\n  width: 100px;\n  top: 50%;\n  left: 50%;\n}\np {\n  display: flex;\n  font-size: 30px;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Bangers', cursive;\n  margin-top: 0px;\n  margin-top: 25px;\n  margin-right: 10px;\ncolor: white;\nflex-direction: column;\ntext-align: center;\nwidth: 450px\n}\n#top {\n  left: 5%;\n  top: 10%;\n  position: absolute;\n  width: 400px;\n  height: 400px\n}\n#under {\n  left: 5%;\n  top: 10%;\n  position: absolute;\n  width: 385px;\n  height: 385px\n}\n.jail{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 50%;\n    width: 50%\n}\n#spotlight {\n  -webkit-animation: bottom-right 6s ease-in-out alternate infinite;\n          animation: bottom-right 6s ease-in-out alternate infinite;\n  border-bottom: none;\n  border-left: solid 30vh transparent;\n  border-right: solid 30vh transparent;\n  border-bottom: solid 200vh rgba(255, 255, 255, .5);\n  transform-origin: top;\n\n}\n#spotlight {\n  -webkit-animation: bottom-left 4s ease-in-out alternate infinite;\n          animation: bottom-left 4s ease-in-out alternate infinite;\n  left: auto;\n  right: 0;\n}\n@-webkit-keyframes bottom-left {\n  0% {\n    transform: rotate(-10deg);\n  }\n\n  100% {\n    transform: rotate(70deg);\n  }\n}\n@keyframes bottom-left {\n  0% {\n    transform: rotate(-10deg);\n  }\n\n  100% {\n    transform: rotate(70deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb240L2xvY2F0aW9uNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0pBQWtKO0VBQ2xKLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFFQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWjtBQUNGO0FBRUE7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7QUFDRjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWDtBQUNKO0FBRUE7RUFDRSxpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLGtEQUFrRDtFQUNsRCxxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxnRUFBd0Q7VUFBeEQsd0RBQXdEO0VBQ3hELFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7QUFSQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbjQvbG9jYXRpb240LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaTIud3AuY29tL3d3dy5rYWx1c2Fsb25hbmRzcGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAxL2JsYWNrLWJyaWNrLWJhY2tncm91bmQta2FsdS1zYWxvbi1ibGFjay1mcmlkYXktc2FsZXMtd2ViLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbmJ1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IC0yMHB4IC01MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5jb2xvcjogd2hpdGU7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xudGV4dC1hbGlnbjogY2VudGVyO1xud2lkdGg6IDQ1MHB4XG59XG5cbiN0b3Age1xuICBsZWZ0OiA1JTtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4XG59XG5cbiN1bmRlciB7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzg1cHg7XG4gIGhlaWdodDogMzg1cHhcbn1cblxuLmphaWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDUwJVxufVxuXG4jc3BvdGxpZ2h0IHtcbiAgYW5pbWF0aW9uOiBib3R0b20tcmlnaHQgNnMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogc29saWQgMzB2aCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzMHZoIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAyMDB2aCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuXG59XG4jc3BvdGxpZ2h0IHtcbiAgYW5pbWF0aW9uOiBib3R0b20tbGVmdCA0cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuQGtleWZyYW1lcyBib3R0b20tbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/location4/location4.component.html":
/*!****************************************************!*\
  !*** ./src/app/location4/location4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Oswald&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Special+Elite&display=swap\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Bangers&display=swap\" rel=\"stylesheet\">\n\n\n<body>\n  <div class=\"captured\">\n    <p >Congradualtions agent {{userName}}.</p>\n    <p >You have captured Carmen Sandiego!</p>\n    <p> You have been promoted to Sleuth.</p>\n      <button type=\"button\" class=\"beginNewCase\" routerLink=\"/landing-page\" routerLinkActive=\"active\">Return to\n        Office</button>\n  </div>\n\n<div class=\"jail\">\n\n<img id=\"under\"\nsrc=\"https://vignette.wikia.nocookie.net/qubo-channel/images/e/ed/Carmen_Sandiego.png/revision/latest?cb=20170716201725\"> \n\n   <img id=\"top\" class=\"animated bounceInDown\"\n      src=\"https://ecowall.com.ua/files/images/fabric/6/4.png\"> \n    \n</div>\n <!-- <div id=\"spotlight\"></div> -->\n</body>\n"

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
        this.apiKey = "563492ad6f917000010000014a9669d68f174ec5af529706f09b0407";
        // apiKey:string = "563492ad6f91700001000001e6e48cd47bd449b78f60933192bbf8b8";
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