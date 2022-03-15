function generateReviewId(product) {
  if (localStorage.reviews) {
    const reviews = JSON.parse(localStorage.reviews);
    if (reviews[product]) {
      const productReviews = reviews[product];
      const maxId = productReviews
        .sort((a, b) => Number(a) - Number(b))[productReviews.length - 1];
      return maxId.id + 1;
    }
    return 1;
  }
  return 0;
}

export function saveReview(productId, review) {
  const auxReview = { ...review };
  auxReview.id = generateReviewId(productId);
  if (localStorage.reviews) {
    const reviews = JSON.parse(localStorage.reviews);
    if (reviews[productId] === undefined) reviews[productId] = [];
    reviews[productId].push(auxReview);
    localStorage.reviews = JSON.stringify(reviews);
  } else {
    const reviews = { [productId]: [auxReview] };
    localStorage.reviews = JSON.stringify(reviews);
  }
}

export function loadReview(productId) {
  if (localStorage.reviews) {
    const reviews = JSON.parse(localStorage.reviews);
    if (reviews[productId]) return reviews[productId];
  }
  localStorage.reviews = JSON.stringify({});
  return [];
}

export function saveCartItems(cart) {
  localStorage.cartItems = JSON.stringify(cart);
}

export function loadCartItem() {
  if (localStorage.cartItems) {
    return JSON.parse(localStorage.cartItems);
  }
  return [];
}
