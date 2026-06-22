import api from "@/lib/axios";

export const getColleges = async (
  search: string,
  page: number,
  location: string,
  rating: string,
  fees: string
) => {

  const response =
    await api.get("/colleges", {

      params: {
        search,
        page,
        location,
        minRating: rating,
        maxFees: fees,
      },

    });

  return response.data;
};


export const getCollegeById = async (
  id: string
) => {
  const response = await api.get(
    `/colleges/${id}`
  );

  return response.data;
};


export const compareColleges =
  async (
    ids: string[]
  ) => {

    const response =
      await api.get(
        `/colleges/compare?ids=${ids.join(",")}`
      );

    return response.data;
};