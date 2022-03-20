'use strict';

const HasIntrinsic = require('#intrinsics/HasIntrinsic');

const hasBigInt64Array = HasIntrinsic('BigInt64Array');
const hasBigUint64Array = HasIntrinsic('BigUint64Array');

const AggregateError = HasIntrinsic('AggregateError') ? require('./AggregateError') : undefined;
const Array = require('./Array');
const ArrayFrom = require('./ArrayFrom');
const ArrayIsArray = require('./ArrayIsArray');
const ArrayOf = require('./ArrayOf');
const ArrayOfApply = require('./ArrayOfApply');
const ArrayAt = HasIntrinsic('Array.prototype.at') ? require('./ArrayAt') : undefined;
const ArrayConcat = require('./ArrayConcat');
const ArrayCopyWithin = require('./ArrayCopyWithin');
const ArrayEntries = require('./ArrayEntries');
const ArrayEvery = require('./ArrayEvery');
const ArrayFill = require('./ArrayFill');
const ArrayFilter = require('./ArrayFilter');
const ArrayFind = require('./ArrayFind');
const ArrayFindIndex = require('./ArrayFindIndex');
const ArrayFlat = HasIntrinsic('Array.prototype.flat') ? require('./ArrayFlat') : undefined;
const ArrayFlatMap = HasIntrinsic('Array.prototype.flatMap') ? require('./ArrayFlatMap') : undefined;
const ArrayForEach = require('./ArrayForEach');
const ArrayIncludes = HasIntrinsic('Array.prototype.includes') ? require('./ArrayIncludes') : undefined;
const ArrayIndexOf = require('./ArrayIndexOf');
const ArrayJoin = require('./ArrayJoin');
const ArrayKeys = require('./ArrayKeys');
const ArrayLastIndexOf = require('./ArrayLastIndexOf');
const ArrayMap = require('./ArrayMap');
const ArrayPop = require('./ArrayPop');
const ArrayPush = require('./ArrayPush');
const ArrayPushApply = require('./ArrayPushApply');
const ArrayReduce = require('./ArrayReduce');
const ArrayReduceRight = require('./ArrayReduceRight');
const ArrayReverse = require('./ArrayReverse');
const ArrayShift = require('./ArrayShift');
const ArraySlice = require('./ArraySlice');
const ArraySome = require('./ArraySome');
const ArraySort = require('./ArraySort');
const ArraySplice = require('./ArraySplice');
const ArrayToLocaleString = require('./ArrayToLocaleString');
const ArrayToString = require('./ArrayToString');
const ArrayUnshift = require('./ArrayUnshift');
const ArrayUnshiftApply = require('./ArrayUnshiftApply');
const ArrayValues = require('./ArrayValues');
const ArraySymbolIterator = require('./ArraySymbolIterator');
const ArrayBuffer = require('./ArrayBuffer');
const ArrayBufferIsView = require('./ArrayBufferIsView');
const ArrayBufferByteLength = require('./ArrayBufferByteLength');
const ArrayBufferSlice = require('./ArrayBufferSlice');
const ArrayIteratorNext = require('./ArrayIteratorNext');
const AsyncFunction = HasIntrinsic('AsyncFunction') ? require('./AsyncFunction') : undefined;
const AsyncGeneratorFunction = HasIntrinsic('AsyncGeneratorFunction') ? require('./AsyncGeneratorFunction') : undefined;
const AsyncGeneratorNext = HasIntrinsic('AsyncGeneratorPrototype.next') ? require('./AsyncGeneratorNext') : undefined;
const AsyncGeneratorReturn = HasIntrinsic('AsyncGeneratorPrototype.return') ? require('./AsyncGeneratorReturn') : undefined;
const AsyncGeneratorThrow = HasIntrinsic('AsyncGeneratorPrototype.throw') ? require('./AsyncGeneratorThrow') : undefined;
const AsyncIteratorSymbolAsyncIterator = HasIntrinsic('AsyncIteratorPrototype[@@asyncIterator]') ? require('./AsyncIteratorSymbolAsyncIterator') : undefined;
const AtomicsAdd = HasIntrinsic('Atomics.add') ? require('./AtomicsAdd') : undefined;
const AtomicsAnd = HasIntrinsic('Atomics.and') ? require('./AtomicsAnd') : undefined;
const AtomicsCompareExchange = HasIntrinsic('Atomics.compareExchange') ? require('./AtomicsCompareExchange') : undefined;
const AtomicsExchange = HasIntrinsic('Atomics.exchange') ? require('./AtomicsExchange') : undefined;
const AtomicsIsLockFree = HasIntrinsic('Atomics.isLockFree') ? require('./AtomicsIsLockFree') : undefined;
const AtomicsLoad = HasIntrinsic('Atomics.load') ? require('./AtomicsLoad') : undefined;
const AtomicsNotify = HasIntrinsic('Atomics.notify') ? require('./AtomicsNotify') : undefined;
const AtomicsOr = HasIntrinsic('Atomics.or') ? require('./AtomicsOr') : undefined;
const AtomicsStore = HasIntrinsic('Atomics.store') ? require('./AtomicsStore') : undefined;
const AtomicsSub = HasIntrinsic('Atomics.sub') ? require('./AtomicsSub') : undefined;
const AtomicsWait = HasIntrinsic('Atomics.wait') ? require('./AtomicsWait') : undefined;
const AtomicsXor = HasIntrinsic('Atomics.xor') ? require('./AtomicsXor') : undefined;
const BigInt = HasIntrinsic('BigInt') ? require('./BigInt') : undefined;
const BigIntAsIntN = HasIntrinsic('BigInt.asIntN') ? require('./BigIntAsIntN') : undefined;
const BigIntAsUintN = HasIntrinsic('BigInt.asUintN') ? require('./BigIntAsUintN') : undefined;
const BigIntToLocaleString = HasIntrinsic('BigInt.prototype.toLocaleString') ? require('./BigIntToLocaleString') : undefined;
const BigIntToString = HasIntrinsic('BigInt.prototype.toString') ? require('./BigIntToString') : undefined;
const BigIntValueOf = HasIntrinsic('BigInt.prototype.valueOf') ? require('./BigIntValueOf') : undefined;
const BigInt64Array = hasBigInt64Array ? require('./BigInt64Array') : undefined;
const BigInt64ArrayFrom = hasBigInt64Array ? require('./BigInt64ArrayFrom') : undefined;
const BigInt64ArrayOf = hasBigInt64Array ? require('./BigInt64ArrayOf') : undefined;
const BigInt64ArrayOfApply = hasBigInt64Array ? require('./BigInt64ArrayOfApply') : undefined;
const BigUint64Array = hasBigUint64Array ? require('./BigUint64Array') : undefined;
const BigUint64ArrayFrom = hasBigUint64Array ? require('./BigUint64ArrayFrom') : undefined;
const BigUint64ArrayOf = hasBigUint64Array ? require('./BigUint64ArrayOf') : undefined;
const BigUint64ArrayOfApply = hasBigUint64Array ? require('./BigUint64ArrayOfApply') : undefined;
const Boolean = require('./Boolean');
const BooleanToString = require('./BooleanToString');
const BooleanValueOf = require('./BooleanValueOf');
const DataView = require('./DataView');
const DataViewBuffer = require('./DataViewBuffer');
const DataViewByteLength = require('./DataViewByteLength');
const DataViewByteOffset = require('./DataViewByteOffset');
const DataViewGetBigInt64 = HasIntrinsic('DataView.prototype.getBigInt64') ? require('./DataViewGetBigInt64') : undefined;
const DataViewGetBigUint64 = HasIntrinsic('DataView.prototype.getBigUint64') ? require('./DataViewGetBigUint64') : undefined;
const DataViewGetFloat32 = require('./DataViewGetFloat32');
const DataViewGetFloat64 = require('./DataViewGetFloat64');
const DataViewGetInt8 = require('./DataViewGetInt8');
const DataViewGetInt16 = require('./DataViewGetInt16');
const DataViewGetInt32 = require('./DataViewGetInt32');
const DataViewGetUint8 = require('./DataViewGetUint8');
const DataViewGetUint16 = require('./DataViewGetUint16');
const DataViewGetUint32 = require('./DataViewGetUint32');
const DataViewSetBigInt64 = HasIntrinsic('DataView.prototype.setBigInt64') ? require('./DataViewSetBigInt64') : undefined;
const DataViewSetBigUint64 = HasIntrinsic('DataView.prototype.setBigUint64') ? require('./DataViewSetBigUint64') : undefined;
const DataViewSetFloat32 = require('./DataViewSetFloat32');
const DataViewSetFloat64 = require('./DataViewSetFloat64');
const DataViewSetInt8 = require('./DataViewSetInt8');
const DataViewSetInt16 = require('./DataViewSetInt16');
const DataViewSetInt32 = require('./DataViewSetInt32');
const DataViewSetUint8 = require('./DataViewSetUint8');
const DataViewSetUint16 = require('./DataViewSetUint16');
const DataViewSetUint32 = require('./DataViewSetUint32');
const Date = require('./Date');
const DateNow = require('./DateNow');
const DateParse = require('./DateParse');
const DateUTC = require('./DateUTC');
const DateGetDate = require('./DateGetDate');
const DateGetDay = require('./DateGetDay');
const DateGetFullYear = require('./DateGetFullYear');
const DateGetHours = require('./DateGetHours');
const DateGetMilliseconds = require('./DateGetMilliseconds');
const DateGetMinutes = require('./DateGetMinutes');
const DateGetMonth = require('./DateGetMonth');
const DateGetSeconds = require('./DateGetSeconds');
const DateGetTime = require('./DateGetTime');
const DateGetTimezoneOffset = require('./DateGetTimezoneOffset');
const DateGetUTCDate = require('./DateGetUTCDate');
const DateGetUTCDay = require('./DateGetUTCDay');
const DateGetUTCFullYear = require('./DateGetUTCFullYear');
const DateGetUTCHours = require('./DateGetUTCHours');
const DateGetUTCMilliseconds = require('./DateGetUTCMilliseconds');
const DateGetUTCMinutes = require('./DateGetUTCMinutes');
const DateGetUTCMonth = require('./DateGetUTCMonth');
const DateGetUTCSeconds = require('./DateGetUTCSeconds');
const DateSetDate = require('./DateSetDate');
const DateSetFullYear = require('./DateSetFullYear');
const DateSetHours = require('./DateSetHours');
const DateSetMilliseconds = require('./DateSetMilliseconds');
const DateSetMinutes = require('./DateSetMinutes');
const DateSetMonth = require('./DateSetMonth');
const DateSetSeconds = require('./DateSetSeconds');
const DateSetTime = require('./DateSetTime');
const DateSetUTCDate = require('./DateSetUTCDate');
const DateSetUTCFullYear = require('./DateSetUTCFullYear');
const DateSetUTCHours = require('./DateSetUTCHours');
const DateSetUTCMilliseconds = require('./DateSetUTCMilliseconds');
const DateSetUTCMinutes = require('./DateSetUTCMinutes');
const DateSetUTCMonth = require('./DateSetUTCMonth');
const DateSetUTCSeconds = require('./DateSetUTCSeconds');
const DateToDateString = require('./DateToDateString');
const DateToISOString = require('./DateToISOString');
const DateToJSON = require('./DateToJSON');
const DateToLocaleDateString = require('./DateToLocaleDateString');
const DateToLocaleString = require('./DateToLocaleString');
const DateToLocaleTimeString = require('./DateToLocaleTimeString');
const DateToString = require('./DateToString');
const DateToTimeString = require('./DateToTimeString');
const DateToUTCString = require('./DateToUTCString');
const DateValueOf = require('./DateValueOf');
const DateSymbolToPrimitive = require('./DateSymbolToPrimitive');
const Error = require('./Error');
const ErrorToString = require('./ErrorToString');
const EvalError = require('./EvalError');
const FinalizationRegistry = HasIntrinsic('FinalizationRegistry') ? require('./FinalizationRegistry') : undefined;
const FinalizationRegistryRegister = HasIntrinsic('FinalizationRegistry.prototype.register') ? require('./FinalizationRegistryRegister') : undefined;
const FinalizationRegistryUnregister = HasIntrinsic('FinalizationRegistry.prototype.unregister') ? require('./FinalizationRegistryUnregister') : undefined;
const Float32Array = require('./Float32Array');
const Float32ArrayFrom = require('./Float32ArrayFrom');
const Float32ArrayOf = require('./Float32ArrayOf');
const Float32ArrayOfApply = require('./Float32ArrayOfApply');
const Float64Array = require('./Float64Array');
const Float64ArrayFrom = require('./Float64ArrayFrom');
const Float64ArrayOf = require('./Float64ArrayOf');
const Float64ArrayOfApply = require('./Float64ArrayOfApply');
const Function = require('./Function');
const FunctionApply = require('./FunctionApply');
const FunctionApplyBind = require('./FunctionApplyBind');
const FunctionBind = require('./FunctionBind');
const FunctionCall = require('./FunctionCall');
const FunctionToString = require('./FunctionToString');
const FunctionSymbolHasInstance = require('./FunctionSymbolHasInstance');
const GeneratorNext = require('./GeneratorNext');
const GeneratorReturn = require('./GeneratorReturn');
const GeneratorThrow = require('./GeneratorThrow');
const GeneratorFunction = require('./GeneratorFunction');
const Int8Array = require('./Int8Array');
const Int8ArrayFrom = require('./Int8ArrayFrom');
const Int8ArrayOf = require('./Int8ArrayOf');
const Int8ArrayOfApply = require('./Int8ArrayOfApply');
const Int16Array = require('./Int16Array');
const Int16ArrayFrom = require('./Int16ArrayFrom');
const Int16ArrayOf = require('./Int16ArrayOf');
const Int16ArrayOfApply = require('./Int16ArrayOfApply');
const Int32Array = require('./Int32Array');
const Int32ArrayFrom = require('./Int32ArrayFrom');
const Int32ArrayOf = require('./Int32ArrayOf');
const Int32ArrayOfApply = require('./Int32ArrayOfApply');
const IteratorSymbolIterator = require('./IteratorSymbolIterator');
const JSONParse = require('./JSONParse');
const JSONStringify = require('./JSONStringify');
const Map = require('./Map');
const MapClear = require('./MapClear');
const MapDelete = require('./MapDelete');
const MapEntries = require('./MapEntries');
const MapForEach = require('./MapForEach');
const MapGet = require('./MapGet');
const MapHas = require('./MapHas');
const MapKeys = require('./MapKeys');
const MapSet = require('./MapSet');
const MapSize = require('./MapSize');
const MapValues = require('./MapValues');
const MapSymbolIterator = require('./MapSymbolIterator');
const MapIteratorNext = require('./MapIteratorNext');
const MathAbs = require('./MathAbs');
const MathAcos = require('./MathAcos');
const MathAcosh = require('./MathAcosh');
const MathAsin = require('./MathAsin');
const MathAsinh = require('./MathAsinh');
const MathAtan = require('./MathAtan');
const MathAtan2 = require('./MathAtan2');
const MathAtanh = require('./MathAtanh');
const MathCbrt = require('./MathCbrt');
const MathCeil = require('./MathCeil');
const MathClz32 = require('./MathClz32');
const MathCos = require('./MathCos');
const MathCosh = require('./MathAcosh');
const MathExp = require('./MathExp');
const MathExpm1 = require('./MathExpm1');
const MathFloor = require('./MathFloor');
const MathFround = require('./MathFround');
const MathHypot = require('./MathHypot');
const MathHypotApply = require('./MathHypotApply');
const MathImul = require('./MathImul');
const MathLog = require('./MathLog');
const MathLog1p = require('./MathLog1p');
const MathLog2 = require('./MathLog2');
const MathLog10 = require('./MathLog10');
const MathMax = require('./MathMax');
const MathMaxApply = require('./MathMaxApply');
const MathMin = require('./MathMin');
const MathMinApply = require('./MathMinApply');
const MathPow = require('./MathPow');
const MathRandom = require('./MathRandom');
const MathRound = require('./MathRound');
const MathSign = require('./MathSign');
const MathSin = require('./MathSin');
const MathSinh = require('./MathSinh');
const MathSqrt = require('./MathSqrt');
const MathTan = require('./MathTan');
const MathTanh = require('./MathTanh');
const MathTrunc = require('./MathTrunc');
const Number = require('./Number');
const NumberIsFinite = require('./NumberIsFinite');
const NumberIsInteger = require('./NumberIsInteger');
const NumberIsNaN = require('./NumberIsNaN');
const NumberIsSafeInteger = require('./NumberIsSafeInteger');
const NumberParseFloat = require('./NumberParseFloat');
const NumberParseInt = require('./NumberParseInt');
const NumberToExponential = require('./NumberToExponential');
const NumberToFixed = require('./NumberToFixed');
const NumberToLocaleString = require('./NumberToLocaleString');
const NumberToPrecision = require('./NumberToPrecision');
const NumberToString = require('./NumberToString');
const NumberValueOf = require('./NumberValueOf');
const Object = require('./Object');
const ObjectAssign = require('./ObjectAssign');
const ObjectCreate = require('./ObjectCreate');
const ObjectDefineProperties = require('./ObjectDefineProperties');
const ObjectDefineProperty = require('./ObjectDefineProperty');
const ObjectEntries = require('./ObjectEntries');
const ObjectFreeze = require('./ObjectFreeze');
const ObjectFromEntries = require('./ObjectFromEntries');
const ObjectGetOwnPropertyDescriptor = require('./ObjectGetOwnPropertyDescriptor');
const ObjectGetOwnPropertyDescriptors = HasIntrinsic('Object.getOwnPropertyDescriptors') ? require('./ObjectGetOwnPropertyDescriptors') : undefined;
const ObjectGetOwnPropertyNames = require('./ObjectGetOwnPropertyNames');
const ObjectGetOwnPropertySymbols = require('./ObjectGetOwnPropertySymbols');
const ObjectGetPrototypeOf = require('./ObjectGetPrototypeOf');
const ObjectHasOwn = HasIntrinsic('Object.hasOwn') ? require('./ObjectHasOwn') : undefined;
const ObjectIs = require('./ObjectIs');
const ObjectIsExtensible = require('./ObjectIsExtensible');
const ObjectIsFrozen = require('./ObjectIsFrozen');
const ObjectIsSealed = require('./ObjectIsSealed');
const ObjectKeys = require('./ObjectKeys');
const ObjectPreventExtensions = require('./ObjectPreventExtensions');
const ObjectSeal = require('./ObjectSeal');
const ObjectSetPrototypeOf = require('./ObjectSetPrototypeOf');
const ObjectValues = require('./ObjectValues');
const ObjectHasOwnProperty = require('./ObjectHasOwnProperty');
const ObjectIsPrototypeOf = require('./ObjectIsPrototypeOf');
const ObjectPropertyIsEnumerable = require('./ObjectPropertyIsEnumerable');
const ObjectToLocaleString = require('./ObjectToLocaleString');
const ObjectToString = require('./ObjectToString');
const ObjectValueOf = require('./ObjectValueOf');
const Promise = require('./Promise');
const PromiseAll = require('./PromiseAll');
const PromiseAllSettled = HasIntrinsic('Promise.allSettled') ? require('./PromiseAllSettled') : undefined;
const PromiseAny = HasIntrinsic('Promise.any') ? require('./PromiseAny') : undefined;
const PromiseRace = require('./PromiseRace');
const PromiseReject = require('./PromiseReject');
const PromiseResolve = require('./PromiseResolve');
const PromiseCatch = require('./PromiseCatch');
const PromiseFinally = require('./PromiseFinally');
const PromiseThen = require('./PromiseThen');
const Proxy = require('./Proxy');
const ProxyRevocable = require('./ProxyRevocable');
const RangeError = require('./RangeError');
const ReferenceError = require('./ReferenceError');
const ReflectApply = require('./ReflectApply');
const ReflectConstruct = require('./ReflectConstruct');
const ReflectDefineProperty = require('./ReflectDefineProperty');
const ReflectDeleteProperty = require('./ReflectDeleteProperty');
const ReflectGet = require('./ReflectGet');
const ReflectGetOwnPropertyDescriptor = require('./ReflectGetOwnPropertyDescriptor');
const ReflectGetPrototypeOf = require('./ReflectGetPrototypeOf');
const ReflectHas = require('./ReflectHas');
const ReflectIsExtensible = require('./ReflectIsExtensible');
const ReflectOwnKeys = require('./ReflectOwnKeys');
const ReflectPreventExtensions = require('./ReflectPreventExtensions');
const ReflectSet = require('./ReflectSet');
const ReflectSetPrototypeOf = require('./ReflectSetPrototypeOf');
const RegExp = require('./RegExp');
const RegExpDotAll = HasIntrinsic('get RegExp.prototype.dotAll') ? require('./RegExpDotAll') : undefined;
const RegExpExec = require('./RegExpExec');
const RegExpFlags = require('./RegExpFlags');
const RegExpGlobal = require('./RegExpGlobal');
const RegExpIgnoreCase = require('./RegExpIgnoreCase');
const RegExpMultiline = require('./RegExpMultiline');
const RegExpSource = require('./RegExpSource');
const RegExpSticky = require('./RegExpSticky');
const RegExpTest = require('./RegExpTest');
const RegExpToString = require('./RegExpToString');
const RegExpUnicode = require('./RegExpUnicode');
const RegExpSymbolMatch = require('./RegExpSymbolMatch');
const RegExpSymbolMatchAll = HasIntrinsic('RegExp.prototype[@@matchAll]') ? require('./RegExpSymbolMatchAll') : undefined;
const RegExpSymbolReplace = require('./RegExpSymbolReplace');
const RegExpSymbolSearch = require('./RegExpSymbolSearch');
const RegExpSymbolSplit = require('./RegExpSymbolSplit');
const RegExpStringIteratorNext = HasIntrinsic('RegExpStringIteratorPrototype.next') ? require('./RegExpStringIteratorNext') : undefined;
const Set = require('./Set');
const SetAdd = require('./SetAdd');
const SetClear = require('./SetClear');
const SetDelete = require('./SetDelete');
const SetEntries = require('./SetEntries');
const SetForEach = require('./SetForEach');
const SetHas = require('./SetHas');
const SetKeys = require('./SetKeys');
const SetSize = require('./SetSize');
const SetValues = require('./SetValues');
const SetSymbolIterator = require('./SetSymbolIterator');
const SetIteratorNext = require('./SetIteratorNext');
const SharedArrayBuffer = HasIntrinsic('SharedArrayBuffer') ? require('./SharedArrayBuffer') : undefined;
const SharedArrayBufferByteLength = HasIntrinsic('get SharedArrayBuffer.prototype.byteLength') ? require('./SharedArrayBufferByteLength') : undefined;
const SharedArrayBufferSlice = HasIntrinsic('SharedArrayBuffer.prototype.slice') ? require('./SharedArrayBufferSlice') : undefined;
const String = require('./String');
const StringFromCharCode = require('./StringFromCharCode');
const StringFromCharCodeApply = require('./StringFromCharCodeApply');
const StringFromCodePoint = require('./StringFromCodePoint');
const StringFromCodePointApply = require('./StringFromCodePointApply');
const StringRaw = require('./StringRaw');
const StringAt = HasIntrinsic('String.prototype.at') ? require('./StringAt') : undefined;
const StringCharAt = require('./StringCharAt');
const StringCharCodeAt = require('./StringCharCodeAt');
const StringCodePointAt = require('./StringCodePointAt');
const StringConcat = require('./StringConcat');
const StringConcatApply = require('./StringConcatApply');
const StringEndsWith = require('./StringEndsWith');
const StringIncludes = require('./StringIncludes');
const StringIndexOf = require('./StringIndexOf');
const StringLastIndexOf = require('./StringLastIndexOf');
const StringLocaleCompare = require('./StringLocaleCompare');
const StringMatch = require('./StringMatch');
const StringMatchAll = HasIntrinsic('String.prototype.matchAll') ? require('./StringMatchAll') : undefined;
const StringNormalize = require('./StringNormalize');
const StringPadEnd = HasIntrinsic('String.prototype.padEnd') ? require('./StringPadEnd') : undefined;
const StringPadStart = HasIntrinsic('String.prototype.padStart') ? require('./StringPadStart') : undefined;
const StringRepeat = require('./StringRepeat');
const StringReplace = require('./StringReplace');
const StringReplaceAll = HasIntrinsic('String.prototype.replaceAll') ? require('./StringReplaceAll') : undefined;
const StringSearch = require('./StringSearch');
const StringSlice = require('./StringSlice');
const StringSplit = require('./StringSplit');
const StringStartsWith = require('./StringStartsWith');
const StringSubstring = require('./StringSubstring');
const StringToLocaleLowerCase = require('./StringToLocaleLowerCase');
const StringToLocaleUpperCase = require('./StringToLocaleUpperCase');
const StringToLowerCase = require('./StringToLowerCase');
const StringToString = require('./StringToString');
const StringToUpperCase = require('./StringToUpperCase');
const StringTrim = require('./StringTrim');
const StringTrimEnd = HasIntrinsic('String.prototype.trimEnd') ? require('./StringTrimEnd') : undefined;
const StringTrimStart = HasIntrinsic('String.prototype.trimStart') ? require('./StringTrimStart') : undefined;
const StringValueOf = require('./StringValueOf');
const StringSymbolIterator = require('./StringSymbolIterator');
const StringIteratorNext = require('./StringIteratorNext');
const Symbol = require('./Symbol');
const SymbolFor = require('./SymbolFor');
const SymbolKeyFor = require('./SymbolKeyFor');
const SymbolDescription = HasIntrinsic('get Symbol.prototype.description') ? require('./SymbolDescription') : undefined;
const SymbolToString = require('./SymbolToString');
const SymbolValueOf = require('./SymbolValueOf');
const SymbolSymbolToPrimitive = require('./SymbolSymbolToPrimitive');
const SyntaxError = require('./SyntaxError');
const TypedArrayAt = HasIntrinsic('TypedArray.prototype.at') ? require('./TypedArrayAt') : undefined;
const TypedArrayBuffer = require('./TypedArrayBuffer');
const TypedArrayByteLength = require('./TypedArrayByteLength');
const TypedArrayByteOffset = require('./TypedArrayByteOffset');
const TypedArrayCopyWithin = require('./TypedArrayCopyWithin');
const TypedArrayEntries = require('./TypedArrayEntries');
const TypedArrayEvery = require('./TypedArrayEvery');
const TypedArrayFill = require('./TypedArrayFill');
const TypedArrayFind = require('./TypedArrayFind');
const TypedArrayFindIndex = require('./TypedArrayFindIndex');
const TypedArrayForEach = require('./TypedArrayForEach');
const TypedArrayIncludes = HasIntrinsic('TypedArray.prototype.includes') ? require('./TypedArrayIncludes') : undefined;
const TypedArrayIndexOf = require('./TypedArrayIndexOf');
const TypedArrayJoin = require('./TypedArrayJoin');
const TypedArrayLength = require('./TypedArrayLength');
const TypedArrayMap = require('./TypedArrayMap');
const TypedArrayReduce = require('./TypedArrayReduce');
const TypedArrayReduceRight = require('./TypedArrayReduceRight');
const TypedArrayReverse = require('./TypedArrayReverse');
const TypedArraySet = require('./TypedArraySet');
const TypedArraySlice = require('./TypedArraySlice');
const TypedArraySome = require('./TypedArraySome');
const TypedArraySort = require('./TypedArraySort');
const TypedArraySubarray = require('./TypedArraySubarray');
const TypedArrayToLocaleString = require('./TypedArrayToLocaleString');
const TypedArrayToString = require('./TypedArrayToString');
const TypedArrayValues = require('./TypedArrayValues');
const TypedArraySymbolIterator = require('./TypedArraySymbolIterator');
const TypedArraySymbolToStringTag = require('./TypedArraySymbolToStringTag');
const TypeError = require('./TypeError');
const Uint8Array = require('./Uint8Array');
const Uint8ArrayFrom = require('./Uint8ArrayFrom');
const Uint8ArrayOf = require('./Uint8ArrayOf');
const Uint8ArrayOfApply = require('./Uint8ArrayOfApply');
const Uint8ClampedArray = require('./Uint8ClampedArray');
const Uint8ClampedArrayFrom = require('./Uint8ClampedArrayFrom');
const Uint8ClampedArrayOf = require('./Uint8ClampedArrayOf');
const Uint8ClampedArrayOfApply = require('./Uint8ClampedArrayOfApply');
const Uint16Array = require('./Uint16Array');
const Uint16ArrayFrom = require('./Uint16ArrayFrom');
const Uint16ArrayOf = require('./Uint16ArrayOf');
const Uint16ArrayOfApply = require('./Uint16ArrayOfApply');
const Uint32Array = require('./Uint32Array');
const Uint32ArrayFrom = require('./Uint32ArrayFrom');
const Uint32ArrayOf = require('./Uint32ArrayOf');
const Uint32ArrayOfApply = require('./Uint32ArrayOfApply');
const URIError = require('./URIError');
const WeakMap = require('./WeakMap');
const WeakMapDelete = require('./WeakMapDelete');
const WeakMapGet = require('./WeakMapGet');
const WeakMapHas = require('./WeakMapHas');
const WeakMapSet = require('./WeakMapSet');
const WeakRef = HasIntrinsic('WeakRef') ? require('./WeakRef') : undefined;
const WeakRefDeref = HasIntrinsic('WeakRef.prototype.deref') ? require('./WeakRefDeref') : undefined;
const WeakSet = require('./WeakSet');
const WeakSetAdd = require('./WeakSetAdd');
const WeakSetDelete = require('./WeakSetDelete');
const WeakSetHas = require('./WeakSetHas');
const DecodeURI = require('./decodeURI');
const DecodeURIComponent = require('./decodeURIComponent');
const EncodeURI = require('./encodeURI');
const EncodeURIComponent = require('./encodeURIComponent');
const Eval = require('./eval');
const IsFinite = require('./isFinite');
const IsNaN = require('./isNaN');
const ParseFloat = require('./parseFloat');
const ParseInt = require('./parseInt');
const UncurryThis = require('./uncurryThis');

