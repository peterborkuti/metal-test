'use strict';

import templates from './Test01.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Test01 extends Component {
}
Soy.register(Test01, templates);

export default Test01;
