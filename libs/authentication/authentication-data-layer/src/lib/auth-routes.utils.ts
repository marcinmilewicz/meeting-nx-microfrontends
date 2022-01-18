import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const createUnauthorizedRedirection = (path: string) => () => redirectUnauthorizedTo([path]);
export const createAuthorizedRedirection = (path: string) => () => redirectLoggedInTo([path]);
