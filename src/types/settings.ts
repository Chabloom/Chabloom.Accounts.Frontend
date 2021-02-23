import { UserManagerSettings } from "oidc-client";

export const ApplicationConfig = {
  name: "chabloom-accounts",
  displayName: "Chabloom Accounts",
  frontendPublicAddress: "https://accounts-dev-1.chabloom.com",
  backendPublicAddress: "https://accounts-api-dev-1.chabloom.com",
  accountsBackendPublicAddress: "https://accounts-api-dev-1.chabloom.com",
};

export const AppInsightsInstrumentationKey = "APPINSIGHTS_INSTRUMENTATIONKEY";

export const OidcSettings: UserManagerSettings = {
  authority: ApplicationConfig.accountsBackendPublicAddress,
  client_id: "Chabloom.Accounts.Frontend",
  redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Accounts.Backend",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
