import FunctionApplyBind from './FunctionApplyBind.mjs';
import String from './String.mjs';
import StringFromCodePoint from './StringFromCodePoint.mjs';

const StringFromCodePointApply = FunctionApplyBind(StringFromCodePoint, String);

export default StringFromCodePointApply;
