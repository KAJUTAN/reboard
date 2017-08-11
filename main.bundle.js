webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var log = new __WEBPACK_IMPORTED_MODULE_11__core_logger_service__["a" /* Logger */]('App');
var AppComponent = (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production) {
            __WEBPACK_IMPORTED_MODULE_11__core_logger_service__["a" /* Logger */].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].defaultLanguage, __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].supportedLanguages);
        // Change page title on navigation or language change, based on route data
        var onNavigationEnd = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* NavigationEnd */]; });
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].merge(this.translateService.onLangChange, onNavigationEnd)
            .map(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["Title"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__["a" /* I18nService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__issues_issues_module__ = __webpack_require__("../../../../../src/app/issues/issues.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // required by Angular Material





 // required by Angular Material







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_13__issues_issues_module__["a" /* IssuesModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_14__core_github_service__["a" /* GithubService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shell_shell_component__ = __webpack_require__("../../../../../src/app/core/shell/shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shell_header_header_component__ = __webpack_require__("../../../../../src/app/core/shell/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shell_settings_settings_component__ = __webpack_require__("../../../../../src/app/core/shell/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_http_service__ = __webpack_require__("../../../../../src/app/core/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__http_http_cache_service__ = __webpack_require__("../../../../../src/app/core/http/http-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








// Angular Material components
















function createHttpService(backend, defaultOptions, httpCacheService) {
    return new __WEBPACK_IMPORTED_MODULE_13__http_http_service__["a" /* HttpService */](backend, defaultOptions, httpCacheService);
}
var CoreModule = (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__shell_header_header_component__["a" /* HeaderComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__shell_shell_component__["a" /* ShellComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shell_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shell_settings_settings_component__["a" /* SettingsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_14__http_http_cache_service__["a" /* HttpCacheService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_14__http_http_cache_service__["a" /* HttpCacheService */]],
                useFactory: createHttpService
            }
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__shell_settings_settings_component__["a" /* SettingsComponent */]
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var REPOS_URL = 'https://api.github.com/repos/';
// Mock data
var PARTICIPATION_MOCK = 'assets/mocks/github/participation.json';
var LANGUAGES_MOCK = 'assets/mocks/github/languages.json';
var CONTRIBUTORS_MOCK = 'assets/mocks/github/contributors.json';
var REPO_INFO_MOCK = 'assets/mocks/github/info.json';
var OPEN_ISSUES_MOCK = 'assets/mocks/github/open-issues.json';
var CLOSED_ISSUES_MOCK = 'assets/mocks/github/closed-issues.json';
var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        // https://stackoverflow.com/questions/42555259/exchanging-data-between-sibling-components-in-angular-2
        this.repoName = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('angular/material2');
        this.repoName$ = this.repoName.asObservable(); // TODO: Should be in constructor?
        this.useRealData = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.useRealData$ = this.useRealData.asObservable();
    }
    GithubService.prototype.publishRepo = function (repoName) {
        this.repoName.next(repoName);
    };
    GithubService.prototype.toggleDataStatus = function (useRealData) {
        this.useRealData.next(useRealData);
    };
    GithubService.prototype.getRepoInfo = function (useRealData, repoName) {
        var apiUrl = useRealData ? REPOS_URL + repoName : REPO_INFO_MOCK;
        return this.http.get(apiUrl, { cache: true })
            .map(function (res) { return res.json(); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('Sorry, something went wrong, try again in a minute'); });
    };
    GithubService.prototype.getCommits = function (useRealData, repoName) {
        var apiUrl = useRealData ? REPOS_URL + repoName + '/stats/participation' : PARTICIPATION_MOCK;
        return this.http.get(apiUrl, { cache: true })
            .map(function (res) { return res.json().all; })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('Sorry, something went wrong, try again in a minute'); });
    };
    GithubService.prototype.getLanguages = function (useRealData, repoName) {
        var apiUrl = useRealData ? REPOS_URL + repoName + '/languages' : LANGUAGES_MOCK;
        return this.http.get(apiUrl, { cache: true })
            .map(function (res) { return res.json(); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('Sorry, something went wrong, try again in a minute'); });
    };
    GithubService.prototype.getContributors = function (useRealData, repoName) {
        var apiUrl = useRealData ? REPOS_URL + repoName + '/contributors' : CONTRIBUTORS_MOCK;
        return this.http.get(apiUrl, { cache: true })
            .map(function (res) { return res.json(); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('Sorry, something went wrong, try again in a minute'); });
    };
    GithubService.prototype.getIssues = function (useRealData, repoName, state) {
        var apiUrl = useRealData ? REPOS_URL + repoName + '/issues?state=' + state :
            state === 'open' ? OPEN_ISSUES_MOCK : CLOSED_ISSUES_MOCK;
        return this.http.get(apiUrl, { cache: true })
            .map(function (res) { return res.json(); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('Sorry, something went wrong, try again in a minute'); });
    };
    GithubService.prototype.repoExists = function (repo) {
        return this.http.get(REPOS_URL + repo)
            .map(function (res) { return res.json(); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('No such repo, please try again.'); });
    };
    return GithubService;
}());
GithubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/http-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var log = new __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* Logger */]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param {!string} url The request URL.
     * @param {any} params Optional request query parameters.
     * @param {ResponseOptions} data The received data.
     * @param {Date=} lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, params, data, lastUpdated) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug('Cache set for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?ResponseOptions} The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        var cacheEntry = this.cachedData[cacheKey];
        if (cacheEntry) {
            log.debug('Cache hit for key: "' + cacheKey + '"');
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?HttpCacheEntry} The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url, params) {
        return this.cachedData[this.getCacheKey(url, params)] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     */
    HttpCacheService.prototype.clearCache = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = undefined;
        log.debug('Cache cleared for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either local or session
     *   storage, or if no value is provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    ;
    HttpCacheService.prototype.getCacheKey = function (url, params) {
        return url + (params ? JSON.stringify(params) : '');
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.stringify(data) : {};
    };
    return HttpCacheService;
}());
HttpCacheService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HttpCacheService);

