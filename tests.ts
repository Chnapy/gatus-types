/** biome-ignore-all lint/correctness/noUnusedVariables: tests */
import type { Config } from 'gatus-types';

const config: Config = {
  debug: true,
  endpoints: [
    {
      name: 'Backend',
      url: 'https://example.com',
      interval: '5m',
      conditions: ['[STATUS] == 200'],
    },
  ],
};
