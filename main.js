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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n\n    height:150px;\n    width:150px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG5cbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container cont\">\n\n  <!-- Introduction Row -->\n  <br><h1 class=\"my-4\">\n    <small>It's Nice to Meet You!</small>\n  </h1>\n  <p>Elan Store For Men and Kids Clothies</p>\n\n  <!-- Team Members Row -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"my-4\">Elan Store</h2>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/jacket.jpg\" alt=\"\">\n      <h3>Men Clothes\n        <small>Men Clothes</small>\n      </h3>\n      <p>various types of men clothes, jackets, jeans, T-shirts, ....</p>\n    </div>\n\n  \n\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/bb.png\" alt=\"\">\n      <h3>Kids Clothes\n        <small>Kids Clothes</small>\n      </h3>\n      <p>various types of men clothes, jackets, jeans, T-shirts, ....</p>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/images.jpg\" alt=\"\">\n        <h3>John Smith\n          <small>Job Title</small>\n        </h3>\n        <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n      </div>\n\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/Boy-Classic-1.jpg\" alt=\"\">\n      <h3>John Smith\n        <small>Job Title</small>\n      </h3>\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n    </div>\n  </div>\n\n</div>\n\n\n<!-- /.container -->>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.x = "test";
        this.pipe = [1, 2, 3, 4, 5, 6, 7, 8];
        this.user = { name: "mona" };
        this.show = "";
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.show = "active";
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('hello', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void =>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/api-data/api-data.component.css":
/*!*************************************************!*\
  !*** ./src/app/api-data/api-data.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#table1{\n\n\nbackground-color:antiquewhite\n\n}\n.imgimg{\n\n  width: 70px;\n  height: 70px;\n}\n#addform{\n  /* background-color:rgb(195, 204, 214); */\n  /* width : 70%; */\n  margin: 50px;\n}\n#addform input{\n \n}\nlabel{\nfont-weight: bold\n\n}\n.NgIfElse {\n    show: boolean = true;\n  }\n.visibility{\nvisibility: visible;\n }\nspan{\n\n  color: red;\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpLWRhdGEvYXBpLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBLDZCQUE2Qjs7Q0FFNUI7QUFDRDs7RUFFRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUNEOztDQUVDO0FBQ0Q7QUFDQSxpQkFBaUI7O0NBRWhCO0FBQ0Q7SUFDSSxxQkFBcUI7R0FDdEI7QUFFRjtBQUNELG9CQUFvQjtFQUNsQjtBQUVEOztFQUVDLFdBQVc7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwaS1kYXRhL2FwaS1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN0YWJsZTF7XG5cblxuYmFja2dyb3VuZC1jb2xvcjphbnRpcXVld2hpdGVcblxufVxuLmltZ2ltZ3tcblxuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuI2FkZGZvcm17XG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDE5NSwgMjA0LCAyMTQpOyAqL1xuICAvKiB3aWR0aCA6IDcwJTsgKi9cbiAgbWFyZ2luOiA1MHB4O1xufVxuI2FkZGZvcm0gaW5wdXR7XG4gXG59XG5sYWJlbHtcbmZvbnQtd2VpZ2h0OiBib2xkXG5cbn1cbi5OZ0lmRWxzZSB7XG4gICAgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIH1cblxuIC52aXNpYmlsaXR5e1xudmlzaWJpbGl0eTogdmlzaWJsZTtcbiB9XG5cbiBzcGFue1xuXG4gIGNvbG9yOiByZWQ7XG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/api-data/api-data.component.html":
