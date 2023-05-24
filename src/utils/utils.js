export const getAllCategories = () => {
  return fetch("https://nc-marketplace-sem-4.onrender.com/api/categories")
    .then((res) => {
      return res.json();
    })
    .then(({ categories }) => {
      return categories;
    });
};

export const getAllItems = () => {
  return fetch("https://nc-marketplace-sem-4.onrender.com/api/items")
    .then((res) => {
      return res.json();
    })
    .then(({ items }) => {
      return items;
    });
};

export default { getAllCategories, getAllItems };
