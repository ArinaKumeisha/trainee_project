import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ResponseItem, ResponseItems } from 'types/types';

export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eldenring.fanapis.com/api/',
  }),
  endpoints: build => ({
    getItems: build.query<ResponseItems, string>({
      query: (name: string) => ({
        url: `items`,
        params: {
          name: name,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneItem: build.query<ResponseItem, string>({
      query: (item_id: string) => ({
        url: `items/${item_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
  }),
});
export const { useGetItemsQuery, useGetOneItemQuery } = itemsAPI;
