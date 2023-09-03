import data from "./products.json";
export default defineEventHandler((event) => {
  return {
    data,
  };
});
