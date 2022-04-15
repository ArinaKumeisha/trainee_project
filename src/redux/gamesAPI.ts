import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {DataType} from "../components/items/Items";

export const itemsAPI = createApi({
  reducerPath: "itemsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eldenring.fanapis.com/api",
  }),
  endpoints: (build) => ({
    getItems: build.query<DataType, number>({
      query: () => ({
        url: "/items",
      }),
    }),
  }),
});
