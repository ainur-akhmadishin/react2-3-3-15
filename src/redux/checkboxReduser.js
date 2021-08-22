import { FILTER } from './types';

const initState = {
  filters: [
    { id: 'all', title: 'Все', checked: false },

    { id: 'withoutTransfer', title: 'Без пересадок', checked: false },

    { id: 'oneTrasfer', title: '1 пересадка', checked: false },

    { id: 'twoTransfers', title: '2 пересадки', checked: false },

    { id: 'threeTransfers', title: '3 пересадки', checked: false },
  ],
};

const checkboxReduser = (state = initState, action) => {
  switch (action.type) {
    case FILTER: {
      let newState;

      if (action.payload === 'all') {
        newState = state.filters.map((el) => ({ ...el, checked: !state.filters[0].checked }));
      } else {
        newState = state.filters.map((el) => {
          if (action.payload === el.id) {
            return { ...el, checked: !el.checked };
          }
          return { ...el };
        });
      }

      const countChecked = newState.reduce((acc, el) => {
        const count = el.id !== 'all' && el.checked ? 1 : 0;
        return acc + count;
      }, 0);

      if (countChecked === newState.length - 1) {
        newState = state.filters.map((el) => ({ ...el, checked: !state.filters[0].checked }));
      }

      if (!newState.every((e) => e.checked)) newState[0].checked = false;

      return {
        ...state,
        filters: newState,
      };
    }

    default:
      return state;
  }
};

export default checkboxReduser;
