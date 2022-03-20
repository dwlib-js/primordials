import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import MathMin from './MathMin.mjs';

const Math = GetIntrinsicOrThrow('Math');

const MathMinApply = FunctionApplyBind(MathMin, Math);

export default MathMinApply;
