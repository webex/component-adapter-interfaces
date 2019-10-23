import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

const output = (name, format) => ({
  name,
  file: `dist/webexComponentAdapterInterfaces.${format}.js`,
  format,
  sourcemap: true,
});

export default [
  {
    input: 'src/index.js',
    output: [
      output('WebexComponentAdapterInterfaces', 'cjs'),
      output('UMDWebexComponentAdapterInterfaces', 'umd'),
      output('ESMWebexComponentAdapterInterfaces', 'esm'),
    ],
    plugins: [resolve(), babel(), commonJS()],
  },
];
