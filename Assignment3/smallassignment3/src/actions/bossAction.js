import bossService from '../services/bossService';
import { GET_ALL_BOSSES, GET_BOSS_BY_ID, POST_BOSS_BY_ID } from '../constants/constants';

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

export const getBossById = id => {
  return dispatch => {
    return bossService.getBossById(id).then(boss => {
      dispatch(getBossByIdSuccess(boss));
    });
  };
};
  
const getBossByIdSuccess = boss => {
    return {
        type: GET_BOSS_BY_ID,
        payload: boss
    };
};

export const postNewBoss = (newBossDetails) => {
  return dispatch => {
    return bossService.postNewBoss(newBossDetails).then(resp => {
      console.log(resp);
      dispatch(postNewBossSuccess(resp.id, newBossDetails));
    });
  };
};

const postNewBossSuccess = (id, newBossDetails) => {
    return {
      type: POST_BOSS_BY_ID,
      payload: {
        id,
        newBossDetails
      }
    }
}