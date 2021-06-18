import { BaseAPI } from "../../api";
import { PasswordViewModel } from "./model";

export class PasswordsApi extends BaseAPI<PasswordViewModel> {
  constructor() {
    super(`${window.__env__.REACT_APP_ACCOUNTS_BACKEND_ADDRESS}/api/passwords`);
  }

  change(viewModel: PasswordViewModel, token: string): Promise<boolean> {
    return this._create(`${this._baseUrl}/change`, viewModel, token);
  }

  reset(viewModel: PasswordViewModel, token: string): Promise<boolean> {
    return this._create(`${this._baseUrl}/reset`, viewModel, token);
  }

  confirmReset(viewModel: PasswordViewModel, token: string): Promise<boolean> {
    return this._create(`${this._baseUrl}/confirmReset`, viewModel, token);
  }
}
