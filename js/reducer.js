// add code snippets from README
let state
 
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

//reassigns state
function dispatch(action){
    state = reducer(state, action);
    render(); //so that it renders the number displayed again
  }


function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

//dispatch an action that returns the default state like so:
dispatch({type: '@@INIT'})

let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})