/*!**************************************************!*\
  !*** ./src/app/api-data/api-data.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:antiquewhite;\">\n\n<br>\n<h1>\n  Products Management</h1>\n \n  <br>\n  <div id=addform>\n      <form #addForm =\"ngForm\" (ngSubmit) = 'addProduct(addForm)' id=\"addform\">\n  \n  <div class=\"form-group row\">\n    <div class=\"col-4\">\n      <input class=\"form-control\"  hidden id=\"example-text-input\"   #id='ngModel' name='id' ngModel [(ngModel)]='prom.id' >\n    \n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"example-search-input\" class=\"col-2 col-form-label\">Product Name</label>\n    <div class=\"col-4\">\n      <input class=\"form-control\"  id=\"example-search-input\"  #name='ngModel' name='name' ngModel [(ngModel)]='prom.name'  required>\n    </div>\n    <span *ngIf='addForm.submitted && name.errors && name.errors.required '>\n        name field is required\n      </span>\n      \n  </div>\n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-2 col-form-label\">Size</label>\n    <div class=\"col-4\">\n      <input class=\"form-control\"  id=\"example-email-input\" [(ngModel)]='prom.size'  #size='ngModel' name='size' ngModel required >\n    </div>\n    <span *ngIf='addForm.submitted && size.errors && size.errors.required '>\n        size field is required\n      </span>\n  </div>\n  \n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-2 col-form-label\">Color</label>\n    <div class=\"col-4\">\n      <input class=\"form-control\"  id=\"example-email-input\" required \n       #color='ngModel' name='color' ngModel [(ngModel)]='prom.color'  required>\n  \n    </div>\n    <span *ngIf='addForm.submitted && color.errors && color.errors.required '>\n        Color field is required\n      </span>\n  </div>\n  \n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-2 col-form-label\">Prand</label>\n    <div class=\"col-4\">\n      <input class=\"form-control\"  id=\"example-email-input\" [(ngModel)]='prom.prand'  #prand='ngModel' name='prand' ngModel  required>\n    </div>\n    <span *ngIf='addForm.submitted && prand.errors && prand.errors.required '>\n        Prand field is required\n      </span>\n  </div>\n  \n  <div class=\"form-group row\">\n      <label for=\"example-email-input\" class=\"col-2 col-form-label\">Price</label>\n      <div class=\"col-4\">\n        <input class=\"form-control\"  type=\"number\" id=\"example-email-input\"   [(ngModel)]='prom.price'   #price='ngModel' name='price' ngModel  required >\n      </div>\n      <span *ngIf='addForm.submitted && price.errors && price.errors.required '>\n          Price field is required\n        </span>\n    </div>\n  \n  \n  \n    <div class=\"form-group row\">\n        <label for=\"example-email-input\" class=\"col-2 col-form-label\">For Whome</label>\n        <div class=\"col-4 dropdown\">\n            <select class=\"col-md-3\" style=\"width:100%;\" id=\"people\" [(ngModel)]='prom.people' #people='ngModel' name='people' ngModel required>\n             <option id=\"com\" value=\"1\"  >Men</option>\n             <option id=\"yott\" value=\"2\"  >Kids</option>\n             \n           </select>\n        </div>\n        <span *ngIf='addForm.submitted && people.errors && people.errors.required '>\n          this field is required\n        </span>\n      </div>\n  \n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-2 col-form-label\">Category</label>\n    <div class=\"col-4\">\n        <select class=\"col-md-3\" style=\"width:100%;\" id=\"category\"  [(ngModel)]='prom.category'   #category='ngModel' name='category' ngModel required>\n            <option id=\"com\" value=\"1\"  >Clothes</option>\n            <option id=\"yot\" value=\"2\"  >Shoes</option>\n            <option id=\"yott\" value=\"3\"  >Accessories</option>\n  \n            \n          </select>\n  \n    </div>\n    <span *ngIf='addForm.submitted && category.errors && category.errors.required '>\n      this field is required\n    </span>\n  </div>\n  \n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-2 col-form-label\">Image</label>\n    <div class=\"col-4\">\n        <img [src]=\"imageSrc\" style=\"max-width:300px;max-height:300px\"/>\n        <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\"    />   \n       </div>\n    <input class=\"form-control\"  hidden type=\"text\" id=\"example-email-input\"   [(ngModel)]='prom.image'   #image='ngModel' name='image' ngModel   >\n    \n    <input class=\"form-control\"  hidden type=\"text\" id=\"example-email-input\"   [(ngModel)]='imageSrc'  #imageimage='ngModel' name='imageimage' ngModel   >\n\n  </div>\n  \n  \n  <div class=\"form-group row\">\n    <div class=\"col-2 col-form-label\"></div>\n    <div class=\"col-4\">\n      \n      <button type=\"submit\"  class=\"btn btn-primary\"  [style.visibility] =\"show ?'hidden':'visible' \" >add</button>  </div>\n      <button  type=\"button\" (click) = \"updateProduct(this.prom)\" class=\"btn btn-primary\"  [style.visibility] =\"!show ?'hidden':'visible' \">update</button> \n     </div>\n     <br>\n  </form>\n    </div>\n  \n  <br>\n  <br>\n  \n  <table class=\"table .table-striped\" id=\"table1\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">id</th>\n        <th scope=\"col\">product name</th>\n        <th scope=\"col\">size</th>\n        <th scope=\"col\">color</th>\n        <th scope=\"col\">prand</th>\n        <th scope=\"col\">category</th>\n        <th scope=\"col\">price</th>\n        <th scope=\"col\">For whome</th>\n        <th scope=\"col\">image</th>\n        <th scope=\"col\">edit</th>\n        <th scope=\"col\"> Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let obj of product\" >\n        <td (click) = \"onSelect(obj) \">{{obj.id}}</td>\n        <td>{{obj.name}}</td>\n        <td>{{obj.size}}</td>\n        <td>{{obj.color}}</td>\n        <td>{{obj.prand}}</td>\n        <td *ngIf = \"obj.category == 1\">clothes</td>\n        <td *ngIf = \"obj.category == 2\">shoes</td>\n        <td *ngIf = \"obj.category == 3\">accessories</td>\n  \n        <td>{{obj.price}}</td>\n        <td *ngIf = \"obj.people == 1\">Men</td>\n        <td *ngIf = \"obj.people == 2\">kids</td>\n        <td ><img  [src]=\"obj.image\" alt=\"Select Image\" class=\"imgimg\"/></td>\n  \n        <td><button (click) = \"edit(obj.id)\"  class=\"btn btn-primary\">Edit</button></td>\n  \n        <td><button type=\"submit\"   (click) = \"delete(obj.id)\" class=\"btn btn-primary\">Delete</button></td>\n      </tr>\n      \n    </tbody>\n  </table>\n  <!--\n  \n    <form #addForm = \"ngForm\" (ngSubmit) = 'addNew(addForm)'>\n  name = <input required name=\"name\" ngModel/> \n  age = <input  name=\"age\" ngModel/> \n  \n  <button type= \"submit\">add</button>\n  </form>\n  -->\n   \n  \n  </div>"

/***/ }),

