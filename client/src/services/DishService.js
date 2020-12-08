const baseURL = 'http://localhost:3000/api/menus/';

export default {
  getDishes() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addDish(dish) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(dish),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  getFilteredDishes(region_code) {
    return fetch(`${baseURL}/filter-by-region/${region_code}`)
    .then(res => res.json());
  },

  updateDish(dish) {
    return fetch(baseURL + dish._id, {
      method: 'PUT',
      body: JSON.stringify(dish),
      headers: { 
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  },

  deleteDish(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  },

  postDish(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
};
