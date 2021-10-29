var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, OneToMany, Table } from '@airport/air-control';
import { RepositoryEntity } from '@airport/holding-pattern';
/**
 * This is the generic position records (not related to any poll).
 */
let Position = class Position extends RepositoryEntity {
};
__decorate([
    Column({ name: 'NAME', nullable: false })
], Position.prototype, "name", void 0);
__decorate([
    OneToMany({ mappedBy: 'position' })
], Position.prototype, "factorPositions", void 0);
Position = __decorate([
    Entity(),
    Table({ name: 'POSITIONS' })
], Position);
export { Position };
//# sourceMappingURL=Position.js.map