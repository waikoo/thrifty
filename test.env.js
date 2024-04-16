import { loadEnvConfig } from '@next/env';
import { resolve } from 'path';

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
