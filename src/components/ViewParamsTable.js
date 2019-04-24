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
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn}  from 'react-bootstrap-table';
import loadParamsData from '../lib/loadParamsData';
import {AppContext} from '../providers';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParamsButtonGroup from '../helpers/ParamsButtonGroup';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import loadInput from '../lib/loadInput';
import optimize from '../lib/optimize';

var rowData=
{Horizon:405,
NumEnrolled:10,
StartUpDelay:15,
Site1StartUpDelay:105,
Site1IDDelay:6.7,
Site1Capacity:200,
Site1Interarrival:2,
Site1ScreenFailP:0.2,
Site2StartUpDelay:45,
Site2IDDelay:6.7,
Site2Capacity:200,
Site2Interarrival:3.33,
Site2ScreenFailP:0.2,
Site3StartUpDelay:105,
Site3IDDelay:6.7,
Site3Capacity:200,
Site3Interarrival:2.5,
Site3ScreenFailP:0.2,
Site4StartUpDelay:135,
Site4IDDelay:6.7,
Site4Capacity:200,
Site4Interarrival:2,
Site4ScreenFailP:0.2,
Site5StartUpDelay:173.33,
Site5IDDelay:6.7,
Site5Capacity:200,
Site5Interarrival:1.43,
Site5ScreenFailP:0.2,
Site6StartUpDelay:120,
Site6IDDelay:6.7,
Site6Capacity:200,
Site6Interarrival:3.33,
Site6ScreenFailP:0.2,
Site7StartUpDelay:120,
Site7IDDelay:6.7,
Site7Capacity:200,
Site7Interarrival:1.43,
Site7ScreenFailP:0.2,
Site8StartUpDelay:90,
Site8IDDelay:6.7,
Site8Capacity:200,
Site8Interarrival:2,
Site8ScreenFailP:0.2,
Site9StartUpDelay:180,
Site9IDDelay:6.7,
Site9Capacity:200,
Site9Interarrival:1.25,
Site9ScreenFailP:0.2,
Site10StartUpDelay:90,
Site10IDDelay:6.7,
Site10Capacity:200,
Site10Interarrival:1.43,
Site10ScreenFailP:0.2}

var sitenumber=1

var data1 = [
  {id: 1, Parameter: 'Horizon', Value: rowData['Horizon']},
  {id: 2, Parameter: 'Country start up delay', Value: rowData['StartUpDelay']},
  {id: 3, Parameter: 'Site number', Value: sitenumber},
  {id: 4, Parameter: 'Site start up delay', Value: rowData['Site'+String(sitenumber)+'StartUpDelay']},
  {id: 5, Parameter: 'Site ID delay', Value: rowData['Site'+String(sitenumber)+'IDDelay']},
  {id: 6, Parameter: 'Site capacity', Value: rowData['Site'+String(sitenumber)+'Capacity']},
  {id: 7, Parameter: 'Site inter arrival', Value: rowData['Site'+String(sitenumber)+'Interarrival']},
  {id: 8, Parameter: 'Site screen fail P', Value: rowData['Site'+String(sitenumber)+'ScreenFailP']}
];




/*const checkInfeasible = (data, keyname, value, row) => {
  debugger;
  console.log(data, keyname, value)
  let flg = false;
  for (var i = 0; i<data.length; i++){
    if (data[i][keyname] === value & row['_Index_'] !== i+1){
      console.log(keyname, value)
      flg = true;
    }
  }
  console.log(flg)
  return flg
}*/
const styles = theme => ({
  root: {
    display: 'flex',
  },
});

//Defining react component to be rendered
class _ViewParamsTable extends React.Component {
  //Leave this line as is - brings in app specific Variables
  static contextType = AppContext;
  //Define properties of the react component
  constructor(props) {
    super(props);
    this.state = {
      data      : props.data,
      viable_sites: props.viable_sites,
      objType   : "1",
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })


  }

  renderRedirect = () => {
    if (this.state.redirect) {
      //var jsonTable = new JSONTable($("#example-table")) // Convert the table into a javascript object
      console.log(this.state.objType)
      console.log('above is object type')

      this.setState({
        data: rowData
      });

      this.runQuery();
      return <Redirect to='/outputVA' />
    }
  }

  runQuery = () => {
    let {store, viya} = this.context;
    loadInput( store, viya.session, rowData, viya.appEnv.WORKLIBNAME, viya.appEnv.OPTABLENAME)
    .then(r =>{
      console.log(JSON.stringify(r.items(),null,4))
      optimize(this.context.store, this.context.viya.session, this.state.objType, this.context.viya.appEnv, rowData)
      .then(result =>{
        this.props.history.push('/outputVA')
      })
    })
    console.log('rowdata',rowData)
  }

  componentWillReceiveProps(nextProps) {
    this.data=data1
    //this.props.dispatch(data1);
    this.setState({
      data: data1, //nextProps.data,
      viable_sites : nextProps.viable_sites,
      objType : nextProps.objType
    });
  }

  // Add the async function (e.g. loadParamsData) to fetch data to be displayed in table
  // viableSitesArr is also defined from results
  componentDidMount () {
    debugger;

  }

  componentDidUpdate () {
    console.log(this.state.objType)
    console.log(this.state.data)

  }

  //Function to format cell value to number with 2 decimal places
  numFormatter = (cell, row) => {
    return  Number(cell);
  }

