import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const StringSymbolIterator = GetUncurriedThisIntrinsic('String.prototype[@@iterator]');

export default StringSymbolIterator;
