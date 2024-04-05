(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <a class=\"navbar-brand\" [routerLink]=\"['circulares']\">\r\n    CircularesApp\r\n  </a>\r\n\r\n  <div class=\"collapse navbar-collapse justify-content-md-end\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['circulares']\">\r\n          Circulares\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['circulares-admin']\">\r\n          Circulares Admin\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['carga']\">\r\n          Cargar Circulares\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carga/carga.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carga/carga.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">    \r\n    <form enctype=\"multipart/form-data\">\r\n      <label class=\"label\" [ngClass]=\"{'file-over': estaSobreElemento}\">\r\n        <span class=\"title\">\r\n          Haz click para seleccionar tus imagenes o deja caer aquí los archivos.\r\n        </span>\r\n\r\n        <img src=\"assets/images/drop-images.png\" alt=\"Cargar Imágen\" title=\"Cargar Imágen\">\r\n        <input type=\"file\" appNgDropFiles (mouseSobre)=\"estaSobreElemento = $event\" [archivos]=\"archivos\" accept=\"image/*\" multiple=\"multiple\" required=\"required\">\r\n      </label>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- {{ archivos | json }} -->\r\n  \r\n  <div class=\"col-md-12 mt-5\">\r\n    <button type=\"button\" class=\"btn btn-success mx-2\" (click)=\"cargarImagenes()\" [disabled]=\"archivos.length === 0 || estanSubiendo\">\r\n      Cargar Circular\r\n      <i class=\"fa fa-refresh icon-refresh\" [ngClass]=\"{rotate: estanSubiendo}\" *ngIf=\"estanSubiendo\"></i>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-danger mx-2\" (click)=\"limpiarArchivos()\">\r\n      Limpiar\r\n    </button>\r\n\r\n    <button type=\"button\" disabled=\"disabled\" class=\"btn btn-secondary mx-2\">\r\n      {{ archivos.length }}\r\n    </button>\r\n\r\n    <!-- <table mat-table [dataSource]=\"dataSource\"> -->\r\n      <!-- <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n      </ng-container> -->\r\n\r\n      <!-- <ng-container matColumnDef=\"imgPreview\">\r\n        <th mat-header-cell *matHeaderCellDef> Imagen </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.urlPrevisualizacion}} </td>\r\n      </ng-container> -->\r\n  \r\n      <!-- <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef> Título </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.archivo.title}} </td>\r\n      </ng-container> -->\r\n\r\n      <!-- <ng-container matColumnDef=\"desc\">\r\n        <th mat-header-cell *matHeaderCellDef> Descripción </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.desc}} </td>\r\n      </ng-container> -->\r\n\r\n      <!-- <ng-container matColumnDef=\"size\">\r\n        <th mat-header-cell *matHeaderCellDef> Tamaño </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{(element.archivo.size / 1024 / 1024 | number: '.2-2')}}MB </td>\r\n      </ng-container> -->\r\n  \r\n      <!-- <ng-container matColumnDef=\"progreso\">\r\n        <th mat-header-cell *matHeaderCellDef> Progreso </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.progreso}} </td>\r\n      </ng-container> -->\r\n  \r\n      <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table> -->\r\n  \r\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th>Imagen</th>\r\n            <th>Título</th>\r\n            <th>Descripción</th>\r\n            <th>Tamaño</th>\r\n            <th>Progreso</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let archivo of archivos\">\r\n            <td>\r\n              <img [src]=\"archivo.urlPrevisualizacion\" [alt]=\"archivo.nombreArchivo\" [title]=\"archivo.nombreArchivo\" width=\"200px\" class=\"m-auto\">\r\n            </td>\r\n\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"archivo.title\" #title=\"ngModel\" [value]=\"archivo.title\" placeholder=\"Título\">\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"archivo.desc\" #desc=\"ngModel\" [value]=\"archivo.desc\" placeholder=\"Descripción\">\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput [value]=\"(archivo.archivo.size / 1024 / 1024 | number: '.2-2') + ' MB'\" disabled=\"disabled\">\r\n              </mat-form-field>\r\n            </td>\r\n            \r\n            <td>\r\n              <mat-progress-bar mode=\"determinate\" [value]=\"archivo.progreso\" [ngClass]=\"{'success': archivo.progreso >= 100}\"></mat-progress-bar>\r\n\r\n              <!-- <div class=\"progress\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': archivo.progreso + '%' }\" [ngClass]=\"{'bg-success': archivo.progreso >= 100}\"></div>\r\n              </div> -->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares-admin/circulares-admin.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares-admin/circulares-admin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"lengthItems == 0\">\r\n  <h1 class=\"text-center\">\r\n    !No se encontraron circulares!\r\n  </h1>\r\n\r\n  <div class=\"mt-3 text-center\">\r\n    <a [routerLink]=\"['/carga']\" class=\"btn btn-outline-primary\">\r\n      Crear Circular\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"lengthItems !== 0\">\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems === 1\">\r\n    {{ lengthItems }} Circular\r\n  </h1>\r\n\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems > 1\">\r\n    {{ lengthItems }} Circulares\r\n  </h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let item of images\">\r\n      <div class=\"mx-auto\" id=\"gallery\">\r\n        <div class=\"flex items-center justify-center my-4\">\r\n          <div class=\"w-full\">\r\n            <div class=\"bg-white shadow-xl rounded-lg overflow-hidden position-relative\">\r\n              <div class=\"bg-cover bg-center h-56 p-4\" [ngStyle]=\"{'background-image': 'url(' + item.payload.doc.data().url + ')'}\">\r\n                <div class=\"ctn-icons\">\r\n                  <i class=\"fa fa-camera icon-view\" title=\"Ver Circular\" (click)=\"verCircular($event)\"></i>\r\n                  <i class=\"fa fa-trash icon-remove\" title=\"Eliminar Circular\" [id]=\"item.payload.doc.id\" (click)=\"eliminarCircular($event)\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-4\">\r\n                <p class=\"uppercase tracking-wide text-sm font-bold text-gray-700\">\r\n                  {{ item.payload.doc.data().title ? item.payload.doc.data().title : 'Sin Título' }}\r\n                </p>\r\n\r\n                <p class=\"text-gray-700\">\r\n                  {{ item.payload.doc.data().desc ? item.payload.doc.data().desc : 'Sin Descripción' }}\r\n                </p>\r\n              </div>\r\n              \r\n              <div class=\"px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100\">\r\n                <div class=\"text-xs uppercase font-bold text-gray-600 tracking-wide\">\r\n                  Creator\r\n                </div>\r\n    \r\n                <div class=\"flex items-center pt-2\">\r\n                  <div class=\"bg-cover bg-center w-10 h-10 rounded-full mr-3\" style=\"background-image: url('http://crianbluff.com/imgs/imgs-general/modals/modal-creator-web/avatar-creator-web/avatar-creator-web.jpg')\">\r\n                </div>\r\n                \r\n                <div>\r\n                  <p class=\"font-bold text-gray-900\">\r\n                    Cristian Castillo\r\n                  </p>\r\n\r\n                  <p class=\"text-sm text-gray-700\">\r\n                    (+57) 310 809 87 93\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"modal-lightbox\" class=\"modal-lightbox\" (click)=\"cerrarModalClickFuera($event)\">\r\n\t<div class=\"ctn-modal-lightbox\" (click)=\"stopPropagation($event)\">\r\n\t\t<div id=\"close-modal-lightbox\" class=\"close-modal-lightbox\" (click)=\"closeModal()\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal-lightbox-body\">\r\n\t\t\t<img>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares/circulares.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares/circulares.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"lengthItems == 0\">\r\n  <h1 class=\"text-center\">\r\n    !No se encontraron circulares!\r\n  </h1>\r\n</div>\r\n\r\n<div *ngIf=\"lengthItems !== 0\">\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems === 1\">\r\n    {{ lengthItems }} Circular\r\n  </h1>\r\n\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems > 1\">\r\n    {{ lengthItems }} Circulares\r\n  </h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let item of images\">\r\n      <div class=\"mx-auto\" id=\"gallery\">\r\n        <div class=\"flex items-center justify-center my-4\">\r\n          <div class=\"w-full\">\r\n            <div class=\"bg-white shadow-xl rounded-lg overflow-hidden position-relative\">\r\n              <div class=\"bg-cover bg-center h-56 p-4\" [ngStyle]=\"{'background-image': 'url(' + item.payload.doc.data().url + ')'}\">\r\n                <div class=\"ctn-icons\">\r\n                  <i class=\"fa fa-camera icon-view\" title=\"Ver Circular\" (click)=\"verCircular($event)\"></i>\r\n                  <i class=\"fa fa-camera icon-view\" style=\"visibility: hidden;\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-4\">\r\n                <p class=\"uppercase tracking-wide text-sm font-bold text-gray-700\">\r\n                  {{ item.payload.doc.data().title ? item.payload.doc.data().title : 'Sin Título' }}\r\n                </p>\r\n\r\n                <p class=\"text-gray-700\">\r\n                  {{ item.payload.doc.data().desc ? item.payload.doc.data().desc : 'Sin Descripción' }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"modal-lightbox\" class=\"modal-lightbox\" (click)=\"cerrarModalClickFuera($event)\">\r\n\t<div class=\"ctn-modal-lightbox\" (click)=\"stopPropagation($event)\">\r\n\t\t<div id=\"close-modal-lightbox\" class=\"close-modal-lightbox\" (click)=\"closeModal()\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal-lightbox-body\">\r\n\t\t\t<img>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/ng-drop-files.directive */ "./src/app/directives/ng-drop-files.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_circulares_admin_circulares_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/circulares-admin/circulares-admin.component */ "./src/app/components/circulares-admin/circulares-admin.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");
/* harmony import */ var _services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _components_circulares_circulares_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/circulares/circulares.component */ "./src/app/components/circulares/circulares.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






