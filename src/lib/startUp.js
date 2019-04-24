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
async function startUp(appEnv, session, store){
  let caslStatements = `
  action table.dropTable / name='${appEnv.OPTABLENAME}' caslib='${appEnv.WORKLIBNAME}' quiet=TRUE;

  /*Running Some Data Step Code to read input data into work library */

  datastep.runCode / single = 'yes'
    code = "
      data ${appEnv.WORKLIBNAME}.${appEnv.OPTABLENAME};
      set ${appEnv.INPUTLIBNAME}.${appEnv.OPTABLENAME};
      run;
    ";
  run;
  action table.save /
		caslib  = '${appEnv.WORKLIBNAME}'
		name    = '${appEnv.OPTABLENAME}'
		replace = TRUE
		table= {
			caslib = '${appEnv.WORKLIBNAME}'
			name   = '${appEnv.OPTABLENAME}'
		};

	action table.loadTable/
		caslib= '${appEnv.WORKLIBNAME}' path= '${appEnv.OPTABLENAME}.sashdat'
		casout= {caslib='${appEnv.WORKLIBNAME}' name='${appEnv.OPTABLENAME}' replace=TRUE};

  `
  console.log( caslStatements);
  let payload = {
    //action: 'sccasl.runCasl',
    //data: {code: caslStatements}
  }
  //debugger;
  //let r = await store.runAction(session, payload);
  //return r
}

export default startUp;
