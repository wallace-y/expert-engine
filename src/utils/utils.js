import axios from "axios";

export const getAllCategories = () => {
  return fetch("https://nc-marketplace-sem-4.onrender.com/api/categories")
    .then((res) => {
      return res.json();
    })
    .then(({ categories }) => {
      return categories;
    });
};

export const getAllItems = (categoryName) => {
  let url = "https://nc-marketplace-sem-4.onrender.com/api/items";

  if (categoryName) {
    url += `?category_name=${categoryName}`;
  }
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ items }) => {
      return items;
    });
};

export const checkValidUser = (username) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ user }) => {
      return user;
    });
};

export const getAllItemsInBasket = (username) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ items }) => {
      return items;
    });
};

export const removeItemFromBasket = (username, item_id) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket/${item_id}`;
  axios.delete(url);
};

export const addItemToBasket = (username, item) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username.username}/basket`;

  axios.post(url, { item_id: item.item_id });
};

export const addUser = (username, avatar_url) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users`;

  return checkValidUser(username)
    .then((res) => {
      if (res === undefined) {
       return axios.post(url, { username, avatar_url });
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllOrdersByUser = (username) => {
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/orders`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ items }) => {
      return items;
    });
};

export default {
  getAllCategories,
  getAllItems,
  checkValidUser,
  getAllItemsInBasket,
  removeItemFromBasket,
  addItemToBasket,
  addUser,
  getAllOrdersByUser,
};
