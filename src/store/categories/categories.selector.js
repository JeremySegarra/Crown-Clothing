import { createSelector } from "reselect";

//if this categories object value stays the same in memory the selectors second argument function will not run
//meaning our categories reducer in our root reducer has not changed
const selectCategoryReducer = (state) => state.categories;

//memoization, the first argument is our parameter slice,
//only when that changes from the pure function will the second function run
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

//the reason we use the selector is because we did not want to re run this reduce if categories had never changed
export const selectCategoriesMap = createSelector(
  //as long as the categories array does not change do not rerun this reduce
  [selectCategories],
  (categories) =>
    categories.reduce((acc, catagory) => {
      const { title, items } = catagory;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
