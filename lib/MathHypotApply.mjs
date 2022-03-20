import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import MathHypot from './MathHypot.mjs';

const Math = GetIntrinsicOrThrow('Math');

const MathHypotApply = FunctionApplyBind(MathHypot, Math);

export default MathHypotApply;
