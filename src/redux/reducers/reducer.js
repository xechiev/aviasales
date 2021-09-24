const initialState = {
  dataTicket: [],
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
		case 'SET_TICKETS_DATA':
			return {
				...state,
				dataTicket: action.payload,
				isLoaded: true,
			};
		
		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload
			};
		
		case 'SET_TABS':
			return {
				...state,
				tabs: action.payload,
			}

		case 'SET_FILTERS':
			return {
				...state,
				filters: updatedFilter(action.item, state.filters),
			};

		default:
			return state;
	}
}

export default reducer;

const updatedFilter = (item, array) => {
	let updatedArray;
	let count = 0;
	if (item.id === 1) {
		const status = !item.isChecked;
		updatedArray = array.map((filter) => {
			filter.isChecked = status;
			return filter;
		});
	} else {
		updatedArray = array.map((filter) => {
			if (filter.isChecked && filter.id === 1) { 
				filter.isChecked = false;
			}	
			if (item.id === filter.id) {
				filter.isChecked = !filter.isChecked;
			}
			if (filter.isChecked && filter.id !== 1) {
				++count
			}
			return filter;
		});
	}
	if (count === 4) {
		updatedArray = array.map((filter) => {
			filter.isChecked = true;
			return filter;
		});
	}
	return updatedArray
}
