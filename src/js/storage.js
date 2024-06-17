export const saveToStore = function ({ shoppingList, completedList }) {
  window.localStorage.setItem(
    "shoppingApp_active",
    JSON.stringify(shoppingList)
  );

  window.localStorage.setItem(
    "shoppingApp-completed",
    JSON.stringify(completedList)
  );
};

// Add debug consfiguration
export const getFromStore = function () {
  const getActive = window.localStorage.getItem("shoppingApp_active");
  const getCompleted = window.localStorage.getItem("shoppingApp_completed");

  return {
    active: getActive ? JSON.parse(getActive) : [],
    completed: getCompleted ? JSON.parse(getCompleted) : [],
  };
};
