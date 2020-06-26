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
      displayKeyCombination: 'tab',
      label: 'Play Media',
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
      displayKeyCombination: 'alt + tab',
      label: 'Skip Forward',
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
      label: 'Rewind',
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
      displayKeyCombination: 'alt + -',
      label: 'Decrease Playback Speed',
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
      displayKeyCombination: 'alt + +',
      label: 'Increase Playback Speed',
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
      displayKeyCombination: 'shift + tab',
      label: 'Back 15sec',
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
      displayKeyCombination: 'alt + t',
      label: 'set current time',
    }
  };
}

export default returnHotKeys;
