import ApiService from "../../component/api/ApiService";

export const setTicketsData = (items) => ({
  type: "SET_TICKETS_DATA",
  payload: items,
});

export const setLoaded = (payload) => ({ type: "SET_LOADED", payload });

export const setError = (payload) => ({ type: "SET_ERROR", payload });

const newApiService = new ApiService();

const getTicketsData = (dispatch, sessionID) => {
  newApiService
    .getTicketData(sessionID)
    .then((res) => {
      if (!res.stop) {
        getTicketsData(dispatch, sessionID);
        dispatch(setLoaded(true));
        // dispatch(setLoaded(true));
        dispatch(setTicketsData(res.tickets));
      } else {
        dispatch(setLoaded(false));
      }
      // dispatch(setLoaded(false));
    })
    .catch(dispatch(setTicketsData([])), dispatch(setLoaded(false)));
};

export const getAllTicketsData = () => (dispatch) => {
  newApiService
    .getSessionId()
    .then((id) => {
      getTicketsData(dispatch, id);
    })
    .catch(dispatch(setTicketsData([])), dispatch(setLoaded(false)));
};
