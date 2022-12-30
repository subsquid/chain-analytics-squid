import { ChainApi } from '../../interfaces/chainApi';
import { getBalancesTransferValue } from './events';
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
    getBalancesTransferValue
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
