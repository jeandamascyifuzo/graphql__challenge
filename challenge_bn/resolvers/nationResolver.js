import { ApolloError } from 'apollo-server-errors'
import Nations from '../models/nationModel'

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Nations.find();
    },
  },
  Mutation: {
    createNation: async (parent, args, context, info) => {
      const { country, year, area, totalPopulation } = args.nation;
      const nation = await new Nations({ country, year, area, totalPopulation }).save();
      return nation;
    },
    updateNation: async (parent, args, context, info) => {
      const { id } = args;
      const { country, year, area, totalPopulation } = args.nation;
      const nation = await Nations.findByIdAndUpdate(
        id,
        { country, year, area, totalPopulation },
        { new: true }
      );
      return nation;
    },
    deleteNation: async (parent, args, context, info) => {
      const { id } = args;
      await Nations.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};

  export default resolvers