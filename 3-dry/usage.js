import actions from './creation';

// Creation.
const dispatchedAction = actions.pageRequested('foo');

switch (dispatchedAction.type) {
  // Checking type.
  case `${actions.pageRequested}`:
    console.log(dispatchedAction);
    break;
}
