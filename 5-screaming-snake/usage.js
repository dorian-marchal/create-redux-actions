import actions from './creation';

// Creation.
const dispatchedAction = actions.PAGE_REQUESTED('foo');

switch (dispatchedAction.type) {
  // Checking type.
  case `${actions.PAGE_REQUESTED}`:
    console.log(dispatchedAction);
    break;
}
