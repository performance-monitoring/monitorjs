import { Plugin } from './plugin'
export class AssetPlugin extends Plugin {
  public run() {
    this.monitor.addData({
      asset: 'asset'
    })
  }
}