// Angular Material
//Rutas

// Directivas

// Componentes



// Servicios

// Firebase




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_circulares_admin_circulares_admin_component__WEBPACK_IMPORTED_MODULE_9__["CircualesAdminComponent"],
                _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_10__["CargaComponent"],
                _components_circulares_circulares_component__WEBPACK_IMPORTED_MODULE_14__["CircularesComponent"],
                _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_7__["NgDropFilesDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"]
            ],
            providers: [
                _services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_11__["CargaImagenesService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_circulares_admin_circulares_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/circulares-admin/circulares-admin.component */ "./src/app/components/circulares-admin/circulares-admin.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");
/* harmony import */ var _components_circulares_circulares_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/circulares/circulares.component */ "./src/app/components/circulares/circulares.component.ts");





var RUTAS = [
    {
        path: 'circulares-admin',
        component: _components_circulares_admin_circulares_admin_component__WEBPACK_IMPORTED_MODULE_2__["CircualesAdminComponent"]
    },
    {
        path: 'carga',
        component: _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_3__["CargaComponent"]
    },
    {
        path: 'circulares',
        component: _components_circulares_circulares_component__WEBPACK_IMPORTED_MODULE_4__["CircularesComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'circulares'
    }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(RUTAS, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
});


/***/ }),

