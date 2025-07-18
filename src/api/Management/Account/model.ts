import { BaseViewModel } from "../../model";

export interface AccountViewModel extends BaseViewModel {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}
