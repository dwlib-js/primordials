import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';

const FunctionPrototypeApply = GetIntrinsicOrThrow('Function.prototype.apply');
const FunctionPrototypeBind = GetIntrinsicOrThrow('Function.prototype.bind');

const FunctionApplyBind = FunctionBind(FunctionPrototypeBind, FunctionPrototypeApply);

export default FunctionApplyBind;
