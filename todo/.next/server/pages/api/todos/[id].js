"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./database/sequelize.ts":
/*!*******************************!*\
  !*** ./database/sequelize.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);\nsequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);\nif (sequelize) {\n    console.log(`Database connected to port ${process.env.DB_PORT}`);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequelize);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9zZXF1ZWxpemUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsWUFBWSxJQUFJRCxnREFBU0EsQ0FBQyxDQUFDLGFBQWEsRUFBRUUsUUFBUUMsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFRixRQUFRQyxHQUFHLENBQUNFLFdBQVcsQ0FBQyxDQUFDLEVBQUVILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUosUUFBUUMsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQyxFQUFFTCxRQUFRQyxHQUFHLENBQUNLLE9BQU8sQ0FBQyxDQUFDO0FBRXJLLElBQUdQLFdBQVc7SUFDVlEsUUFBUUMsR0FBRyxDQUFDLENBQUMsMkJBQTJCLEVBQUVSLFFBQVFDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUVELGlFQUFlTixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2RhdGFiYXNlL3NlcXVlbGl6ZS50cz8zZTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShgcG9zdGdyZXNxbDovLyR7cHJvY2Vzcy5lbnYuREJfVVNFUn06JHtwcm9jZXNzLmVudi5EQl9QQVNTV09SRH1AJHtwcm9jZXNzLmVudi5EQl9IT1NUfToke3Byb2Nlc3MuZW52LkRCX1BPUlR9LyR7cHJvY2Vzcy5lbnYuREJfTkFNRX1gKTtcblxuaWYoc2VxdWVsaXplKSB7XG4gICAgY29uc29sZS5sb2coYERhdGFiYXNlIGNvbm5lY3RlZCB0byBwb3J0ICR7cHJvY2Vzcy5lbnYuREJfUE9SVH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcXVlbGl6ZTtcbiJdLCJuYW1lcyI6WyJTZXF1ZWxpemUiLCJzZXF1ZWxpemUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsIkRCX1BBU1NXT1JEIiwiREJfSE9TVCIsIkRCX1BPUlQiLCJEQl9OQU1FIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/sequelize.ts\n");

/***/ }),

/***/ "(api)/./models/Task.ts":
/*!************************!*\
  !*** ./models/Task.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _database_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/sequelize */ \"(api)/./database/sequelize.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Task = _database_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"todos\", {\n    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVGFzay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUU5QyxNQUFNRSxPQUFPRCxrRUFBZ0IsQ0FBQyxTQUFTO0lBQ25DRyxNQUFNSixxREFBYztBQUN4QjtBQUVBLGlFQUFlRSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL21vZGVscy9UYXNrLnRzPzc2YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tIFwiLi4vZGF0YWJhc2Uvc2VxdWVsaXplXCI7XG5cbmNvbnN0IFRhc2sgPSBzZXF1ZWxpemUuZGVmaW5lKFwidG9kb3NcIiwge1xuICAgIG5hbWU6IERhdGFUeXBlcy5URVhULFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7Il0sIm5hbWVzIjpbIkRhdGFUeXBlcyIsInNlcXVlbGl6ZSIsIlRhc2siLCJkZWZpbmUiLCJuYW1lIiwiVEVYVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Task.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Task */ \"(api)/./models/Task.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_Task__WEBPACK_IMPORTED_MODULE_1__]);\n_models_Task__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    const url = (0,path__WEBPACK_IMPORTED_MODULE_0__.parse)(req.url);\n    if (req.method == \"DELETE\") {\n        const del = await _models_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].destroy({\n            where: {\n                id: url.name\n            }\n        });\n        if (del) {\n            res.json({\n                success: true\n            });\n        } else {\n            res.json({\n                success: false,\n                message: \"Unknown Error Occured\"\n            });\n        }\n    } else {\n        res.status(405).end();\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzZCO0FBRVc7QUFFekIsZUFBZUUsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNFLE1BQU1DLE1BQU1MLDJDQUFLQSxDQUFDRyxJQUFJRSxHQUFHO0lBQ3pCLElBQUlGLElBQUlHLE1BQU0sSUFBSSxVQUFVO1FBQ3hCLE1BQU1DLE1BQU0sTUFBTU4sNERBQVksQ0FBQztZQUMzQlEsT0FBTztnQkFBQ0MsSUFBSUwsSUFBSU0sSUFBSTtZQUFBO1FBQ3hCO1FBQ0EsSUFBR0osS0FBSztZQUNKSCxJQUFJUSxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsSUFBSTtZQUFBO1FBQzVCLE9BQU87WUFDSFQsSUFBSVEsSUFBSSxDQUFDO2dCQUFDQyxTQUFTLEtBQUs7Z0JBQUVDLFNBQVM7WUFBdUI7UUFDOUQsQ0FBQztJQUNMLE9BQVE7UUFDSlYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDdkIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0udHM/N2I5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCBUYXNrIGZyb20gJy4uLy4uLy4uL21vZGVscy9UYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgICBjb25zdCB1cmwgPSBwYXJzZShyZXEudXJsIGFzIGFueSk7XG4gICAgaWYgKHJlcS5tZXRob2QgPT0gXCJERUxFVEVcIikge1xuICAgICAgICBjb25zdCBkZWwgPSBhd2FpdCBUYXNrLmRlc3Ryb3koe1xuICAgICAgICAgICAgd2hlcmU6IHtpZDogdXJsLm5hbWV9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihkZWwpIHtcbiAgICAgICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVua25vd24gRXJyb3IgT2NjdXJlZFwifSk7XG4gICAgICAgIH1cbiAgICB9ICBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbInBhcnNlIiwiVGFzayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJtZXRob2QiLCJkZWwiLCJkZXN0cm95Iiwid2hlcmUiLCJpZCIsIm5hbWUiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();