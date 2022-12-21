import { ChainApi } from '../../interfaces/chainApi';
import { getTransferValue } from './events';
import {
  getTotalIssuance,
  getActiveEra,
  getHoldersTotals,
  getCurrentEra,
  getValidators,
  getValidatorsCount,
  getEraStakersData,
  getIdealValidatorsCount,
  getNominationPoolsData
} from './storage';

export const api: ChainApi = {
  events: {
    getTransferValue
  },
  storage: {
    getTotalIssuance,
    getHoldersTotals,
    getActiveEra,
    getCurrentEra,
    getValidators,
    getValidatorsCount,
    getEraStakersData,
    getIdealValidatorsCount,
    getNominationPoolsData
  }
};
