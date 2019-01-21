export function testReducer(state = {hello: 'world'}, action){
  switch(action.type){
    case 'TEST_ME':
      return {
        ...state,
        id : action.payload
      }
    default:
      return state;
  }
  
}