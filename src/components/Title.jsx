import React from 'react';
import { PropTypes } from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

/* isRequired source:
https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/ */
