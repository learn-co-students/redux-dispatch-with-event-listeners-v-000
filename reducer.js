// add code snippets from README
function createStore() {
    let state;
   
    function dispatch(action) {
      state = changeCount(state, action);
      render();
    }
   
    function getState() {
      return state;
    }
   
    return {
      dispatch,
      getState
    };
  }


function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function render(){
    let container = document.getElementById("container")
    container.innerHTML = store.getState().count; 
}

let button = document.getElementById('button');
 
button.addEventListener('click', function(){
    store.dispatch({type: 'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})

