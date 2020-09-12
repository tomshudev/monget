import { firestore } from "../../../firebase/firebase.utils";

export const setMonthlyExpenses = async (user, selectedCategory, value) => {
  const userRef = firestore.doc(`/users/${user.id}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    try {
      let currCategories = user.categories
        ? user.categories.filter(
            (category) => category.name !== selectedCategory.name
          )
        : [];

      await userRef.set({
        ...user,
        categories: [
          ...currCategories,
          {
            name: selectedCategory.name,
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
