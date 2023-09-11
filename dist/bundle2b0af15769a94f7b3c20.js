/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToBody": () => (/* binding */ addToBody)
/* harmony export */ });
/* harmony import */ var _weatherDayCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDayCard */ "./src/components/weatherDayCard.js");

function createMainDayDiv() {
  var mainDayDiv = document.createElement("div");
  mainDayDiv.className = "main-day-div";
  mainDayDiv.appendChild(createMainDayLeft());
  mainDayDiv.appendChild(createMainDayMiddle());
  mainDayDiv.appendChild(createMainDayRight());
  document.body.appendChild(mainDayDiv);
}
function createMainDayLeft() {
  var mainDayLeft = document.createElement("div");
  mainDayLeft.className = "main-day-left";
  var mainDayLeftGrid = document.createElement("div");
  mainDayLeftGrid.id = "main-day-left-grid";
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("humidity", "Humidity:", "69"));
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("wind-speed", "Wind Speed:", "6.2"));
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("wind-gust", "Wind Gust:", "7"));
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("uv", "UV:", "8"));
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("cloud-coverage", "Cloud Coverage:", "54"));
  mainDayLeftGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("pressure", "Pressure:", "67"));
  mainDayLeft.appendChild(mainDayLeftGrid);
  return mainDayLeft;
}
function createMainDayMiddle() {
  var mainDayMiddle = document.createElement("div");
  mainDayMiddle.className = "main-day-middle";
  mainDayMiddle.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.mainDayBrief)());
  mainDayMiddle.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.searchContainer)());
  mainDayMiddle.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.mainDayHourly)());
  mainDayMiddle.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createUnitSlider)());
  return mainDayMiddle;
}
function createMainDayRight() {
  var mainDayRight = document.createElement("div");
  mainDayRight.className = "main-day-right";
  var mainDayRightGrid = document.createElement("div");
  mainDayRightGrid.id = "main-day-right-grid";
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("co", "CO:", "8"));
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("ozone", "Ozone:", "10.5"));
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("no2", "NO₂:", "11"));
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("so2", "SO₂:", "11"));
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("pm", "PM 2.5/10:", "11"));
  mainDayRightGrid.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createSideContentCard)("epa-index", "EPA Index:", "11"));
  mainDayRight.appendChild(mainDayRightGrid);
  return mainDayRight;
}
function createRestOfWeek() {
  var restOfWeekDiv = document.createElement("div");
  restOfWeekDiv.className = "rest-of-week";
  restOfWeekDiv.id = "rest-week-container";
  for (var i = 0; i < 7; i++) {
    restOfWeekDiv.appendChild((0,_weatherDayCard__WEBPACK_IMPORTED_MODULE_0__.createWeekDayWeatherCard)(i));
  }
  document.body.appendChild(restOfWeekDiv);
}
function addToBody() {
  createMainDayDiv();
  createRestOfWeek();
}


/***/ }),

/***/ "./src/components/weatherDayCard.js":
/*!******************************************!*\
  !*** ./src/components/weatherDayCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addIcon": () => (/* binding */ addIcon),
/* harmony export */   "createHourlyWeatherCard": () => (/* binding */ createHourlyWeatherCard),
/* harmony export */   "createSideContentCard": () => (/* binding */ createSideContentCard),
/* harmony export */   "createUnitSlider": () => (/* binding */ createUnitSlider),
/* harmony export */   "createWeekDayWeatherCard": () => (/* binding */ createWeekDayWeatherCard),
/* harmony export */   "mainDayBrief": () => (/* binding */ mainDayBrief),
/* harmony export */   "mainDayHourly": () => (/* binding */ mainDayHourly),
/* harmony export */   "searchContainer": () => (/* binding */ searchContainer)
/* harmony export */ });
/* harmony import */ var _assets_lightRain_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/lightRain.png */ "./src/assets/lightRain.png");
/* harmony import */ var _functions_searchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/searchBar */ "./src/functions/searchBar.js");
/* harmony import */ var _functions_weatherAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/weatherAPI */ "./src/functions/weatherAPI.js");



