import { Schema as HookOptions } from '../hook/schema';
import { Schema as ConfigOptions } from '../config/schema';

export interface Schema extends ConfigOptions, HookOptions {
  skipScripts: boolean;
  skipInstall: boolean;
  hook: boolean;
  defaultCollection: boolean;
}
