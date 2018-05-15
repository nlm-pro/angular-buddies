import { Schema as ConfigOptions } from '../config/schema';

export interface Schema extends ConfigOptions {
  skipScripts: boolean;
  skipInstall: boolean;
}
