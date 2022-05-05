var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let AgreementFactor = class AgreementFactor extends RepositoryEntity {
};
__decorate([
    ManyToOne()
], AgreementFactor.prototype, "agreement", void 0);
__decorate([
    ManyToOne()
], AgreementFactor.prototype, "reason", void 0);
AgreementFactor = __decorate([
    Entity(),
    Table({ name: 'AGREEMENT_FACTORS' })
], AgreementFactor);
export { AgreementFactor };
//# sourceMappingURL=AgreementFactor.js.map