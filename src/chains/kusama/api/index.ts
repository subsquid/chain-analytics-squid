import { ChainApi } from '../../interfaces/chainApi';
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
import {
  getBalancesAccountBalancesByKeys,
  getSystemAccountBalancesByKeys
} from './storage';
import {
  getBalancesBalanceSetAccounts,
  getBalancesDepositAccounts,
  getBalancesEndowedAccounts,
  getBalancesReservedAccounts,
  getBalancesReserveRepatriatedAccounts,
  getBalancesSlashedAccounts,
  getBalancesTransferAccounts,
  getBalancesTransferValue,
  getBalancesUnreservedAccounts,
  getBalancesWithdrawAccounts
} from './events';

export const api: ChainApi = {
  events: {
    getBalancesTransferValue,
    getBalancesTransferAccounts,
    getBalancesEndowedAccounts,
    getBalancesBalanceSetAccounts,
    getBalancesReservedAccounts,
    getBalancesUnreservedAccounts,
    getBalancesReserveRepatriatedAccounts,
    getBalancesDepositAccounts,
    getBalancesWithdrawAccounts,
    getBalancesSlashedAccounts
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
    getNominationPoolsData,
    getSystemAccountBalancesByKeys,
    getBalancesAccountBalancesByKeys
  }
};
