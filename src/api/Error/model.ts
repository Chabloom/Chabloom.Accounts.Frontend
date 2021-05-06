import { BaseViewModel } from "../../common";

export interface ErrorViewModel extends BaseViewModel {
  id: string;
  error?: string;
  errorDescription?: string;
  redirectUri?: string;
}
