const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  displayName:"app test",
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(js|tsx?)$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  roots:["<rootDir>/src/app","<rootDir>/pages"],
  snapshotSerializers:["enzyme-to-json/serializer"],
  moduleNameMapper:{
    "\\.(css|less|scss)": "<rootDir>/node_modules/jest-css-modules",
  },
};
