import React from 'react';
import PropTypes from 'prop-types';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import returnHotKeys from './hot-keys';

import style from './index.module.css';

export const getHotKeys = returnHotKeys;

class KeyboardShortcuts extends React.Component {
  render() {
    const hotKeys = returnHotKeys(this);

    const hotKeysCheatsheet = Object.keys(hotKeys).map(key => {
      const shortcut = hotKeys[key];
      const keyComamands = shortcut.displayKeyCombination.split(/\+(.+)/).filter(Boolean);

      return (
        <div key={ key } className={ style.shortcutWrapper }>
          <div className={ style.shortcutLabel }>{shortcut.label}</div>
          <div className= { style.shortcutButtons }>
            {keyComamands.map((item, i, arr) => {
              const divider = i < arr.length - 1 && <span>{ }+{ }</span>;

              return (
                // eslint-disable-next-line react/no-array-index-key
                <span key={ i }>
                  <button className="btn btn-secondary">{item}</button>
                  {divider}
                </span>
              );
            })}
          </div>
        </div>
      );
    });

    return (
      <div className={ style.shortcuts }>
        <div>
          <h2 className={ style.header }>Shortcuts</h2>
        </div>
        <div
          className={ style.closeButton }
          onClick={ this.props.handleShortcutsToggle }>
          <FontAwesomeIcon icon={ faWindowClose } />
        </div>
        {hotKeysCheatsheet}
      </div>
    );
  }
}

KeyboardShortcuts.propTypes = {
  handleShortcutsToggle: PropTypes.func
};

export default KeyboardShortcuts;
