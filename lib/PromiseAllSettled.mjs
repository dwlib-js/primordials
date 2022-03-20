import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseAllSettled = GetIntrinsicOrThrow('Promise.allSettled');

const PromiseAllSettled = FunctionBind($PromiseAllSettled, Promise);

export default PromiseAllSettled;
