"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ground_control_1 = require("@airport/ground-control");
const ImmutableActorRow_1 = require("../infrastructure/row/ImmutableActorRow");
let Vote = class Vote extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'VOTE_ID' })
], Vote.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'VOTE_TYPE_ID' }),
    air_control_1.DbNumber()
], Vote.prototype, "type", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], Vote.prototype, "run", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'vote' })
], Vote.prototype, "revisions", void 0);
Vote = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'VOTES' })
], Vote);
exports.Vote = Vote;
//# sourceMappingURL=Vote.js.map