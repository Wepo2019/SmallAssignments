import { GET_BOSS_BY_ID } from '../constants/constants';

const defaultState = {
    id: null,
    name: "",
    description: "",
    img: ""
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_BOSS_BY_ID: return {
                                    name: action.payload.name,
                                    description: action.payload.description,
                                    img: action.payload.img
                                };
    default: return state;
  };
};