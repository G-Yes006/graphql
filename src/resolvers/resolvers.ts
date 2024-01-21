import User from "../models/User";

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
      }
    },
  },
  Mutation: {
    addUser: async (_, { username, email }) => {
      try {
        const newUser = new User({ username, email });
        await newUser.save();
        return newUser;
      } catch (error) {
        throw new Error(`Error adding user: ${error.message}`);
      }
    },
  },
};

export default resolvers;
