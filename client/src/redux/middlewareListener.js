// put our criteria to work for listening to the actions.

import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { registerUserAction } from "../auth/redux/action/registerAction";

export const listnerMiddleware = createListenerMiddleware();
export const setupListener = (navigate) => {
  listnerMiddleware.startListening({
    matcher: isAnyOf(registerUserAction.fulfilled),
    effect: async (action, listenerApi) => {
      console.log("inside the middleware part");
      navigate("/dashboard");
    },
  });
};
// navigate to dashboard
// listenerapi : will help u to work with
// dispatch : liets u dispatch to other actions
// getState : get the latest state from the store
// cancelActiveListeners : cancel all the active listeners
// delay : to introduce a delay
// condition : to check a condition