/***/ "./src/app/api-data/api-data.component.ts":
/*!************************************************!*\
  !*** ./src/app/api-data/api-data.component.ts ***!
  \************************************************/
/*! exports provided: ApiDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataComponent", function() { return ApiDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiDataComponent = /** @class */ (function () {
    function ApiDataComponent(api, router, http) {
        this.api = api;
        this.router = router;
        this.http = http;
        this.product = [];
        this.show = false;
        /********************************************** */
        this.selectedObj = [];
        this.id = this.id;
        this.name = this.name;
        this.size = this.size;
        this.color = this.color;
        this.prand = this.prand;
        this.category = this.category;
        this.image = this.image;
        this.imageSrc = '';
        /************************************ */
        this.prom = {};
        this.imageobj = {};
    }
    ApiDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getLogin().subscribe(function (response) { return _this.islogin = response; });
        // console.log(this.islogin);
        this.api.getProduct().subscribe(function (products) { return _this.product = products; });
    };
    ApiDataComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    ApiDataComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        // console.log(this.imageSrc)
    };
    ApiDataComponent.prototype.addProduct = function (form) {
        var _this = this;
        var las_obj = this.product[this.product.length - 1];
        var last_id = this.product[this.product.length - 1].id;
        last_id++;
        // let image = this.imageSrc
        form.controls.id.value = last_id;
        form.controls.image.value = this.imageSrc;
        console.log(form);
        var obj = {
            "id": last_id,
            "name": form.controls.name.value,
            "size": form.controls.size.value,
            "color": form.controls.color.value,
            "prand": form.controls.prand.value,
            "category": form.controls.category.value,
            "image": this.imageSrc,
            "price": form.controls.price.value,
            "people": form.controls.people.value
        };
        console.log(obj);
        if (form.valid == true) {
            this.api.addProduct(obj).subscribe(function (res) { return _this.product.push(res); });
        }
    };
    ApiDataComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.delete(id).subscribe(function (products) { return _this.del = products; });
        console.log(this.del);
    };
    /************************************* */
    ApiDataComponent.prototype.onSelect = function (api) {
        this.router.navigate(['/apiDetails', api.id]);
    };
    ApiDataComponent.prototype.edit = function (id) {
        var _this = this;
        this.show = true;
        this.api.getProductById(id).subscribe(function (products) { return _this.prom = products; });
    };
    ApiDataComponent.prototype.updateProduct = function (ppp) {
        var _this = this;
        console.log(ppp);
        //let id = this.prom;
        var idd = ppp.id;
        var imgnew = this.imageSrc;
        console.log(imgnew);
        if (imgnew != "") {
            ppp.image = imgnew;
        }
        this.api.updateProduct(ppp).subscribe(function (res) { return _this.product.push(res); });
    };
    ApiDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-data',
            template: __webpack_require__(/*! ./api-data.component.html */ "./src/app/api-data/api-data.component.html"),
            styles: [__webpack_require__(/*! ./api-data.component.css */ "./src/app/api-data/api-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiDataComponent);
    return ApiDataComponent;
}());



/***/ }),

/***/ "./src/app/api-details/api-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/api-details/api-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1kZXRhaWxzL2FwaS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api-details/api-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/api-details/api-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  \n   \n    You selected the section with id = {{secId}} and description is \n   \n\n    \n\n\n   \n  </p>\n"

/***/ }),

/***/ "./src/app/api-details/api-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/api-details/api-details.component.ts ***!
  \******************************************************/
