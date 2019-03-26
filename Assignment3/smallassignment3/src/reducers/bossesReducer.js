import { GET_ALL_BOSSES } from '../constants/constants';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_BOSSES: return action.payload; /* The current degree in Reykjavik */
    default: return state;
  };
};