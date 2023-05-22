module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    setupFiles: ['jest-canvas-mock', 'source-map-support'],
    coverageDirectory: 'coverage',
    roots: ['<rootDir>/src/'],
    moduleDirectories: ['node_modules'],
    coverageReporters: ['text', 'html', 'cobertura'],
    modulePaths: ['<rootDir>', '<rootDir>/material.module.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '@core/(.*)$': '<rootDir>/src/app/core/$1',
      '@component/(.*)$': '<rootDir>/src/app/components/$1',
      '@shared/(.*)$': '<rootDir>/src/app/shared/$1',
      '@modules/(.*)$': '<rootDir>/src/app/modules/$1',
      '@common/(.*)$': '<rootDir>/src/app/common/$1',
      '@environment/(.*)$': '<rootDir>/src/environments/$1',
      '@assets/(.*)$': '<rootDir>/src/assets/$1',
      '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js'
    },
    transformIgnorePatterns: [
      'node_modules/(?!.*\\.mjs$|uuid|@angular|@ngx-translate|monaco-editor|@azure)'
    ]
  };