function returnHotKeys(self) {
  return {
    'alt+k': {
      priority: 1,
      handler: () => {
        self.togglePlayMedia();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+k',
          name: 'togglePlayMedia',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + K',
      label: 'PLAY MEDIA'
    },
    'alt+l': {
      priority: 1,
      handler: () => {
        self.skipForward();

        self.props.handleAnalyticsEvents({
          category: 'defaultHotKeys',
          action: 'alt+l',
          name: 'skipForward',
          value: 'na'
        });
      },
      displayKeyCombination: 'ALT + L',
      label: 'FAST FORWARD'
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
      label: 'REWIND'
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
      label: 'Decrease Playback Speed'
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
      label: 'Increase Playback Speed'
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
      label: 'ROLL BACK'
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
    }
  };
}
export default returnHotKeys;
