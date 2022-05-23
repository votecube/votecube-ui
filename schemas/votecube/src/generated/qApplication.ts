import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    EntityId,
}                      from '@airport/ground-control';
import { QAgreement } from './agreement/qagreement';
import { QAgreementFactor } from './agreement/qagreementfactor';
import { QFactor } from './factor/qfactor';
import { QIdea } from './idea/qidea';
import { QIdeaLabel } from './idea/qidealabel';
import { QIdeaSituation } from './idea/qideasituation';
import { QLabel } from './qlabel';
import { QOutcome } from './idea/qoutcome';
import { QPosition } from './factor/qposition';
import { QReason } from './idea/qreason';
import {
  Agreement,
  AgreementFactor,
  Factor,
  Idea,
  IdeaLabel,
  IdeaSituation,
  Label,
  Outcome,
  Position,
  Reason
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Agreement: QAgreement;
	AgreementFactor: QAgreementFactor;
	Factor: QFactor;
	Idea: QIdea;
	IdeaLabel: QIdeaLabel;
	IdeaSituation: QIdeaSituation;
	Label: QLabel;
	Outcome: QOutcome;
	Position: QPosition;
	Reason: QReason;

}

const __constructors__ = {
	Agreement: Agreement,
	AgreementFactor: AgreementFactor,
	Factor: Factor,
	Idea: Idea,
	IdeaLabel: IdeaLabel,
	IdeaSituation: IdeaSituation,
	Label: Label,
	Outcome: Outcome,
	Position: Position,
	Reason: Reason
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8000',
  name: '@votecube/votecube'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: EntityId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
