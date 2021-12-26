"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./tags/element");
const vux = require("./tags/vux");
const antdv_ui = require("./tags/antdv");
const vue = require("./tags/vue");
exports.default = Object.assign({}, element_1.default, vux.default, antdv_ui.default, vue.default);