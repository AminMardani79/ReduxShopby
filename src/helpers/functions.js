export const changeSlide = (slideCarousel, setEndIndex) => {
  let containerWidth = slideCarousel.current.sliderContainer.offsetWidth;
  if (containerWidth > 780) {
    setEndIndex(3);
  } else if (containerWidth > 600) {
    setEndIndex(4);
  } else if (containerWidth > 400) {
    setEndIndex(5);
  } else if (containerWidth > 1) {
    setEndIndex(6);
  }
};

export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export const getQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export const isInCart = (state, id) => {
  const isExist = !!state.selectedItems.find((item) => item.id === id);
  return isExist;
};

export const sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  const total = items.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
  return { itemsCounter, total };
};
