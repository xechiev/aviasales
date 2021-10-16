const initialState = {
  tabs: [
    { id: 1, name: "Самый дешевый", isChecked: true },
    { id: 2, name: "Самый быстрый", isChecked: false },
  ],
  filters: [
    { id: 1, value: -1, name: "Все", isChecked: true },
    { id: 2, value: 0, name: "Без пересадок", isChecked: true },
    { id: 3, value: 1, name: "1 пересадка", isChecked: true },
    { id: 4, value: 2, name: "2 пересадки", isChecked: true },
    { id: 5, value: 3, name: "3 пересадки", isChecked: true },
  ],
  dataTicket: [],
  isLoaded: false,
  isError: false,
  stop: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TICKETS_DATA": {
      const res = state.dataTicket.push(...action.payload);
      const newState = { ...state, ...res };
      return newState;
    }

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    case "SET_TABS":
      return {
        ...state,
        tabs: setTabsState(action.item, state.tabs),
      };

    case "SET_FILTERS":
      return {
        ...state,
        filters: updatedFilter(action.item, state.filters),
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;

const updatedFilter = (item, array) => {
  const status = !item.isChecked;

  const filterIndex = array.findIndex((num) => num.id === item.id);

  if (filterIndex > 0) {
    array[0].isChecked = false;
    array[filterIndex].isChecked = !array[filterIndex].isChecked;
  } else {
    array.forEach((filter, index) => {
      array[index] = { ...filter, isChecked: status };
    });
  }
  const filteredArr = array.filter((f) => f.id > 1);

  if (filteredArr.every((e) => e.isChecked)) {
    array.forEach((el) => (el.isChecked = true));
    return array;
  }

  return array;
};

const setTabsState = (item, tabs) => {
  const changeTabs = tabs.map((tab) => {
    if (tab.id === item.id) {
      tab.isChecked = true;
      return tab;
    }
    tab.isChecked = false;
    return tab;
  });

  return changeTabs;
};
