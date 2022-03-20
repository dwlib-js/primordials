import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const DateSymbolToPrimitive = GetUncurriedThisIntrinsic('Date.prototype[@@toPrimitive]');

export default DateSymbolToPrimitive;
