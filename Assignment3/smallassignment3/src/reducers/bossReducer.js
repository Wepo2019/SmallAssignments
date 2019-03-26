import { GET_ALL_BOSSES, GET_BOSS_BY_ID } from '../constants/constants';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_BOSSES: return action.payload;
    case GET_BOSS_BY_ID: return action.payload;
    default: return state;
  };
};