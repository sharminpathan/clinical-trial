/*
 *  ------------------------------------------------------------------------------------
 *  * Copyright (c) SAS Institute Inc.
 *  *  Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  * http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  *  Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  limitations under the License.
 * ----------------------------------------------------------------------------------------
 *
 */

'use strict';

let path     = require('path');
/*
let iService = require('./iService');
let config   = require('./config');
*/
import iService from './iService';
import config from './config';


function UIapp (uTable, rootHandler, rafEnv){
    debugger;
    console.log(config);

    let asset = setup(rafEnv);
    iService(uTable, (uTable !== null), asset, rootHandler);
}

function service (uTable, rootHandler, rafEnv){
    let asset = setup(rafEnv);
    iService(uTable, false, asset, rootHandler) ;
}

function setup (rafEnv){
    debugger;
    config(rafEnv);
    let asset = (process.env.APPLOC === '.') ? process.cwd() : process.env.APPLOC ;
    process.env.APPASSET = asset;
    return asset;
}
export { service, UIapp };
