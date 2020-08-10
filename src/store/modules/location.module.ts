import fetchHelper from "@/helpers/fetch.helper";
import ILocation from "@/interfaces/location.interface";
import GEO_KEY from "@/config/geo.config";

interface ILocationState {
  ip: string;
  location: ILocation | null;
}

enum MutationTypes {
  SET_STATE = "SET_STATE",
}

export default {
  namespaced: true,
  state: {
    ip: "",
    location: null,
  } as ILocationState,

  mutations: {
    SET_STATE(state: ILocationState, { ip, location }: ILocationState) {
      state.ip = ip;
      state.location = location;
    },
  },

  getters: {
    getLocation(state: ILocationState) {
      return state.location;
    },
  },

  actions: {
    async setLocationAndIP({ commit }: { commit: any }) {
      try {
        const ip: string = (
          await fetchHelper("https://api.ipify.org?format=json")
        ).ip;
        const location: ILocation = await fetchHelper(
          `http://api.ipstack.com/${ip}?access_key=${GEO_KEY}`
        );
        commit(MutationTypes.SET_STATE, { ip, location });
      } catch (err) {
        throw new Error(`LocationModule API Error: ${err}`);
      }
    },
  },
};
