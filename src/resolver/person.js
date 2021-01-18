const axios = require('axios');
const { UserInputError } = require('apollo-server')

/**
 * The resolver that orchestrates the api calls between person facility and exposure to get the val3, val5.
 *
 * The exception/error handling is not done gracefully.
 * For now a null is passed back instead of a proper error.
 *
 */
module.exports.resolvers = {
  Query: {
    person: async (parent, args) => {
      try {
        const { data : { val1, val2 }} = await axios.get(`http://localhost:3000/person/${args.id}`);
        const { data : { val3 }} = await axios.get(`http://localhost:3000/facility/${val1}`);
        const { data : { val5 }} = await axios.get(`http://localhost:3000/exposure/${val2}`);
        return {
          val3,
          val5,
        }
      } catch (e) {
        console.error(e);

        if(e.response && e.response.status === 404) {
          throw new UserInputError("Invalid argument", {
            invalidArgs: Object.keys(args),
          })
        }

        return null;
      }
    },
  },
};