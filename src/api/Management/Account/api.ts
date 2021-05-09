import { BaseApi, BaseApiType } from "../../../common";
import { AccountViewModel } from "./model";

export class AccountsApi extends BaseApi<AccountViewModel> implements BaseApiType<AccountViewModel> {
  baseUrl = "";

  constructor() {
    super();
    this.baseUrl = `${(window as any).__env__.REACT_APP_ACCOUNTS_BACKEND_ADDRESS}/api/accounts`;
  }

  readItems(token: string): Promise<[Array<AccountViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}`, token);
  }

  readItem(token: string, itemId: string): Promise<[AccountViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, "", false);
  }

  addItem(token: string, item: AccountViewModel): Promise<[AccountViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}`, token, item, false);
  }

  editItem(token: string, item: AccountViewModel): Promise<[AccountViewModel | undefined, string]> {
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: AccountViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }
}
