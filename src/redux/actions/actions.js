export const setFilters = (item) => ({	type: 'SET_FILTERS', item });

export const setTabs = (changeTabs) => ({	type: 'SET_TABS',	payload: changeTabs });

export const setTabsState = (tabs, item) => {
  const changeTabs = tabs.map((tab) => {
      if (tab.id === item.id) {
        tab.isChecked = true;
        return tab
      }
      tab.isChecked = false;
      return tab
    })
  dispatch(setTabs(changeTabs));
}
