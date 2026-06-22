import api from "@/lib/axios";

export const saveCollege =
  async (
    userId: string,
    collegeId: string
  ) => {

    const response =
      await api.post(
        "/saved",
        {
          userId,
          collegeId,
        }
      );

    return response.data;
  };

export const getSaved =
  async (
    userId: string
  ) => {

    const response =
      await api.get(
        `/saved/${userId}`
      );

    return response.data;
  };