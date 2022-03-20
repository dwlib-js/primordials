import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const RegExpSymbolSplit = GetUncurriedThisIntrinsic('RegExp.prototype[@@split]');

export default RegExpSymbolSplit;
