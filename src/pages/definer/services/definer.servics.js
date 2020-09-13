import { firestore } from "../../../firebase/firebase.utils";
import { IconsNames, IconsEnum } from "../../../enums/icons.enum";

export const setMonthlyExpenses = async (user, selectedCategory, value) => {
  const userRef = firestore.doc(`/users/${user.id}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    try {
      let currCategories = user.categories
        ? user.categories.filter(
            (category) => category.id !== selectedCategory.id
          )
        : [];

      await userRef.set({
        ...user,
        categories: [
          ...currCategories,
          {
            id: selectedCategory.id,
            value,
          },
        ],
      });
    } catch (err) {
      console.error("Error while trying to upadate the monthly expenses.", err);
    }
  }
};

export const getUserMonthlyExpenses = async (setCategories, user) => {
  const userRef = firestore.doc(`/users/${user.id}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    setCategories(createCategories(snapshot.data().categories ?? []));
  }
};

const CATEGORIES = [
  {
    name: "Restaurants",
    icon: IconsNames.CAKE,
  },
  {
    name: "Groceries",
    icon: IconsNames.CART,
  },
  {
    name: "Shopping",
    icon: IconsNames.SHOPPING_BAG,
  },
  {
    name: "Luxury",
    icon: IconsNames.LUXURY,
  },
  {
    name: "Regular Expenses",
    icon: IconsNames.REGULAR,
  },
];

export const createCategories = (userCategories) => {
  let createdCategories = [...Array(CATEGORIES.length).keys()].map((val) => ({
    id: val,
    name: CATEGORIES[val].name,
    icon: IconsEnum[CATEGORIES[val].icon],
  }));

  userCategories.forEach((category) => {
    createdCategories.find((cat) => cat.id === category.id).value =
      category.value;
  });

  return createdCategories;
};
