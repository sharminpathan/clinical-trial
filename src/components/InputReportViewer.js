/*
* ------------------------------------------------------------------------------------
*   Copyright (c) SAS Institute Inc.
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
* ---------------------------------------------------------------------------------------
*
*/


import React from 'react';
import {AppContext} from '../providers';
import loadInputVAreport from '../lib/loadInputVAreport';
import CircularIndeterminate from '../helpers/CircularIndeterminate';

class InputReportViewer extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      href: null,
      err : null,
      isLoading: true
    }
  }
  async componentDidMount() {
    debugger;
    if ( this.state.href === null) {
      let {store, viya} = this.context;
      let {appEnv, services} = viya;
      let reportName = appEnv.INPUTREPORTNAME;
      console.log()
      try {
        let href = await loadInputVAreport(store, reportName, services, appEnv.host);
        this.setState({href: href, error: null, isLoading: false});
      }
      catch(err){
        this.setState( {href: null, err: JSON.stringify(err, null,4)})
      }
    }
  }

    iframeLoaded = () =>{
      this.setState({
        isLoading: false
      });
    }

  render() {
    let show;
    if (this.state.isLoading === true) {
      show =
      <div>
      <h1>Simulation Design and Analysis</h1>
      <div class="page-wrap">
      <p>Fetching VA Report... <CircularIndeterminate/></p>
      </div>
      </div>
    }
    else if (this.state.err === null & this.state.isLoading === false) {
      show =
      <div>
      <h1>Simulation Design and Analysis</h1>
      <div class="embed-responsive embed-responsive-16by9 page-wrap">
      <iframe onLoad={this.iframeLoaded} class="embed-responsive-item" src={this.state.href} allowfullscreen></iframe>
      </div>
      </div>
    }
    else {
      show =  <pre> {this.state.err}</pre>
    }
    return <div id = "page-wrap">{show}</div>
  }

}

export default InputReportViewer;