function createWeekDayWeatherCard(id) {
  var weekDayWeatherCard = document.createElement("div");
  weekDayWeatherCard.className = "weather-day-card";
  weekDayWeatherCard.id = "rest-week-" + id;
  var daySpan = document.createElement("span");
  daySpan.innerHTML = "Saturday";
  var weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";
  var temperatureSpan = document.createElement("span");
  temperatureSpan.innerHTML = "17&#8451; / 23&#8451;";
  var weatherIcon = document.createElement("img");
  weatherIcon.src = _assets_lightRain_png__WEBPACK_IMPORTED_MODULE_0__;
  weekDayWeatherCard.appendChild(daySpan);
  weekDayWeatherCard.appendChild(weatherSpan);
  weekDayWeatherCard.appendChild(temperatureSpan);
  weekDayWeatherCard.appendChild(weatherIcon);
  return weekDayWeatherCard;
}
function createHourlyWeatherCard(id) {
  console.log();
  var hourlyWeatherCard = document.createElement("div");
  hourlyWeatherCard.className = "weather-day-hourly-card";
  hourlyWeatherCard.id = id;
  var hourSpan = document.createElement("span");
  hourSpan.innerHTML = "1PM";
  var weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";
  var temperatureHourly = document.createElement("span");
  temperatureHourly.innerHTML = "23#8451";
  var weatherIcon = document.createElement("img");
  weatherIcon.src = _assets_lightRain_png__WEBPACK_IMPORTED_MODULE_0__;
  hourlyWeatherCard.appendChild(hourSpan);
  hourlyWeatherCard.appendChild(weatherSpan);
  hourlyWeatherCard.appendChild(temperatureHourly);
  hourlyWeatherCard.appendChild(weatherIcon);
  return hourlyWeatherCard;
}
function createSideContentCard(id, type, measure) {
  var detailsDiv = document.createElement("div");
  detailsDiv.className = "side-content";
  var detailsTitle = document.createElement("span");
  detailsTitle.innerHTML = type;
  var details = document.createElement("span");
  details.innerHTML = measure;
  details.id = id;
  detailsDiv.appendChild(detailsTitle);
  detailsDiv.appendChild(details);
  return detailsDiv;
}
function createUnitSlider() {
  var unitSettings = document.createElement("div");
  unitSettings.className = "unit-settings";
  var measureUnit = document.createElement("span");
  measureUnit.id = "measure-unit";
  measureUnit.innerHTML = "Measurement Units:";
  var switchContainer = document.createElement("label");
  switchContainer.className = "switch";
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  var slider = document.createElement("span");
  slider.className = "slider round";
  unitSettings.appendChild(measureUnit);
  switchContainer.appendChild(checkBox);
  switchContainer.appendChild(slider);
  unitSettings.appendChild(switchContainer);
  return unitSettings;
}
function mainDayBrief() {
  var mainDayBrief = document.createElement("div");
  mainDayBrief.id = "main-day-brief";
  var location = document.createElement("span");
  location.id = "main-day-location";
  location.innerHTML = "Auckland";
  var date = document.createElement("span");
  date.id = "main-day-date";
  date.innerHTML = "Wednesday 14th March 2019";
  var weather = document.createElement("span");
  weather.id = "main-day-weather";
  weather.innerHTML = "Light Rain";
  var temperature = document.createElement("span");
  temperature.id = "main-day-temperature";
  temperature.innerHTML = "17&#8451; / 23&#8451;";
  var weatherIcon = document.createElement("img");
  weatherIcon.src = _assets_lightRain_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherIcon.id = "main-day-image";
  mainDayBrief.appendChild(location);
  mainDayBrief.appendChild(date);
  mainDayBrief.appendChild(weather);
  mainDayBrief.appendChild(temperature);
  mainDayBrief.appendChild(weatherIcon);
  return mainDayBrief;
}
function searchContainer() {
  var searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  var searchBar = document.createElement("div");
  searchBar.className = "search-bar";
  var searchForm = document.createElement("form");
  searchForm.action = "/action_page.php";
  var searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.name = "search";
  var searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.innerHTML = "&#128269;";
  searchButton.addEventListener("click", (0,_functions_searchBar__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value));
  searchContainer.appendChild(searchBar);
  searchBar.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  return searchContainer;
}
function mainDayHourly() {
  var mainDayHourlyDiv = document.createElement("div");
  mainDayHourlyDiv.id = "main-day-hourly";
  var hourlyTitle = document.createElement("span");
  hourlyTitle.innerHTML = "Hourly:";
  var hourlyWeather = document.createElement("div");
  hourlyWeather.id = "hourly-weather";

  // let hourly = hourlyData;
  for (var i = 0; i < 24; i++) {
    var id = "hourly" + "-" + i;
    hourlyWeather.appendChild(createHourlyWeatherCard(id));
  }
  mainDayHourlyDiv.appendChild(hourlyTitle);
  mainDayHourlyDiv.appendChild(hourlyWeather);
  return mainDayHourlyDiv;
}
function addIcon() {
  var listofIcons = document.getElementsByClassName("weather-icon");
  Array.from(listofIcons).forEach(function (element) {
    element.src = _assets_lightRain_png__WEBPACK_IMPORTED_MODULE_0__;
    console.log("yes");
  });
}


