var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let Theme = class Theme extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'THEME_ID' })
], Theme.prototype, "id", void 0);
__decorate([
    Column({ name: 'NAME', nullable: false })
], Theme.prototype, "name", void 0);
__decorate([
    Column({ name: 'AGE_SUITABILITY', nullable: false })
], Theme.prototype, "ageSuitability", void 0);
Theme = __decorate([
    Entity(),
    Table({ name: 'THEMES' })
], Theme);
export { Theme };
//# sourceMappingURL=Theme.js.map