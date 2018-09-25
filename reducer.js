let state;

//receives an action,state and updates the state based on action type
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

// updates the state and re-renders
function dispatch(action){
    state = reducer(state, action);
    render();
}

// re-render or update the HTML to reflect current state
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

 //this action type allows us to render a default state
dispatch({type: '@@INIT'})

let button = document.getElementById('button');

// dispatch an action for each click event
button.addEventListener('click', function(){
    dispatch({type: 'INCREASE_COUNT'})
})
