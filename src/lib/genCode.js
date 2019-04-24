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

function genCode(objType, appEnv, rowData) {
	let columns = Object.keys(rowData)
	let pgm = optCode(objType, appEnv);
	let caslStatements = `

	action table.dropTable/
		caslib='${appEnv.WORKLIBNAME}' name='${appEnv.OUTPUTMASTERTABLENAME}' quiet=TRUE;

	table.save /
		caslib='${appEnv.WORKLIBNAME}'
		name='${appEnv.OPTABLENAME}'
		table='${appEnv.OPTABLENAME}'
		replace=TRUE;

	table.loadTable /
		casOut={
		name="model",
		replace=TRUE}
		caslib='${appEnv.WORKLIBNAME}'
		path="MODEL.sashdat";

	table.loadTable /
		casOut={
		name="model_weights",
		replace=TRUE}
		caslib='${appEnv.WORKLIBNAME}'
		path="MODEL_WEIGHTS.sashdat";

	table.loadTable /
		casOut={
		name="model_weights_attr",
		replace=TRUE}
		caslib='${appEnv.WORKLIBNAME}'
		path="MODEL_WEIGHTS_ATTR.sashdat";

	table.attribute /
	  name="model_weights"
	  table="model_weights_attr";

	loadactionset 'deepLearn';
	deepLearn.dlScore table={name='${appEnv.OPTABLENAME}'} initWeights={name="model_weights"}
	  modelTable={name="model"}
		copyVars={'Horizon', 'StartUpDelay', 'Site1StartUpDelay', 'Site1IDDelay', 'Site1Capacity', 'Site2StartUpDelay', 'Site2IDDelay', 'Site2Capacity', 'Site3StartUpDelay', 'Site3IDDelay', 'Site3Capacity', 'Site4StartUpDelay', 'Site4IDDelay', 'Site4Capacity', 'Site5StartUpDelay', 'Site5IDDelay', 'Site5Capacity', 'Site6StartUpDelay', 'Site6IDDelay', 'Site6Capacity', 'Site7StartUpDelay', 'Site7IDDelay', 'Site7Capacity', 'Site8StartUpDelay', 'Site8IDDelay', 'Site8Capacity', 'Site9StartUpDelay', 'Site9IDDelay', 'Site9Capacity', 'Site10StartUpDelay', 'Site10IDDelay', 'Site10Capacity', 'Site1Interarrival', 'Site2Interarrival', 'Site3Interarrival', 'Site4Interarrival', 'Site5Interarrival', 'Site6Interarrival', 'Site7Interarrival', 'Site8Interarrival', 'Site9Interarrival', 'Site10Interarrival', 'Site1ScreenFailP', 'Site2ScreenFailP', 'Site3ScreenFailP', 'Site4ScreenFailP', 'Site5ScreenFailP', 'Site6ScreenFailP', 'Site7ScreenFailP', 'Site8ScreenFailP', 'Site9ScreenFailP', 'Site10ScreenFailP'}
		casout={name='${appEnv.OUTPUTMASTERTABLENAME}', caslib='${appEnv.INPUTLIBNAME}', replace=TRUE};



	action table.save /
		caslib  = '${appEnv.INPUTLIBNAME}'
		name    = '${appEnv.OUTPUTMASTERTABLENAME}'
		replace = TRUE
		table= {
			caslib = '${appEnv.INPUTLIBNAME}'
			name   = '${appEnv.OUTPUTMASTERTABLENAME}'
		};



	action table.fetch r=result / to= 1000
				fetchVars={'_DL_Pred_','Horizon'}
				table= {
					caslib = '${appEnv.INPUTLIBNAME}'
					name = '${appEnv.OUTPUTMASTERTABLENAME}'
				};
				run;



	r = {A= result};
	send_response( r) ;
	run;

	`
	return caslStatements;
}

function genCode1(objType, appEnv, rowData,r1) {
	let columns = Object.keys(rowData)
	let pgm = optCode(objType, appEnv);
	console.log('in here')
	let caslStatements = `



	action table.loadTable /
		casOut={
		name=QUANTILES_PREDICTION,
		replace=TRUE}
		caslib='${appEnv.INPUTLIBNAME}'
		path="QUANTILES_PREDICTION.sashdat";

		action table.save /
									caslib='${appEnv.INPUTLIBNAME}'
									name='btw'
									table ={
										caslib = '${appEnv.INPUTLIBNAME}'
										name   = QUANTILES_PREDICTION
									}
									replace=TRUE;

	action table.update /
			    table= {
						caslib = '${appEnv.INPUTLIBNAME}'
						name   = QUANTILES_PREDICTION
					}
			    set={
			      {var="Prediction", value='${r1}'}
			    };




	run;

	`
	return caslStatements;
}

export default genCode;
