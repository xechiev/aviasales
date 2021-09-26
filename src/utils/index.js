import add from 'date-fns/add';
import format from 'date-fns/format';

export const flightTimeConverter = (date, second) => {
	const time = add(new Date(date), {
		seconds: second,
	});

	return `${format(new Date(date), 'HH:mm')} - ${format(new Date(time), 'HH:mm')}`;
}


const addZero = (x) => (x < 10 ? `0${x}` : x)

export const getTimeFromMins = (mins) => {
	const hours = Math.trunc(mins / 60);
	const minutes = mins % 60;

	return `${addZero(hours)}ч ${addZero(minutes)}м`;
};

export const correctEndingForm = (value) => {
	switch (value) {
		case 0:
			return 'Без пересадок';
		case 1:
			return '1 пересадка';
		case 2:
			return '2 пересадки';
		default:
			return `${value} пересадки`;
	}
};
