/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Category } from '../ddl/Category';
import { Factor } from '../ddl/factor/Factor';
import { Position } from '../ddl/factor/position/Position';
import { FactorPosition } from '../ddl/factor/position/FactorPosition';
import { Outcome } from '../ddl/situation/Outcome';
import { SituationFactorPosition } from '../ddl/situation/SituationFactorPosition';
import { Situation } from '../ddl/situation/Situation';

DI.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('votecube.com', 'votecube');
  accumulator.add(Category, 0);
  accumulator.add(Factor, 1);
  accumulator.add(Position, 2);
  accumulator.add(FactorPosition, 3);
  accumulator.add(Outcome, 4);
  accumulator.add(SituationFactorPosition, 5);
  accumulator.add(Situation, 6);
});
