"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.default = ({ width, height }) => {
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM17.6677 25.4077V16.7028H20.0706L20.3891 13.7031H17.6677L17.6718 12.2017C17.6718 11.4193 17.7461 11.0001 18.8698 11.0001H20.372V8H17.9688C15.0821 8 14.066 9.4552 14.066 11.9024V13.7034H12.2667V16.7031H14.066V25.4077H17.6677Z", fill: "white" })));
};
