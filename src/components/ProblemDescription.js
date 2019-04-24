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
import React from "react";
import startUp from "../lib/startUp";
import {AppContext} from '../providers';


class ProblemDescription extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    debugger;
  }

// Change image source in line 45 after saving the .jpg file in the images directory - If not desired, delete line 45
  render(){
    return (
      <div id = "page-wrap" >
      <h1 align="center"> A Case Study </h1>
      <p align="justify"> <b> Problem Statement: </b>SAS® Clinical Trial Enrollment Simulator is a strategic decision-support tool to design better patient enrollment plans and accurately estimate cost. <br/>
      </p>
      <img src={require('../images/Image1.PNG')} width="700" height="450"/>
      <p> &nbsp; </p>
      <p align="justify">
      SAS® Clinical Trial Enrollment Simulator is built on SAS® Optimization software and it helps overcome three primary challenges of clinical trial enrollment planning:
      <ul>
      <li>The patient enrollment process consists of a long sequence of dynamic events.</li>
      </ul>
      <img src={require('../images/Image2.PNG')} width="700" height="450"/>
      </p>
      <p> &nbsp; </p>
      <p align="justify">
      <ul>
      <li>The hierarchical relationship among country startups, site activations, and patient screening and enrollment complicates the process of design and analysis of patient enrollment.</li>
      <li>Enrollment planning must be driven by country, site, and patient data sets, and the solution must be robust to the data uncertainty and scalable to any number of countries and sites.</li>
      </ul>
      </p>
      <p> &nbsp; </p>
      <p align="justify">
      SAS® Clinical Trial Enrollment Simulator conducts a comprehensive risk and scenario analyses and helps design risk-sensitive enrollment plans but not in real time. When you are on the phone with a client trying to win the business, you might need to quickly explore the implications of a variety of scenarios in real time. Therefore, the solution that is built on the integration of simulation and machine learning might be better suited to your need to make patient enrollment predictions in real time. Furthermore, you are now able to deploy your enrollment simulation in a real-time analytical portal. Therefore, you have an opportunity to turn this solution into a widely used analytics within your organization for enrollment planning.
      </p>
      <p> &nbsp; </p>
      <p align = "justify">
      <b> Objectives: </b>
      <ul>
      <li>To showcase how SAS® Simulation Studio enables creation of flexible, scalable, data-driven discrete-event stochastic simulation models of clinical trial enrollment processes.</li>
      </ul>
      <img src={require('../images/Image3.PNG')} width="700" height="450"/>
      </p>
      <p> &nbsp; </p>
      <p align="justify">
      <ul>
      <li>To demonstrate how an integrated use of SAS Simulation Studio with machine learning makes it possible to almost immediately make patient enrollment predictions.</li>
      </ul>
      </p>
      <p> &nbsp; </p>
      </div>
    );
  }
};
export default ProblemDescription;
