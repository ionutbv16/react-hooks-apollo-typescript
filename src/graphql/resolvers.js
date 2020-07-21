import { QUERY_HISTORY_INFO } from "../containers/History";
import moment from "moment";

export const resolvers = {
  Mutation: {
    addItemToHistory: (_, args, { cache }) => {
      const { history } = cache.readQuery({ query: QUERY_HISTORY_INFO });

      if (args.game.length > 0) {
        cache.writeQuery({
          query: QUERY_HISTORY_INFO,
          data: {
            history: {
              items: history.items.concat({
                game: args.game,
                date: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
              }),
              __typename: "History",
            },
          },
        });
      }
      return [{ ok: true }];
    },
  },
};
