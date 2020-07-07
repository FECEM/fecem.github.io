(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");





const routes = [
    { path: '**', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'fe-software';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_content_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/content/timeline/timeline.component */ "./src/app/components/content/timeline/timeline.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
        _components_content_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                    _components_content_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/components/content/timeline/timeline.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContentComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r3 ? "skill-item" : "skill-item no-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function ContentComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_div_54_div_1_Template, 3, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
} }
class ContentComponent {
    constructor(http) {
        this.http = http;
        this.educationTimelineItems = [];
        this.experienceTimelineItems = [];
        this.skillsTimelineItems = [];
    }
    ngOnInit() {
        this.http.get('assets/data/educacion.json').subscribe(data => {
            this.educationTimelineItems = data;
        });
        this.http.get('assets/data/experiencia.json').subscribe(data => {
            this.experienceTimelineItems = data;
        });
        this.http.get('assets/data/habilidades.json').subscribe(data => {
            this.skillsTimelineItems = data;
        });
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 119, vars: 3, consts: [[1, "content"], [1, "about"], [1, "container"], [1, "columns"], [1, "column", 2, "text-align", "center"], [1, "columns", "personal-info"], [1, "column", "photo"], ["src", "./../../../assets/imagenes/write.jpg"], [1, "column", "info"], [1, "column"], [1, "info-item"], [1, "columns", "experience"], [3, "items"], ["class", "columns skills", 4, "ngFor", "ngForOf"], [1, "services"], [1, "service-item"], [1, "fas", "fa-laptop-code"], [1, "fas", "fa-cogs"], [1, "fas", "fa-file-code"], [1, "contact"], [1, "column", "is-4", "is-offset-2"], [1, "field"], [1, "label"], [1, "control"], ["placeholder", "Nombre completo*", 1, "input"], [1, "column", "is-4"], ["placeholder", "Correo Electr\u00F3nico*", 1, "input"], [1, "column", "is-8", "is-offset-2"], ["name", "message", "id", "message", "placeholder", "Mensaje*", 1, "input"], [1, "column", "is-8", "is-offset-2", 2, "text-align", "center"], [1, "button", "is-medium", "is-primary"], [1, "columns", "skills"], ["class", "column", 4, "ngFor", "ngForOf"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Acerca de m\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fernando Enrique Escalante Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "30 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "lcs.fernando.escalante@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-timeline", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-timeline", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Habilidades y Tecnolog\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContentComponent_div_54_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Desarrollo de Aplicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Desarrollo de Servicios API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Paginas Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Mantenimiento de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Enviar Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.educationTimelineItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.experienceTimelineItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsTimelineItems);
    } }, directives: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.75em;\n  padding: 40px 0px;\n  margin-bottom: 0;\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n  padding-bottom: 6rem !important;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  padding-bottom: 52px;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  font-size: 17px;\n  text-align: center;\n  border: 1px solid #bdc3c7;\n  padding: 8px 10px;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-item.no-border[_ngcontent-%COMP%] {\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]:hover {\n  background-color: #ecf0f1;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  background-color: #2d3436;\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  border: 1px solid #1abc9c;\n  border-radius: 7px;\n  padding: 32px 12px;\n  height: 256px;\n  text-align: center;\n  font-size: 52px;\n  transition: border-width 0.2s ease-in;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px !important;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  border-width: 5px;\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  padding-bottom: 42px;\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   textarea[name=message][_ngcontent-%COMP%] {\n  height: 150px;\n  resize: none;\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: #ecf0f1;\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .is-focused.input[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .is-focused.textarea[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select.is-focused[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .is-active.input[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .is-active.textarea[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select.is-active[_ngcontent-%COMP%] {\n  border-color: #1abc9c;\n  box-shadow: 0 0 0 0.125em rgba(26, 188, 156, 0.25);\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .button.is-primary[_ngcontent-%COMP%] {\n  background-color: #1abc9c;\n  border-color: #1abc9c;\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .button.is-primary[_ngcontent-%COMP%]:hover {\n  background-color: #16a085;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBR0U7OztFQUdFLGtCQUFBO0VBQ0EsK0JBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQU1NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSlI7QUFNUTtFQUNFLGdCQUFBO0FBSlY7QUFVTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVJSO0FBVVE7RUFDRSxZQUFBO0FBUlY7QUFXUTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFUVjtBQWVFO0VBRUUseUJBQUE7RUFDQSxjQUFBO0FBZEo7QUFnQkk7RUFDRSxjQUFBO0FBZE47QUFpQkk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEscUNBQUE7QUFoQk47QUFrQk07RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBaEJSO0FBbUJNO0VBQ0UsZUFBQTtBQWpCUjtBQW9CTTtFQUVFLGlCQUFBO0FBbkJSO0FBd0JFO0VBQ0Usb0JBQUE7QUF0Qko7QUF3Qkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQXRCTjtBQXlCSTs7RUFFRSxxQkFBQTtBQXZCTjtBQTBCSTs7Ozs7Ozs7Ozs7O0VBWUUscUJBQUE7RUFDQSxrREFBQTtBQXhCTjtBQTJCSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBekJOO0FBMkJNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBekJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIuNzVlbTtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICB9XG5cbiAgLmFib3V0LFxuICAuc2VydmljZXMsXG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDZyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hYm91dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDUycHg7XG5cbiAgICAucGhvdG8ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgIC5za2lsbC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzNjNztcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG5cbiAgICAgICAgJi5uby1ib3JkZXIge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQwLCAyNDEpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlcnZpY2VzIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgNTIsIDU0KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5zZXJ2aWNlLWl0ZW0ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI2LCAxODgsIDE1Nik7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBwYWRkaW5nOiAzMnB4IDEycHg7XG4gICAgICBoZWlnaHQ6IDI1NnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgLy8gdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjNzIGVhc2UtaW4sIGJvcmRlci13aWR0aCAwLjNzIGVhc2UtaW47XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItd2lkdGggMC4ycyBlYXNlLWluO1xuXG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDJweDtcblxuICAgIHRleHRhcmVhW25hbWU9bWVzc2FnZV0ge1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAuaW5wdXQsXG4gICAgdGV4dGFyZWEge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM2LCAyNDAsIDI0MSk7XG4gICAgfVxuXG4gICAgLmlucHV0OmZvY3VzLFxuICAgIC50ZXh0YXJlYTpmb2N1cyxcbiAgICAuc2VsZWN0IHNlbGVjdDpmb2N1cyxcbiAgICAuaXMtZm9jdXNlZC5pbnB1dCxcbiAgICAuaXMtZm9jdXNlZC50ZXh0YXJlYSxcbiAgICAuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkLFxuICAgIC5pbnB1dDphY3RpdmUsXG4gICAgLnRleHRhcmVhOmFjdGl2ZSxcbiAgICAuc2VsZWN0IHNlbGVjdDphY3RpdmUsXG4gICAgLmlzLWFjdGl2ZS5pbnB1dCxcbiAgICAuaXMtYWN0aXZlLnRleHRhcmVhLFxuICAgIC5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZSB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYigyNiwgMTg4LCAxNTYpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVlbSByZ2JhKDI2LCAxODgsIDE1NiwgMC4yNSk7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5pcy1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgICBib3JkZXItY29sb3I6ICMxYWJjOWM7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTYwLCAxMzMpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/content/timeline/timeline.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/content/timeline/timeline.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.descriptionTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TimelineComponent {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "header"], [1, "year"], [1, "title"], [1, "description"], [3, "innerHTML"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 10, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".timeline[_ngcontent-%COMP%] {\n  padding: 22px 0;\n  padding-left: 16px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  border-left: 1px solid #ecf0f1;\n  border-bottom: 1px solid #ecf0f1;\n  padding: 18px 12px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  border: 2px solid #1abc9c;\n  border-radius: 5px;\n  margin-left: -32px;\n  padding: 2px 14px;\n  background-color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-left: 7px;\n  color: #bdc3c7;\n  line-height: 0px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 0;\n  padding: 7px 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSlI7QUFPTTtFQUNFLGVBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XG4gIHBhZGRpbmc6IDIycHggMDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuXG4gIC50aW1lbGluZS1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlY2YwZjE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2YwZjE7XG4gICAgcGFkZGluZzogMThweCAxMnB4O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAueWVhciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYWJjOWM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xuICAgICAgICBwYWRkaW5nOiAycHggMTRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "social-media"], ["href", "www.linkedin.com/in/fecem02", 1, "social-linkedin"], [1, "fab", "fa-linkedin-in"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fernando Escalante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #2d3436;\n  color: #ffffff;\n  padding: 72px -10px 0 -10px;\n}\nfooter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 3em;\n  font-family: \"Roboto\", sans-serif;\n  padding: 32px 0 0 0;\n}\nfooter[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n}\nfooter[_ngcontent-%COMP%]   .social-linkedin[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 1.2rem;\n  border-radius: 8px;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #3498db;\n}\nfooter[_ngcontent-%COMP%]   .social-linkedin[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: #2980b9;\n  border: 1px solid #000000;\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  border-top: 1px solid #ecf0f1;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBRk47QUFNRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA1MiwgNTQpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNzJweCAtMTBweCAwIC0xMHB4O1xuXG5cbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMzJweCAwIDAgMDtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cblxuICAuc29jaWFsLWxpbmtlZGluIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxNTIsIDIxOSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxMjgsIDE4NSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIH1cbiAgfVxuXG4gIC5jb3B5cmlnaHQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM2LCAyNDAsIDI0MSk7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const texts = ['Desarrollador de Software'];
let textsIndex = 0;
let index = 0;
class HeaderComponent {
    constructor() {
        this.smallTextTyped = '';
    }
    ngOnInit() {
        this.typing();
    }
    typing() {
        if (index < texts[textsIndex].length) {
            this.smallTextTyped += texts[textsIndex].charAt(index);
            index++;
            setTimeout(() => { this.typing(); }, 200);
        }
        else {
            setTimeout(() => { this.erase(); }, 2000);
        }
    }
    erase() {
        if (index > 0) {
            this.smallTextTyped = texts[textsIndex].substring(0, index - 1);
            index--;
            setTimeout(() => { this.erase(); }, 100);
        }
        else {
            textsIndex++;
            if (textsIndex >= texts.length) {
                textsIndex = 0;
            }
            setTimeout(() => { this.typing(); }, 1300);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 36, vars: 1, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-fixed-top"], [1, "container"], [1, "navbar-brand"], ["href", "/", 1, "navbar-item"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarBasicExample", 1, "navbar-burger", "burger"], ["aria-hidden", "true"], ["id", "navbarBasicExample", 1, "navbar-menu"], [1, "navbar-end"], [1, "navbar-item"], [1, "banner-content"], [1, "banner-blocker"], [1, "hero", "is-info", "is-large"], [1, "hero-body"], [1, "header-content"], [1, "image", "is-200x200"], ["src", "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/13697131_10208398354389165_724072983246016077_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=RhozOzHmstgAX8cxpnj&_nc_ht=scontent.fmid3-1.fna&oh=c7dfe10e58f70156cb55b50d0883e518&oe=5F20F65D", 1, "is-rounded", "is-bordered", "is-bordered-white"], [1, "blink"], [1, "button"], [1, "fas", "fa-download"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " FESoftware ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Curr\u00EDculum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Servicios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fernando Escalante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0Descargar CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Soy ", ctx.smallTextTyped, " ");
    } }, styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-bottom: 1px solid #34495e;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  color: #1abc9c;\n  letter-spacing: 0.1em;\n  font-weight: 900;\n  text-transform: uppercase;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  color: #34495e;\n  text-transform: uppercase;\n  font-size: 12px;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-blocker[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  background-image: url('banner.jpg');\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1abc9c;\n  font-size: 3.5em !important;\n  font-weight: 900;\n  font-style: normal;\n  padding: 10px 0;\n  font-size: 42px;\n  margin-top: 10px;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.5em;\n  font-weight: 300;\n  letter-spacing: 0.1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   .blink[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  margin-left: 0.1rem;\n  background-color: #ffffff;\n  animation: blink 1s infinite;\n}\n@keyframes blink {\n  0% {\n    background-color: #ffffff;\n  }\n  49% {\n    background-color: #ffffff;\n  }\n  50% {\n    background-color: transparent;\n  }\n  99% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: #ffffff;\n  }\n}\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  background-color: transparent;\n  color: #1abc9c;\n  border-color: #1abc9c;\n  font-size: 1.4em;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUVNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBS007RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSFI7QUFRRTtFQUNFLGtCQUFBO0FBTko7QUFRSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQU5OO0FBU0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBUE47QUFVSTtFQUNFLG1DQUFBO0FBUk47QUFXSTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZOO0FBWU07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQVZSO0FBYU07RUFDRTtJQUNFLHlCQUFBO0VBWFI7RUFjTTtJQUNFLHlCQUFBO0VBWlI7RUFlTTtJQUNFLDZCQUFBO0VBYlI7RUFnQk07SUFDRSw2QkFBQTtFQWRSO0VBaUJNO0lBQ0UseUJBQUE7RUFmUjtBQUNGO0FBbUJJO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFqQk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNDQ5NWU7XG5cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIC5uYXZiYXItaXRlbSB7XG4gICAgICAgIGNvbG9yOiAjMWFiYzljO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmJhci1tZW51IHtcbiAgICAgIC5uYXZiYXItaXRlbSB7XG4gICAgICAgIGNvbG9yOiAjMzQ0OTVlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJhbm5lci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYmFubmVyLWJsb2NrZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNSk7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXItY29udGVudHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5oZXJvIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9iYW5uZXIuanBnKTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBjb2xvcjogcmdiKDI2LCAxODgsIDE1Nik7XG4gICAgICBmb250LXNpemU6IDMuNWVtICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5ibGluayB7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgNDklIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIDk5JSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogcmdiKDI2LCAxODgsIDE1Nik7XG4gICAgICBib3JkZXItY29sb3I6IHJnYigyNiwgMTg4LCAxNTYpO1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/personal/Documentos/angular-projects/fe-software/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map