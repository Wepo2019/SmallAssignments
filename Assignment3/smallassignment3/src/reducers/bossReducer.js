import { GET_ALL_BOSSES, GET_BOSS_BY_ID, POST_BOSS_BY_ID } from '../constants/constants';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_BOSSES: return action.payload;
    case GET_BOSS_BY_ID: return action.payload;
    case POST_BOSS_BY_ID: return [...state, { id: action.payload.id, ...action.payload.newBossDetails }];
    default: return state;
  };
};