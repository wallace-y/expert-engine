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

export const getAllItemsInBasket= (username) =>{
  let url = `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ items }) => {
      return items;
    });
 }
export default { getAllCategories, getAllItems, checkValidUser, getAllItemsInBasket };
