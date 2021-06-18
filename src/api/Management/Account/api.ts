import { FullAPI } from "../../api";
import { AccountViewModel } from "./model";

export class AccountsApi extends FullAPI<AccountViewModel> {
  constructor() {
    super(`${window.__env__.REACT_APP_ACCOUNTS_BACKEND_ADDRESS}/api/accounts`);
  }

  deleteViewModel(viewModel: AccountViewModel, token: string | undefined): Promise<boolean> {
    return this._delete(`${this._baseUrl}/${viewModel.id}`, token);
  }

  updateViewModel(viewModel: AccountViewModel, token: string | undefined): Promise<boolean> {
    return this._update(`${this._baseUrl}/${viewModel.id}`, viewModel, token);
  }
}
