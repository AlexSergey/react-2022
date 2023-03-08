module.exports = {
  gridUrl: 'http://localhost:4444/wd/hub',

  plugins: {
    'hermione-storybook/plugin': {
      enabled: true,
      storybookUrl: 'http://localhost:6006'
    },
    'stat-reporter': {
      enabled: true
    },
    'html-reporter/hermione': {
      enabled: true,
      path: './hermione/reports',
      defaultView: 'all',
      baseHost: 'http://localhost:6006'
    }
  },
  compositeImage: true,
  system: {
    fileExtensions: [
      '.ts',
    ],
  },

  sets: {
    all: {
      files: 'src/**/*.hermione.ts',
    },
  },
  screenshotsDir: (test) => {
    return `hermione/screenshots/${test.browserId}/${test.parent.title}`;
  },
  browsers: {
    chromeXL: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      windowSize: {
        width: 1300,
        height: 900
      }
    },
    chromeMobile: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      windowSize: {
        width: 414,
        height: 800
      },
    },
  },
};
