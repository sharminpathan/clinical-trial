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
import tableInfo from '../lib/tableToJson';

async function fetchCurrentSoln(appEnv, session, store) {
  debugger;
  let caslStatements = `

  action fedsql.execdirect /
    query="create table ${appEnv.INPUTLIBNAME}.curr_soln_costs {options replace=true} as
       select a.site, a.product, a.variableCosts, a.units
       from ${appEnv.INPUTLIBNAME}.${appEnv.CURRENTSOLUTION} as a
       where a.Close = 0
       ";
  run;

		action table.fetch r=result / to= 1000
			table= {caslib = '${appEnv.INPUTLIBNAME}' name = 'curr_soln_costs'};
		run;

		f = findTable(result);
		print f;

    r = {A= result};
    send_response( r) ;

		run;
	`
  console.log( caslStatements);
  let payload = {
      action: 'sccasl.runCasl',
      data: {code: caslStatements}
  }
  debugger;
  let r = await store.runAction(session, payload);
  return(tableInfo(r.items('results', 'A', 'Fetch')))
}



export default fetchCurrentSoln;