/***/ "./src/app/components/carga/carga.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/carga/carga.component.ts ***!
  \*****************************************************/
/*! exports provided: CargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaComponent", function() { return CargaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/firestore */ "./node_modules/@angular/fire/firestore/firestore.js");
/* harmony import */ var src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var CargaComponent = /** @class */ (function () {
    function CargaComponent(_cargaImagenes, db, router) {
        this._cargaImagenes = _cargaImagenes;
        this.db = db;
        this.router = router;
        this.CARPETA_IMAGENES = 'img';
        this.displayedColumns = ['title'];
        this.estaSobreElemento = false;
        this.archivos = [];
        this.numeroImagenes = 0;
        this.almacenarLengthArrayActual = 0;
        this.almacenarLengthArrayAnterior = 0;
        this.cleaner = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.archivos);
    }
    CargaComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    CargaComponent.prototype.cargarImagenes = function () {
        this.cargarImagenesFirebase(this.archivos);
    };
    CargaComponent.prototype.limpiarArchivos = function () {
        this.estanSubiendo = false;
        this.limpiarImagenes();
        this.archivos = [];
    };
    CargaComponent.prototype.limpiarImagenes = function () {
        this.cleaner = true;
    };
    CargaComponent.prototype.cargarImagenesFirebase = function (imagenes) {
        // console.log(imagenes);
        var _this = this;
        this.estanSubiendo = true;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
        this.almacenarLengthArrayAnterior = this.almacenarLengthArrayActual;
        if (this.cleaner) {
            this.almacenarLengthArrayAnterior = 0;
            this.cleaner = false;
        }
        this.numeroImagenes = imagenes.length - this.almacenarLengthArrayAnterior;
        this.almacenarLengthArrayActual = imagenes.length;
        // console.log('array anterior', this.almacenarLengthArrayAnterior);
        // let imagenesCalculo = this.numeroImagenes - this.numeroImagenes + 1;
        var imagenesCalculo = 1;
        var _loop_1 = function (item) {
            item.estaSubiendo = true;
            if (item.progreso >= 100) {
                return "continue";
            }
            // console.log(item);
            var uploadTask = storageRef.child(this_1.CARPETA_IMAGENES + "/" + item.nombreArchivo)
                .put(item.archivo);
            uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_4__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { return item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; }, function (error) { return console.error('Error al subir', error); }, function () {
                item.estaSubiendo = false;
                storageRef.child(_this.CARPETA_IMAGENES + "/" + item.nombreArchivo).getDownloadURL()
                    .then(function (url) {
                    _this.guardarImagen({
                        desc: item.desc,
                        title: item.title,
                        url: url
                    });
                    var imagenesCargadas = imagenesCalculo++;
                    // console.log('imagenes cargadas', imagenesCargadas);
                    // console.log('numero de imagenes', this.numeroImagenes);
                    if (imagenesCargadas === _this.numeroImagenes) {
                        _this.limpiarArchivos();
                        if (imagenes.length <= 1) {
                            _this.mostrarOk('Circular subida satisfactoriamente');
                            _this.estanSubiendo = false;
                        }
                        else if (imagenes.length > 1) {
                            _this.mostrarOk(imagenesCargadas + " Circulares subidas satisfactoriamente");
                            _this.estanSubiendo = false;
                        }
                        setTimeout(function () {
                            _this.router.navigateByUrl('/circulares');
                        }, 2000);
                    }
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, imagenes_1 = imagenes; _i < imagenes_1.length; _i++) {
            var item = imagenes_1[_i];
            _loop_1(item);
        }
    };
    CargaComponent.prototype.guardarImagen = function (imagen) {
        // console.log(imagen);
        this.db.collection("/" + this.CARPETA_IMAGENES)
            .add(imagen);
    };
    CargaComponent.prototype.mostrarOk = function (msgSuccess) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
            position: 'center',
            showConfirmButton: false,
            timer: 2000
        });
        Toast.fire({
            type: 'success',
            title: msgSuccess
        });
    };
    CargaComponent.ctorParameters = function () { return [
        { type: src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"] },
        { type: _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], CargaComponent.prototype, "paginator", void 0);
    CargaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carga',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carga.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carga/carga.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"],
            _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CargaComponent);
    return CargaComponent;
}());



