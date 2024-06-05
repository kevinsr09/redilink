import type { Link, Primitives } from '@redilink/core';
import { atom } from 'nanostores';

type PrimitivesLink = Primitives<Link>

export const isSubmit = atom(false);
export const isLoading = atom(false);
export const linkShortData = atom({} as PrimitivesLink);