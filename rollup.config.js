import {terser} from 'rollup-plugin-terser';

/**
 * The configuration for the adapter interfaces is very straightforward since:
 * - Project doesn't have dependencies
 * - Project only has RxJS as a peer dependency
 */

const modulePath = 'dist/webex-component-adapter-interfaces';

export default [
  {
    input: 'src/webex/src/index.js',
    output: [
      {
        file: `${modulePath}.es.js`,
        format: 'es',
        sourcemap: true,
      },
      {
        file: `${modulePath}.es.min.js`,
        format: 'es',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    external: [/rxjs/],
  },
  {
    input: 'src/webex/src/index.js',
    output: [
      {
        file: `${modulePath}.umd.js`,
        format: 'umd',
        sourcemap: true,
        name: 'WebexComponentAdapterInterfaces',
        globals: {rxjs: 'rxjs'},
      },
      {
        file: `${modulePath}.umd.min.js`,
        format: 'umd',
        sourcemap: true,
        name: 'WebexComponentAdapterInterfaces',
        globals: {rxjs: 'rxjs'},
        plugins: [terser()],
      },
    ],
    external: [/rxjs/],
  },
];
