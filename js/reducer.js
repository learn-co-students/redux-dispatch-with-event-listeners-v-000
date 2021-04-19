// add code snippets from README
let state;

function reducer(state={count:0}, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {count: state.count + 1}
  
    default:
      return state
  }
}

function render() {
  const container = document.querySelector("#container")
  container.textContent = state.count
}

function dispatch(action) {
  state = reducer(state, action)
  render()
}

dispatch({type: "@@INIT"})

document.querySelector("#button").addEventListener("click", _=> dispatch({type: "INCREASE_COUNT"}))