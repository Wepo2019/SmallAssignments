import bossService from '../services/bossService';
import * as CST from '../constants/constants';

export const getAllBosses = () => {
  return dispatch => {
    return bossService.getAllBosses().then(bosses => {
      dispatch(getAllBossesSuccess(bosses));
    });
  };
};

const getAllBossesSuccess = bosses => {
  return {
    type: CST.GET_ALL_BOSSES,
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
        type: CST.GET_BOSS_BY_ID,
        payload: boss
    };
};

export const postNewBoss = newBossDetails => {
  return dispatch => {
    return bossService.postNewBoss(newBossDetails).then(resp => {
      dispatch(postNewBossSuccess(resp.id, newBossDetails));
      return resp.id;
    });
  };
};

const postNewBossSuccess = (id, newBossDetails) => {
  return {
    type: CST.POST_BOSS_BY_ID,
    payload: {
      id,
      newBossDetails
    }
  }
}

export const deleteBossById = id => {
  return dispatch => {
    return bossService.deleteBossById(id).then(id => {
      dispatch(deleteBossByIdSuccess(id));
    });
  };
}; 

const deleteBossByIdSuccess = id => {
  return {
    type: CST.DELETE_BOSS_BY_ID,
    payload: id
  }
}

export const patchBossById = (id, info) => {
  return dispatch => {
    return bossService.patchBossById(id, info).then(boss => {
      dispatch(patchBossByIdSuccess(boss));
    });
  };
}; 

const patchBossByIdSuccess = boss => {
  return {
    type: CST.PATCH_BOSS_BY_ID,
    payload: boss
  }
}