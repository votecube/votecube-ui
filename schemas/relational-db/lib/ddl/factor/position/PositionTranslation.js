var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
let PositionTranslation = class PositionTranslation extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POSITION_TRANSLATION_ID' })
], PositionTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'POSITION_DESCRIPTION' })
], PositionTranslation.prototype, "description", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POSITION_ID' })
], PositionTranslation.prototype, "position", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID' })
], PositionTranslation.prototype, "language", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POSITION_TRANSLATION_ID',
        referencedColumnName: 'POSITION_TRANSLATION_ID'
    })
], PositionTranslation.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PositionTranslation.prototype, "children", void 0);
PositionTranslation = __decorate([
    Entity(),
    Table({ name: 'POSITION_TRANSLATIONS' })
], PositionTranslation);
export { PositionTranslation };
//# sourceMappingURL=PositionTranslation.js.map