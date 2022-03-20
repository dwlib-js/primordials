import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Promise from './Promise.mjs';

const $PromiseRace = GetIntrinsicOrThrow('Promise.race');

const PromiseRace = FunctionBind($PromiseRace, Promise);

export default PromiseRace;
