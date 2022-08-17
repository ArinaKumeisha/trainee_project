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
    getArmors: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `armors`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneArmor: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `armors/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
    getAshes: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `ashes`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneAshe: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `ashes/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
    getBosses: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `bosses`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneBoss: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `bosses/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),

    getClasses: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `classes`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneClass: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `classes/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),

    getCreatures: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `creatures`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneCreature: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `creatures/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),

    getIncantations: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `incantations`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneIncantation: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `incantations/${ammo_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
    getWeapons: build.query<ResponseItems, Params>({
      query: ({ name, page, limit = 10 }) => ({
        url: `weapons`,
        params: {
          name,
          page,
          limit,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneWeapon: build.query<ResponseItem, string>({
      query: (ammo_id: string) => ({
        url: `weapons/${ammo_id}`,
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
  useGetArmorsQuery,
  useGetOneArmorQuery,
  useGetAshesQuery,
  useGetOneAsheQuery,
  useGetBossesQuery,
  useGetOneBossQuery,
  useGetClassesQuery,
  useGetOneClassQuery,
  useGetCreaturesQuery,
  useGetOneCreatureQuery,
  useGetIncantationsQuery,
  useGetOneIncantationQuery,
  useGetWeaponsQuery,
  useGetOneWeaponQuery,
} = itemsAPI;
