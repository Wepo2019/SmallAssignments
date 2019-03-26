import  * as CST  from '../constants/constants';

const defaultState = {
    id: null,
    name: "",
    description: "",
    img: ""
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case CST.GET_BOSS_BY_ID: return {
                                      name: action.payload.name,
                                      description: action.payload.description,
                                      img: action.payload.img
                                    };
    case CST.PATCH_BOSS_BY_ID: return {
                                        id: state.id,
                                        name: action.payload.name !== undefined ? action.payload.name : state.name,
                                        description: action.payload.description !== undefined ? action.payload.description : state.description,
                                        img: action.payload.img !== undefined ? action.payload.img : state.img
                                      };
    default: return state;
  };
};