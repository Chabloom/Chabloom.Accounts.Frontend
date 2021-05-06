import { BaseViewModel } from "../../../common";

export interface PasswordViewModel extends BaseViewModel {
  id: string;
  token: string;
  currentPassword: string;
  newPassword: string;
}
