/*Action Type */
const SET_ADDRESS = 'SET_ADDRESS'
/*Action Creator */
export const setAddress = address => ({type: SET_ADDRESS, address})
/*Reducer */
const reducer = (state={}, action)=> {
  switch(action.type){
    case SET_ADDRESS:
      return {...state, ...action.address}
    default:
      return state
    }
}

export default reducer;