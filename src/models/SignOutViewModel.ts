import { BaseViewModel } from "./BaseViewModel";

export interface SignOutViewModel extends BaseViewModel {
    id: string;
    postLogoutRedirectUri?: string;
}
