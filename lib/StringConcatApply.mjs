import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const StringPrototypeConcat = GetIntrinsicOrThrow('String.prototype.concat');

const StringConcatApply = FunctionApplyBind(StringPrototypeConcat);

export default StringConcatApply;