//# sourceMappingURL=http-cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_cache_service__ = __webpack_require__("../../../../../src/app/core/http/http-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request_options_args__ = __webpack_require__("../../../../../src/app/core/http/request-options-args.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var log = new __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */]('HttpService');
/**
 * Provides a base framework for http service extension.
 * The default extension adds support for API prefixing, request caching and default error handler.
 */
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, httpCacheService) {
        var _this = 
        // Customize default options here if needed
        _super.call(this, backend, defaultOptions) || this;
        _this.defaultOptions = defaultOptions;
        _this.httpCacheService = httpCacheService;
        return _this;
    }
    /**
     * Performs any type of http request.
     * You can customize this method with your own extended behavior.
     */
    HttpService.prototype.request = function (request, options) {
        var _this = this;
        options = options || {};
        var url;
        if (typeof request === 'string') {
            url = request;
            // request = environment.serverUrl + url;
        }
        else {
            url = request.url;
            // request.url = environment.serverUrl + url;
        }
        if (!options.cache) {
            // Do not use cache
            return this.httpRequest(request, options);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (subscriber) {
                var cachedData = options.cache === __WEBPACK_IMPORTED_MODULE_8__request_options_args__["a" /* HttpCachePolicy */].Update ? null : _this.httpCacheService.getCacheData(url);
                if (cachedData !== null) {
                    // Create new response to avoid side-effects
                    subscriber.next(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Response */](cachedData));
                    subscriber.complete();
                }
                else {
                    _this.httpRequest(request, options).subscribe(function (response) {
                        // Store the serializable version of the response
                        _this.httpCacheService.setCacheData(url, null, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* ResponseOptions */]({
                            body: response.text(),
                            status: response.status,
                            headers: response.headers,
                            statusText: response.statusText,
                            type: response.type,
                            url: response.url
                        }));
                        subscriber.next(response);
                    }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
                }
            });
        }
    };
    HttpService.prototype.get = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get }));
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post
        }));
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Put
        }));
    };
    HttpService.prototype.delete = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Delete }));
    };
    HttpService.prototype.patch = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Patch
        }));
    };
    HttpService.prototype.head = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Head }));
    };
    HttpService.prototype.options = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Options }));
    };
    // Customize the default behavior for all http requests here if needed
    HttpService.prototype.httpRequest = function (request, options) {
        var req = _super.prototype.request.call(this, request, options);
        if (!options.skipErrorHandler) {
            req = req.catch(this.errorHandler.bind(this));
        }
        return req;
    };
    // Customize the default error handler here if needed
    HttpService.prototype.errorHandler = function (response) {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            // Avoid unchaught exceptions on production
            log.error('Request error', response);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(response);
        }
        throw response;
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]));
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__http_cache_service__["a" /* HttpCacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__http_cache_service__["a" /* HttpCacheService */]) === "function" && _c || Object])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/request-options-args.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCachePolicy; });
/**
 * Cache policy for HTTP requests.
 * With the value 'Never' the request is always made and the cache is not used.
 * With the value 'Always' the request result is fetched from cache if possible, or the request is made and cached.
 * If the value 'Update' is used, a request will be forced and the cache entry updated.
 */
