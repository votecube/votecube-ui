import { Theme_Id, Theme_Name } from '@votecube/relational-db';
import { IsDelta } from '..';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
export interface IUiTheme<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiThemeFromForm<Doc> {
    id: Doc extends IsDelta ? boolean : Theme_Id;
    name: Doc extends IsDelta ? boolean : Theme_Name;
}
export interface IUiThemeFromForm<Doc extends UiDocStatus> {
    id: Doc extends IsDelta ? boolean : Theme_Id;
    name: Doc extends IsDelta ? boolean : Theme_Name;
}
