// areducer takes in two things:
// 1. the action (info about what happens)
// 2. copy of the current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
