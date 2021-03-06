import type { Items, ResponseItems } from 'types';
import type { TitleSearch } from 'utilities';

export const countItems = (items: ResponseItems) => {
  if (items && items.count) {
    return `found: ${items.count} items`;
  } else {
    return `check the entered name`;
  }
};

export const enteredSearch = (items: Items[], value: string) => {
  return items?.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
};

export const filteredMainTitles = (items: TitleSearch[], value: string) => {
  return items?.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
};
export const cutString = (str: string) => {
  if (str.includes('=')) {
    return str.split('=')[1];
  } else {
    return str;
  }
};