/***/ }),

/***/ "./src/app/components/circulares-admin/circulares-admin.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/circulares-admin/circulares-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: CircualesAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircualesAdminComponent", function() { return CircualesAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");




var CircualesAdminComponent = /** @class */ (function () {
    function CircualesAdminComponent(afs, _cargaImagenes) {
        var _this = this;
        this.afs = afs;
        this._cargaImagenes = _cargaImagenes;
        this.itemsCollection = this.afs.collection('img');
        this.items = this.itemsCollection.valueChanges();
        this.items.forEach(function (item) {
            _this.lengthItems = item.length;
        });
    }
    CircualesAdminComponent.prototype.getImages = function () {
        var _this = this;
        this.afs.collection('img').snapshotChanges()
            .subscribe(function (res) {
            _this.images = res;
        });
    };
    CircualesAdminComponent.prototype.verCircular = function (event) {
        var modal = document.getElementById('modal-lightbox');
        var imgModal = modal.querySelector('.ctn-modal-lightbox .modal-lightbox-body img');
        var pathImage = event.target.parentElement.parentElement.style.backgroundImage.slice(5, -2).replace(/'/g);
        imgModal.setAttribute('src', pathImage);
        modal.classList.add('show-modal-lightbox');
        document.body.classList.add('no-scroll-y');
    };
    CircualesAdminComponent.prototype.cerrarModalClickFuera = function (event) {
        var temp = event.target;
        temp.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    CircualesAdminComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    CircualesAdminComponent.prototype.closeModal = function () {
        var modal = document.getElementById('modal-lightbox');
        modal.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    CircualesAdminComponent.prototype.eliminarCircular = function (event) {
        var key = event.target.id;
        this._cargaImagenes.eliminarImagen(key);
    };
    CircualesAdminComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    CircualesAdminComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"] }
    ]; };
    CircualesAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'circulares-admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./circulares-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares-admin/circulares-admin.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"]])
    ], CircualesAdminComponent);
    return CircualesAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/circulares/circulares.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/circulares/circulares.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lyY3VsYXJlcy9jaXJjdWxhcmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/circulares/circulares.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/circulares/circulares.component.ts ***!
  \***************************************************************/
/*! exports provided: CircularesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularesComponent", function() { return CircularesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");




var CircularesComponent = /** @class */ (function () {
    function CircularesComponent(afs, _cargaImagenes) {
        var _this = this;
        this.afs = afs;
        this._cargaImagenes = _cargaImagenes;
        this.itemsCollection = this.afs.collection('img');
        this.items = this.itemsCollection.valueChanges();
        this.items.forEach(function (item) {
            _this.lengthItems = item.length;
        });
    }
    CircularesComponent.prototype.getImages = function () {
        var _this = this;
        this.afs.collection('img').snapshotChanges()
            .subscribe(function (res) {
            _this.images = res;
        });
    };
    CircularesComponent.prototype.verCircular = function (event) {
        var modal = document.getElementById('modal-lightbox');
        var imgModal = modal.querySelector('.ctn-modal-lightbox .modal-lightbox-body img');
        var pathImage = event.target.parentElement.parentElement.style.backgroundImage.slice(5, -2).replace(/'/g);
        imgModal.setAttribute('src', pathImage);
        modal.classList.add('show-modal-lightbox');
        document.body.classList.add('no-scroll-y');
    };
    CircularesComponent.prototype.cerrarModalClickFuera = function (event) {
        var temp = event.target;
        temp.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    CircularesComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    CircularesComponent.prototype.closeModal = function () {
        var modal = document.getElementById('modal-lightbox');
        modal.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    CircularesComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    CircularesComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"] }
    ]; };
    CircularesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circulares',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./circulares.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/circulares/circulares.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./circulares.component.css */ "./src/app/components/circulares/circulares.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"]])
    ], CircularesComponent);
    return CircularesComponent;
}());



/***/ }),

