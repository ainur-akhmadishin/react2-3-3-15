const initState = {
  tickets: [],
};

const ticketsReduser = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReduser;