var HttpCachePolicy;
(function (HttpCachePolicy) {
    HttpCachePolicy[HttpCachePolicy["Never"] = false] = "Never";
    HttpCachePolicy[HttpCachePolicy["Always"] = true] = "Always";
    HttpCachePolicy[HttpCachePolicy["Update"] = 'update'] = "Update";
})(HttpCachePolicy || (HttpCachePolicy = {}));
//# sourceMappingURL=request-options-args.js.map

/***/ }),

/***/ "../../../../../src/app/core/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extract;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json__ = __webpack_require__("../../../../../src/translations/en-US.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__translations_en_US_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json__ = __webpack_require__("../../../../../src/translations/fr-FR.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
function extract(s) {
    return s;
}
var I18nService = (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json___default.a);
        translateService.setTranslation('fr-FR', __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json___default.a);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param {!string} defaultLanguage The default language to use.
     * @param {Array.<String>} supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = null;
        this.translateService.onLangChange
            .subscribe(function (event) { localStorage.setItem(languageKey, event.lang); });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return {string} The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param {string} language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey);
            var isSupportedLanguage = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"])(this.supportedLanguages, language);
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    return I18nService;
}());
I18nService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]) === "function" && _a || Object])
], I18nService);

var _a;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */ var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    return Logger;
}());

/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__ = __webpack_require__("../../../../../src/app/core/shell/shell.component.ts");

/**
 * Provides helper methods to create routes.
 */
var Route = (function () {
    function Route() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withShell = function (routes) {
        return [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__["a" /* ShellComponent */],
                children: routes
            }];
    };
    return Route;
}());

//# sourceMappingURL=route.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"\" color=\"primary\">\n\n    <button md-icon-button (click)=\"toggleNav()\">\n        <md-icon>menu</md-icon>\n    </button>\n\n    <span>{{pageTitle}}</span>\n\n    <span class=\"spacer\"></span>\n\n    <button md-icon-button (click)=\"openDialog()\">\n        <md-icon>settings</md-icon>\n    </button>\n\n</md-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/core/shell/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {MdSnackBar} from '@angular/material';



