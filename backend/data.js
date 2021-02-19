import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Hasitha",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nappa vally",
      category: "Environment",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description: "captured by mobile",
    },
    {
      name: "Golden villa",
      category: "Environment",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      rating: 3,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
