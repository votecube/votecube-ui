"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ImmutableRow_1 = require("./ImmutableRow");
/**
 * Marker class to disallow modification of server generated tables.
 */
let SystemGeneratedRow = class SystemGeneratedRow extends ImmutableRow_1.ImmutableRow {
};
SystemGeneratedRow = __decorate([
    air_control_1.MappedSuperclass()
], SystemGeneratedRow);
exports.SystemGeneratedRow = SystemGeneratedRow;
//# sourceMappingURL=SystemGeneratedRow.js.map