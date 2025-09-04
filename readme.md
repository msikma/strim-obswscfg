[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/) [![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/@dada78641%2Fstrim-obswscfg.svg)](https://badge.fury.io/js/@dada78641%2Fstrim-obswscfg)

# @dada78641/strim-obswscfg

Fetches the [OBS WebSocket](https://github.com/obsproject/obs-websocket) configuration data.

## Usage

```bash
npm i @dada78641/strim-obswscfg
```

```ts
import {getObsWsConfig} from '@dada78641/strim-obswscfg';

const cfg = await getObsWsConfig();
console.log(cfg); // cfg.password, cfg.port, cfg.authRequired, etc.
```

The OBS WebSocket password is stored as plaintext in the config.json file.

This is designed to be as simple to use as possible: just call the function and obtain the login credentials.

### Exports

**Function:**

```ts
async function getObsWsConfig(forceXDG: boolean = false, customBaseDir?: string): Promise<ObsWebSocketCredentials>
```

**Parameters:**

* `forceXDG` **boolean** = false
  If true, forces XDG paths regardless of detected OS (~/.config/).
* `customBaseDir` **string?**
  Skips detection of the OBS base directory.

**Returns:**

An `ObsWebSocketCredentials` object.

### Types

```ts
export interface ObsWebSocketCredentials {
  // Path to the OBS app config base directory.
  obsBaseDir: string
  // Path to the config file.
  obsWsConfigPath: string
  // Whether system tray alerts are enabled.
  alertsEnabled: boolean
  // Whether authentication is required.
  // Note that a password string may still be present if this is false.
  authRequired: boolean
  // If true, OBS will generate a new password if the password string
  // is currently empty (first run behavior).
  firstLoad: boolean
  // Whether the server is enabled.
  isEnabled: boolean
  // Server password string.
  password: string
  // Server port.
  port: number
}
```

## License

MIT licensed.
