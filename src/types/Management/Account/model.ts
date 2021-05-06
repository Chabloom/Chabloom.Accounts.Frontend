import { BaseViewModel } from "../../../common";

export interface AccountViewModel extends BaseViewModel {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}
