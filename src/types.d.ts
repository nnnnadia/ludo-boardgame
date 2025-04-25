import 'jest';

declare global {
  const describe: typeof import('jest').describe;
  const it: typeof import('jest').it;
  const expect: typeof import('jest').expect;
}
