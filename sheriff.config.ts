import { noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  version: 1,

  tagging: {
    'src/app': {
      'domains/<domain>': {
        'page-<page>': ['domain:<domain>', 'type:page'],
        'component-<component>': ['domain:<domain>', 'type:component'],
        data: ['domain:<domain>', 'type:data'],
        'util-<ui>': ['domain:<domain>', 'type:util']
      }
    }
  },
  depRules: {
    root: ['*'],

    'domain:*': [sameTag, 'domain:shared'],

    'type:page': ['type:component', 'type:data', 'type:util'],
    'type:component': ['type:data', 'type:util'],
    'type:data': ['type:util'],
    'type:util': noDependencies
  }
};
