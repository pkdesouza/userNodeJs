import { IAuthViewModel } from "../iAuthViewModel";

export function AuthIsValid(userViewModel: IAuthViewModel): boolean {
  return (userViewModel.email &&
    userViewModel.password &&
    typeof userViewModel.email === 'string' ||
    typeof userViewModel.password === 'string');
}
export function AuthTokenIsValid(token: string): boolean {
  return typeof token === 'string' || token;
}
