/* eslint-disable */
import {
	IAgreement,
} from './agreement/agreement';
import {
	AgreementESelect,
	AgreementECreateColumns,
	AgreementECreateProperties,
	AgreementEUpdateColumns,
	AgreementEUpdateProperties,
	AgreementEId,
	AgreementGraph,
	QAgreement,
} from './agreement/qagreement';
import {
	IAgreementFactor,
} from './agreement/agreementfactor';
import {
	AgreementFactorESelect,
	AgreementFactorECreateColumns,
	AgreementFactorECreateProperties,
	AgreementFactorEUpdateColumns,
	AgreementFactorEUpdateProperties,
	AgreementFactorEId,
	AgreementFactorGraph,
	QAgreementFactor,
} from './agreement/qagreementfactor';
import {
	IFactor,
} from './factor/factor';
import {
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	FactorGraph,
	QFactor,
} from './factor/qfactor';
import {
	IIdea,
} from './idea/idea';
import {
	IdeaESelect,
	IdeaECreateColumns,
	IdeaECreateProperties,
	IdeaEUpdateColumns,
	IdeaEUpdateProperties,
	IdeaEId,
	IdeaGraph,
	QIdea,
} from './idea/qidea';
import {
	IIdeaFactorPosition,
} from './idea/ideafactorposition';
import {
	IdeaFactorPositionESelect,
	IdeaFactorPositionECreateColumns,
	IdeaFactorPositionECreateProperties,
	IdeaFactorPositionEUpdateColumns,
	IdeaFactorPositionEUpdateProperties,
	IdeaFactorPositionEId,
	IdeaFactorPositionGraph,
	QIdeaFactorPosition,
} from './idea/qideafactorposition';
import {
	IIdeaLabel,
} from './idea/idealabel';
import {
	IdeaLabelESelect,
	IdeaLabelECreateColumns,
	IdeaLabelECreateProperties,
	IdeaLabelEUpdateColumns,
	IdeaLabelEUpdateProperties,
	IdeaLabelEId,
	IdeaLabelGraph,
	QIdeaLabel,
} from './idea/qidealabel';
import {
	ILabel,
} from './label';
import {
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	LabelGraph,
	QLabel,
} from './qlabel';
import {
	IOutcome,
} from './idea/outcome';
import {
	OutcomeESelect,
	OutcomeECreateColumns,
	OutcomeECreateProperties,
	OutcomeEUpdateColumns,
	OutcomeEUpdateProperties,
	OutcomeEId,
	OutcomeGraph,
	QOutcome,
} from './idea/qoutcome';
import {
	IPosition,
} from './factor/position';
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition,
} from './factor/qposition';
import {
	IUserAccount,
} from './useraccount';
import {
	UserAccountESelect,
	UserAccountECreateColumns,
	UserAccountECreateProperties,
	UserAccountEUpdateColumns,
	UserAccountEUpdateProperties,
	UserAccountEId,
	UserAccountGraph,
	QUserAccount,
} from './quseraccount';
import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Dao,
	DaoQueryDecorators,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Dao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseAgreementDao
  extends IDao<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}

