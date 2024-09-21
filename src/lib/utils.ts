import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomArbitrary(
  min: number = 1000000,
  max: number = 99999999999999999
) {
  return Math.random() * (max - min) + min;
}
