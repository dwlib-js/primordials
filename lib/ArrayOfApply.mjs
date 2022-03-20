import Array from './Array.mjs';
import ArrayOf from './ArrayOf.mjs';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const ArrayOfApply = FunctionApplyBind(ArrayOf, Array);

export default ArrayOfApply;
