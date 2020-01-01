let state;
 
function reducer(state= {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function render() {
	const container = document.getElementById('container')
	container.textContent = state.count
}

const button = document.getElementById('button')

button.addEventListener('click', () => this.dispatch({type: 'INCREASE_COUNT'}))

function dispatch(action) {
	state = reducer(state, action)
	render()
}

dispatch({type: '@@INIT'})