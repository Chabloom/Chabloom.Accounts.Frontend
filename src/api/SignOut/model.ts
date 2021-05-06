import { BaseViewModel } from "../../common";

export interface SignOutViewModel extends BaseViewModel {
  id: string;
  postLogoutRedirectUri?: string;
}
