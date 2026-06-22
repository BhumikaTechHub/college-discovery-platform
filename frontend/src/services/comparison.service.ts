import api from "@/lib/axios";

export const saveComparison =
  async (
    userId: string,
    college1Id: string,
    college2Id: string
  ) => {

    const response =
      await api.post(
        "/comparisons",
        {
          userId,
          college1Id,
          college2Id,
        }
      );

    return response.data;
  };