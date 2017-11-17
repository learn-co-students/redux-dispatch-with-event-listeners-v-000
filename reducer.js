let state;

//set initial state as a default argument to the changeState reducer
function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//responsible for updating the state and re-rendering
//reassign the state by adding the dispatch function
//receives an argument of action
//It can access the state because it is declared earlier in the file in global scope
function dispatch(action){
  state = changeState(state, action)
  //re-rendering the dispatch function
  render()

  //an action to be dispatched each time a user clicks
  //click event
  let button = document.getElementById('button')
  button.addEventListener('click', function() {
    dispatch({ type: 'INCREASE_COUNT' })
  })
}

//render will place state count on the page - reflect the current count
function render() {
  let container = document.getElementById('container')
  container.textContent = state.count
}

//returns default state
dispatch({ type: '@@INIT' })
