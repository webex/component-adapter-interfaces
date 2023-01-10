module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    verbose: true,
    reporters: [
      'default',
      ['jest-junit', {outputDirectory: 'test_results/jest', outputName: 'results.xml'} ],
    ]
  };