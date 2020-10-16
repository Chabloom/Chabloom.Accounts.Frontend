import { BaseViewModel } from "./BaseViewModel";

export interface SignInViewModel extends BaseViewModel {
  email: string;
  password: string;
  remember: boolean;
  returnUrl: string;
}