var HeaderComponent = (function () {
    function HeaderComponent(githubService, i18nService, 
        // private snackBar: MdSnackBar,
        dialog, titleService) {
        this.githubService = githubService;
        this.i18nService = i18nService;
        this.dialog = dialog;
        this.titleService = titleService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.pageTitle = this.titleService.getTitle();
    };
    HeaderComponent.prototype.toggleNav = function () {
        this.sidenav.toggle();
    };
    // setLanguage(language: string) {
    //     this.i18nService.language = language;
    // }
    //
    // get currentLanguage(): string {
    //     return this.i18nService.language;
    // }
    //
    // get languages(): string[] {
    //     return this.i18nService.supportedLanguages;
    // }
    HeaderComponent.prototype.openSnackBar = function () {
        // this.snackBar.openFromComponent(PlayerComponent);
    };
    HeaderComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */]);
        dialogRef.afterClosed().subscribe(function (input) {
            // console.log(input);
            if (input) {
                _this.githubService.publishRepo(input.value);
                _this.githubService.toggleDataStatus(input.enabled);
            }
        });
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/shell/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shell/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__github_service__["a" /* GithubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/shell/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"settings\" (ngSubmit)=\"submitDialog()\" fxLayout=\"column\">\n    <header class=\"settings__header\">Settings</header>\n    <md-list class=\"settings__list\" fxFlex=\"100%\">\n        <md-list-item class=\"settings__list__item\">\n            <div md-line>Use real data</div>\n            <p md-line>Limits to 60 requests per hour by Github</p>\n            <md-slide-toggle [(ngModel)]=\"checked\" (change)=\"toggleInputStatus()\" name=\"slide\"></md-slide-toggle>\n        </md-list-item>\n        <md-list-item>\n            <md-input-container class=\"settings__list__input\">\n                <input mdInput placeholder=\"{{placeholder}}\" [formControl]=\"repoInput\">\n                <md-error *ngIf=\"repoInput.hasError('required')\">\n                    A repository name is required\n                </md-error>\n                <md-error *ngIf=\"repoInput.hasError('repoExists')\">\n                    No such repo, please try again\n                </md-error>\n            </md-input-container>\n        </md-list-item>\n    </md-list>\n    <footer class=\"settings__footer\" fxFlexAlign=\"end\">\n        <button md-button type=\"reset\" (click)=\"closeDialog()\">DECLINE</button>\n        <button md-button type=\"submit\">APPLY</button>\n    </footer>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/core/shell/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings {\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  min-height: 300px;\n  height: 100%; }\n  .settings__header {\n    font-size: 1.43rem;\n    font-weight: 600; }\n  .settings__list {\n    padding-bottom: 24px; }\n    .settings__list__item {\n      margin: 0 -16px 24px -16px; }\n    .settings__list__input {\n      margin: 0 -16px 24px -16px;\n      width: 60%; }\n  .settings__footer {\n    margin: 0 -16px -16px 0; }\n    .settings__footer button {\n      font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shell/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {BehaviorSubject} from "rxjs/BehaviorSubject";
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SettingsComponent = (function () {
    function SettingsComponent(dialogRef, githubService) {
        this.dialogRef = dialogRef;
        this.githubService = githubService;
        this.placeholder = 'Repo name, e.g. angular/material2';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.checked = this.githubService.useRealData.getValue();
        this.repoName = this.githubService.repoName.getValue();
        this.repoInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: this.repoName, disabled: !this.checked }, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required
        ]);
    };
    SettingsComponent.prototype.toggleInputStatus = function () {
        if (this.checked) {
            return this.repoInput.enable();
        }
        this.repoInput.disable();
    };
    SettingsComponent.prototype.submitDialog = function () {
        var _this = this;
        // TODO: Only get in here if any other validations have passed
        if (this.checked) {
            this.githubService.repoExists(this.repoInput.value)
                .subscribe(function (res) {
                if (!res.id) {
                    _this.repoInput.setErrors({ repoExists: {} });
                }
                else {
                    _this.githubService.toggleDataStatus(true);
                    _this.dialogRef.close(_this.repoInput);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.githubService.toggleDataStatus(false);
            this.dialogRef.close();
        }
    };
    SettingsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/core/shell/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shell/settings/settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__github_service__["a" /* GithubService */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"sidenav-container\" [ngClass]=\"{'is-visible': navIsVisible, 'is-hidden': !navIsVisible}\">\n    <md-sidenav #sidenav mode=\"over\" class=\"sidenav\"\n                [ngClass]=\"{'is-visible': navIsVisible, 'is-hidden': !navIsVisible}\">\n        <md-toolbar class=\"sidenav__header\">\n            <md-list class=\"sidenav__header__list\">\n                <md-list-item>\n                    <md-icon md-list-icon class=\"sidenav__header__icon\">dashboard</md-icon>\n                    <h4 md-line class=\"sidenav__header__text\">Reboard</h4>\n                    <p md-line class=\"sidenav__header__subtext\">{{repoName}}</p>\n                </md-list-item>\n            </md-list>\n        </md-toolbar>\n        <md-nav-list class=\"sidenav__list\">\n            <a md-list-item routerLink=\"{{link.path}}\" *ngFor=\"let link of mainLinks\">\n                <md-icon class=\"sidenav__list__icon\">{{link.icon}}</md-icon>\n                {{link.name }}\n            </a>\n        </md-nav-list>\n\n        <md-nav-list class=\"sidenav__list\">\n            <a md-list-item href class=\"sidenav__list__icon\" *ngFor=\"let sublink of subLinks\">\n                <md-icon class=\"sidenav__list__icon\">{{sublink.icon}}</md-icon>\n                {{sublink.name }}\n            </a>\n        </md-nav-list>\n    </md-sidenav>\n    <app-header [sidenav]=\"sidenav\"></app-header>\n    <div class=\"sidenav__content\">\n        <router-outlet></router-outlet>\n    </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-container.is-visible .sidenav__content {\n  padding-left: 290px; }\n\n.sidenav {\n  width: 290px;\n  background-color: #fafafa;\n  overflow-x: hidden; }\n  .sidenav__header {\n    border-bottom: 1px solid rgba(117, 117, 117, 0.2); }\n    .sidenav__header__list {\n      margin-left: -16px;\n      padding-top: 0; }\n    .sidenav__header__text, .sidenav__header__subtext, .sidenav__header__icon {\n      line-height: 1.5rem;\n      color: #757575;\n      margin-left: -4px !important; }\n  .sidenav__list {\n    border-bottom: 1px solid rgba(117, 117, 117, 0.2);\n    padding: 16px 0; }\n    .sidenav__list a {\n      color: #757575;\n      font-size: 1rem; }\n    .sidenav__list__icon {\n      margin-right: 16px; }\n  .sidenav.is-visible {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    visibility: visible; }\n    .sidenav.is-visible .sidenav__header {\n      background: #607d8b;\n      border-bottom: none; }\n      .sidenav.is-visible .sidenav__header__text, .sidenav.is-visible .sidenav__header__subtext, .sidenav.is-visible .sidenav__header__icon {\n        color: whitesmoke; }\n  .sidenav.is-hidden {\n    visibility: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShellComponent = (function () {
    function ShellComponent(githubService) {
        this.githubService = githubService;
        this.mainLinks = [
            {
                name: 'Home',
                icon: 'home',
                path: '/home'
            },
            {
                name: 'Issues',
                icon: 'bug_report',
                path: '/issues'
            }
        ];
        this.subLinks = [
            {
                name: 'Settings',
                icon: 'settings'
            },
            {
                name: 'Open in Github',
                icon: 'code'
            }
        ];
    }
    ShellComponent.prototype.ngOnInit = function () {
        // Observable.from(this.githubService.repoName)
        //     .subscribe(title => this.repoName = title);
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(window, 'resize')
            .subscribe(function (event) {
            _this.checkNav(event);
        });
        if (window.innerWidth > 1490) {
            this.navIsVisible = true;
        }
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .combineLatest([
            this.githubService.useRealData$,
            this.githubService.repoName$
        ])
            .subscribe(function (_a) {
            var useRealData = _a[0], repoName = _a[1];
            _this.repoName = useRealData ? repoName : 'angular/material2 (mock)';
        }, function (err) {
            console.log(err);
        });
    };
    ShellComponent.prototype.checkNav = function (e) {
        if (e.target.innerWidth > 1490) {
            this.navIsVisible = true;
            return;
        }
        this.navIsVisible = false;
    };
    return ShellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdSidenav */]) === "function" && _a || Object)
], ShellComponent.prototype, "sidenav", void 0);
ShellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shell',
        template: __webpack_require__("../../../../../src/app/core/shell/shell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shell/shell.component.scss")]
        // encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_github_service__["a" /* GithubService */]) === "function" && _b || Object])
], ShellComponent);