//Customize this function to catch errors when table cells are changed before saving it
  onBeforeSaveCell = (row, cellName, cellValue) => {
    debugger;
    if (isNaN(cellValue) & cellName === 'demand'){
      alert('Invalid datatype. Please enter a number.')
      console.log(row)
      return false;
    }

  }

//Customize this function to update the table data after cell edit
  onAfterSaveCell = (row, cellName, cellValue) => {
    debugger;
    let data = this.state.data;
    console.log('New cell', row)

    switch(row['Parameter']){
      case 'Horizon':
        rowData['Horizon']=Number(cellValue)
        break;
      case 'Country start up delay':
        rowData['StartUpDelay']=Number(cellValue)
        break;
      case 'Site number':
        sitenumber=Number(cellValue)
        data1 = [
          {id: 1, Parameter: 'Horizon', Value: rowData['Horizon']},
          {id: 2, Parameter: 'Country start up delay', Value: rowData['StartUpDelay']},
          {id: 3, Parameter: 'Site number', Value: sitenumber},
          {id: 4, Parameter: 'Site start up delay', Value: rowData['Site'+String(sitenumber)+'StartUpDelay']},
          {id: 5, Parameter: 'Site ID delay', Value: rowData['Site'+String(sitenumber)+'IDDelay']},
          {id: 6, Parameter: 'Site capacity', Value: rowData['Site'+String(sitenumber)+'Capacity']},
          {id: 7, Parameter: 'Site inter arrival', Value: rowData['Site'+String(sitenumber)+'Interarrival']},
          {id: 8, Parameter: 'Site screen fail P', Value: rowData['Site'+String(sitenumber)+'ScreenFailP']}
        ];

        this.setState({
          data: data1
        })

        //IWBSExecuteAsyncJScript('$("#table1").bootstrapTable("refresh","");');
        break;
      case 'Site start up delay':
        rowData['Site'+String(sitenumber)+'StartUpDelay']=Number(cellValue)
        break;
      case 'Site ID delay':
        rowData['Site'+String(sitenumber)+'IDDelay']=Number(cellValue)
        break;
      case 'Site capacity':
        rowData['Site'+String(sitenumber)+'Capacity']=Number(cellValue)
        break;
      case 'Site inter arrival':
        rowData['Site'+String(sitenumber)+'Interarrival']=Number(cellValue)
        break;
      case 'Site screen fail P':
        rowData['Site'+String(sitenumber)+'ScreenFailP']=Number(cellValue)
        break;
    }


  }

//Handles what happens when row is deleted -- NOT USED
  onAfterDeleteRow = (rowKeys) =>{
    debugger;
    let data = this.state.data;
    debugger;
    const filtered = data.filter(r => r['Product_Name'] !== rowKeys[0]);
    console.log(filtered)
    this.setState({
      data: filtered
    });
  }

//Sorts the values of fixed facilities to be displayed as options for drop down menu
  //fixedFacility = (row) =>{
    //return this.state.viable_sites[row.Product_Name].sort()
  //}

  render() {
    const { classes} = this.props;
    debugger;
    const mycellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCell,
      afterSaveCell: this.onAfterSaveCell
    };
    return (
      <div id ="page-wrap">
      <h1>Input Parameters</h1>
      &nbsp;

      <div>
      <Typography variant="h6" color = "black" >Enter Horizon and site specific parameters: </Typography>
      <BootstrapTable data={data1}
      id='#table1'
      cellEdit={mycellEditProp}
      striped
      hover
      condensed
      >
      <TableHeaderColumn width='35%' dataField='Parameter' isKey dataAlign="center" dataSort={ true } >Parameter</TableHeaderColumn>
      <TableHeaderColumn id='cell' width='30%'dataField='Value' dataAlign="center" dataSort={ true } dataFormat={this.numFormatter}>Value</TableHeaderColumn>
      </BootstrapTable>
      </div>
      &nbsp;
      <div>
      &nbsp; &nbsp; &nbsp;

      {this.renderRedirect()}
      <Button
      variant="contained"
      color="primary"
      classes={{
        root: classes.button,
        label: classes.label,
      }}
      type="submit"
      onClick={this.setRedirect}
      >
      Make Predictions
      </Button>
      </div>

      </div>
    )
  };
}

_ViewParamsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

let ViewParamsTable = withRouter(_ViewParamsTable);
export default withStyles(styles)(ViewParamsTable);
