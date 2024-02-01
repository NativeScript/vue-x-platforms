import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.vuexplatforms',
	appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    suppressCallJSMethodExceptions: false,
  },
  appPath: 'src',
  ios: {
    discardUncaughtJsExceptions: false,
  },
} as NativeScriptConfig;
