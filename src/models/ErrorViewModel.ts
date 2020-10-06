import { BaseViewModel } from "./BaseViewModel";

export interface ErrorViewModel extends BaseViewModel {
    id: string;
    error?: string;
    errorDescription?: string;
    redirectUri?: string;
}
