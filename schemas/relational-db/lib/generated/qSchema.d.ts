import { QSchema as AirportQSchema } from '@airport/air-control';
import { DbSchema, EntityId } from '@airport/ground-control';
import { QActor } from './user/qactor';
import { QApplication } from './user/qapplication';
import { QContinent } from './location/qcontinent';
import { QCountry } from './location/qcountry';
import { QCountryTown } from './location/qcountrytown';
import { QCounty } from './location/qcounty';
import { QCountyTown } from './location/qcountytown';
import { QDesignPattern } from './factor/position/qdesignpattern';
import { QDevice } from './user/qdevice';
import { QEmoji } from './factor/position/qemoji';
import { QFactor } from './factor/qfactor';
import { QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { QFactorOpinionVersionRating } from './opinion/user/qfactoropinionversionrating';
import { QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { QFactorPosition } from './factor/position/qfactorposition';
import { QFactorSkin } from './factor/qfactorskin';
import { QFactorTranslation } from './factor/qfactortranslation';
import { QImmutableActorRow } from './infrastructure/row/qimmutableactorrow';
import { QImmutableRow } from './infrastructure/row/qimmutablerow';
import { QLanguage } from './infrastructure/qlanguage';
import { QMutableActorRow } from './infrastructure/row/qmutableactorrow';
import { QMutableRow } from './infrastructure/row/qmutablerow';
import { QOutcome } from './poll/revision/qoutcome';
import { QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { QPoll } from './poll/qpoll';
import { QPollRevision } from './poll/revision/qpollrevision';
import { QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { QPollRevisionFactorTranslation } from './poll/revision/translation/qpollrevisionfactortranslation';
import { QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { QPollRevisionOpinionVersionRating } from './opinion/user/qpollrevisionopinionversionrating';
import { QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { QPollRevisionPositionTranslation } from './poll/revision/translation/qpollrevisionpositiontranslation';
import { QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { QPollRun } from './poll/run/qpollrun';
import { QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { QPollRunCountry } from './poll/run/location/qpollruncountry';
import { QPollRunCounty } from './poll/run/location/qpollruncounty';
import { QPollRunState } from './poll/run/location/qpollrunstate';
import { QPollRunTown } from './poll/run/location/qpollruntown';
import { QPollType } from './poll/qpolltype';
import { QPosition } from './factor/position/qposition';
import { QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { QPositionOpinionVersionRating } from './opinion/user/qpositionopinionversionrating';
import { QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { QPositionTranslation } from './factor/position/qpositiontranslation';
import { QRating } from './infrastructure/rating/qrating';
import { QRatingReason } from './infrastructure/rating/qratingreason';
import { QRatingReasonTranslation } from './infrastructure/rating/qratingreasontranslation';
import { QRatingSetting } from './infrastructure/rating/qratingsetting';
import { QRatingTranslation } from './infrastructure/rating/qratingtranslation';
import { QRatingType } from './infrastructure/rating/qratingtype';
import { QState } from './location/qstate';
import { QStateTown } from './location/qstatetown';
import { QSystemGeneratedRow } from './infrastructure/row/qsystemgeneratedrow';
import { QTheme } from './poll/qtheme';
import { QTown } from './location/qtown';
import { QTranslationType } from './infrastructure/qtranslationtype';
import { QUserAccount } from './user/quseraccount';
import { QUserPoll } from './poll/user/quserpoll';
import { QUserPollRating } from './poll/user/quserpollrating';
import { QUserPollRevision } from './poll/user/quserpollrevision';
import { QUserPollRevisionRating } from './poll/user/quserpollrevisionrating';
import { QUserPollRevisionTranslation } from './poll/user/quserpollrevisiontranslation';
import { QUserPollRevisionTranslationRating } from './poll/user/quserpollrevisiontranslationrating';
import { QVote } from './vote/qvote';
import { QVoteFactor } from './vote/qvotefactor';
import { QVoteFactorType } from './vote/qvotefactortype';
import { QVoteRevision } from './vote/qvoterevision';
import { QVoteType } from './vote/qvotetype';
export interface LocalQSchema extends AirportQSchema {
    db: DbSchema;
    Actor: QActor;
    Application: QApplication;
    Continent: QContinent;
    Country: QCountry;
    CountryTown: QCountryTown;
    County: QCounty;
    CountyTown: QCountyTown;
    DesignPattern: QDesignPattern;
    Device: QDevice;
    Emoji: QEmoji;
    Factor: QFactor;
    FactorOpinionVersion: QFactorOpinionVersion;
    FactorOpinionVersionRating: QFactorOpinionVersionRating;
    FactorOpinionVersionTranslation: QFactorOpinionVersionTranslation;
    FactorPosition: QFactorPosition;
    FactorSkin: QFactorSkin;
    FactorTranslation: QFactorTranslation;
    ImmutableActorRow: QImmutableActorRow;
    ImmutableRow: QImmutableRow;
    Language: QLanguage;
    MutableActorRow: QMutableActorRow;
    MutableRow: QMutableRow;
    Outcome: QOutcome;
    OutcomeOpinionVersion: QOutcomeOpinionVersion;
    OutcomeOpinionVersionTranslation: QOutcomeOpinionVersionTranslation;
    OutcomeTranslation: QOutcomeTranslation;
    Poll: QPoll;
    PollRevision: QPollRevision;
    PollRevisionFactorPosition: QPollRevisionFactorPosition;
    PollRevisionFactorTranslation: QPollRevisionFactorTranslation;
    PollRevisionOpinion: QPollRevisionOpinion;
    PollRevisionOpinionVersion: QPollRevisionOpinionVersion;
    PollRevisionOpinionVersionRating: QPollRevisionOpinionVersionRating;
    PollRevisionOpinionVersionTranslation: QPollRevisionOpinionVersionTranslation;
    PollRevisionPositionTranslation: QPollRevisionPositionTranslation;
    PollRevisionTranslation: QPollRevisionTranslation;
    PollRun: QPollRun;
    PollRunContinent: QPollRunContinent;
    PollRunCountry: QPollRunCountry;
    PollRunCounty: QPollRunCounty;
    PollRunState: QPollRunState;
    PollRunTown: QPollRunTown;
    PollType: QPollType;
    Position: QPosition;
    PositionOpinionVersion: QPositionOpinionVersion;
    PositionOpinionVersionRating: QPositionOpinionVersionRating;
    PositionOpinionVersionTranslation: QPositionOpinionVersionTranslation;
    PositionTranslation: QPositionTranslation;
    Rating: QRating;
    RatingReason: QRatingReason;
    RatingReasonTranslation: QRatingReasonTranslation;
    RatingSetting: QRatingSetting;
    RatingTranslation: QRatingTranslation;
    RatingType: QRatingType;
    State: QState;
    StateTown: QStateTown;
    SystemGeneratedRow: QSystemGeneratedRow;
    Theme: QTheme;
    Town: QTown;
    TranslationType: QTranslationType;
    UserAccount: QUserAccount;
    UserPoll: QUserPoll;
    UserPollRating: QUserPollRating;
    UserPollRevision: QUserPollRevision;
    UserPollRevisionRating: QUserPollRevisionRating;
    UserPollRevisionTranslation: QUserPollRevisionTranslation;
    UserPollRevisionTranslationRating: QUserPollRevisionTranslationRating;
    Vote: QVote;
    VoteFactor: QVoteFactor;
    VoteFactorType: QVoteFactorType;
    VoteRevision: QVoteRevision;
    VoteType: QVoteType;
}
export declare const Q_SCHEMA: LocalQSchema;
export declare const Q: LocalQSchema;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
