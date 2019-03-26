import { GET_ALL_BOSSES, POST_BOSS_BY_ID } from '../constants/constants';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_BOSSES: return action.payload;
    case POST_BOSS_BY_ID: return [...state, { id: action.payload.id, ...action.payload.newBossDetails }];
    default: return state;
  };
};