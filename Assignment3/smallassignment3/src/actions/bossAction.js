import bossService from '../services/bossService';
import { GET_ALL_BOSSES, GET_BOSS_BY_ID } from '../constants/constants';

export const getAllBosses = () => {
  return dispatch => {
    return bossService.getAllBosses().then(bosses => {
      dispatch(getAllBossesSuccess(bosses));
    });
  };
};

export const getBossById = (id) => {
    return dispatch => {
      return bossService.getBossById(id).then(boss => {
        dispatch(getAllBossesSuccess(boss));
      });
    };
  };
  
  const getBossByIdSuccess = boss => {
    return {
      type: GET_BOSS_BY_ID,
      payload: boss
    };
  };

const getAllBossesSuccess = bosses => {
  return {
    type: GET_ALL_BOSSES,
    payload: bosses
  };
};