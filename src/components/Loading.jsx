// @flow

import * as React from 'react';
import './Loading.css';
import loading from './loading.gif';

type Props = {
    error?: boolean,
    timedOut?: boolean,
    pastDelay?: boolean,
    isLoading: boolean
};

class Loading extends React.PureComponent<Props> {
  render() {
    return (
      <div id="lockBody">
          <img src={loading} alt=""/>
      </div>
    )
  }
}

export default Loading;