/*! exports provided: ApiDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDetailsComponent", function() { return ApiDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




var ApiDetailsComponent = /** @class */ (function () {
    function ApiDetailsComponent(apii, route) {
        this.apii = apii;
        this.route = route;
        this.pp = {};
    }
    ApiDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.secId = id;
        this.apii.getProductById(id).subscribe(function (products) {
            _this.pp = products;
            //console.log(this.pp.);
            // let desc = this.pp;
            // this.description = desc;
        });
        //this.apii.getProduct().subscribe(products =>this.pp =products )
        /*  let desc = this.product.find(x => x.id === id).body;
          this.description = desc;
      */
        //this.description = this.product.body;
        /* let desc = this.product.find(x => x.id === id).body;
         this.description = desc;
     */
    };
    ApiDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-details',
            template: __webpack_require__(/*! ./api-details.component.html */ "./src/app/api-details/api-details.component.html"),
            styles: [__webpack_require__(/*! ./api-details.component.css */ "./src/app/api-details/api-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ApiDetailsComponent);
    return ApiDetailsComponent;
}());



/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
        this.isloginin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.url = 'http://localhost:3000/products';
    }
    ApiServiceService.prototype.setLogin = function (success) {
        this.isloginin.next(success);
    };
    ApiServiceService.prototype.getLogin = function () {
        return this.isloginin.asObservable();
    };
    ApiServiceService.prototype.getProductById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    /********************************* */
    ApiServiceService.prototype.getProduct = function () {
        // console.log ('ddd');
        return this.http.get(this.url);
    };
    /************************ */
    ApiServiceService.prototype.getProductbycategory = function (cat, people) {
        var httpp = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('category', cat).set('people', people);
        return this.http.get(this.url, { params: httpp });
    };
    /******************************** */
    ApiServiceService.prototype.getProductbyimage = function (img, id) {
        var httpp = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('image', img).set('id', id);
        return this.http.get(this.url, { params: httpp });
    };
    /************************************** */
    ApiServiceService.prototype.addProduct = function (obj) {
        return this.http.post(this.url, obj);
    };
    /*************************************** */
    ApiServiceService.prototype.updateProduct = function (obj) {
        console.log(obj);
        var url = this.url + "/" + obj.id;
        return this.http.put(url, obj);
    };
    /************************************ */
    ApiServiceService.prototype.delete = function (id) {
        console.log(id);
        var url = this.url + "/" + id;
        return this.http.delete(url);
    };
    /************************************ */
    ApiServiceService.prototype.getUser = function () {
        var urlUsers = 'http://localhost:3000/users';
        return this.http.get(urlUsers);
    };
    /**************************** */
    ApiServiceService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        input.append("file", fileToUpload);
        return this.http.post("../assets/img", input);
    };
    /************************************** */
    ApiServiceService.prototype.getMendata = function () {
        return this.http.get(this.url);
    };
    /*************************** */
    ApiServiceService.prototype.postFile = function (caption, fileToUpload) {
        var endpoint = "https://github.com/nebalTbeel/clothesProject/tree/gh-pages/assets/img";
        var Formdata = new FormData();
        Formdata.append('image', fileToUpload, fileToUpload.name);
        //Formdata.append('imageCaption',caption);
        return this.http.post(endpoint, Formdata);
    };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sectios_sectios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sectios/sectios.component */ "./src/app/sectios/sectios.component.ts");
/* harmony import */ var _section_details_section_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-details/section-details.component */ "./src/app/section-details/section-details.component.ts");
/* harmony import */ var _api_data_api_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-data/api-data.component */ "./src/app/api-data/api-data.component.ts");
/* harmony import */ var _api_details_api_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-details/api-details.component */ "./src/app/api-details/api-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");










