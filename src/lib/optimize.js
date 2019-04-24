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
 import genCode from './genCode';
 import genCode1 from './genCode1';
  import tableInfo from './tableToJson';

 async function optimize(store, session, objType, appEnv, rowData){
   debugger;
   let caslStatements = genCode(objType, appEnv, rowData);
   console.log(caslStatements);
   let payload = {
       action: 'sccasl.runCasl',
       data: {code: caslStatements}
   }
   let r = await store.runAction(session, payload);
   let g=tableInfo(r.items('results', 'A', 'Fetch'))[0]['_DL_Pred_'];
   let h=tableInfo(r.items('results', 'A', 'Fetch'))[0]['Horizon'];

   console.log('where',g,'there',h);
   let caslStatements1 = genCode1(objType, appEnv, rowData,g,h);
   console.log(caslStatements1);
   let payload1 = {
       action: 'sccasl.runCasl',
       data: {code: caslStatements1}
   }
   await store.runAction(session, payload1);
   console.log('done');


   debugger;
   return r;
 }

 export default optimize;
