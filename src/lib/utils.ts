import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkCurrentPathname(pathname:string, currentPathname: string):boolean {
  const pathWithoutLocale = currentPathname.slice(3) || '/'

  if(pathname !== '/')
    return pathWithoutLocale.includes(pathname);

  return pathname === pathWithoutLocale
}