import { SORT_CHEAP, SORT_SPEED, SORT_OPTIMAL } from './types';

const initState = {
  cheap: true,
  speed: false,
  optimal: false,
};

const sortReduser = (state = initState, action) => {
  switch (action.type) {
    case SORT_CHEAP:
      return {
        ...state,
        cheap: true,
        speed: false,
        optimal: false,
      };

    case SORT_SPEED:
      return {
        ...state,
        cheap: false,
        speed: true,
        optimal: false,
      };

    case SORT_OPTIMAL:
      return {
        ...state,
        optimal: true,
        cheap: false,
        speed: false,
      };

    default:
      return state;
  }
};

export default sortReduser;
