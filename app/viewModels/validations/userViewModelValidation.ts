import { IUserViewModel } from "../iUserViewModel";

export function UserIsValid(userViewModel: IUserViewModel): boolean {
  return (userViewModel.email &&
    userViewModel.name &&
    userViewModel.password &&
    typeof userViewModel.email === 'string' ||
    typeof userViewModel.name === 'string' ||
    typeof userViewModel.password === 'string');
}
export function UserIdIsValid(id: string): boolean {
  return typeof id === 'string' || id;
}

