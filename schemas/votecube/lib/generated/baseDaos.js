import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseAgreementDao extends SQDIDao {
    constructor() {
        super(4);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(4);
    }
}
BaseAgreementDao.Find = new DaoQueryDecorators();
BaseAgreementDao.FindOne = new DaoQueryDecorators();
BaseAgreementDao.Search = new DaoQueryDecorators();
BaseAgreementDao.SearchOne = new DaoQueryDecorators();
export class BaseAgreementFactorDao extends SQDIDao {
    constructor() {
        super(3);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(3);
    }
}
BaseAgreementFactorDao.Find = new DaoQueryDecorators();
BaseAgreementFactorDao.FindOne = new DaoQueryDecorators();
BaseAgreementFactorDao.Search = new DaoQueryDecorators();
BaseAgreementFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorDao extends SQDIDao {
    constructor() {
        super(1);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(1);
    }
}
BaseFactorDao.Find = new DaoQueryDecorators();
BaseFactorDao.FindOne = new DaoQueryDecorators();
BaseFactorDao.Search = new DaoQueryDecorators();
BaseFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaDao extends SQDIDao {
    constructor() {
        super(8);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(8);
    }
}
BaseIdeaDao.Find = new DaoQueryDecorators();
BaseIdeaDao.FindOne = new DaoQueryDecorators();
BaseIdeaDao.Search = new DaoQueryDecorators();
BaseIdeaDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaFactorPositionDao extends SQDIDao {
    constructor() {
        super(5);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(5);
    }
}
BaseIdeaFactorPositionDao.Find = new DaoQueryDecorators();
BaseIdeaFactorPositionDao.FindOne = new DaoQueryDecorators();
BaseIdeaFactorPositionDao.Search = new DaoQueryDecorators();
BaseIdeaFactorPositionDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaLabelDao extends SQDIDao {
    constructor() {
        super(7);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(7);
    }
}
BaseIdeaLabelDao.Find = new DaoQueryDecorators();
BaseIdeaLabelDao.FindOne = new DaoQueryDecorators();
BaseIdeaLabelDao.Search = new DaoQueryDecorators();
BaseIdeaLabelDao.SearchOne = new DaoQueryDecorators();
export class BaseLabelDao extends SQDIDao {
    constructor() {
        super(6);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(6);
    }
}
BaseLabelDao.Find = new DaoQueryDecorators();
BaseLabelDao.FindOne = new DaoQueryDecorators();
BaseLabelDao.Search = new DaoQueryDecorators();
BaseLabelDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeDao extends SQDIDao {
    constructor() {
        super(2);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(2);
    }
}
BaseOutcomeDao.Find = new DaoQueryDecorators();
BaseOutcomeDao.FindOne = new DaoQueryDecorators();
BaseOutcomeDao.Search = new DaoQueryDecorators();
BaseOutcomeDao.SearchOne = new DaoQueryDecorators();
export class BasePositionDao extends SQDIDao {
    constructor() {
        super(0);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(0);
    }
}
BasePositionDao.Find = new DaoQueryDecorators();
BasePositionDao.FindOne = new DaoQueryDecorators();
BasePositionDao.Search = new DaoQueryDecorators();
BasePositionDao.SearchOne = new DaoQueryDecorators();
export class BaseUserAccountDao extends SQDIDao {
    constructor() {
        super(9);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(9);
    }
}
BaseUserAccountDao.Find = new DaoQueryDecorators();
BaseUserAccountDao.FindOne = new DaoQueryDecorators();
BaseUserAccountDao.Search = new DaoQueryDecorators();
BaseUserAccountDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map