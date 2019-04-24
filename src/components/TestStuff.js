import React from 'react';
import {withRouter} from 'react-router-dom';
import {AppContext} from '../providers';
import "../css/styles.css";

class _TestStuff extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
  }
  render() {
    debugger;
    let appEnv = this.context.viya.appEnv;
    console.log(appEnv);
    return (
      <div id="page-wrap">
        <pre> {JSON.stringify(appEnv, null,4)}</pre>
      </div>
    )
  }c
}

let TestStuff = withRouter(_TestStuff);
export default TestStuff;

