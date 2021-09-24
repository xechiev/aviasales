import fetch from 'cross-fetch';

export const setTicketsData = (items) => ({	type: 'SET_TICKETS_DATA',	payload: items });

export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

export const getTicketsData = () => async (dispatch) => {
  dispatch(setLoaded(true));

  const fetchingData = async () => {
    const response = await fetch('https://aviasales-test-api.java-mentor.com/search')
    .then((res) => res.json())
    .then((json) => fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${json.searchId}`)
    .then((req) => req.json()))
    const dataTicket = response.tickets.slice(0, 5);
    dispatch(setTicketsData(dataTicket))
  }
  return fetchingData()
};
