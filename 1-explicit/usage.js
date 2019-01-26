import actions, { types } from './creation';

// Creation.
const dispatchedAction = actions.pageRequested('foo');

switch (dispatchedAction.type) {
  // Checking type.
  case types.PAGE_REQUESTED:
    console.log(dispatchedAction);
    break;
}
