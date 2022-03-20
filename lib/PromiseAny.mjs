import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseAny = GetIntrinsicOrThrow('Promise.any');

const PromiseAny = FunctionBind($PromiseAny, Promise);

export default PromiseAny;
