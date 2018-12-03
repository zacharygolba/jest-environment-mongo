/// <reference path="../typings/jest-environment-node.d.ts" />

import NodeEnvironment from "jest-environment-node";
import MongoMemoryServer from "mongodb-memory-server";

export = MongoEnvironment;

declare global {
  export const mongoServer: MongoMemoryServer;
}

class MongoEnvironment extends NodeEnvironment {
  private readonly server = new MongoMemoryServer({
    autoStart: false,
  });

  async setup(): Promise<void> {
    await super.setup();
    await this.server.start();
    Object.defineProperty(this.global, "mongoServer", {
      value: this.server,
    });
  }

  async teardown(): Promise<void> {
    await super.teardown();
    await this.server.stop();
  }
}
