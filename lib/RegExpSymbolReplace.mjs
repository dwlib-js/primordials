import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const RegExpSymbolReplace = GetUncurriedThisIntrinsic('RegExp.prototype[@@replace]');

export default RegExpSymbolReplace;
