import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const item_per_page = 5;
  try {
    connectToDb();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));
    return {count,users};
  } catch (error) {
    console.log(error);
    return { count: 0, users: [] };
  }
};


export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const item_per_page = 5;
    try {
      connectToDb();
      const count = await Product.find({ title: { $regex: regex } }).countDocuments();
      const products = await Product.find({ title: { $regex: regex } })
        .limit(item_per_page)
        .skip(item_per_page * (page - 1));
      return {count,products};
    } catch (error) {
      console.log(error);
      return { count: 0, users: [] };
    }
  };