export function getConfig() {
  return {
    domain: process.env.REACT_APP_AUTH_DOMAIN
      ? process.env.REACT_APP_AUTH_DOMAIN
      : '',
    clientId: process.env.REACT_APP_CLIENT_ID
      ? process.env.REACT_APP_CLIENT_ID
      : '',
    audience: process.env.REACT_APP_AUDIENCE,
    scope: process.env.REACT_APP_SCOPE,
  }
}
