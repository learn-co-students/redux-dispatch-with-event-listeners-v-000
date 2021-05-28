// add code snippets from README
let state

const reducer = (state = {count: 0}, action) => {
    switch(action.type){
    case "INCREASE_COUNT":
        return {count: state.count + 1}
    default: return state
    }
}

let action = (type) => ({type})
const increaseCountButton = document.getElementById("button")
increaseCountButton.addEventListener("click", () => dispatch(action("INCREASE_COUNT")))
const dispatch = (action) => {state = reducer(state, action); render()}
const container = document.getElementById("container")
const render = () => container.textContent = state.count

dispatch(action("@@INIT"))

