import { ADD_TO_QUESTLIST, REMOVE_FROM_QUESTLIST } from '../constants';

const QuestListItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_QUESTLIST:
      const itemViewed = state.find((item) => item.id == action.payload.id);
      if (!itemViewed) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case REMOVE_FROM_QUESTLIST:
      return state.filter((item) => item !== action.payload);
  }
  return state;
};

export default QuestListItem;
