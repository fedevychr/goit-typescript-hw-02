import axios, { AxiosResponse } from "axios";

export const getPhotos = async <T>(
  query = "",
  page = 1,
  per_page = 20
): Promise<AxiosResponse<T, { message: string }>> => {
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos/?client_id=ubnjO2jz8BGs4i05XGvqiBLwh_g5xN2dLVqD-wspe6w",
    {
      params: {
        query,
        page,
        per_page,
      },
    }
  );

  return data;
};
