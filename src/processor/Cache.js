"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = exports.getCache = exports.setupCache = void 0;
var lru_cache_1 = __importDefault(require("lru-cache"));
var cache = new lru_cache_1.default({ max: 500 });
function setupCache(maxAmount, maxAge) {
    cache = new lru_cache_1.default({ max: maxAmount, maxAge: maxAge });
}
exports.setupCache = setupCache;
function getCache(index) {
    return cache.get(index);
}
exports.getCache = getCache;
function setCache(index, value) {
    return cache.set(index, value);
}
exports.setCache = setCache;