export class BaseAgreementDao
  extends SQDIDao<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement>
	implements IBaseAgreementDao {
	
	static Find      = new DaoQueryDecorators<AgreementESelect>();
	static FindOne   = new DaoQueryDecorators<AgreementESelect>();
	static Search    = new DaoQueryDecorators<AgreementESelect>();
	static SearchOne = new DaoQueryDecorators<AgreementESelect>();
	static Save(
		config: AgreementGraph
	): PropertyDecorator {
		return Dao.BaseSave<AgreementGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseAgreementFactorDao
  extends IDao<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor> {
}

export class BaseAgreementFactorDao
  extends SQDIDao<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor>
	implements IBaseAgreementFactorDao {
	
	static Find      = new DaoQueryDecorators<AgreementFactorESelect>();
	static FindOne   = new DaoQueryDecorators<AgreementFactorESelect>();
	static Search    = new DaoQueryDecorators<AgreementFactorESelect>();
	static SearchOne = new DaoQueryDecorators<AgreementFactorESelect>();
	static Save(
		config: AgreementFactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<AgreementFactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDao {
	
	static Find      = new DaoQueryDecorators<FactorESelect>();
	static FindOne   = new DaoQueryDecorators<FactorESelect>();
	static Search    = new DaoQueryDecorators<FactorESelect>();
	static SearchOne = new DaoQueryDecorators<FactorESelect>();
	static Save(
		config: FactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseIdeaDao
  extends IDao<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}

export class BaseIdeaDao
  extends SQDIDao<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea>
	implements IBaseIdeaDao {
	
	static Find      = new DaoQueryDecorators<IdeaESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaESelect>();
	static Search    = new DaoQueryDecorators<IdeaESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaESelect>();
	static Save(
		config: IdeaGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseIdeaFactorPositionDao
  extends IDao<IIdeaFactorPosition, IdeaFactorPositionESelect, IdeaFactorPositionECreateProperties, IdeaFactorPositionEUpdateColumns, IdeaFactorPositionEUpdateProperties, IdeaFactorPositionEId, IdeaFactorPositionGraph, QIdeaFactorPosition> {
}

export class BaseIdeaFactorPositionDao
  extends SQDIDao<IIdeaFactorPosition, IdeaFactorPositionESelect, IdeaFactorPositionECreateProperties, IdeaFactorPositionEUpdateColumns, IdeaFactorPositionEUpdateProperties, IdeaFactorPositionEId, IdeaFactorPositionGraph, QIdeaFactorPosition>
	implements IBaseIdeaFactorPositionDao {
	
	static Find      = new DaoQueryDecorators<IdeaFactorPositionESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaFactorPositionESelect>();
	static Search    = new DaoQueryDecorators<IdeaFactorPositionESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaFactorPositionESelect>();
	static Save(
		config: IdeaFactorPositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaFactorPositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseIdeaLabelDao
  extends IDao<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}

export class BaseIdeaLabelDao
  extends SQDIDao<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel>
	implements IBaseIdeaLabelDao {
	
	static Find      = new DaoQueryDecorators<IdeaLabelESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaLabelESelect>();
	static Search    = new DaoQueryDecorators<IdeaLabelESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaLabelESelect>();
	static Save(
		config: IdeaLabelGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaLabelGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel>
	implements IBaseLabelDao {
	
	static Find      = new DaoQueryDecorators<LabelESelect>();
	static FindOne   = new DaoQueryDecorators<LabelESelect>();
	static Search    = new DaoQueryDecorators<LabelESelect>();
	static SearchOne = new DaoQueryDecorators<LabelESelect>();
	static Save(
		config: LabelGraph
	): PropertyDecorator {
		return Dao.BaseSave<LabelGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseOutcomeDao
  extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDao
  extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDao {
	
	static Find      = new DaoQueryDecorators<OutcomeESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeESelect>();
	static Search    = new DaoQueryDecorators<OutcomeESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeESelect>();
	static Save(
		config: OutcomeGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDao {
	
	static Find      = new DaoQueryDecorators<PositionESelect>();
	static FindOne   = new DaoQueryDecorators<PositionESelect>();
	static Search    = new DaoQueryDecorators<PositionESelect>();
	static SearchOne = new DaoQueryDecorators<PositionESelect>();
	static Save(
		config: PositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseUserAccountDao
  extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}

export class BaseUserAccountDao
  extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount>
	implements IBaseUserAccountDao {
	
	static Find      = new DaoQueryDecorators<UserAccountESelect>();
	static FindOne   = new DaoQueryDecorators<UserAccountESelect>();
	static Search    = new DaoQueryDecorators<UserAccountESelect>();
	static SearchOne = new DaoQueryDecorators<UserAccountESelect>();
	static Save(
		config: UserAccountGraph
	): PropertyDecorator {
		return Dao.BaseSave<UserAccountGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}
