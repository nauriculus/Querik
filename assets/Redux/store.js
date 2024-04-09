import { combineReducers, legacy_createStore } from 'redux';
import RecentlyViewed from './Reducers/RecentlyViewed';
import QuestListItem from './Reducers/QuestListItem';

//REDUCERS
const Reducer = combineReducers({
  recent: RecentlyViewed,
  questlist: QuestListItem,
});

//Store
const store = legacy_createStore(Reducer);

export default store;
