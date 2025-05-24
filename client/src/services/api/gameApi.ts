import $api from "@/config/axiosConfig";

const enum API_URL {
  GET_ALL_CATEGORIES = "/category",
  GAME = "/game",
  GAME_ALL = "/game/mygame",
  SUBMIT_ANSWER = "/games/submit-answer",
}

export const gameApi = {
  createGame: async () => {
    const { data } = await $api.post(API_URL.GAME);
    return data;
  },

  getGame: async () => {
    const { data } = await $api.get(API_URL.GAME);
    return data;
  },

  getAllGames: async () => {
    const { data } = await $api.get(API_URL.GAME_ALL);
    return data;
  },

  getAllCategories: async () => {
    const { data } = await $api.get(API_URL.GET_ALL_CATEGORIES);
    return data;
  },

  submitAnswer: async (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => {
    const { data } = await $api.post(API_URL.SUBMIT_ANSWER, {
      game_id,
      question_id,
      answer_id,
    });
    return data;
  },
};
