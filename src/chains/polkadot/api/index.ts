import { ChainApi } from '../../interfaces/chainApi';
import * as events from './events';
import * as storage from './storage';

export const api: ChainApi = {
  events,
  storage
};
