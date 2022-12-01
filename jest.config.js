const nextJest = require('next/jest')

const createJestConfig = nextJest({
   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
   dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   moduleNameMapper: {
      '^@constants/(.*)$': '<rootDir>/src/constants/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@lib/(.*)$': '<rootDir>/src/lib/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
   },
   testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
