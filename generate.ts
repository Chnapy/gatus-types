import fs from 'node:fs';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';

const fileContent: JSONSchema4 = JSON.parse(
  fs.readFileSync('config.schema.json', 'utf8'),
);

// root $ref requires to be undefined
// @see https://github.com/bcherny/json-schema-to-typescript/issues/681
delete fileContent.$ref;

compile(fileContent, 'GatusConfig', {
  unreachableDefinitions: true,
  format: false,
}).then((ts) => fs.writeFileSync('index.d.ts', ts));
