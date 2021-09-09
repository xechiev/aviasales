const initialState = {
  value: [
    { name: 'Все', id: 1, check: true },
    { name: 'Без пересадок', id: 2, check: true },
    { name: '1 пересадка', id: 3, check: true },
    { name: '2 пересадки', id: 4, check: true },
    { name: '3 пересадки', id: 5, check: true },
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, 
        value: state.value.map((item) => {
          if (item.id === action.id) {
            return { ...item, check: !item.check }
          }
          return item
        }) }

    case 'TOGGLE_ALL':
      return { ...state,
        value: state.value.map((item) => {
          if (action.id === '1') {
            return { ...item, check: !item.check }
          }
          return item
        }) }
    default: 
      return state;
  }
}

export default reducer;
