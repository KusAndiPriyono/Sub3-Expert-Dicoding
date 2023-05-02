const CONFIG = {
  KEY: process.env.API_KEY_KRDB,
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  OBJECT_STORE_NAME: 'restaurant',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-db',
  DATABASE_VERSION: 1,
};

export default CONFIG;
