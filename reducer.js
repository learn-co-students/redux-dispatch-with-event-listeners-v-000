// We added the button at the end.
let state;

function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1 };
         default:
             return state;
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render();
}

function render() {
    //  Container is a located in index.html
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({ type: '@@INIT' })
// note: @@INIT is a built in Javascript Method

//  Link the button to the Methods Created above.

let button = document.getElementById('button');

button.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT' })
    // note when button tis clicked,  REDUCER is called, then updates our state, 
    // then dispatch renders the updates
})