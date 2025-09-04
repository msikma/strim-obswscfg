// @dada78641/strim-obswscfg <https://github.com/msikma/strim-obswscfg>
// © MIT license

import * as fs from 'node:fs/promises'
import {getObsBaseDir, getObsWsConfigPath} from './obs.ts'
import type {ObsWebSocketCredentialsJSON, ObsWebSocketCredentials} from './types.ts'

/**
 * Reads the OBS WebSocket config file and returns an object of pertinent data.
 */
export async function getObsWsConfig(forceXDG: boolean = false, customBaseDir?: string): Promise<ObsWebSocketCredentials> {
  const obsBaseDir = customBaseDir ? customBaseDir : getObsBaseDir(forceXDG)
  const cfgPath = getObsWsConfigPath(forceXDG, customBaseDir)

  const cfg = await fs.readFile(cfgPath, 'utf8')
  const content = JSON.parse(cfg) as ObsWebSocketCredentialsJSON

  return {
    obsBaseDir: obsBaseDir,
    obsWsConfigPath: cfgPath,
    alertsEnabled: content.alerts_enabled,
    authRequired: content.auth_required,
    firstLoad: content.first_load,
    isEnabled: content.server_enabled,
    password: content.server_password,
    port: content.server_port,
  }
}
