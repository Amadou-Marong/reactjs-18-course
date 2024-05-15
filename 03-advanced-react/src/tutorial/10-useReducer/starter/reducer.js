import { CLEAR_ITEMS, REMOVE_ITEM, RESET_ITEMS } from './actions';
import { data } from '../../../data';
const reducer = (state, action) => {
    if(action.type === CLEAR_ITEMS) {
      return {...state, people: []}
    }
    if (action.type === RESET_ITEMS) {
      return {...state, people: data}
    }
    if (action.type === REMOVE_ITEM) {
      const newPeople = state.people.filter((person) => person.id !== action.payload)
      return {...state, people: newPeople}
    }
    // return state;
    throw new Error(`no matching ${action.type} action type`);
}
export default reducer;