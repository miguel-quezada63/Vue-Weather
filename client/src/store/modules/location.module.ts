import fetchHelper from "@/helpers/fetch.helper";
import ILocation from "@/interfaces/location.interface";

interface ILocationState {
  ip: string;
  location: ILocation | null;
}

enum MutationTypes {
  SET_IP = "SET_IP",
  SET_LOCATION = "SET_LOCATION",
}

export default {
  namespaced: true,
  state: {
    ip: "",
    location: null,
  } as ILocationState,

  mutations: {
    SET_LOCATION(state: ILocationState, location: ILocation) {
      state.location = location;
    },

    SET_IP(state: ILocationState, ip: string) {
      state.ip = ip;
    },
  },

  getters: {
    getLocation(state: ILocationState) {
      return state.location;
    },
    getIP(state: ILocationState) {
      return state.ip;
    },
  },

  actions: {
    async setIP({ commit }: { commit: any }) {
      try {
        // Get user's IP address
        const ip: string = (
          await fetchHelper("https://api.ipify.org?format=json")
        ).ip;
        // Commit fetched data to store
        commit(MutationTypes.SET_IP, ip);
      } catch (err) {
        throw new Error(`LocationModule API Error: ${err}`);
      }
    },

    setLocation({ commit }: { commit: any }, location: ILocation) {
      commit(MutationTypes.SET_LOCATION, location);
    },
  },
};
