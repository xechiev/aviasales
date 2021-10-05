import fetch from 'cross-fetch';

export const setTicketsData = (items) => ({
  type: 'SET_TICKETS_DATA',
  payload: items,
});

export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

export const setError = (payload) => ({ type: 'SET_ERROR', payload });

export const getTicketsData = () => async (dispatch) => {
  dispatch(setLoaded(true));

  const fetchingData = async () => {
    const response = await fetch(
      'https://aviasales-test-api.java-mentor.com/search'
    )
      .then((res) => res.json())
      .catch((error) => console.log('Возникла ошибка, searchID не найден', error.response));

    const getTicket = async () => {
      const request = await fetch(
        `https://aviasales-test-api.java-mentor.com/tickets?searchId=${response.searchId}`
      ).then((req) => {
        if (req.status === 500) {
          dispatch(setError(true));
        }
        return req.json();
      });
      dispatch(setTicketsData(request.tickets.slice(0, 5)));
      return request;
    };

    dispatch(setLoaded(false));
    return getTicket();
  };

  return fetchingData();
};
