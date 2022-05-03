import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import type { ResponseItem, ResponseItems } from 'types';

export type Params = {
  name: string;
  page: number;
  limit: number;
};
export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eldenring.fanapis.com/api/',
  }),
  endpoints: build => ({
    getItems: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `items`,
        params: {
          name,
          page,
          limit,
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
    getAmmos: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `ammos`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneAmmo: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `ammos/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
  }),
});
export const {
  useGetItemsQuery,
  useGetOneItemQuery,
  useGetAmmosQuery,
  useGetOneAmmoQuery,
} = itemsAPI;
