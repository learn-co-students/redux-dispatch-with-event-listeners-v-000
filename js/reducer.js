let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
Copy this and the previous snippet into

Now every time we click, we dispatch an action of type increase. Dispatch first calls our reducer, which updates our state. Then dispatch renders the updated view.

Putting everything together, our code should look like this:

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