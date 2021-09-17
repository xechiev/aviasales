const initialState = {
  value: [
    { name: 'Все', id: 1, check: true },
    { name: 'Без пересадок', id: 2, check: true },
    { name: '1 пересадка', id: 3, check: true },
    { name: '2 пересадки', id: 4, check: true },
    { name: '3 пересадки', id: 5, check: true },
  ],
}
function toogleCheck({ initialState }) {
  console.log(initialState.value);
}

toogleCheck(initialState)