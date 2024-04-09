import { ADD_TO_QUESTLIST, REMOVE_FROM_QUESTLIST } from '../constants';

export const addToQuestList = (payload) => {
  return {
    type: ADD_TO_QUESTLIST,
    payload,
  };
};

export const removeFromQuestList = (payload) => {
  return {
    type: REMOVE_FROM_QUESTLIST,
    payload,
  };
};
