import { combineReducers } from 'redux';
import bosses from './bossListReducer';
import boss from './singleBossReducer';

export default combineReducers({
    bosses,
    boss
});