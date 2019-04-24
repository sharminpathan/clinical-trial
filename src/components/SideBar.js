import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Header from '../helpers/Header.js';
import ProblemDescription from "./ProblemDescription"
import ViewResultsTable from "./ViewResultsTable";
import ViewParamsTable from "./ViewParamsTable";
import ViewCurrentSolution from "./ViewCurrentSolution";
import InputReportViewer from "./InputReportViewer";
import OutputReportViewer from "./OutputReportViewer";
import TestStuff from "./TestStuff";
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
      //Add path names and text to display on sidebar
      let menu = [
        {path: '/'          ,  text: 'Home',             icon: null},
        {path: '/inputVA'   ,  text: 'Simulation Design and Analysis',            icon: null},
        // {path: '/currentSoln',  text: 'Detailed Current Solution', icon: null},
        {path: '/parameters',  text: 'Input Parameters', icon: null},
        // {path: '/optimalSoln', text: 'Detailed Optimal Solution', icon: null},
        {path: '/outputVA',    text: 'ML Prediction Report', icon: null },
        // {path: '/testStuff',   text:'Testing Zone',    icon: null}
    ];
      debugger;
      //Change header text in line 53
      //Define components for each path
      return (
        <Router>
          <div id="App">
              <Header menu={menu} title='Accelerating Machine Learning through Simulation'></Header>
             <Switch>
                <Route exact path="/" component={ProblemDescription} />
                <Route path="/inputVA" component={InputReportViewer} />
                // <Route path="/currentSoln" component={ViewCurrentSolution} />
                <Route path="/parameters" component={ViewParamsTable} />
                // <Route path="/optimalSoln" component={ViewResultsTable} />
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
