// const updatedFilter = (item, array) => {
// 	let updatedArray;
// 	let count = 0;
// 	if (item.id === 1) {
// 		const status = !item.isChecked;
// 		updatedArray = array.map((filter) => {
// 			filter.isChecked = status;
// 			return filter;
// 		});
// 	} else {
// 		updatedArray = array.map((filter) => {
// 			if (filter.isChecked && filter.id === 1) { 
// 				filter.isChecked = false;
// 			}	
// 			if (item.id === filter.id) {
// 				filter.isChecked = !filter.isChecked;
// 			}
// 			if (filter.isChecked && filter.id !== 1) {
// 				++count
// 			}
// 			return filter;
// 		});
// 	}

// 	if (count === 4) {
// 		updatedArray = array.map((filter) => {
// 			filter.isChecked = true;
// 			return filter;
// 		});
// 	}
// 	return updatedArray
// };