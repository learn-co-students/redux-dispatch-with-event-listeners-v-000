// add code snippets from README
let state;
let button = document.getElementById('button');

function reducer (state = {count:0}, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render();
}
// the dispatch function, will call the changeState function
// and then it'll change the wire that the current state is connected to
// it'll direct that wire to connect to the result of the changeSate function.

function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
}

button.addEventListener('click', () => {
    dispatch({type:'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})