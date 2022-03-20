import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const FunctionSymbolHasInstance = GetUncurriedThisIntrinsic('Function.prototype[@@hasInstance]');

export default FunctionSymbolHasInstance;
