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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

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

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Task */ \"(api)/./models/Task.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_Task__WEBPACK_IMPORTED_MODULE_0__]);\n_models_Task__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method == \"GET\") {\n        const tasks = await _models_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll();\n        res.json(tasks);\n        return;\n    }\n    if (req.method == \"POST\") {\n        if (!req.body.name) {\n            res.status(406).json({\n                message: \"The name of task is required\"\n            });\n        }\n        const newTask = await _models_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            name: req.body.name\n        });\n        if (newTask.dataValues.id) {\n            res.status(201).json({\n                success: true\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                message: \"Unknown Error Occured\"\n            });\n        }\n    }\n    if (req.method == \"PUT\") {\n        if (!req.body.name || !req.body.id) {\n            res.status(406).json({\n                message: \"The name of task is required\"\n            });\n        }\n        const update = await _models_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update({\n            name: req.body.name\n        }, {\n            where: {\n                id: req.body.id\n            }\n        });\n        if (update) {\n            res.json({\n                success: true\n            });\n        } else {\n            res.json({\n                success: false,\n                message: \"Unknow Error Occured\"\n            });\n        }\n    } else {\n        res.status(406).end();\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFFekIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELElBQUlFLE1BQU0sSUFBSSxPQUFPO1FBQ3ZCLE1BQU1DLFFBQVEsTUFBTUwsNERBQVk7UUFDaENHLElBQUlJLElBQUksQ0FBQ0Y7UUFDVDtJQUNGLENBQUM7SUFFRCxJQUFJSCxJQUFJRSxNQUFNLElBQUksUUFBUTtRQUV4QixJQUFJLENBQUNGLElBQUlNLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ2hCTixJQUFJTyxNQUFNLENBQUMsS0FBS0gsSUFBSSxDQUFDO2dCQUFDSSxTQUFTO1lBQThCO1FBQ2pFLENBQUM7UUFDRCxNQUFNQyxVQUFjLE1BQU1aLDJEQUFXLENBQUM7WUFBQ1MsTUFBTVAsSUFBSU0sSUFBSSxDQUFDQyxJQUFJO1FBQUE7UUFFMUQsSUFBR0csUUFBUUUsVUFBVSxDQUFDQyxFQUFFLEVBQUU7WUFDeEJaLElBQUlPLE1BQU0sQ0FBQyxLQUFLSCxJQUFJLENBQUM7Z0JBQUNTLFNBQVMsSUFBSTtZQUFBO1FBQ3JDLE9BQU87WUFDTGIsSUFBSU8sTUFBTSxDQUFDLEtBQUtILElBQUksQ0FBQztnQkFBQ1MsU0FBUyxLQUFLO2dCQUFFTCxTQUFTO1lBQXVCO1FBQ3hFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSVQsSUFBSUUsTUFBTSxJQUFJLE9BQU87UUFDcEIsSUFBSSxDQUFDRixJQUFJTSxJQUFJLENBQUNDLElBQUksSUFBSSxDQUFDUCxJQUFJTSxJQUFJLENBQUNPLEVBQUUsRUFBRTtZQUNuQ1osSUFBSU8sTUFBTSxDQUFDLEtBQUtILElBQUksQ0FBQztnQkFBQ0ksU0FBUztZQUE4QjtRQUM5RCxDQUFDO1FBQ0YsTUFBTU0sU0FBUyxNQUFNakIsMkRBQVcsQ0FDOUI7WUFBQ1MsTUFBTVAsSUFBSU0sSUFBSSxDQUFDQyxJQUFJO1FBQUEsR0FDcEI7WUFDRVMsT0FBTztnQkFBQ0gsSUFBSWIsSUFBSU0sSUFBSSxDQUFDTyxFQUFFO1lBQUE7UUFDekI7UUFFRixJQUFHRSxRQUFRO1lBQ1BkLElBQUlJLElBQUksQ0FBQztnQkFBQ1MsU0FBUyxJQUFJO1lBQUE7UUFDM0IsT0FBTztZQUNIYixJQUFJSSxJQUFJLENBQUM7Z0JBQUNTLFNBQVMsS0FBSztnQkFBRUwsU0FBUztZQUFzQjtRQUM3RCxDQUFDO0lBQUMsT0FDQztRQUNIUixJQUFJTyxNQUFNLENBQUMsS0FBS1MsR0FBRztJQUNyQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHM/MDJkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBUYXNrIGZyb20gJy4uLy4uLy4uL21vZGVscy9UYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgVGFzay5maW5kQWxsKCk7XG4gICAgcmVzLmpzb24odGFza3MpO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBpZiAocmVxLm1ldGhvZCA9PSBcIlBPU1RcIikge1xuICAgIFxuICAgIGlmICghcmVxLmJvZHkubmFtZSkge1xuICAgICAgICByZXMuc3RhdHVzKDQwNikuanNvbih7bWVzc2FnZTogXCJUaGUgbmFtZSBvZiB0YXNrIGlzIHJlcXVpcmVkXCJ9KTtcbiAgICB9O1xuICAgIGNvbnN0IG5ld1Rhc2s6YW55ID0gYXdhaXQgVGFzay5jcmVhdGUoe25hbWU6IHJlcS5ib2R5Lm5hbWV9KTtcblxuICAgIGlmKG5ld1Rhc2suZGF0YVZhbHVlcy5pZCkge1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVua25vd24gRXJyb3IgT2NjdXJlZFwifSlcbiAgICB9XG4gIH0gXG4gIGlmKCByZXEubWV0aG9kID09IFwiUFVUXCIpIHtcbiAgICAgICBpZiAoIXJlcS5ib2R5Lm5hbWUgfHwgIXJlcS5ib2R5LmlkKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA2KS5qc29uKHttZXNzYWdlOiBcIlRoZSBuYW1lIG9mIHRhc2sgaXMgcmVxdWlyZWRcIn0pO1xuICAgICAgIH07XG4gICAgICBjb25zdCB1cGRhdGUgPSBhd2FpdCBUYXNrLnVwZGF0ZShcbiAgICAgICAge25hbWU6IHJlcS5ib2R5Lm5hbWV9LFxuICAgICAgICB7XG4gICAgICAgICAgd2hlcmU6IHtpZDogcmVxLmJvZHkuaWR9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZih1cGRhdGUpIHtcbiAgICAgICAgICByZXMuanNvbih7c3VjY2VzczogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5rbm93IEVycm9yIE9jY3VyZWRcIn0pXG4gICAgICB9IH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA2KS5lbmQoKTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbIlRhc2siLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidGFza3MiLCJmaW5kQWxsIiwianNvbiIsImJvZHkiLCJuYW1lIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld1Rhc2siLCJjcmVhdGUiLCJkYXRhVmFsdWVzIiwiaWQiLCJzdWNjZXNzIiwidXBkYXRlIiwid2hlcmUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();