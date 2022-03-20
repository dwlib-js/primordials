import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const RegExpSymbolMatch = GetUncurriedThisIntrinsic('RegExp.prototype[@@match]');

export default RegExpSymbolMatch;
