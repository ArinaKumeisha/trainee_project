import { itemsAPI } from './gamesAPI';
import { ResponseItem, ResponseItems } from 'types/types';

export const extendedApiSlice = itemsAPI.injectEndpoints({
  endpoints: build => ({
    getAmmos: build.query<ResponseItems, string>({
      query: (name: string) => ({
        url: `ammos`,
        params: {
          name: name,
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

    getArmors: build.query<ResponseItems, string>({
      query: (name: string) => ({
        url: `armors`,
        params: {
          name: name,
        },
        transformResponse: (responseData: { data: Promise<ResponseItems> }) =>
          responseData.data,
      }),
    }),

    getOneArmor: build.query<ResponseItem, string>({
      query: (armor_id: string) => ({
        url: `armors/${armor_id}`,
        transformResponse: (responseData: { data: Promise<ResponseItem> }) =>
          responseData.data,
      }),
    }),
  }),
});
export const {
  useGetAmmosQuery,
  useGetOneAmmoQuery,
  useGetArmorsQuery,
  useGetOneArmorQuery,
} = extendedApiSlice;
