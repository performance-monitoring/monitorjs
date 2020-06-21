import { Plugin } from './plugin'
export class EnvPlugin extends Plugin {
  public run() {
    this.monitor.addData({})
  }
}