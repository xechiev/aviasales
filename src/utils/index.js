import add from "date-fns/add";
import format from "date-fns/format";

export const flightTimeConverter = (date, second) => {
  const time = add(new Date(date), {
    seconds: second,
  });

  return `${format(new Date(date), "HH:mm")} - ${format(
    new Date(time),
    "HH:mm"
  )}`;
};

const addZero = (x) => (x < 10 ? `0${x}` : x);

export const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return `${addZero(hours)}ч ${addZero(minutes)}м`;
};

export const correctEndingForm = (value) => {
  switch (value) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    case 2:
      return "2 пересадки";
    default:
      return `${value} пересадки`;
  }
};

export const sortTicketByPrice = (item1, item2) => {
  if (item1.price > item2.price) {
    return 1;
  }
  return -1;
};

export const sortTicketByTime = (item1, item2) => {
  if (item1.segments[0].duration > item2.segments[0].duration) {
    return 1;
  }
  return -1;
};

export const sortedTicketsByTab = (id, data) => {
  if (id === 1) {
    const result = data.sort(sortTicketByPrice);
    return result;
  }
  if (id === 2) {
    const result = data.sort(sortTicketByTime);
    return result;
  }
  return data;
};

export const filteredTickets = (filtersTickets, data) => {
  const filterTicketValue = filtersTickets.map((e) => e.value);

  const result = data.filter((item) => {
    const transfer = item.segments.map((i) => i.stops);

    if (filterTicketValue.includes(transfer[0].length)) {
      return item;
    }
    return "";
  });

  return result;
};
