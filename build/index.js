/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\nvar App = /** @class */ (function () {\n    function App(port) {\n        this.app = express_1[\"default\"]();\n        this.routes = new routes_1.Routes();\n        this.PORT = port;\n        this.setupApi();\n    }\n    App.prototype.setupApi = function () {\n        var _this = this;\n        this.app.listen(this.PORT, function () {\n            console.log(\"\\n----- Api listening on \" + _this.PORT + \" -----\");\n        });\n        this.routes.useRoutes(this.app);\n    };\n    return App;\n}());\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/controllers/parameter.ts":
/*!**************************************!*\
  !*** ./src/controllers/parameter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nfunction getParameter(req, res) {\n}\nexports[\"default\"] = {\n    getParameter: getParameter\n};\n\n\n//# sourceURL=webpack:///./src/controllers/parameter.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nexports.__esModule = true;\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nvar sequelize_1 = __webpack_require__(/*! ./sequelize */ \"./src/sequelize.ts\");\nvar models = __importStar(__webpack_require__(/*! ./models */ \"./src/models/index.ts\"));\nvar PORT = 3000;\n(function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                sequelize_1.sequelize.addModels(models.list);\n                return [4 /*yield*/, sequelize_1.sequelize.sync({ force: true })];\n            case 1:\n                _a.sent();\n                new app_1[\"default\"](PORT);\n                return [2 /*return*/];\n        }\n    });\n}); })();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/game.ts":
/*!****************************!*\
  !*** ./src/models/game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nexports.__esModule = true;\nvar sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/models/player.ts\");\nvar globalParameter_1 = __webpack_require__(/*! ./globalParameter */ \"./src/models/globalParameter.ts\");\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    __decorate([\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", String)\n    ], Game.prototype, \"name\");\n    __decorate([\n        sequelize_typescript_1.HasMany(function () { return player_1.Player; }),\n        __metadata(\"design:type\", Array)\n    ], Game.prototype, \"players\");\n    __decorate([\n        sequelize_typescript_1.HasMany(function () { return globalParameter_1.GlobalParameter; }),\n        __metadata(\"design:type\", Array)\n    ], Game.prototype, \"parameters\");\n    Game = __decorate([\n        sequelize_typescript_1.Table\n    ], Game);\n    return Game;\n}(sequelize_typescript_1.Model));\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./src/models/game.ts?");

/***/ }),

/***/ "./src/models/globalParameter.ts":
/*!***************************************!*\
  !*** ./src/models/globalParameter.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nexports.__esModule = true;\nvar sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/models/game.ts\");\nvar GlobalParameter = /** @class */ (function (_super) {\n    __extends(GlobalParameter, _super);\n    function GlobalParameter() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    __decorate([\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", String)\n    ], GlobalParameter.prototype, \"param\");\n    __decorate([\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", Number)\n    ], GlobalParameter.prototype, \"value\");\n    __decorate([\n        sequelize_typescript_1.ForeignKey(function () { return game_1.Game; }),\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", Number)\n    ], GlobalParameter.prototype, \"game_id\");\n    __decorate([\n        sequelize_typescript_1.BelongsTo(function () { return game_1.Game; }),\n        __metadata(\"design:type\", game_1.Game)\n    ], GlobalParameter.prototype, \"game\");\n    GlobalParameter = __decorate([\n        sequelize_typescript_1.Table\n    ], GlobalParameter);\n    return GlobalParameter;\n}(sequelize_typescript_1.Model));\nexports.GlobalParameter = GlobalParameter;\n\n\n//# sourceURL=webpack:///./src/models/globalParameter.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/models/game.ts\");\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/models/player.ts\");\nvar globalParameter_1 = __webpack_require__(/*! ./globalParameter */ \"./src/models/globalParameter.ts\");\nexports.list = [\n    game_1.Game,\n    player_1.Player,\n    globalParameter_1.GlobalParameter\n];\n\n\n//# sourceURL=webpack:///./src/models/index.ts?");

/***/ }),

/***/ "./src/models/player.ts":
/*!******************************!*\
  !*** ./src/models/player.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nexports.__esModule = true;\nvar sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/models/game.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    __decorate([\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", String)\n    ], Player.prototype, \"name\");\n    __decorate([\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", Number)\n    ], Player.prototype, \"tr\");\n    __decorate([\n        sequelize_typescript_1.ForeignKey(function () { return game_1.Game; }),\n        sequelize_typescript_1.Column,\n        __metadata(\"design:type\", Number)\n    ], Player.prototype, \"game_id\");\n    __decorate([\n        sequelize_typescript_1.BelongsTo(function () { return game_1.Game; }),\n        __metadata(\"design:type\", game_1.Game)\n    ], Player.prototype, \"game\");\n    Player = __decorate([\n        sequelize_typescript_1.Table\n    ], Player);\n    return Player;\n}(sequelize_typescript_1.Model));\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./src/models/player.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar parameter_1 = __importDefault(__webpack_require__(/*! ./parameter */ \"./src/routes/parameter.ts\"));\nvar Routes = /** @class */ (function () {\n    function Routes() {\n    }\n    Routes.prototype.useRoutes = function (app) {\n        app.use('/globalParams', parameter_1[\"default\"]);\n    };\n    return Routes;\n}());\nexports.Routes = Routes;\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/parameter.ts":
/*!*********************************!*\
  !*** ./src/routes/parameter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar parameter_1 = __importDefault(__webpack_require__(/*! ../controllers/parameter */ \"./src/controllers/parameter.ts\"));\nvar router = express_1.Router();\nrouter.get('/', parameter_1[\"default\"].getParameter);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/routes/parameter.ts?");

/***/ }),

/***/ "./src/sequelize.ts":
/*!**************************!*\
  !*** ./src/sequelize.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nexports.sequelize = new sequelize_typescript_1.Sequelize('postgres', 'postgres', 'docker', {\n    dialect: 'postgres',\n});\n\n\n//# sourceURL=webpack:///./src/sequelize.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize-typescript\");\n\n//# sourceURL=webpack:///external_%22sequelize-typescript%22?");

/***/ })

/******/ });