var routes = [
    { path: "", redirectTo: "/app-home", pathMatch: "full" },
    { path: 'sections', component: _sectios_sectios_component__WEBPACK_IMPORTED_MODULE_3__["SectiosComponent"] },
    { path: 'sectionDetails/:id', component: _section_details_section_details_component__WEBPACK_IMPORTED_MODULE_4__["SectionDetailsComponent"] },
    { path: 'app-home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'api_data', component: _api_data_api_data_component__WEBPACK_IMPORTED_MODULE_5__["ApiDataComponent"] },
    { path: 'apiDetails/:id', component: _api_details_api_details_component__WEBPACK_IMPORTED_MODULE_6__["ApiDetailsComponent"] },
    { path: 'app-login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_section_details_section_details_component__WEBPACK_IMPORTED_MODULE_4__["SectionDetailsComponent"], _api_details_api_details_component__WEBPACK_IMPORTED_MODULE_6__["ApiDetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#titlebar{\n\n    background: #c4d6e9;\n   \n}\n\n#all{\n    width: 100%;\n   min-height: 1000px;\n    background-color: #b3b3b3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQW9COztDQUV2Qjs7QUFFRDtJQUNJLFlBQVk7R0FDYixtQkFBbUI7SUFDbEIsMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGViYXJ7XG5cbiAgICBiYWNrZ3JvdW5kOiAjYzRkNmU5O1xuICAgXG59XG5cbiNhbGx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div  style =\"text-align:center; direction: ltr\"  id=\"titlebar\">\n\n \n\n  <h1 >\nELAN Clothes Store  </h1>\n\n{{login}}\n\n  <img width=\"300\" alt=\"Angular Logo\" src=\"images/home2.jpg\">\n</div> -->\n\n<div id=\"all\">\n\n  <app-navbar ></app-navbar>\n\n\n\n<router-outlet></router-outlet></div>"

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
/* harmony import */ var _app_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    //login
    function AppComponent(api, router) {
        this.api = api;
        this.router = router;
        this.title = 'clothes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _sectios_sectios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sectios/sectios.component */ "./src/app/sectios/sectios.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _section_details_section_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-details/section-details.component */ "./src/app/section-details/section-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_data_api_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-data/api-data.component */ "./src/app/api-data/api-data.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_details_api_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-details/api-details.component */ "./src/app/api-details/api-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _men_category_men_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./men-category/men-category.component */ "./src/app/men-category/men-category.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/custom.pipe.ts");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/upload-image/upload-image.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/esm5/angular-image-slider.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"],
                _sectios_sectios_component__WEBPACK_IMPORTED_MODULE_5__["SectiosComponent"],
                _section_details_section_details_component__WEBPACK_IMPORTED_MODULE_7__["SectionDetailsComponent"],
                _api_data_api_data_component__WEBPACK_IMPORTED_MODULE_9__["ApiDataComponent"],
                _api_details_api_details_component__WEBPACK_IMPORTED_MODULE_11__["ApiDetailsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"],
                _men_category_men_category_component__WEBPACK_IMPORTED_MODULE_15__["MenCategoryComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _custom_pipe__WEBPACK_IMPORTED_MODULE_17__["CustomPipe"],
                _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_18__["UploadImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forRoot([]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                angular_image_slider__WEBPACK_IMPORTED_MODULE_20__["SliderModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nhello card\n\n</p>\n\n{{varFromParent}}\n\n<ng-content ></ng-content>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "varFromParent", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/custom.pipe.ts":
/*!********************************!*\
  !*** ./src/app/custom.pipe.ts ***!
  \********************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomPipe = /** @class */ (function () {
    function CustomPipe() {
    }
    CustomPipe.prototype.transform = function (value, cat, size) {
        var oddArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var obj = value_1[_i];
            if (obj = cat) {
                console.log(size);
                return obj;
            }
        }
    };
    CustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'custom'
        })
    ], CustomPipe);
    return CustomPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "angular-image-slider img{\nwidth:30%;\n\n}\n\n.mx-auto{\n\n    width:150px; \n}\n\n/* body{background-color: #867979;} */\n\n.imgslide{\n\nheight:400px;\nwidth:600px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVOztDQUVUOztBQUVEOztJQUVJLFlBQVk7Q0FDZjs7QUFDRCxzQ0FBc0M7O0FBQ3RDOztBQUVBLGFBQWE7QUFDYixZQUFZOztDQUVYIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLWltYWdlLXNsaWRlciBpbWd7XG53aWR0aDozMCU7XG5cbn1cblxuLm14LWF1dG97XG5cbiAgICB3aWR0aDoxNTBweDsgXG59XG4vKiBib2R5e2JhY2tncm91bmQtY29sb3I6ICM4Njc5Nzk7fSAqL1xuLmltZ3NsaWRle1xuXG5oZWlnaHQ6NDAwcHg7XG53aWR0aDo2MDBweDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  \n <div id=\"all\">\n\n\n    <div  style =\"text-align:center; direction: ltr\"  id=\"titlebar\">\n\n \n      <br>\n        <h1 >\n      ELAN Clothes Store  </h1>\n      \n      <br> <br>\n      \n        <img width=\"100%\" alt=\"Angular Logo\" src=\"../../assets/img/home.jpg\">\n        <br><br>\n       <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n          <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/jacket.jpg\" alt=\"\">\n          <h3>Men Clothes\n            <small>Men Clothes</small>\n          </h3>\n          <p>various types of men clothes, jackets, jeans, T-shirts, ....</p>\n        </div>\n        <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n          <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/bb.png\" alt=\"\">\n          <h3>Kids Clothes\n            <small>Kids Clothes</small>\n          </h3>\n          <p>various types of men clothes, jackets, jeans, T-shirts, ....</p>\n        </div>\n     \n\n        <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n          <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/bb.png\" alt=\"\">\n          <h3>Kids Clothes\n            <small>Kids Clothes</small>\n          </h3>\n          <p>various types of men clothes, jackets, jeans, T-shirts, ....</p>\n        </div>\n     \n      </div>\n      </div>\n\n    </div>   -->\n\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{ title }}!\n      </h1>\n      <br>\n      \n        <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide><img class=\"imgslide\" src=\"../../assets/img/clothes.jpg\"></ng-template>  \n        <ng-template carouselSlide><img class=\"imgslide\" src=\"../../assets/img/accessories.jpg\"></ng-template>  \n        <ng-template carouselSlide><img class=\"imgslide\" src=\"../../assets/img/Boy-Classic-1.jpg\"></ng-template> \n        <ng-template carouselSlide><img class=\"imgslide\" src=\"../../assets/img/kids.jpg\"></ng-template>  \n        <ng-template carouselSlide><img class=\"imgslide\" src=\"../../assets/img/images.jpg\"></ng-template>  \n      </owl-carousel-o>\n    \n    </div>"

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
    function HomeComponent(route) {
        this.route = route;
        this.title = 'Elan Store';
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
        this.show = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.show = "active";
        this.imagesUrl = [
            '../assets/img/hello.jpg',
            '../assets/img/hello2.jpg',
            '../assets/img/hello3.jpg'
        ];
    };
    HomeComponent.prototype.readURLs = function (e) {
        if (e.target.files && e.input.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readevt) {
                var binaryString = readevt.target;
            };
            // reader.readAsDataURL(e.target.files[0]);
            reader.readAsBinaryString(e.target.files[0]);
            console.log(reader.readAsBinaryString(e.target.files[0]));
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n\n.card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsdUVBQXVFO0NBQzFFOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixzQkFBa0I7UUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDs7R0FFRzs7QUFDSDtJQUNJLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBR2pDLG1CQUFtQjtJQUduQiwyQ0FBMkM7Q0FDOUM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBR2YsbUJBQW1CO0NBQ3RCOztBQUVEOztHQUVHOztBQUNIO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBR3BCLHVCQUF1QjtDQUMxQjs7QUFFRDs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFFRDs7OztJQUlJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxtQkFBbUI7SUFHbkIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7SUFFWCx3RUFBd0U7Q0FDM0U7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLDRFQUE0RTtJQUM1RSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBR2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFJYix1QkFBdUI7Q0FDMUI7O0FBRUQ7OztJQUdJLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDs7O0lBR0ksdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbiAqIENhcmQgY29tcG9uZW50XG4gKi9cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIC8qIGp1c3QgaW4gY2FzZSB0aGVyZSBubyBjb250ZW50Ki9cbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLyogc2hhZG93cyBhbmQgcm91bmRlZCBib3JkZXJzICovXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypcbiAqIEZvcm0gc3R5bGVzXG4gKi9cbi5wcm9maWxlLW5hbWUtY2FyZCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IDFlbTtcbn1cblxuLnJlYXV0aC1lbWFpbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mb3JtLXNpZ25pbiAjaW5wdXRFbWFpbCxcbi5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9dGV4dF0sXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcbn1cblxuLmJ0bi5idG4tc2lnbmluIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7Ki9cbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG59XG5cbi5idG4uYnRuLXNpZ25pbjpob3Zlcixcbi5idG4uYnRuLXNpZ25pbjphY3RpdmUsXG4uYnRuLmJ0bi1zaWduaW46Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgOTcsIDMzKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgY29sb3I6IHJnYigxMDQsIDE0NSwgMTYyKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZDpob3Zlcixcbi5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxuLmZvcmdvdC1wYXNzd29yZDpmb2N1c3tcbiAgICBjb2xvcjogcmdiKDEyLCA5NywgMzMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container cont\">\n  <div class=\"card card-container\">\n      <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"../../assets/img/clothes.jpg\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      \n          <span id=\"reauth-email\" class=\"reauth-email\"></span>\n          <input type=\"text\" id=\"inputEmail\" class=\"form-control\" [(ngModel)] =\"user\" placeholder=\"User Name\" required autofocus>\n         <br> <input type=\"password\" [(ngModel)] = \"pass\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        \n         <br>  <button (click) = \"login()\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n      \n         <br>  \n    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router) {
        this.api = api;
        this.router = router;
        this.users = [];
        this.user = this.user;
        this.pass = this.pass;
        this.loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUser().subscribe(function (products) { return _this.users = products; });
    };
    LoginComponent.prototype.login = function () {
        var user = this.user;
        var pass = this.pass;
        for (var x = 0; x < this.users.length; x++) {
            if (this.users.find(function (m) { return m.name === user; })) {
                if (this.users.find(function (m) { return m.name === user; }).password == pass) {
                    this.api.setLogin(true);
                    this.router.navigate(['/home']);
                    //this.loginEvent.emit({success :true})
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "loginEvent", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/men-category/men-category.component.css":
/*!*********************************************************!*\
  !*** ./src/app/men-category/men-category.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbi1jYXRlZ29yeS9tZW4tY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/men-category/men-category.component.html":
/*!**********************************************************!*\
  !*** ./src/app/men-category/men-category.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  men-category works!\n</p>\n"

/***/ }),

/***/ "./src/app/men-category/men-category.component.ts":
/*!********************************************************!*\
  !*** ./src/app/men-category/men-category.component.ts ***!
  \********************************************************/
/*! exports provided: MenCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenCategoryComponent", function() { return MenCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenCategoryComponent = /** @class */ (function () {
    function MenCategoryComponent() {
    }
    MenCategoryComponent.prototype.ngOnInit = function () {
    };
    MenCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-men-category',
            template: __webpack_require__(/*! ./men-category.component.html */ "./src/app/men-category/men-category.component.html"),
            styles: [__webpack_require__(/*! ./men-category.component.css */ "./src/app/men-category/men-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenCategoryComponent);
    return MenCategoryComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark\" >\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link \" routerLink=\"/app-home\" >Home <span class=\"sr-only\">(current)</span></a>&nbsp;&nbsp;\n      <a class=\"nav-item nav-link \" routerLink=\"/about\">About</a> &nbsp; &nbsp;\n      <a class=\"nav-item nav-link \" routerLink=\"/sections\" >Sections</a> &nbsp;&nbsp;\n      <a  *ngIf = \"islogin\" class=\"nav-item nav-link \" routerLink=\"/api_data\" >Products Management</a>&nbsp;&nbsp;\n     <a  *ngIf = \"!islogin\" class=\"nav-item nav-link \" routerLink=\"/app-login\" >Login</a>&nbsp;&nbsp;\n\n     <a  *ngIf = \"islogin\" class=\"nav-item nav-link\" routerLink=\"/app-login\" (click) = \"Logout()\">Logout</a>\n\n<!--  *ngIf = \"login\" -->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(api) {
        this.api = api;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getLogin().subscribe(function (response) { return _this.islogin = response; });
    };
    NavbarComponent.prototype.logout = function () {
        this.api.setLogin(false);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/section-details/section-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/section-details/section-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    height:400px;\n    width:400px;\n}\n\n.center{\n    margin-left: 250px;\n}\n\n.for{\n\n    margin-left : 10px;\n}\n\n.det{\n\n    width:60px;\n    height:60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1kZXRhaWxzL3NlY3Rpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7SUFFSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7O0lBRUksV0FBVztJQUNYLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tZGV0YWlscy9zZWN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBoZWlnaHQ6NDAwcHg7XG4gICAgd2lkdGg6NDAwcHg7XG59XG5cbi5jZW50ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xufVxuXG4uZm9ye1xuXG4gICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xufVxuXG4uZGV0e1xuXG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/section-details/section-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/section-details/section-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div class=\"row center\"> \n\n<div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n    \n    <a (click) = \"getMendata(secId,1)\"><img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/man.jpg\" alt=\"\">\n      <h3>Men\n      </h3></a>  </div>\n\n\n<div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n  \n     <a (click) = \"getMendata(secId,2)\">  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/img/kids.jpg\" alt=\"\">\n      <h3>Kids\n        \n      </h3></a> \n </div> \n\n\n</div>\n \n<div class=\"row\">\n\n    <!-- <div *ngFor = \"let obj of category\" class=\"col-lg-2 col-sm-3 for\">\n      <img src=\"\" width=\"15px\" height=\"15px\" alt=\"clothes\">\n        <p style=\"font-weight:bold\">type : {{obj.name}}</p><br>\n        <p>size : {{obj.size}}</p><br>\n        <p>color : {{obj.color}}</p><br>\n        <p>prand : {{obj.prand}}</p><br>\n        <p>price : {{obj.price}}</p><br>\n\n      </div> -->\n\n      <div class=\"col-lg-4 col-sm-6 text-center mb-4\"   *ngFor = \"let obj of category \">\n        <img class=\"rounded-circle img-fluid d-block mx-auto det\" [src]=\"obj.image\" alt=\"\">\n        <h5>type : {{obj.name}}  </h5>       \n       \n        <p>size : {{obj.size}}</p><br>\n        <p>color : {{obj.color}}</p><br>\n        <p>prand : {{obj.prand}}</p><br>\n        <p>price : {{obj.price}}</p><br>\n      </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/section-details/section-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/section-details/section-details.component.ts ***!
  \**************************************************************/
/*! exports provided: SectionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDetailsComponent", function() { return SectionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.service */ "./src/app/types.service.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");





var SectionDetailsComponent = /** @class */ (function () {
    function SectionDetailsComponent(api, route, setions) {
        this.api = api;
        this.route = route;
        this.setions = setions;
        this.allproduct = [];
        this.category = [];
        this.finalProduct = [];
    }
    SectionDetailsComponent.prototype.ngOnInit = function () {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.secId = id;
        var desc = this.setions.types.find(function (x) { return x.id === id; }).description;
        this.description = desc;
    };
    SectionDetailsComponent.prototype.getMendata = function (cat, people) {
        var _this = this;
        this.api.getProductbycategory(cat, people).subscribe(function (products) { return _this.category = products; });
    };
    SectionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-details',
            template: __webpack_require__(/*! ./section-details.component.html */ "./src/app/section-details/section-details.component.html"),
            styles: [__webpack_require__(/*! ./section-details.component.css */ "./src/app/section-details/section-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _types_service__WEBPACK_IMPORTED_MODULE_3__["TypesService"]])
    ], SectionDetailsComponent);
    return SectionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/sectios/sectios.component.css":
/*!***********************************************!*\
  !*** ./src/app/sectios/sectios.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#list{\n\n    text-align: right;\n    width: 50%;\n    float: left;\n}\n#title{\n   float: left;\n}\n.hdpe{\n\n   /* background-image:url(\"http://fakeimg.pl/365x365/\"); */\n    background-color: #cccccc;\n}\n.img{\n\n    width:300px;\n    height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvcy9zZWN0aW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7QUFDRDtHQUNHLFlBQVk7Q0FDZDtBQUVEOztHQUVHLHlEQUF5RDtJQUN4RCwwQkFBMEI7Q0FDN0I7QUFFRDs7SUFFSSxZQUFZO0lBQ1osY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb3Mvc2VjdGlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpc3R7XG5cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuI3RpdGxle1xuICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZHBle1xuXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHA6Ly9mYWtlaW1nLnBsLzM2NXgzNjUvXCIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi5pbWd7XG5cbiAgICB3aWR0aDozMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sectios/sectios.component.html":
/*!************************************************!*\
  !*** ./src/app/sectios/sectios.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n  \n\n<!-- <app-card> card in sections </app-card> -->\n\n\n\n    \n\n     <!-- <p class=\"list-group-item list-group-item-action\" \n      *ngFor=\"let obj of data\" (click) = \"onSelect(obj) \"> \n       {{obj.name}}   {{obj.id}}\n\n       \n      </p>  -->\n \n      <div class=\"col-lg-4 col-sm-6 text-center mb-4\"  *ngFor=\"let obj of data\" (click) = \"onSelect(obj) \">\n          <img class=\"rounded-circle img-fluid d-block mx-auto img\" src=\"{{obj.img}}\" alt=\"\">\n          <h3>{{obj.id}}-{{obj.name}}\n           \n          </h3>\n          <p>{{obj.description}}</p>\n        </div>\n   \n\n\n\n  \n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/sectios/sectios.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sectios/sectios.component.ts ***!
  \**********************************************/
/*! exports provided: SectiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectiosComponent", function() { return SectiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.service */ "./src/app/types.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SectiosComponent = /** @class */ (function () {
    function SectiosComponent(setions, router) {
        this.setions = setions;
        this.router = router;
        this.data = this.setions.types;
        this.product = [];
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.errorReq = "";
    }
    SectiosComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        if (this.myForm.controls.name.errors.required) {
            this.errorReq = "must be filled";
        }
    };
    SectiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorReq = "";
        this.setions.getProduct().subscribe(function (products) { return _this.product = products; });
    };
    SectiosComponent.prototype.onSelect = function (section) {
        this.router.navigate(['/sectionDetails', section.id]);
    };
    SectiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sectios',
            template: __webpack_require__(/*! ./sectios.component.html */ "./src/app/sectios/sectios.component.html"),
            styles: [__webpack_require__(/*! ./sectios.component.css */ "./src/app/sectios/sectios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_types_service__WEBPACK_IMPORTED_MODULE_2__["TypesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SectiosComponent);
    return SectiosComponent;
}());



/***/ }),

/***/ "./src/app/types.service.ts":
/*!**********************************!*\
  !*** ./src/app/types.service.ts ***!
  \**********************************/
/*! exports provided: TypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return TypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TypesService = /** @class */ (function () {
    function TypesService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.types = [
            { id: 1, name: "Clothes", description: " Clothes For Men And Children", img: "../../assets/img/images.jpg" },
            { id: 2, name: "Shoes", description: " Shoes For Men And Children ", img: "../../assets/img/shoes.jpg" },
            { id: 3, name: "Accessories", description: " Accessories For Men And Children", img: "../../assets/img/accessories.jpg" }
        ];
    }
    TypesService.prototype.getProduct = function () {
        return this.http.get(this.url);
    };
    TypesService.prototype.getProductById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    TypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TypesService);
    return TypesService;
}());



/***/ }),

/***/ "./src/app/upload-image/upload-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<!-- image\n\n<form #imageForm = ngForm (ngSubmit)=\"onSubmit(caption,image)\">\n<input type=\"text\" #caption ngModel name=\"caption\" id=\"caption\">\n\n<img [src]=\"imageUrl\"    style=\"width:250px;height:200px\">\n<input type = \"file\" #image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n<button type=\"submit\" [disabled] =\"image.value =='' || !imageForm.valid\">submit </button>\n</form> -->\n<!-- <input \n  style=\"display: none\" \n  type=\"file\" (change)=\"onFileChanged($event)\" \n  #fileInput>\n<button (click)=\"fileInput.click()\">Select File</button>\n<button (click)=\"onUpload()\">Upload!</button> -->\n\nYou can upload image and store it as base64 encoded.\n\nIn you template add this\n\n<div class=\"image-upload\">\n    <img [src]=\"imageSrc\" style=\"max-width:300px;max-height:300px\"/>\n    <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\n</div> \n\n\n\n</div>"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.ts ***!
  \********************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(api, http) {
        this.api = api;
        this.http = http;
        this.imageSrc = '';
    }
    UploadImageComponent.prototype.ngOnInit = function () {
    };
    UploadImageComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    UploadImageComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
    };
    UploadImageComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
    };
    UploadImageComponent.prototype.onUpload = function () {
        var _this = this;
        // this.http is the injected HttpClient
        this.http.post('../../clothesProject/assets/img', this.selectedFile)
            .subscribe(function (res) { return _this.ress = res; });
        console.log(this.ress);
    };
    UploadImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__(/*! ./upload-image.component.html */ "./src/app/upload-image/upload-image.component.html"),
            styles: [__webpack_require__(/*! ./upload-image.component.css */ "./src/app/upload-image/upload-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UploadImageComponent);
    return UploadImageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\AbuSaqer\Desktop\final-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map