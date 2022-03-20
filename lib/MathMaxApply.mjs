import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import MathMax from './MathMax.mjs';

const Math = GetIntrinsicOrThrow('Math');

const MathMaxApply = FunctionApplyBind(MathMax, Math);

export default MathMaxApply;
