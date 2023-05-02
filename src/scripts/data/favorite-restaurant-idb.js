/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async getReviewsByRestaurantId(restaurantId) {
    return (await dbPromise).getAllFromIndex(
      OBJECT_STORE_NAME,
      'restaurantId',
      restaurantId
    );
  },

  async putReview(review) {
    if (review.hasOwnProperty('id')) {
      return (await dbPromise).put(OBJECT_STORE_NAME, review);
    }
    return null;
  },

  async deleteReview(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async searchRestaurants(query) {
    return (await this.getAllRestaurants()).filter((restaurant) => {
      const loweredCaseRestaurantTitle = (
        restaurant.title || '-'
      ).toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(
        /\s/g,
        ''
      );

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRestaurantIdb;
