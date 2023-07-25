import { ChainApi } from '../../interfaces/chainApi';
import * as storage from './storage';
import * as events from './events';

export const api: ChainApi = {
  events,
  storage
};
