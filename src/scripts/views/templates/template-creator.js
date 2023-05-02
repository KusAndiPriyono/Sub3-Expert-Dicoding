/* eslint-disable comma-dangle */
/* eslint-disable indent */
import API_ENDPOINT from '../../global/api-endpoint';

const createRestaurantItemTemplate = (restaurants) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
  <img loading="lazy" class="restaurant-item__header__poster" src="${
    API_ENDPOINT.RESTAURANT_IMAGE + restaurants.pictureId
  }" alt="${restaurants.name || '-'}" title="${restaurants.name || '-'}">
  <div class="city">${restaurants.city}</div>
  <div class="restaurant-item__header__rating">
    <p>Rating: <span class="restaurant-item__rating__score">${
      restaurants.rating || '-'
    }</span></p>
  </div>
</div>
<div class="restaurant-item__content loading">
  <h3 class="restaurant__title"><a href="/#/detail/${restaurants.id}">${
  restaurants.name || '-'
}</a></h3>
  <p>${restaurants.description || '-'}</p>
</div>
</div> 
`;

const createRestaurantDetailTemplate = (restaurant) => `
<section class="detail">
<div class="main">
    <div class="detail-image">
    <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}" alt="${
  restaurant.name
}">
    </div>
    <div class="detail-text">
        <div class="wrapper">        
        <h3>Toko : ${restaurant.name}</h3>
        <h1>Rating : ${
          restaurant.rating
        } <i class="fa fa-star" aria-hidden="true"></i></h1>
        <h1><i class="fa fa-map-marker" aria-hidden="true"></i> Alamat : ${
          restaurant.address
        } ${restaurant.city}</h1>
        </div>
        <p class="description">${restaurant.description}</p>
    </div>  
    <div class="menus">
        <div class="detail-food">
        <h2><i class="fa fa-cutlery" aria-hidden="true"></i>Food</h2>
            <ul class="food-list">
            ${restaurant.menus.foods
              .map(
                (food) => `
                <li>${food.name}</li>
                `
              )
              .join('')}
            </ul>
        </div> 
        <div class="detail-drink">
        <h2><i class="fa fa-glass" aria-hidden="true"></i>Drink</h2>
            <ul class="drink-list">
            ${restaurant.menus.drinks
              .map(
                (drink) => `
                <li>${drink.name}</li>
                `
              )
              .join('')}
            </ul>
        </div> 
    </div>
    <div class="reviews">
    <h2>Review</h2>
    <div class="review-list">
    ${restaurant.customerReviews
      .map(
        (review) => `
    <div class="review-item">
      <p class="review-item-user">${review.name}</p>
      <p class="review-item-text">${review.review}</p>
      <p class="review-item-date">${review.date}</p>
    </div>`
      )
      .join('')}
  </div>
  <div class="add-review">
  <h2>Add Review</h2>
  <form id="review-form">
    <div class="form-group">
      <label for="review-name">Name</label>
      <input type="text" id="review-name" name="name" required>
    </div>
    <div class="form-group">
      <label for="review-text">Review</label>
      <textarea id="review-text" name="review" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
  </div>
</div>
<div id="likeButtonContainer"></div>
</section>
  
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
