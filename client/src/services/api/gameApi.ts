import $api from "@/config/axiosConfig";

const enum API_URL {
  GET_ALL_CATEGORIES = "/categories",
  GET_GAME = "/games",
  SUBMIT_ANSWER = "/games/submit-answer",
}

export const gameApi = {
  getGame: async () => {
    const { data } = await $api.get(API_URL.GET_GAME);
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
