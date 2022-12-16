import { ChainApi } from '../../interfaces/chainApi';
import { getTransferValue } from './events';
import {
  getTotalIssuance,
  getActiveEra,
  getTotalHoldersCount,
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
    getTotalHoldersCount,
    getActiveEra,
    getCurrentEra,
    getValidators,
    getValidatorsCount,
    getEraStakersData,
    getIdealValidatorsCount,
    getNominationPoolsData
  }
};
