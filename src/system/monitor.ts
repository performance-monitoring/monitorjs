import { Plugin } from '../plugin/plugin'
import { IMonitorDataModel } from '../types/monitor'
import { deepCopy } from '../utils'

export class Monitor {
  private dataModel: IMonitorDataModel;
  public plugins: Map<number, Plugin>;

  constructor() {
    this.plugins = new Map();
    this.dataModel = {};
  }

  public visit(plugin: Plugin): void {
    this.plugins.set(plugin.uuid, plugin);
    plugin.visit(this)
  }

  public addData(model: IMonitorDataModel): void {
    Object.assign(this.dataModel, model);
  }

  public run(): void {
    for (const [key, plugin] of this.plugins) {
      plugin.run()
    }
  }

  get data(): IMonitorDataModel {
    return deepCopy(this.dataModel)
  }

  public destroy(): void {
    for (const [key, plugin] of this.plugins) {
      plugin.destroy();
    }
  }
}