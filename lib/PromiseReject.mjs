import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseReject = GetIntrinsicOrThrow('Promise.reject');

const PromiseReject = FunctionBind($PromiseReject, Promise);

export default PromiseReject;
