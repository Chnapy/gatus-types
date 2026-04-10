# gatus-types

Type definitions for Gatus config https://github.com/TwiN/gatus.

Made for config file generation (tools, GitOps, etc).

```
npm add -D gatus-types
```

```typescript
import type { Config } from "gatus-types";

const config: Config = {
  endpoints: [
    {
      name: 'Backend',
      url: 'https://example.com',
      interval: '5m',
      conditions: ['[STATUS] == 200'],
    },
  ],
};

fs.writeFileSync('config.yaml', yaml.stringify(config));
```
