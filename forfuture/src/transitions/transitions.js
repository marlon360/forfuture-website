import { ForwardTransition } from "./forward.transition";
import { BackwardTransition } from "./backward.transition";

export const Transition = {
    FORWARD: "forward",
    BACKWARD: "backward"
}

const transitions = {};

// register transitions
transitions["forward"] = ForwardTransition;
transitions["backward"] = BackwardTransition;

export function getTransition(name) {
    if (name != null) {
        return transitions[name];
    }
    return transitions[Transition.BACKWARD];
}