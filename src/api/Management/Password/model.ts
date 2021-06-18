import { BaseViewModel } from "../../model";

export interface PasswordViewModel extends BaseViewModel {
  id: string;
  token: string;
  currentPassword: string;
  newPassword: string;
}
