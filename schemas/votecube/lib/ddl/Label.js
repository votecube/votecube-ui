var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, Table } from '@airport/air-control';
import { RepositoryEntity } from '@airport/holding-pattern';
let Label = class Label extends RepositoryEntity {
};
__decorate([
    Column({ name: 'NAME', nullable: false })
], Label.prototype, "name", void 0);
Label = __decorate([
    Entity(),
    Table({ name: 'LABELS' })
], Label);
export { Label };
//# sourceMappingURL=Label.js.map