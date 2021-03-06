function returnHotKeys(self) {
  return {
    'alt+p': {
      priority: 1,
      handler: () => {
        self.togglePlayMedia();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+p',
          name: 'togglePlayMedia',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + P',
      label: 'Play / Pause'
    },
    'alt+f': {
      priority: 1,
      handler: () => {
        self.skipForward();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+f',
          name: 'skipForward',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + F',
      label: 'Skip Forward'
    },
    'alt+j': {
      priority: 1,
      handler: () => {
        self.skipBackward();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+j',
          name: 'skipBackward',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + J',
      label: 'Rewind'
    },
    'alt+-': {
      priority: 1,
      handler: () => {
        self.decreasePlaybackRate();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+-',
          name: 'decreasePlaybackRate',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + -',
      label: 'Decrease Speed'
    },
    // https://github.com/ccampbell/mousetrap/issues/266
    'alt+=': {
      priority: 1,
      handler: () => {
        self.increasePlaybackRate();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+plus',
          name: 'increasePlaybackRate',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + +',
      label: 'Increase Speed'
    },
    'alt+r': {
      priority: 1,
      handler: () => {
        self.rollBack();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+r',
          name: 'rollBack',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + R',
      label: 'Back 15sec'
    },
    'alt+t': {
      priority: 1,
      handler: () => {
        self.promptSetCurrentTime();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+t',
          name: 'promptSetCurrentTime',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + T',
      label: 'Set current time'
    },
    'ctrl+z': {
      priority: 1,
      handler: () => {
        self.promptSetCurrentTime();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'ctrl+z',
          value: 'na'
        });
      },
      displayKeyCombination: 'CTRL + Z',
      label: 'Undo'
    }
  };
}
export default returnHotKeys;
