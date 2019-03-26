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
      console.log(boss);
      dispatch(getBossByIdSuccess(boss));
    });
  };
};
  
const getBossByIdSuccess = boss => {
  console.log(boss);
    return {
        type: GET_BOSS_BY_ID,
        payload: boss
    };
};

export const postNewBoss = (newBossDetails) => {
  return dispatch => {
    return bossService.postNewBoss(newBossDetails).then(resp => {
      dispatch(postNewBossSuccess(resp.id, newBossDetails));
      return resp.id;
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