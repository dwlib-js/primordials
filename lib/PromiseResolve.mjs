import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseResolve = GetIntrinsicOrThrow('Promise.resolve');

const PromiseResolve = FunctionBind($PromiseResolve, Promise);

export default PromiseResolve;
