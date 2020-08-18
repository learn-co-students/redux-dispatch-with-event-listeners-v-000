// COncept to master:  Action -> reducer -> new state.
// Goal: To make a button that increases the output number incrementally by +1 when you click it. 

// Using 'dispatch method'. Execute dispatch from inside the callback of an event handler.
// Every time the user clicks on a button, we dispatch an action.
// Every time we click, we dispatch an action of 'type increase'. Dispatch first calls the 
  // reducer, which updates the state. Then dispatch renders the updated view.
// Dispatch is for updating the state and re-rendering. An action should be
  // dispatched each time a user clicks. Attach dispatch execution to a click event.

let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
 
function dispatch(action){
  state = reducer(state, action);
  render();
}
 
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}
 
dispatch({type: '@@INIT'})
 
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})