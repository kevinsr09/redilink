import { atom } from 'nanostores';

interface Link{
  original: string
  short: string
  id: string
} 
export const isSubmit = atom(false);
export const isLoading = atom(false);
export const linkShortData = atom({} as Link);