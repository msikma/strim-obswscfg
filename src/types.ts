// @dada78641/strim-obswscfg <https://github.com/msikma/strim-obswscfg>
// © MIT license

// Contents of the obs-websocket/config.json file.
export interface ObsWebSocketCredentialsJSON {
  alerts_enabled: boolean
  auth_required: boolean
  first_load: boolean
  server_enabled: boolean
  server_password: string
  server_port: number
}

// Interface returned by this library.
export interface ObsWebSocketCredentials {
  // Path to the OBS app config base directory.
  obsBaseDir: string
  // Path to the config file.
  obsWsConfigPath: string
  // Whether system tray alerts are enabled.
  alertsEnabled: boolean
  // Whether authentication is required. Note that a password string may still be present if this is false.
  authRequired: boolean
  // If true, OBS will generate a new password if the password string is currently empty (first run behavior).
  firstLoad: boolean
  // Whether the server is enabled.
  isEnabled: boolean
  // Server password string.
  password: string
  // Server port.
  port: number
}
