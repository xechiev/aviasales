const initialState = {
  dataTicket: [],
  isError: false,
  isLoaded: false,
  tabs: [
		{	id: 1, name: 'Самый дешевый',	isChecked: true },
		{ id: 2, name: 'Самый быстрый',	isChecked: false },
  ],
  filters: [
		{ id: 1, name: 'Все', isChecked: true },
		{ id: 2, name: 'Без пересадок', isChecked: true },
		{ id: 3, name: '1 пересадка', isChecked: true },
		{ id: 4, name: '2 пересадки', isChecked: true },
		{ id: 5, name: '3 пересадки', isChecked: true },
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
		case 'SET_FILTERS':
			return {
				...state,
				filters: setFilter(action.item, state.filters)
			};

		default:
			return state;
	}
}

export default reducer;

const setFilter = (item, filters) => {
	let updatedFilters;

	if (item.id === 1) {
		const value = !item.isChecked;
		updatedFilters = filters.map((filter) => {
			filter.isChecked = value;
			return filter;
		});
	} else {
		updatedFilters = filters.map((filter) => {
			if (filter.id === 1) {
				filter.isChecked = false;
			}
			if (item.id === filter.id) {
				filter.isChecked = !filter.isChecked;
			}
			return filter;
		});
	}
	return updatedFilters
};
