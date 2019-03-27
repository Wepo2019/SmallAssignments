import  * as CST  from '../constants/constants';

export default function(state = [], action) {
  switch (action.type) {
    case CST.GET_ALL_BOSSES: return action.payload;
    case CST.POST_BOSS_BY_ID: return [...state, { id: action.payload.id, ...action.payload.newBossDetails }];
    case CST.DELETE_BOSS_BY_ID: return state.filter(boss => boss.id !== parseInt(action.payload));
    default: return state;
  };
};