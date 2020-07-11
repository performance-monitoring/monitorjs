import { EnvPlugin, AssetPlugin, Monitor } from './index'
import signale from 'signale'

describe('run monitor case', () => {
  const monitor = new Monitor()
  test('envPlugin', () => {
    const envPlugin = new EnvPlugin()
    monitor.visit(envPlugin)
    monitor.run()
    signale.debug(monitor.data)
  })

  test('assetPlugin', () => {
    const assetPlugin = new AssetPlugin()
    monitor.visit(assetPlugin)
    monitor.run()
    signale.debug(monitor.data)
  })
})