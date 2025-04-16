export const Subscription = {
  addedUser: {
    //permet de s’inscrire à un Tunnel via son Id
    subscribe: (parent, args, { db, pubSub }) => pubSub.subscribe("addedUser"),
    //resolve qui prend en paramètre le payload de l’event et retourne le résultat voulu aux subscribers.  
    resolve: (payload) => {
      console.log({ payload });
      return payload.user;
    },
  },
};
