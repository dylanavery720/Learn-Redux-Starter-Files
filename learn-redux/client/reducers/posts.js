function posts(state = [], action) {
  switch(action.type){
    case 'INCREMENT_LIKES' :
      console.log("Incrementing LIkes!!");
      const i = action.index
      return [
        ...state.slice(0,i), //before the one we updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one
      ]
    default:
    return state;
  }
}

export default posts
