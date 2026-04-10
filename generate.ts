import fs from 'node:fs';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';

const schemaUrl =
  'https://raw.githubusercontent.com/Chnapy/gatus/refs/heads/feat/add-jsonschema-generation/config.schema.json';

fetch(schemaUrl)
  .then((res) => res.json() as Promise<JSONSchema4>)
  .then((fileContent) => {
    // root $ref requires to be undefined
    // @see https://github.com/bcherny/json-schema-to-typescript/issues/681
    delete fileContent.$ref;

    return fileContent;
  })
  .then((fileContent) =>
    compile(fileContent, 'GatusConfig', {
      unreachableDefinitions: true,
      format: false,
    }),
  )
  .then((ts) => fs.writeFileSync('index.d.ts', ts));
