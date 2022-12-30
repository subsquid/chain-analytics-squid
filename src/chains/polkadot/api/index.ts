import { ChainApi } from '../../interfaces/chainApi';
import {
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
} from './events';
import {
  getTotalIssuance,
  getActiveEra,
  getHoldersTotals,
  getCurrentEra,
  getValidators,
  getValidatorsCount,
  getEraStakersData,
  getIdealValidatorsCount,
  getNominationPoolsData,
  getSystemAccountBalancesByKeys,
  getBalancesAccountBalancesByKeys
} from './storage';

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
