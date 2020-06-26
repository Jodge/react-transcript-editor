function returnHotKeys(self) {
  return {
    'tab': {
      priority: 1,
      handler: () => {
        self.togglePlayMedia();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'tab',
          name: 'togglePlayMedia',
          value: 'na'
        });
      },
      displayKeyCombination: 'TAB',
      label: 'Play / Pause'
    },
    'alt+tab': {
      priority: 1,
      handler: () => {
        self.skipForward();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+tab',
          name: 'skipForward',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + TAB',
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
    'shift+tab': {
      priority: 1,
      handler: () => {
        self.rollBack();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'shift+tab',
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
