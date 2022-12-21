import { ChainApi } from '../../interfaces/chainApi';
import { getTransferValue } from './events';
import {
  getTotalIssuance,
  getHoldersTotals,
  getSelectedCollatorsCount,
  getRoundNumber,
  getCollatorsDataShort,
  getStakingDelegatorsAllDataShort,
  getSelectedCollators,
  getTotalStake
} from './storage';

export const api: ChainApi = {
  events: {
    getTransferValue
  },
  storage: {
    getTotalIssuance,
    getHoldersTotals,
    getSelectedCollatorsCount,
    getRoundNumber,
    getCollatorsDataShort,
    getStakingDelegatorsAllDataShort,
    getSelectedCollators,
    getTotalStake
  }
};