/***/ }),

/***/ "./src/functions/searchBar.js":
/*!************************************!*\
  !*** ./src/functions/searchBar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function searchBarListener(input) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchBarListener);

/***/ }),

/***/ "./src/functions/weatherAPI.js":
/*!*************************************!*\
  !*** ./src/functions/weatherAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastAPICall": () => (/* binding */ forecastAPICall),
/* harmony export */   "restOfWeekData": () => (/* binding */ restOfWeekData),
/* harmony export */   "weatherAPICall": () => (/* binding */ weatherAPICall)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function weatherAPICall(_x) {
  return _weatherAPICall.apply(this, arguments);
}
function _weatherAPICall() {
  _weatherAPICall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var response, weatherData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.weatherapi.com/v1/current.json?key=273f0d3a84224f6ba65100946232203&q=" + location + "&aqi=yes", {
            mode: "cors"
          });
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          weatherData = _context.sent;
          console.log(weatherData);
          document.getElementById("humidity").innerHTML = weatherData.current.humidity + " %";
          document.getElementById("wind-speed").innerHTML = weatherData.current.wind_kph + " kph";
          document.getElementById("wind-gust").innerHTML = weatherData.current.gust_kph + " kph";
          document.getElementById("uv").innerHTML = weatherData.current.uv + " ";
          document.getElementById("cloud-coverage").innerHTML = weatherData.current.cloud + " %";
          document.getElementById("pressure").innerHTML = weatherData.current.pressure_in + " mb";
          document.getElementById("co").innerHTML = weatherData.current.air_quality.co + " μg/m3";
          document.getElementById("ozone").innerHTML = weatherData.current.air_quality.o3 + " μg/m3";
          document.getElementById("no2").innerHTML = weatherData.current.air_quality.no2 + " μg/m3";
          document.getElementById("so2").innerHTML = weatherData.current.air_quality.so2 + " μg/m3";
          document.getElementById("pm").innerHTML = weatherData.current.air_quality.pm2_5 + "/" + weatherData.current.air_quality.pm10 + " μg/m3";
          document.getElementById("epa-index").innerHTML = weatherData.current.air_quality["us-epa-index"] + " ";
          document.getElementById("main-day-location").innerHTML = weatherData.location.name;
          document.getElementById("main-day-date").innerHTML = weatherData.location.localtime;
          document.getElementById("main-day-weather").innerHTML = weatherData.current.condition.text;
          document.getElementById("main-day-temperature").innerHTML = weatherData.current.temp_c + "℃";
          document.getElementById("main-day-image").src = "https://cdn.weatherapi.com/weather/64x64/day/122.png";
          return _context.abrupt("return", weatherData);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _weatherAPICall.apply(this, arguments);
}
function forecastAPICall(_x2) {
  return _forecastAPICall.apply(this, arguments);
}
function _forecastAPICall() {
  _forecastAPICall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(location) {
    var response, weatherForecastData, hourlyCards;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("https://api.weatherapi.com/v1/forecast.json?key=273f0d3a84224f6ba65100946232203&&q=" + location + "&days=8&aqi=yes&alerts=no", {
            mode: "cors"
          });
        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return response.json();
        case 5:
          weatherForecastData = _context2.sent;
          hourlyCards = document.getElementById("hourly-weather").childNodes;
          console.log(hourlyCards);
          hourlyCards.forEach(function (node, hours) {
            var cardNodes = node.childNodes;
            cardNodes[0].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].time.slice(-5);
            cardNodes[1].innerHTML = "";
            // cardNodes[1].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].condition.text;
            cardNodes[2].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].feelslike_c + "℃";
            cardNodes[3].src = weatherForecastData.forecast.forecastday[0].hour[hours].condition.icon;
            hours++;
            console.log(hours);
          });
          console.log(weatherForecastData);
          console.log(weatherForecastData.forecast.forecastday[0].hour[0]);
          return _context2.abrupt("return", weatherForecastData);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _forecastAPICall.apply(this, arguments);
}
function restOfWeekData(_x3) {
  return _restOfWeekData.apply(this, arguments);
} // "Humidity, Wind, Wind direction, Pressure, UV, Precipitation mm, "
// "CO, Ozone, Nitrogen, Sulfur, Particulate, EPA Index"
function _restOfWeekData() {
  _restOfWeekData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(location) {
    var response, weatherForecastData, restOfWeekCards;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("https://api.weatherapi.com/v1/forecast.json?key=273f0d3a84224f6ba65100946232203&&q=" + location + "&days=8&aqi=yes&alerts=no", {
            mode: "cors"
          });
        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return response.json();
        case 5:
          weatherForecastData = _context3.sent;
          restOfWeekCards = document.getElementById("rest-week-container").childNodes;
          try {
            restOfWeekCards.forEach(function (node, day) {
              var restWeekNodes = node.childNodes;
              day++;
              restWeekNodes[0].innerHTML = weatherForecastData.forecast.forecastday[day].date;
              restWeekNodes[1].innerHTML = weatherForecastData.forecast.forecastday[day].day.condition.text;
              restWeekNodes[2].innerHTML = weatherForecastData.forecast.forecastday[day].day.mintemp_c + "℃ /" + weatherForecastData.forecast.forecastday[day].day.maxtemp_c + "℃";
              restWeekNodes[3].src = weatherForecastData.forecast.forecastday[day].day.condition.icon;
              console.log(day);
              console.log(node);
            });
          } catch (err) {
            console.log(err.message);
          }
          console.log(restOfWeekCards);
          console.log(weatherForecastData);
          return _context3.abrupt("return", weatherForecastData);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _restOfWeekData.apply(this, arguments);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/background-6.jpg */ "./src/assets/background-6.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #08410c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px;\n  min-width: 50vw;\n}\n\nh1 {\n  margin: 0;\n  opacity: 0.5;\n  letter-spacing: 2px;\n}\n\n.rest-of-week {\n  display: grid;\n  width: 95vw;\n  justify-content: space-between;\n  margin: auto;\n  position: relative;\n  grid-gap: 1rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  margin-top: 20px;\n}\n\n.main-day-middle {\n  grid-column: 2/4;\n}\n\n.main-day-left {\n  float: left;\n  grid-column: 1/2;\n}\n\n.main-day-right {\n  float: right;\n  grid-column: 4/5;\n}\n\n.main-day-div {\n  display: grid;\n  width: 95vw;\n  max-height: fit-content;\n  margin: auto;\n  justify-content: space-between;\n  grid-template-columns: 1fr minmax(150px, min-content) minmax(150px, min-content) 1fr;\n  position: relative;\n  grid-template-rows: 1fr;\n  grid-gap: 25px;\n}\n\n.main-day-card {\n  width: 47.5%;\n}\n\n.main-day-card > span {\n  justify-content: center;\n}\n\n.main-day-card-left {\n  width: 23.75%;\n  float: left;\n}\n\n#main-day-left-grid, #main-day-right-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: auto;\n}\n\n.side-content {\n  display: block;\n  justify-content: center;\n  margin: 0;\n  padding: 10px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(8px);\n  border-radius: 6px;\n  border: 1px solid rgba(145, 145, 145, 0.25);\n  margin-bottom: 3%;\n  /* word-break: break-all; */\n}\n\n.main-day-card-right {\n  width: 23.75%;\n  float: right;\n}\n\n.main-day-middle, .main-day-left, .main-day-right, .weather-day-card, .weather-day-hourly-card {\n  display: block;\n  justify-content: center;\n  margin: 0;\n  padding: 15px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(8px);\n  border-radius: 6px;\n  border: 1px solid rgba(145, 145, 145, 0.25);\n  /* word-break: break-all; */\n  position: relative;\n}\n\n#main-day-brief {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n#main-day-brief > span {\n  justify-content: center;\n}\n\n#main-day-location {\n  max-height: fit-content;\n  font-size: 32px;\n}\n\n#main-day-date {\n  font-size: 28px;\n}\n\n#main-day-weather {\n  font-size: 26px;\n}\n\n#main-day-temperature {\n  font-size: 24px;\n}\n\n#hourly-weather {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  padding-top: 5px;\n  margin: 0;\n  grid-gap: 5px;\n  grid-template-rows: auto;\n  grid-auto-flow: column;\n  overflow-x: auto;\n  max-width: 50vw;\n}\n\n.weather-day-hourly-card {\n  min-width: fit-content;\n}\n\n.weather-day-hourly-card > span {\n  justify-content: center;\n}\n\n.weather-day-hourly-card > img {\n  max-width: 50px;\n}\n\n#main-day-hourly {\n  display: block;\n  justify-content: center;\n  margin: 0;\n  margin-top: 10%;\n}\n\n#main-day-hourly-weather {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  padding-top: 5px;\n  margin: 0;\n  grid-gap: 5px;\n  grid-template-rows: auto;\n  grid-auto-flow: column;\n  overflow-x: auto;\n}\n\nspan {\n  display: flex;\n  margin: 0;\n  color: white;\n  font-size: 20px;\n  /* height: auto;\n  width: 100%;\n  max-width: 100%; */\n  word-wrap: break-word;\n}\n\nimg {\n  display: flex;\n  width: 100%;\n  max-width: 100px;\n  /* height: auto; */\n  justify-self: center;\n  margin: auto;\n  filter: brightness(0) invert(1);\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  align-self: center;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n#measure-unit {\n  justify-content: center;\n}\n\n.unit-settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.search-bar {\n  display: flex;\n  float: right;\n  justify-content: center;\n  /* height: 4rem; */\n  margin: auto;\n  position: relative;\n  border-bottom: solid 2px rgb(255, 255, 255);\n}\n\ninput[type=text] {\n  padding: 9px;\n  padding-bottom: 2px;\n  max-height: 100%;\n  font-size: 24px;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n\ninput:focus {\n  border: none;\n  outline: none;\n}\n\n.search-container button {\n  float: right;\n  /* padding: 6px 10px; */\n  background: transparent;\n  font-size: 17px;\n  border: none;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,yBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,kCAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;AACF;;AAEA;EACE,SAAA;EACA,YAAA;EACA,mBAAA;AACF;;AACA;EACE,aAAA;EACA,WAAA;EACA,8BAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,wBAAA;EACA,kDAAA;EACA,gBAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,WAAA;EACA,gBAAA;AAEF;;AACA;EACE,YAAA;EACA,gBAAA;AAEF;;AACA;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,oFAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAAA;AAEF;;AACA;EACE,YAAA;AAEF;;AACA;EACE,uBAAA;AAEF;;AACA;EACE,aAAA;EACA,WAAA;AAEF;;AACA;EACE,aAAA;EACA,0BAAA;EACA,2CAAA;EACA,SAAA;AAEF;;AACA;EACE,cAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,mCAAA;EACA,0BAAA;EACA,kBAAA;EACA,2CAAA;EACA,iBAAA;EACA,2BAAA;AAEF;;AACA;EACE,aAAA;EACA,YAAA;AAEF;;AAKA;EASE,cAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,mCAAA;EACA,0BAAA;EACA,kBAAA;EACA,2CAAA;EACA,2BAAA;EACA,kBAAA;AAVF;;AAaA;EACE,cAAA;EACA,uBAAA;EACA,mBAAA;AAVF;;AAaA;EACE,uBAAA;AAVF;;AAaA;EACE,uBAAA;EACA,eAAA;AAVF;;AAYA;EACE,eAAA;AATF;;AAWA;EACE,eAAA;AARF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;AAPF;;AAUA;EACE,sBAAA;AAPF;;AAWA;EACE,uBAAA;AARF;;AAWA;EACE,eAAA;AARF;;AAWA;EACE,cAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;AARF;;AAWA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,gBAAA;AARF;;AAWA;EACE,aAAA;EACA,SAAA;EACA,YAAA;EACA,eAAA;EACA;;oBAAA;EAGA,qBAAA;AARF;;AAWA;EACE,aAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,YAAA;EACA,+BAAA;AARF;;AAYA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AATF;;AAYA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AATF;;AAYA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;AATF;;AAYA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AATF;;AAYA;EACE,yBAAA;AATF;;AAYA;EACE,2BAAA;AATF;;AAYA;EACE,mCAAA;EACA,+BAAA;EACA,2BAAA;AATF;;AAYA,oBAAA;AACA;EACE,mBAAA;AATF;;AAYA;EACE,kBAAA;AATF;;AAYA;EACE,uBAAA;AATF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AATF;;AAYA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AATF;;AAWA;EACE,aAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;AARF;;AAWA;EACE,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,YAAA;AARF;;AAWA;EACE,YAAA;EACA,aAAA;AARF;;AAWA;EACE,YAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,eAAA;AARF;;AAWA;EACE,aAAA;EACA,YAAA;AARF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #08410c;\r\n  background-image: url(/src/assets/background-6.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n  min-width: 50vw;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n.rest-of-week {\r\n  display: grid;\r\n  width: 95vw;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  position: relative;\r\n  grid-gap: 1rem;\r\n  grid-template-rows: auto;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  margin-top: 20px;\r\n}\r\n\r\n.main-day-middle {\r\n  grid-column: 2/4;\r\n}\r\n\r\n.main-day-left {\r\n  float: left;\r\n  grid-column: 1/2;\r\n}\r\n\r\n.main-day-right {\r\n  float: right;\r\n  grid-column: 4/5;\r\n}\r\n\r\n.main-day-div {\r\n  display: grid;\r\n  width: 95vw;\r\n  max-height: fit-content;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n  grid-template-columns: 1fr minmax(150px,min-content) minmax(150px,min-content) 1fr;\r\n  position: relative;\r\n  grid-template-rows: 1fr;\r\n  grid-gap: 25px;\r\n}\r\n\r\n.main-day-card{\r\n  width: 47.5%;\r\n}\r\n\r\n.main-day-card > span{\r\n  justify-content: center;\r\n}\r\n\r\n.main-day-card-left{\r\n  width: 23.75%;\r\n  float: left;\r\n}\r\n\r\n#main-day-left-grid, #main-day-right-grid{\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  gap: auto;\r\n}\r\n\r\n.side-content{\r\n  display: block;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 10px;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(8px);\r\n  border-radius: 6px;\r\n  border: 1px solid rgba(145, 145, 145, 0.25);\r\n  margin-bottom: 3%;\r\n  /* word-break: break-all; */\r\n}\r\n\r\n.main-day-card-right{\r\n  width: 23.75%;\r\n  float: right;\r\n}\r\n\r\n.weather-day-card {\r\n\r\n}\r\n\r\n.main-day-middle, .main-day-left, .main-day-right, .weather-day-card, .weather-day-hourly-card{\r\n  // display: block;\r\n  // justify-content: center;\r\n  // margin: 0;\r\n  // padding: 15px;\r\n  // -webkit-backdrop-filter: blur(10px);\r\n  // backdrop-filter: blur(8px);\r\n  // border-radius: 6px;\r\n  // border: 1px solid rgba(145, 145, 145, 0.25);\r\n  display: block;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 15px;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(8px);\r\n  border-radius: 6px;\r\n  border: 1px solid rgba(145, 145, 145, 0.25);\r\n  /* word-break: break-all; */\r\n  position: relative;\r\n}\r\n\r\n#main-day-brief{\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#main-day-brief > span{\r\n  justify-content: center;\r\n}\r\n\r\n#main-day-location {\r\n  max-height: fit-content;\r\n  font-size: 32px;\r\n}\r\n#main-day-date {\r\n  font-size: 28px;\r\n}\r\n#main-day-weather {\r\n  font-size: 26px;\r\n}\r\n#main-day-temperature {\r\n  font-size: 24px;\r\n}\r\n\r\n#hourly-weather{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 100%;\r\n  padding-top: 5px;\r\n  margin: 0;\r\n  grid-gap: 5px;\r\n  grid-template-rows: auto;\r\n  grid-auto-flow: column;\r\n  overflow-x: auto;\r\n  max-width: 50vw;\r\n}\r\n\r\n.weather-day-hourly-card{\r\n  min-width: fit-content;\r\n  \r\n}\r\n\r\n.weather-day-hourly-card > span{\r\n  justify-content: center;\r\n}\r\n\r\n.weather-day-hourly-card > img{\r\n  max-width: 50px;\r\n}\r\n\r\n#main-day-hourly{\r\n  display: block;\r\n  justify-content: center;\r\n  margin: 0;\r\n  margin-top: 10%;\r\n}\r\n\r\n#main-day-hourly-weather{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 100%;\r\n  padding-top: 5px;\r\n  margin: 0;\r\n  grid-gap: 5px;\r\n  grid-template-rows: auto;\r\n  grid-auto-flow: column;\r\n  overflow-x: auto;\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  margin: 0;\r\n  color: white;\r\n  font-size: 20px;\r\n  /* height: auto;\r\n  width: 100%;\r\n  max-width: 100%; */\r\n  word-wrap: break-word;\r\n}\r\n\r\nimg {\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 100px;\r\n  /* height: auto; */\r\n  justify-self: center;\r\n  margin: auto;\r\n  filter: brightness(0) invert(1);\r\n}\r\n\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n  align-self: center;\r\n}\r\n\r\n.switch input { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n#measure-unit{\r\n  justify-content: center;\r\n}\r\n\r\n.unit-settings{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.search-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n.search-bar {\r\n  display: flex;\r\n  float: right;\r\n  justify-content: center;\r\n  /* height: 4rem; */\r\n  margin: auto;\r\n  position: relative;\r\n  border-bottom: solid 2px rgb(255, 255, 255);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  padding: 9px;\r\n  padding-bottom: 2px;\r\n  max-height: 100%;\r\n  font-size: 24px;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\ninput:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.search-container button {\r\n  float: right;\r\n  /* padding: 6px 10px; */\r\n  background: transparent;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  height: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/background-6.jpg":
/*!*************************************!*\
  !*** ./src/assets/background-6.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background-6.jpg";

/***/ }),

/***/ "./src/assets/lightRain.png":
/*!**********************************!*\
  !*** ./src/assets/lightRain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/lightRain.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_weatherDayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weatherDayCard */ "./src/components/weatherDayCard.js");
/* harmony import */ var _functions_weatherAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/weatherAPI */ "./src/functions/weatherAPI.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




console.log("1, 2 ,3");
(0,_functions_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.weatherAPICall)("Auckland");
(0,_functions_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.forecastAPICall)("Auckland");
(0,_functions_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.restOfWeekData)("Auckland");
(0,_components_layout__WEBPACK_IMPORTED_MODULE_0__.addToBody)();
(0,_components_weatherDayCard__WEBPACK_IMPORTED_MODULE_1__.addIcon)();
})();

/******/ })()
;
//# sourceMappingURL=bundle2b0af15769a94f7b3c20.js.map