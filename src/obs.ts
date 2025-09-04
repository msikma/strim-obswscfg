// @dada78641/strim-obswscfg <https://github.com/msikma/strim-obswscfg>
// © MIT license

import * as path from 'node:path'
import * as os from 'node:os'

/**
 * Returns path to the OBS config basedir on Windows.
 */
function getWindowsPath(): string {
  const appData = process.env['APPDATA']
  if (!appData) {
    throw new Error('APPDATA not set')
  }
  return path.join(appData, 'obs-studio')
}

/**
 * Returns path to the OBS config basedir on Darwin (macOS).
 */
function getDarwinPath(): string {
  return path.join(os.homedir(), 'Library', 'Application Support', 'obs-studio')
}

/**
 * Returns path to the OBS config basedir on Linux (or anything XDG compatible).
 */
function getXDGPath(): string {
  return path.join(os.homedir(), '.config', 'obs-studio')
}

/**
 * Returns path to the OBS config basedir.
 * 
 * This path is not guaranteed to exist, but it's where the OBS config files should be if OBS is installed.
 * 
 * If forceXDG is true, we'll always return an XDG path.
 */
export function getObsBaseDir(forceXDG: boolean = false): string {
  const platform = process.platform

  if (forceXDG) {
    return getXDGPath()
  }

  if (platform === 'win32') {
    return getWindowsPath()
  }
  else if (platform === 'darwin') {
    return getDarwinPath()
  }
  else {
    // Pretty much always going to be Linux, but if it's not we'll at least
    // assume it uses XDG paths.
    return getXDGPath()
  }
}

/**
 * Returns path to the OBS WebSocket configuration file.
 * 
 * If forceXDG is true, we'll always return an XDG path.
 */
export function getObsWsConfigPath(forceXDG: boolean = false, customBaseDir?: string) {
  const base = customBaseDir ?? getObsBaseDir(forceXDG)
  return path.join(base, 'plugin_config', 'obs-websocket', 'config.json')
}
