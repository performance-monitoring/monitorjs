import { Plugin } from '../plugin/plugin'
import { IMonitorDataModel } from '../types/monitor'

export class Monitor {
  private dataModel: IMonitorDataModel;
  public plugins: Map<number, Plugin>;

  constructor() {
    this.plugins = new Map();
    this.dataModel = {};
  }

  public visit(plugin: Plugin): void  {
    plugin.visit(this);
  }

  public addPlugin(plugin: Plugin): void {
    this.plugins.set(plugin.uuid, plugin);
  }

  public addData(model: IMonitorDataModel): void {
    Object.assign(this.dataModel, model);
  }

  public run(): void {
    for (const [key, plugin] of this.plugins) {
      plugin.run()
    }
  }

  public destroy(): void {
    for (const [key, plugin] of this.plugins) {
      plugin.destroy();
    }
  }
}