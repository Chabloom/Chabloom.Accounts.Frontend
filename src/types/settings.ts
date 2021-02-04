import { UserManagerSettings } from "oidc-client";

export const ApplicationConfig = {
  name: "chabloom-accounts",
  displayName: "Chabloom Accounts",
  frontendPublicAddress: "http://localhost:3000",
  backendPublicAddress: "https://accounts-api-test.chabloom.com",
  accountsBackendPublicAddress: "https://accounts-api-test.chabloom.com",
};

export const AppInsightsInstrumentationKey = "APPINSIGHTS_INSTRUMENTATIONKEY";

export const OidcSettings: UserManagerSettings = {
  authority: ApplicationConfig.accountsBackendPublicAddress,
  client_id: "Chabloom.Accounts.Frontend",
  redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Accounts",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
