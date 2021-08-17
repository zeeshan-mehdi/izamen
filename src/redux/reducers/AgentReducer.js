/** @format */

const initState = { data:[] };

const AgentReducer = (state = initState, action) => {
  switch (action.type) {
    case "AGENT_DETAILS":
      return {
        ...state,
        AgentDetails: action.data,
      };

    default:
      return initState;
  }
};

export default AgentReducer;
