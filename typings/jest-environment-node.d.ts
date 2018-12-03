/// <reference types="jest" />

declare module "jest-environment-node" {
  export = NodeEnvironment;

  const NodeEnvironment: NodeEnvironmentConstructor;

  interface NodeEnvironmentConstructor {
    new (config: jest.ProjectConfig): NodeEnvironment;
  }

  interface NodeEnvironment extends jest.Environment {
    setup(): Promise<void>;
    teardown(): Promise<void>;
    runScript(script: jest.Script): jest.Script | null;
  }
}
