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
 async function loadInput( store, session, rowData, caslib, name) {
    let csv = makecsv(rowData);
    debugger;
     // upload data as csv
     let JSON_Parameters = {
      casout: {
          caslib: `${caslib}`, /* a valid caslib */
          name: `${name}`, /* name of output file on cas server */
          replace: true
      },

      importOptions: {
          fileType: 'csv' /* type of the file being uploaded */
      }
    };
    let payload = {
      headers: { 'JSON-Parameters': JSON_Parameters },
      data: csv,
      action: 'table.upload'
    };
   let result = await store.runAction(session, payload, 'upload');
   return result;
 }


 function makecsv( rowData,data ) {
   console.log('keys',Object.keys(rowData))

    let columns = Object.keys(rowData);
    let colNames = columns[0];
    for ( let i = 1 ; i < columns.length ; i++ ) {
        colNames = colNames + ',' + columns[i]
    };
    console.log('colnames',colNames);

    let dataRows = null;

    debugger;

    let row = null;
    for ( let k in rowData) {
        row = (row === null) ?  rowData[k] : (row +',' +rowData[k]);
        console.log(JSON.stringify(rowData[k]))
    }
    dataRows = (dataRows === null ) ? row :  dataRows + '\n' + row;
    console.log('datarows',dataRows);


    let csv = colNames + '\n' + dataRows;
    console.log(csv);
    return csv;
  }
export default loadInput;
