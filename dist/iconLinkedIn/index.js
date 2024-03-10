"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.default = ({ width, height }) => {
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM11.3072 13.2516H7.68125V24.146H11.3072V13.2516ZM11.5464 9.8818C11.5228 8.8136 10.759 8 9.51854 8C8.27813 8 7.46719 8.8136 7.46719 9.8818C7.46719 10.9279 8.25416 11.7649 9.47147 11.7649H9.49465C10.759 11.7649 11.5464 10.9279 11.5464 9.8818ZM24.3836 17.8998C24.3836 14.5535 22.5948 12.9961 20.2088 12.9961C18.2836 12.9961 17.4217 14.0535 16.9405 14.7953V13.2522H13.3141C13.3619 14.2745 13.3141 24.1467 13.3141 24.1467H16.9405V18.0623C16.9405 17.7367 16.964 17.4119 17.0599 17.1788C17.3219 16.5283 17.9186 15.8548 18.9203 15.8548C20.2329 15.8548 20.7576 16.8538 20.7576 18.3178V24.1464H24.3834L24.3836 17.8998Z", fill: "white" })));
};
