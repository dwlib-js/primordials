import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseAll = GetIntrinsicOrThrow('Promise.all');

const PromiseAll = FunctionBind($PromiseAll, Promise);

export default PromiseAll;
