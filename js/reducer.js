let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  document.getElementById("container").textContent = state.count;
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

dispatch({ type: "@@INIT" });

const button = document.getElementById("button");
button.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});
