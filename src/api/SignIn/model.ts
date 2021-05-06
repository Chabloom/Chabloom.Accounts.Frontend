import { BaseViewModel } from "../../common";

export interface SignInViewModel extends BaseViewModel {
  email: string;
  password: string;
  remember: boolean;
  returnUrl: string;
}