module.exports = {
  AggregateError,
  Array,
  ArrayFrom,
  ArrayIsArray,
  ArrayOf,
  ArrayOfApply,
  ArrayAt,
  ArrayConcat,
  ArrayCopyWithin,
  ArrayEntries,
  ArrayEvery,
  ArrayFill,
  ArrayFilter,
  ArrayFind,
  ArrayFindIndex,
  ArrayFlat,
  ArrayFlatMap,
  ArrayForEach,
  ArrayIncludes,
  ArrayIndexOf,
  ArrayJoin,
  ArrayKeys,
  ArrayLastIndexOf,
  ArrayMap,
  ArrayPop,
  ArrayPush,
  ArrayPushApply,
  ArrayReduce,
  ArrayReduceRight,
  ArrayReverse,
  ArrayShift,
  ArraySlice,
  ArraySome,
  ArraySort,
  ArraySplice,
  ArrayToLocaleString,
  ArrayToString,
  ArrayUnshift,
  ArrayUnshiftApply,
  ArrayValues,
  ArraySymbolIterator,
  ArrayBuffer,
  ArrayBufferIsView,
  ArrayBufferByteLength,
  ArrayBufferSlice,
  ArrayIteratorNext,
  AsyncFunction,
  AsyncGeneratorFunction,
  AsyncGeneratorNext,
  AsyncGeneratorReturn,
  AsyncGeneratorThrow,
  AsyncIteratorSymbolAsyncIterator,
  AtomicsAdd,
  AtomicsAnd,
  AtomicsCompareExchange,
  AtomicsExchange,
  AtomicsIsLockFree,
  AtomicsLoad,
  AtomicsNotify,
  AtomicsOr,
  AtomicsStore,
  AtomicsSub,
  AtomicsWait,
  AtomicsXor,
  BigInt,
  BigIntAsIntN,
  BigIntAsUintN,
  BigIntToLocaleString,
  BigIntToString,
  BigIntValueOf,
  BigInt64Array,
  BigInt64ArrayFrom,
  BigInt64ArrayOf,
  BigInt64ArrayOfApply,
  BigUint64Array,
  BigUint64ArrayFrom,
  BigUint64ArrayOf,
  BigUint64ArrayOfApply,
  Boolean,
  BooleanToString,
  BooleanValueOf,
  DataView,
  DataViewBuffer,
  DataViewByteLength,
  DataViewByteOffset,
  DataViewGetBigInt64,
  DataViewGetBigUint64,
  DataViewGetFloat32,
  DataViewGetFloat64,
  DataViewGetInt8,
  DataViewGetInt16,
  DataViewGetInt32,
  DataViewGetUint8,
  DataViewGetUint16,
  DataViewGetUint32,
  DataViewSetBigInt64,
  DataViewSetBigUint64,
  DataViewSetFloat32,
  DataViewSetFloat64,
  DataViewSetInt8,
  DataViewSetInt16,
  DataViewSetInt32,
  DataViewSetUint8,
  DataViewSetUint16,
  DataViewSetUint32,
  Date,
  DateNow,
  DateParse,
  DateUTC,
  DateGetDate,
  DateGetDay,
  DateGetFullYear,
  DateGetHours,
  DateGetMilliseconds,
  DateGetMinutes,
  DateGetMonth,
  DateGetSeconds,
  DateGetTime,
  DateGetTimezoneOffset,
  DateGetUTCDate,
  DateGetUTCDay,
  DateGetUTCFullYear,
  DateGetUTCHours,
  DateGetUTCMilliseconds,
  DateGetUTCMinutes,
  DateGetUTCMonth,
  DateGetUTCSeconds,
  DateSetDate,
  DateSetFullYear,
  DateSetHours,
  DateSetMilliseconds,
  DateSetMinutes,
  DateSetMonth,
  DateSetSeconds,
  DateSetTime,
  DateSetUTCDate,
  DateSetUTCFullYear,
  DateSetUTCHours,
  DateSetUTCMilliseconds,
  DateSetUTCMinutes,
  DateSetUTCMonth,
  DateSetUTCSeconds,
  DateToDateString,
  DateToISOString,
  DateToJSON,
  DateToLocaleDateString,
  DateToLocaleString,
  DateToLocaleTimeString,
  DateToString,
  DateToTimeString,
  DateToUTCString,
  DateValueOf,
  DateSymbolToPrimitive,
  Error,
  ErrorToString,
  EvalError,
  FinalizationRegistry,
  FinalizationRegistryRegister,
  FinalizationRegistryUnregister,
  Float32Array,
  Float32ArrayFrom,
  Float32ArrayOf,
  Float32ArrayOfApply,
  Float64Array,
  Float64ArrayFrom,
  Float64ArrayOf,
  Float64ArrayOfApply,
  Function,
  FunctionApply,
  FunctionApplyBind,
  FunctionBind,
  FunctionCall,
  FunctionToString,
  FunctionSymbolHasInstance,
  GeneratorNext,
  GeneratorReturn,
  GeneratorThrow,
  GeneratorFunction,
  Int8Array,
  Int8ArrayFrom,
  Int8ArrayOf,
  Int8ArrayOfApply,
  Int16Array,
  Int16ArrayFrom,
  Int16ArrayOf,
  Int16ArrayOfApply,
  Int32Array,
  Int32ArrayFrom,
  Int32ArrayOf,
  Int32ArrayOfApply,
  IteratorSymbolIterator,
  JSONParse,
  JSONStringify,
  Map,
  MapClear,
  MapDelete,
  MapEntries,
  MapForEach,
  MapGet,
  MapHas,
  MapKeys,
  MapSet,
  MapSize,
  MapValues,
  MapSymbolIterator,
  MapIteratorNext,
  MathAbs,
  MathAcos,
  MathAcosh,
  MathAsin,
  MathAsinh,
  MathAtan,
  MathAtan2,
  MathAtanh,
  MathCbrt,
  MathCeil,
  MathClz32,
  MathCos,
  MathCosh,
  MathExp,
  MathExpm1,
  MathFloor,
  MathFround,
  MathHypot,
  MathHypotApply,
  MathImul,
  MathLog,
  MathLog1p,
  MathLog2,
  MathLog10,
  MathMax,
  MathMaxApply,
  MathMin,
  MathMinApply,
  MathPow,
  MathRandom,
  MathRound,
  MathSign,
  MathSin,
  MathSinh,
  MathSqrt,
  MathTan,
  MathTanh,
  MathTrunc,
  Number,
  NumberIsFinite,
  NumberIsInteger,
  NumberIsNaN,
  NumberIsSafeInteger,
  NumberParseFloat,
  NumberParseInt,
  NumberToExponential,
  NumberToFixed,
  NumberToLocaleString,
  NumberToPrecision,
  NumberToString,
  NumberValueOf,
  Object,
  ObjectAssign,
  ObjectCreate,
  ObjectDefineProperties,
  ObjectDefineProperty,
  ObjectEntries,
  ObjectFreeze,
  ObjectFromEntries,
  ObjectGetOwnPropertyDescriptor,
  ObjectGetOwnPropertyDescriptors,
  ObjectGetOwnPropertyNames,
  ObjectGetOwnPropertySymbols,
  ObjectGetPrototypeOf,
  ObjectHasOwn,
  ObjectIs,
  ObjectIsExtensible,
  ObjectIsFrozen,
  ObjectIsSealed,
  ObjectKeys,
  ObjectPreventExtensions,
  ObjectSeal,
  ObjectSetPrototypeOf,
  ObjectValues,
  ObjectHasOwnProperty,
  ObjectIsPrototypeOf,
  ObjectPropertyIsEnumerable,
  ObjectToLocaleString,
  ObjectToString,
  ObjectValueOf,
  Promise,
  PromiseAll,
  PromiseAllSettled,
  PromiseAny,
  PromiseRace,
  PromiseReject,
  PromiseResolve,
  PromiseCatch,
  PromiseFinally,
  PromiseThen,
  Proxy,
  ProxyRevocable,
  RangeError,
  ReferenceError,
  ReflectApply,
  ReflectConstruct,
  ReflectDefineProperty,
  ReflectDeleteProperty,
  ReflectGet,
  ReflectGetOwnPropertyDescriptor,
  ReflectGetPrototypeOf,
  ReflectHas,
  ReflectIsExtensible,
  ReflectOwnKeys,
  ReflectPreventExtensions,
  ReflectSet,
  ReflectSetPrototypeOf,
  RegExp,
  RegExpDotAll,
  RegExpExec,
  RegExpFlags,
  RegExpGlobal,
  RegExpIgnoreCase,
  RegExpMultiline,
  RegExpSource,
  RegExpSticky,
  RegExpTest,
  RegExpToString,
  RegExpUnicode,
  RegExpSymbolMatch,
  RegExpSymbolMatchAll,
  RegExpSymbolReplace,
  RegExpSymbolSearch,
  RegExpSymbolSplit,
  RegExpStringIteratorNext,
  Set,
  SetAdd,
  SetClear,
  SetDelete,
  SetEntries,
  SetForEach,
  SetHas,
  SetKeys,
  SetSize,
  SetValues,
  SetSymbolIterator,
  SetIteratorNext,
  SharedArrayBuffer,
  SharedArrayBufferByteLength,
  SharedArrayBufferSlice,
  String,
  StringFromCharCode,
  StringFromCharCodeApply,
  StringFromCodePoint,
  StringFromCodePointApply,
  StringRaw,
  StringAt,
  StringCharAt,
  StringCharCodeAt,
  StringCodePointAt,
  StringConcat,
  StringConcatApply,
  StringEndsWith,
  StringIncludes,
  StringIndexOf,
  StringLastIndexOf,
  StringLocaleCompare,
  StringMatch,
  StringMatchAll,
  StringNormalize,
  StringPadEnd,
  StringPadStart,
  StringRepeat,
  StringReplace,
  StringReplaceAll,
  StringSearch,
  StringSlice,
  StringSplit,
  StringStartsWith,
  StringSubstring,
  StringToLocaleLowerCase,
  StringToLocaleUpperCase,
  StringToLowerCase,
  StringToString,
  StringToUpperCase,
  StringTrim,
  StringTrimEnd,
  StringTrimStart,
  StringValueOf,
  StringSymbolIterator,
  StringIteratorNext,
  Symbol,
  SymbolFor,
  SymbolKeyFor,
  SymbolDescription,
  SymbolToString,
  SymbolValueOf,
  SymbolSymbolToPrimitive,
  SyntaxError,
  TypedArrayAt,
  TypedArrayBuffer,
  TypedArrayByteLength,
  TypedArrayByteOffset,
  TypedArrayCopyWithin,
  TypedArrayEntries,
  TypedArrayEvery,
  TypedArrayFill,
  TypedArrayFind,
  TypedArrayFindIndex,
  TypedArrayForEach,
  TypedArrayIncludes,
  TypedArrayIndexOf,
  TypedArrayJoin,
  TypedArrayLength,
  TypedArrayMap,
  TypedArrayReduce,
  TypedArrayReduceRight,
  TypedArrayReverse,
  TypedArraySet,
  TypedArraySlice,
  TypedArraySome,
  TypedArraySort,
  TypedArraySubarray,
  TypedArrayToLocaleString,
  TypedArrayToString,
  TypedArrayValues,
  TypedArraySymbolIterator,
  TypedArraySymbolToStringTag,
  TypeError,
  Uint8Array,
  Uint8ArrayFrom,
  Uint8ArrayOf,
  Uint8ArrayOfApply,
  Uint8ClampedArray,
  Uint8ClampedArrayFrom,
  Uint8ClampedArrayOf,
  Uint8ClampedArrayOfApply,
  Uint16Array,
  Uint16ArrayFrom,
  Uint16ArrayOf,
  Uint16ArrayOfApply,
  Uint32Array,
  Uint32ArrayFrom,
  Uint32ArrayOf,
  Uint32ArrayOfApply,
  URIError,
  WeakMap,
  WeakMapDelete,
  WeakMapGet,
  WeakMapHas,
  WeakMapSet,
  WeakRef,
  WeakRefDeref,
  WeakSet,
  WeakSetAdd,
  WeakSetDelete,
  WeakSetHas,
  decodeURI: DecodeURI,
  decodeURIComponent: DecodeURIComponent,
  encodeURI: EncodeURI,
  encodeURIComponent: EncodeURIComponent,
  eval: Eval,
  isFinite: IsFinite,
  isNaN: IsNaN,
  parseFloat: ParseFloat,
  parseInt: ParseInt,
  uncurryThis: UncurryThis
};