/***/ "./src/app/directives/ng-drop-files.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/ng-drop-files.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgDropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function() { return NgDropFilesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_file_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/file-item */ "./src/app/models/file-item.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var NgDropFilesDirective = /** @class */ (function () {
    function NgDropFilesDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.archivos = [];
        this.mouseSobre = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgDropFilesDirective.prototype.onDragEnter = function (event) {
        this.mouseSobre.emit(true);
        this._prevenirDetener(event);
    };
    NgDropFilesDirective.prototype.onDragLeave = function () {
        this.mouseSobre.emit(false);
    };
    NgDropFilesDirective.prototype.onDrop = function (event) {
        var transferencia = this._getTransferencia(event);
        this._prevenirDetener(event);
        this.mouseSobre.emit(false);
        if (!transferencia) {
            return;
        }
        this._extraerArchivos(event, transferencia.files);
    };
    NgDropFilesDirective.prototype.onFileChanged = function (event) {
        var transferencia = this._getTransferencia(event);
        if (!transferencia) {
            return;
        }
        this._extraerArchivos(event, transferencia.files);
    };
    NgDropFilesDirective.prototype._getTransferencia = function (event) {
        if (event.dataTransfer) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
        }
        else if (event.target.files) {
            return event.target ? event.target : event.originalEvent.target;
        }
    };
    NgDropFilesDirective.prototype._extraerArchivos = function (event, archivosLista) {
        // console.log(archivosLista);
        for (var propiedad in Object.getOwnPropertyNames(archivosLista)) {
            var archivoTemporal = archivosLista[propiedad];
            if (this._archivoPuedeSerCargado(archivoTemporal)) {
                if (event.dataTransfer) {
                    this.urlPrevisualizacion = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.dataTransfer.files[propiedad]));
                }
                else if (event.target.files) {
                    this.urlPrevisualizacion = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.target.files[propiedad]));
                }
                archivoTemporal['urlPrevisualizacion'] = this.urlPrevisualizacion;
                var title = '';
                archivoTemporal['title'] = title;
                var desc = '';
                archivoTemporal['desc'] = desc;
                var tipoArchivo = archivoTemporal.type;
                archivoTemporal['tipoArchivo'] = tipoArchivo;
                var nuevoArchivo = new _models_file_item__WEBPACK_IMPORTED_MODULE_3__["FileItem"](archivoTemporal);
                this.archivos.push(nuevoArchivo);
            }
        }
        // console.log(this.archivos);
    };
    // Validaciones
    NgDropFilesDirective.prototype._archivoPuedeSerCargado = function (archivo) {
        if (!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)) {
            return true;
        }
        else {
            return false;
        }
    };
    NgDropFilesDirective.prototype._prevenirDetener = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgDropFilesDirective.prototype._archivoYaFueDroppeado = function (nombreArchivo) {
        // console.log(nombreArchivo);
        for (var _i = 0, _a = this.archivos; _i < _a.length; _i++) {
            var archivo = _a[_i];
            if (archivo.nombreArchivo === nombreArchivo) {
                this.MostrarError("El archivo " + nombreArchivo + " ya esta agregado");
                return true;
            }
        }
        return false;
    };
    NgDropFilesDirective.prototype._esImagen = function (tipoArchivo) {
        if (tipoArchivo === '' || tipoArchivo === undefined || !tipoArchivo.startsWith('image')) {
            this.MostrarError("El formato " + tipoArchivo + " no es valido, debe ser una imagen");
            return false;
        }
        else {
            return true;
        }
    };
    NgDropFilesDirective.prototype.MostrarError = function (msgError) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'error',
            title: msgError
        });
    };
    NgDropFilesDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgDropFilesDirective.prototype, "urlPrevisualizacion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgDropFilesDirective.prototype, "archivos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgDropFilesDirective.prototype, "mouseSobre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onFileChanged", null);
    NgDropFilesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNgDropFiles]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], NgDropFilesDirective);
    return NgDropFilesDirective;
}());