var _a, _b;
//# sourceMappingURL=shell.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_route_service__ = __webpack_require__("../../../../../src/app/core/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = __WEBPACK_IMPORTED_MODULE_2__core_route_service__["a" /* Route */].withShell([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */], data: { title: Object(__WEBPACK_IMPORTED_MODULE_3__core_i18n_service__["b" /* extract */])('Home') } }
]);
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\" fxLayout=\"column\" fxLayoutAlign=\"center flex-start\">\n\n    <div class=\"home__stats\" fxFlex=\"701px\" fxFlex.sm=\"350px\" fxFlex.gt-sm=\"170px\" fxLayout fxLayout.lt-md=\"row wrap\"\n         fxLayoutAlign=\"space-between flex-start\" *ngIf=\"!isLoading\">\n        <md-card class=\"home__stat\" ngClass=\"{{'home__stat--' + stat.color}}\" fxFlex=\"100\" fxFlex.gt-xs=\"47\"\n                 *ngFor=\"let stat of stats\">\n            <md-card-header>\n                <md-card-title class=\"home__stat__title\">{{stat.value}}</md-card-title>\n                <md-card-subtitle class=\"home__stat__subtitle\">{{stat.text}}</md-card-subtitle>\n            </md-card-header>\n            <md-card-actions class=\"home__stat__actions\">\n                <button md-icon-button>\n                    <md-icon>more_vert</md-icon>\n                </button>\n            </md-card-actions>\n        </md-card>\n    </div>\n\n    <div class=\"home__charts\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between flex-start\">\n        <md-card class=\"home__chart\" fxFlex=\"100\" fxFlex.gt-sm=\"61\">\n            <md-card-header>\n                <div class=\"home__chart__title\" fxLayout fxLayoutAlign=\"space-between center\">\n                    <span>Contributions (last year)</span>\n                    <button md-icon-button>\n                        <md-icon>more_vert</md-icon>\n                    </button>\n                </div>\n            </md-card-header>\n            <md-card-content class=\"home__chart__content\">\n                <ngx-charts-line-chart *ngIf=\"!isLoading\"\n                                       [scheme]=\"colorScheme\"\n                                       [results]=\"commits\"\n                                       [xAxis]=\"true\"\n                                       [yAxis]=\"true\"\n                                       [showXAxisLabel]=\"true\"\n                                       [showYAxisLabel]=\"true\"\n                                       [xAxisLabel]=\"xAxisLabel\"\n                                       [yAxisLabel]=\"yAxisLabel\"\n                                       [autoScale]=\"true\"\n                                       (select)=\"onSelect($event)\">\n                </ngx-charts-line-chart>\n            </md-card-content>\n        </md-card>\n\n        <md-card class=\"home__chart\" fxFlex=\"100\" fxFlex.gt-sm=\"35.3\">\n            <md-card-header>\n                <div class=\"home__chart__title\" fxLayout fxLayoutAlign=\"space-between center\">\n                    <span>Stats</span>\n                    <button md-icon-button>\n                        <md-icon>more_vert</md-icon>\n                    </button>\n                </div>\n            </md-card-header>\n\n            <md-list *ngIf=\"!isLoading\">\n                <md-list-item *ngFor=\"let stat of stats\">\n                    <md-icon md-list-icon color=\"accent\">{{stat.icon}}</md-icon>\n                    <h4 md-line>{{stat.value}}</h4>\n                    <p md-line> {{stat.text}} </p>\n                </md-list-item>\n            </md-list>\n\n        </md-card>\n\n        <md-card class=\"home__chart\" fxFlex=\"100\" fxFlex.gt-sm=\"45.3\">\n            <md-card-header>\n                <div class=\"home__chart__title\" fxLayout fxLayoutAlign=\"space-between center\">\n                    <span>Languages (bytes)</span>\n                    <button md-icon-button>\n                        <md-icon>more_vert</md-icon>\n                    </button>\n                </div>\n            </md-card-header>\n            <md-card-content class=\"home__chart__content\">\n                <ngx-charts-pie-chart *ngIf=\"!isLoading\"\n                                      [scheme]=\"colorScheme\"\n                                      [results]=\"languages\"\n                                      [labels]=true\n                                      [doughnut]=true\n                                      (select)=\"onSelect($event)\">\n                </ngx-charts-pie-chart>\n            </md-card-content>\n        </md-card>\n\n\n        <md-card class=\"home__chart\" fxFlex=\"100\" fxFlex.gt-sm=\"51\">\n            <md-card-header>\n                <div class=\"home__chart__title\" fxLayout fxLayoutAlign=\"space-between center\">\n                    <span>Top contributors</span>\n                    <button md-icon-button>\n                        <md-icon>more_vert</md-icon>\n                    </button>\n                </div>\n            </md-card-header>\n            <md-card-content class=\"home__chart__content\">\n                <ngx-charts-bar-vertical\n                        *ngIf=\"!isLoading\"\n                        [scheme]=\"colorScheme\"\n                        [results]=\"contributors\"\n                        [gradient]=\"true\"\n                        [xAxis]=\"true\"\n                        [yAxis]=\"true\"\n                        [legend]=false\n                        (select)=\"onSelect($event)\">\n                </ngx-charts-bar-vertical>\n\n            </md-card-content>\n        </md-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n  height: calc(100vh - 64px);\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: #f5f5f5;\n  padding: 24px; }\n  .home__stats, .home__charts {\n    width: 100%;\n    margin-bottom: 16px; }\n  .home__stat, .home__chart {\n    box-shadow: 0 0 1px -4px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\n    margin: 8px; }\n  .home__stat {\n    color: white; }\n    .home__stat__title {\n      font-size: 2.3rem !important; }\n    .home__stat__subtitle {\n      color: white;\n      font-weight: 200; }\n    .home__stat__actions {\n      float: right; }\n    .home__stat--red {\n      background: #FE7675; }\n    .home__stat--blue {\n      background: #2DABE5; }\n    .home__stat--orange {\n      background: #FFC36D; }\n    .home__stat--green {\n      background: #54E69D; }\n  .home__chart {\n    min-height: 388px; }\n    .home__chart__title {\n      font-size: 1.4285rem;\n      width: 100%; }\n    .home__chart__content {\n      height: 300px;\n      overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(githubService) {
        this.githubService = githubService;
        // charts options
        this.xAxisLabel = 'Week';
        this.yAxisLabel = 'Commits';
        this.colorScheme = {
            domain: ['#FE7675', '#2095F2', '#4DAE4E', '#FE9900']
        };
        // Stats widget
        this.stats = [
            {
                value: 0,
                text: 'stargazers',
                icon: 'star',
                color: 'red'
            },
            {
                value: 0,
                text: 'forks',
                icon: 'content_copy',
                color: 'blue'
            },
            {
                value: 0,
                text: 'open issues',
                icon: 'bug_report',
                color: 'orange'
            },
            {
                value: 0,
                text: 'subscribers',
                icon: 'rss_feed',
                color: 'green'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Load data for dashboard
        this.loadData(false);
        // Subscribe to changes happened within settings modal (use of real data and repo name)
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .combineLatest([
            this.githubService.useRealData$,
            this.githubService.repoName$
        ])
            .subscribe(function (_a) {
            var useRealData = _a[0], repoName = _a[1];
            _this.loadData(useRealData, repoName);
        }, function (err) {
            console.log(err);
        });
    };
    // Load data for dashboard
    HomeComponent.prototype.loadData = function (useRealData, repoName) {
        var _this = this;
        var commits = [{ 'name': 'Commits', 'series': [] }];
        var languages = [];
        var contributors = [];
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .forkJoin([
            this.githubService.getCommits(useRealData, repoName),
            this.githubService.getLanguages(useRealData, repoName),
            this.githubService.getContributors(useRealData, repoName),
            this.githubService.getRepoInfo(useRealData, repoName)
        ])
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (results) {
            // Prepare data for contributions chart
            results[0].map(function (obj, idx) {
                return commits[0].series.push({
                    'name': idx + 1,
                    'value': obj
                });
            });
            _this.commits = commits;
            // Prepare data for languages chart
            Object.keys(results[1]).map(function (obj, idx) { return languages.push({ 'name': obj, 'value': results[1][obj] }); });
            _this.languages = languages;
            // Prepare data for top contributors chart
            results[2].map(function (obj, idx) {
                if (idx < 10) {
                    contributors.push({ 'name': obj.login, 'value': obj.contributions });
                }
            });
            _this.contributors = contributors;
            // Prepare data for statistics card
            _this.stats[0].value = results[3].stargazers_count.toLocaleString();
            _this.stats[1].value = results[3].forks.toLocaleString();
            _this.stats[2].value = results[3].open_issues.toLocaleString();
            _this.stats[3].value = results[3].subscribers_count.toLocaleString();
        }, function (err) {
            console.log(err);
        });
    };
    // ngx-charts on select event
    HomeComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_github_service__["a" /* GithubService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Angular Material components









var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdListModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__home_component__["a" /* HomeComponent */]
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/issues/issues-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_route_service__ = __webpack_require__("../../../../../src/app/core/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issues_component__ = __webpack_require__("../../../../../src/app/issues/issues.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = __WEBPACK_IMPORTED_MODULE_2__core_route_service__["a" /* Route */].withShell([
    { path: 'issues', component: __WEBPACK_IMPORTED_MODULE_4__issues_component__["a" /* IssuesComponent */], data: { title: Object(__WEBPACK_IMPORTED_MODULE_3__core_i18n_service__["b" /* extract */])('Issues') } }
]);
var IssuesRoutingModule = (function () {
    function IssuesRoutingModule() {
    }
    return IssuesRoutingModule;
}());
IssuesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], IssuesRoutingModule);

