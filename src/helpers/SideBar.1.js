import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import "../css/styles.css";
import ProblemDescription from "./ProblemDescription"
import ViewResultsTable from "./ViewResultsTable";
import ViewParamsTable from "./ViewParamsTable";
import ViewCurrentSolution from "./ViewCurrentSolution";
import InputReportViewer from "./InputReportViewer";
import OutputReportViewer from "./OutputReportViewer";
import TestStuff from "./TestStuff";
// import {withAppContext} from '../providers';
import {AppContext} from '../providers';


class SideBar extends React.Component {
    static contextType = AppContext;
    constructor(props){
        super(props);
        debugger;
        this.state       = { isOpen: true };
    }
    componentDidMount() {}
    componentWillUnmount() {}
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen })
    }
    closeMenu() {
    // Using the parent component's state to keep track of the menu
    this.setState({menuOpen: false});
  }
    toggleMenu () {
     this.setState({menuOpen: !this.state.menuOpen})
    }
    render() {
      debugger;
      let store = this.context;
      console.log(store);

      debugger;
      return (
        <Router>
          <div id="App" className="sm-navy w-100 h-100">
          <header class="main-header">
            SAS Optimization Demo
          </header>
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <Link className="menu-item" to="/" onClick={() => this.closeMenu()}>Home</Link>
              <Link className="menu-item" to="/inputVA" onClick={() => this.closeMenu()}>Simulation Design and Analysis</Link>
              <Link className="menu-item" to="/currentSoln" onClick={() => this.closeMenu()}>Analyze Current Solution</Link>
              <Link className="menu-item" to="/parameters" onClick={() => this.closeMenu()}>Input Parameters</Link>
              <Link className="menu-item" to="/optimalSoln" onClick={() => this.closeMenu()}>View Optimal Solution</Link>
              <Link className="menu-item" to="/outputVA" onClick={() => this.closeMenu()}>MLPrediction_Report</Link>
            </Menu>
             <Switch>
                <Route exact path="/" component={ProblemDescription} />
                <Route exact path="/inputVA" component={InputReportViewer} />
                <Route path="/currentSoln" component={ViewCurrentSolution} />
                <Route path="/parameters" component={ViewParamsTable} />
                <Route path="/optimalSoln" component={ViewResultsTable} />
                <Route path="/outputVA" component={OutputReportViewer} />
                <Redirect to="/" />
             </Switch>
            </div>
        </Router>
      );
    }

}
export default SideBar;
// export default withAppContext(SideBar);
