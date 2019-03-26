import bossService from '../services/bossService';
import { GET_ALL_BOSSES } from '../constants/constants';

export const getAllBosses = () => {
  return dispatch => {
    return bossService.getAllBosses().then(bosses => {
      dispatch(getAllBossesSuccess(bosses));
    });
  };
};

const getAllBossesSuccess = bosses => {
  return {
    type: GET_ALL_BOSSES,
    payload: bosses
  };
};