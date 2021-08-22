import { GET_TICKETS, SORT, FILTER } from './types';
import Api from '../servise/Api';

const api = new Api();

export function getTickets() {
  return async (dispatch) => {
    const searchID = await api.getSearchID();
    const tickets = await api.getTickets(searchID);
    dispatch({ type: GET_TICKETS, payload: tickets });
  };
}

export const onSelect = (id) => ({ type: FILTER, payload: id });

export const sortTickets = (id) => ({ type: SORT, payload: id });