//# sourceMappingURL=issues-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/issues/issues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"issues\">\n    <md-tab-group class=\"issues__tabs\">\n        <md-tab label=\"Open\" fxLayout=\"row wrap\">\n            <md-card class=\"issues__card\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" *ngFor=\"let issue of openIssues\">\n                <md-card-header>\n                    <div md-card-avatar [ngStyle]=\"{'background-image': 'url(' + issue.user.avatar_url + ')'}\"></div>\n                    <md-card-title>Issue <strong>{{issue.number}}</strong> by {{issue.user.login}}</md-card-title>\n                    <md-card-subtitle>{{issue.title}} <br/><br/> <i>Created at {{issue.created_at | date}}</i>\n                    </md-card-subtitle>\n                </md-card-header>\n                <md-card-actions fxLayoutAlign=\"end center\" fxFlexAlign=\"end\">\n                    <a md-button href=\"{{issue.html_url}}\" target=\"_blank\" color=\"accent\">OPEN IN GITHUB</a>\n                </md-card-actions>\n            </md-card>\n        </md-tab>\n        <md-tab label=\"Closed\">\n            <md-card class=\"issues__card\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" *ngFor=\"let issue of closedIssues\">\n                <md-card-header>\n                    <div md-card-avatar [ngStyle]=\"{'background-image': 'url(' + issue.user.avatar_url + ')'}\"></div>\n                    <md-card-title>Issue <strong>{{issue.number}}</strong> by {{issue.user.login}}</md-card-title>\n                    <md-card-subtitle>{{issue.title}} <br/><br/> <i>Closed at {{issue.closed_at | date}}</i>\n                    </md-card-subtitle>\n                </md-card-header>\n                <md-card-actions fxLayoutAlign=\"end center\" fxFlexAlign=\"end\">\n                    <a md-button href=\"{{issue.html_url}}\" target=\"_blank\" color=\"accent\">OPEN IN GITHUB</a>\n                </md-card-actions>\n            </md-card>\n        </md-tab>\n    </md-tab-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/issues/issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".issues__tabs .mat-tab-labels {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.issues__tabs .mat-tab-nav-bar,\n.issues__tabs .mat-tab-header {\n  border-bottom: none;\n  background-color: white; }\n\n.issues__tabs .mat-tab-body-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.issues__tabs .mat-tab-body {\n  height: calc(100vh - 113px); }\n\n.issues__card.mat-card {\n  width: 90%;\n  margin-top: 15px;\n  box-shadow: 0 0 1px -4px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; }\n  @media (min-width: 480px) {\n    .issues__card.mat-card {\n      width: 90%;\n      margin-top: 25px; } }\n  @media (min-width: 768px) {\n    .issues__card.mat-card {\n      width: 80%; } }\n  @media (min-width: 768px) {\n    .issues__card.mat-card {\n      width: 40%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issues/issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_github_service__ = __webpack_require__("../../../../../src/app/core/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssuesComponent = (function () {
    function IssuesComponent(githubService) {
        this.githubService = githubService;
    }
    IssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Load data for dashboard
        this.loadData(false);
        // Subscribe to changes happened within settings modal (use of real data and repo name)
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .combineLatest([
            this.githubService.useRealData$,
            this.githubService.repoName$
        ])
            .subscribe(function (_a) {
            var useRealData = _a[0], repoName = _a[1];
            _this.loadData(useRealData, repoName);
        }, function (err) {
            console.log(err);
        });
    };
    // Load data for issues
    IssuesComponent.prototype.loadData = function (useRealData, repoName) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .forkJoin([
            this.githubService.getIssues(useRealData, repoName, 'open'),
            this.githubService.getIssues(useRealData, repoName, 'closed')
        ])
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (results) {
            _this.openIssues = results[0];
            _this.closedIssues = results[1];
        });
    };
    return IssuesComponent;
}());
IssuesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issues',
        template: __webpack_require__("../../../../../src/app/issues/issues.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issues/issues.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_github_service__["a" /* GithubService */]) === "function" && _a || Object])
], IssuesComponent);

