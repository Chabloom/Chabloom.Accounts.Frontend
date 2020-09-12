import {BaseViewModel} from "./BaseViewModel";

export interface LoginViewModel extends BaseViewModel {
    email: string;
    password: string;
    remember: boolean;
}
