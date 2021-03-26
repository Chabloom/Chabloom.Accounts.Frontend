import { UserManagerSettings } from "oidc-client";

export const ApplicationConfig = {
  name: "chabloom-accounts",
  displayName: "Chabloom Accounts",
  accountsFrontendPublicAddress: "https://accounts-dev-1.chabloom.com",
  accountsBackendPublicAddress: "https://accounts-api-dev-1.chabloom.com",
  billingFrontendPublicAddress: "https://billing-dev-1.chabloom.com",
  billingBackendPublicAddress: "https://billing-api-dev-1.chabloom.com",
  ecommerceFrontendPublicAddress: "https://ecommerce-dev-1.chabloom.com",
  ecommerceBackendPublicAddress: "https://ecommerce-api-dev-1.chabloom.com",
  transactionsFrontendPublicAddress: "https://transactions-dev-1.chabloom.com",
  transactionsBackendPublicAddress: "https://transactions-api-dev-1.chabloom.com",
};

export const AppInsightsInstrumentationKey = "APPINSIGHTS_INSTRUMENTATIONKEY";

export const OidcSettings: UserManagerSettings = {
  authority: ApplicationConfig.accountsBackendPublicAddress,
  client_id: "Chabloom.Accounts.Frontend",
  redirect_uri: `${ApplicationConfig.accountsFrontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${ApplicationConfig.accountsFrontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Accounts.Backend",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