/***/ }),

/***/ "./src/app/models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FileItem = /** @class */ (function () {
    function FileItem(archivo) {
        this.archivo = archivo;
        this.desc = archivo.desc;
        this.estaSubiendo = false;
        this.nombreArchivo = archivo.name;
        this.progreso = 0;
        this.tipoArchivo = archivo.tipoArchivo;
        this.title = archivo.title;
        this.urlPrevisualizacion = archivo.urlPrevisualizacion;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/services/carga-imagenes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/carga-imagenes.service.ts ***!
  \****************************************************/
/*! exports provided: CargaImagenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaImagenesService", function() { return CargaImagenesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/firestore */ "./node_modules/@angular/fire/firestore/firestore.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var CargaImagenesService = /** @class */ (function () {
    function CargaImagenesService(db) {
        this.db = db;
    }
    CargaImagenesService.prototype.eliminarImagen = function (key) {
        var _this = this;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-2',
                cancelButton: 'btn btn-danger mx-2'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Estas seguro?',
            text: '¡No podrás revertir esto!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminarla!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                swalWithBootstrapButtons.fire('Eliminada!', 'La circular ha sido eliminada.', 'success');
                _this.db.collection('img').doc(key).delete().then(function () {
                }).catch(function (error) {
                    console.log('Error: ', error);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelada', 'Tu circular esta segura :)', 'error');
            }
        });
    };
    CargaImagenesService.ctorParameters = function () { return [
        { type: _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    CargaImagenesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CargaImagenesService);
    return CargaImagenesService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDpTX4peaKp9vpofgaHcA1igxLi3gJKsh8",
        authDomain: "colegio-instituto-bogota.firebaseapp.com",
        databaseURL: "https://colegio-instituto-bogota.firebaseio.com",
        projectId: "colegio-instituto-bogota",
        storageBucket: "colegio-instituto-bogota.appspot.com",
        messagingSenderId: "32521398206",
        appId: "1:32521398206:web:027eb4f87f0b014d5b7bef",
    }
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDpTX4peaKp9vpofgaHcA1igxLi3gJKsh8",
        authDomain: "colegio-instituto-bogota.firebaseapp.com",
        databaseURL: "https://colegio-instituto-bogota.firebaseio.com",
        projectId: "colegio-instituto-bogota",
        storageBucket: "colegio-instituto-bogota.appspot.com",
        messagingSenderId: "32521398206",
        appId: "1:32521398206:web:027eb4f87f0b014d5b7bef",
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\crian\Downloads\to-check\colegio-instituto-bogota\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map