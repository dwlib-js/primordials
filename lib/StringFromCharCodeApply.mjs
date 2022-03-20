import FunctionApplyBind from './FunctionApplyBind.mjs';
import String from './String.mjs';
import StringFromCharCode from './StringFromCharCode.mjs';

const StringFromCharCodeApply = FunctionApplyBind(StringFromCharCode, String);

export default StringFromCharCodeApply;
