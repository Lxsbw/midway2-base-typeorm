/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-24 19:18:57
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-25 00:47:00
 */

import FlakeId = require('flake-idgen');
import intformat = require('biguint-format');
const flakeIdgen = new FlakeId({ epoch: 1300000000000 });
import * as _ from 'lodash';

export const GetId = () => _.toString(intformat(flakeIdgen.next(), 'dec'));
