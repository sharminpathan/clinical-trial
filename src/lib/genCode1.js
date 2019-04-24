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
import optCode from './optCode';


function genCode1(objType, appEnv, rowData,r1,h) {
	let columns = Object.keys(rowData)
	let pgm = optCode(objType, appEnv);
	console.log('in here')
	let caslStatements = `



	action table.loadTable /
		casOut={
		name="QUANTILES_PREDICTION",
		replace=TRUE}
		caslib='${appEnv.INPUTLIBNAME}'
		path="QUANTILES_PREDICTION.sashdat";


	action table.update /
			    table= {
						caslib = '${appEnv.INPUTLIBNAME}'
						name   = 'QUANTILES_PREDICTION'
						where  = "Days=-1"
					}
			    set={
			      {var="Prediction", value='${r1}'}
						{var="Months", value='${h}/30'}

			    };

					action table.save /
												caslib='${appEnv.INPUTLIBNAME}'
												name='QUANTILES_PREDICTION'
												table ={
													caslib = '${appEnv.INPUTLIBNAME}'
													name   = 'QUANTILES_PREDICTION'
												}
												replace=TRUE;



	run;

	`
	return caslStatements;
}

export default genCode1;