var _a;
//# sourceMappingURL=issues.component.js.map

/***/ }),

/***/ "../../../../../src/app/issues/issues.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issues_routing_module__ = __webpack_require__("../../../../../src/app/issues/issues-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__issues_component__ = __webpack_require__("../../../../../src/app/issues/issues.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Angular Material components








var IssuesModule = (function () {
    function IssuesModule() {
    }
    return IssuesModule;
}());
IssuesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__issues_routing_module__["a" /* IssuesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdIconModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__issues_component__["a" /* IssuesComponent */]
        ],
        providers: []
    })
], IssuesModule);

//# sourceMappingURL=issues.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\n  <i class=\"fa fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.isLoading = false;
        this.message = null;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    return LoaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoaderComponent.prototype, "isLoading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "message", void 0);
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/shared/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loader/loader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__ = __webpack_require__("../../../../../src/app/shared/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
        ],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    version: '(dev)',
    serverUrl: '/api',
    defaultLanguage: 'en-US',
    supportedLanguages: [
        'en-US',
        'fr-FR'
    ]
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/translations/en-US.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"Material Music","Version":"Version","Home":"Home","About":"About","Hello world !":"Hello world !"}

/***/ }),

/***/ "../../../../../src/translations/fr-FR.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"Material Music","Version":"Version","Home":"Accueil","About":"A propos","Hello world !":"Bonjour le monde !"}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map