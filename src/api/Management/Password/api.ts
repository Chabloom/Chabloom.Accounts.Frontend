import { BaseApi, BaseApiType } from "../../../common";
import { PasswordViewModel } from "./model";

export class PasswordsApi extends BaseApi<PasswordViewModel> implements BaseApiType<PasswordViewModel> {
  baseUrl = "";

  constructor() {
    super();
    const envConfig = 'env-config';
    import(envConfig)
        .then(x => this.baseUrl = `${x.config.REACT_APP_ACCOUNTS_BACKEND_ADDRESS}/api/passwords`);
  }

  readItems(token: string): Promise<[Array<PasswordViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}`, token);
  }

  readItem(token: string, itemId: string): Promise<[PasswordViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, "", false);
  }

  addItem(token: string, item: PasswordViewModel): Promise<[PasswordViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}`, token, item, false);
  }

  editItem(token: string, item: PasswordViewModel): Promise<[PasswordViewModel | undefined, string]> {
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: PasswordViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }

  changePassword(token: string, item: PasswordViewModel): Promise<[PasswordViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}/change`, token, item, false);
  }

  resetPassword(token: string, item: PasswordViewModel): Promise<[PasswordViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}/reset`, "", item, false);
  }

  confirmResetPassword(token: string, item: PasswordViewModel): Promise<[PasswordViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}/confirmReset`, "", item, false);
  }
}
