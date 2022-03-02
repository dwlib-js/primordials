const $globalThis = (
  typeof globalThis !== 'undefined' ? globalThis :
  typeof global !== 'undefined' ? global :
  typeof window !== 'undefined' ? window : self
);
export { $globalThis as globalThis };

export const AggregateError = $globalThis.AggregateError;
export const Array = $globalThis.Array;
export const ArrayBuffer = $globalThis.ArrayBuffer;
export const Atomics = $globalThis.Atomics;
export const BigInt = $globalThis.BigInt;
export const BigInt64Array = $globalThis.BigInt64Array;
export const BigUint64Array = $globalThis.BigUint64Array;
export const Boolean = $globalThis.Boolean;
export const DataView = $globalThis.DataView;
export const Date = $globalThis.Date;
export const Error = $globalThis.Error;
export const EvalError = $globalThis.EvalError;
export const FinalizationRegistry = $globalThis.FinalizationRegistry;
export const Float32Array = $globalThis.Float32Array;
export const Float64Array = $globalThis.Float64Array;
export const Function = $globalThis.Function;
export const Int8Array = $globalThis.Int8Array;
export const Int16Array = $globalThis.Int16Array;
export const Int32Array = $globalThis.Int32Array;
export const JSON = $globalThis.JSON;
export const Map = $globalThis.Map;
export const Math = $globalThis.Math;
export const Number = $globalThis.Number;
export const Object = $globalThis.Object;
export const Promise = $globalThis.Promise;
export const Proxy = $globalThis.Proxy;
export const RangeError = $globalThis.RangeError;
export const ReferenceError = $globalThis.ReferenceError;
export const Reflect = $globalThis.Reflect;
export const RegExp = $globalThis.RegExp;
export const Set = $globalThis.Set;
export const SharedArrayBuffer = $globalThis.SharedArrayBuffer;
export const String = $globalThis.String;
export const Symbol = $globalThis.Symbol;
export const SyntaxError = $globalThis.SyntaxError;
export const TypeError = $globalThis.TypeError;
export const Uint8Array = $globalThis.Uint8Array;
export const Uint8ClampedArray = $globalThis.Uint8ClampedArray;
export const Uint16Array = $globalThis.Uint16Array;
export const Uint32Array = $globalThis.Uint32Array;
export const URIError = $globalThis.URIError;
export const WeakMap = $globalThis.WeakMap;
export const WeakRef = $globalThis.WeakRef;
export const WeakSet = $globalThis.WeakSet;

export const decodeURI = $globalThis.decodeURI;
export const decodeURIComponent = $globalThis.decodeURIComponent;
export const encodeURI = $globalThis.encodeURI;
export const encodeURIComponent = $globalThis.encodeURIComponent;
const $eval = $globalThis.eval;
export { $eval as eval };
export const isFinite = $globalThis.isFinite;
export const isNaN = $globalThis.isNaN;
export const parseFloat = $globalThis.parseFloat;
export const parseInt = $globalThis.parseInt;

export const AggregateErrorPrototype = AggregateError ? AggregateError.prototype : undefined;

export const ArrayFrom = Array.from;
export const ArrayIsArray = Array.isArray;
export const ArrayOf = Array.of;
export const ArrayPrototype = Array.prototype;
export const ArrayPrototypeAt = ArrayPrototype.at;
export const ArrayPrototypeConcat = ArrayPrototype.concat;
export const ArrayPrototypeCopyWithin = ArrayPrototype.copyWithin;
export const ArrayPrototypeEntries = ArrayPrototype.entries;
export const ArrayPrototypeEvery = ArrayPrototype.every;
export const ArrayPrototypeFill = ArrayPrototype.fill;
export const ArrayPrototypeFilter = ArrayPrototype.filter;
export const ArrayPrototypeFind = ArrayPrototype.find;
export const ArrayPrototypeFindIndex = ArrayPrototype.findIndex;
export const ArrayPrototypeFlat = ArrayPrototype.flat;
export const ArrayPrototypeFlatMap = ArrayPrototype.flatMap;
export const ArrayPrototypeForEach = ArrayPrototype.forEach;
export const ArrayPrototypeIncludes = ArrayPrototype.includes;
export const ArrayPrototypeIndexOf = ArrayPrototype.indexOf;
export const ArrayPrototypeJoin = ArrayPrototype.join;
export const ArrayPrototypeKeys = ArrayPrototype.keys;
export const ArrayPrototypeLastIndexOf = ArrayPrototype.lastIndexOf;
export const ArrayPrototypeMap = ArrayPrototype.map;
export const ArrayPrototypePop = ArrayPrototype.pop;
export const ArrayPrototypePush = ArrayPrototype.push;
export const ArrayPrototypeReduce = ArrayPrototype.reduce;
export const ArrayPrototypeReduceRight = ArrayPrototype.reduceRight;
export const ArrayPrototypeReverse = ArrayPrototype.reverse;
export const ArrayPrototypeShift = ArrayPrototype.shift;
export const ArrayPrototypeSlice = ArrayPrototype.slice;
export const ArrayPrototypeSome = ArrayPrototype.some;
export const ArrayPrototypeSort = ArrayPrototype.sort;
export const ArrayPrototypeSplice = ArrayPrototype.splice;
export const ArrayPrototypeToLocaleString = ArrayPrototype.toLocaleString;
export const ArrayPrototypeToString = ArrayPrototype.toString;
export const ArrayPrototypeUnshift = ArrayPrototype.unshift;
export const ArrayPrototypeValues = ArrayPrototype.values;
export const ArrayPrototypeSymbolIterator = ArrayPrototypeValues;

export const ArrayBufferIsView = ArrayBuffer.isView;
export const ArrayBufferPrototype = ArrayBuffer.prototype;
export const ArrayBufferPrototypeSlice = ArrayBufferPrototype.slice;

export const AtomicsAdd = Atomics ? Atomics.add : undefined;
export const AtomicsAnd = Atomics ? Atomics.and : undefined;
export const AtomicsCompareExchange = Atomics ? Atomics.compareExchange : undefined;
export const AtomicsExchange = Atomics ? Atomics.exchange : undefined;
export const AtomicsIsLockFree = Atomics ? Atomics.isLockFree : undefined;
export const AtomicsLoad = Atomics ? Atomics.load : undefined;
export const AtomicsOr = Atomics ? Atomics.or : undefined;
export const AtomicsStore = Atomics ? Atomics.store : undefined;
export const AtomicsSub = Atomics ? Atomics.sub : undefined;
export const AtomicsWait = Atomics ? Atomics.wait : undefined;
export const AtomicsNotify = Atomics ? Atomics.notify : undefined;
export const AtomicsXor = Atomics ? Atomics.xor : undefined;

export const BigIntAsIntN = BigInt ? BigInt.asIntN : undefined;
export const BigIntAsUintN = BigInt ? BigInt.asUintN : undefined;
export const BigIntPrototype = BigInt ? BigInt.prototype : undefined;
export const BigIntPrototypeToLocaleString = BigIntPrototype ? BigIntPrototype.toLocaleString : undefined;
export const BigIntPrototypeToString = BigIntPrototype ? BigIntPrototype.toString : undefined;
export const BigIntPrototypeValueOf = BigIntPrototype ? BigIntPrototype.valueOf : undefined;

export const BigInt64ArrayBYTES_PER_ELEMENT = BigInt64Array ? BigInt64Array.BYTES_PER_ELEMENT : undefined;
export const BigInt64ArrayPrototype = BigInt64Array ? BigInt64Array.prototype : undefined;

export const BigUint64ArrayBYTES_PER_ELEMENT = BigUint64Array ? BigUint64Array.BYTES_PER_ELEMENT : undefined;
export const BigUint64ArrayPrototype = BigUint64Array ? BigUint64Array.prototype : undefined;

export const BooleanPrototype = Boolean.prototype;
export const BooleanPrototypeToString = BooleanPrototype.toString;
export const BooleanPrototypeValueOf = BooleanPrototype.valueOf;

export const DataViewPrototype = DataView.prototype;
export const DataViewPrototypeGetBigInt64 = DataViewPrototype.getBigInt64;
export const DataViewPrototypeGetBigUint64 = DataViewPrototype.getBigUint64;
export const DataViewPrototypeGetFloat32 = DataViewPrototype.getFloat32;
export const DataViewPrototypeGetFloat64 = DataViewPrototype.getFloat64;
export const DataViewPrototypeGetInt8 = DataViewPrototype.getInt8;
export const DataViewPrototypeGetInt16 = DataViewPrototype.getInt16;
export const DataViewPrototypeGetInt32 = DataViewPrototype.getInt32;
export const DataViewPrototypeGetUint8 = DataViewPrototype.getUint8;
export const DataViewPrototypeGetUint16 = DataViewPrototype.getUint16;
export const DataViewPrototypeGetUint32 = DataViewPrototype.getUint32;
export const DataViewPrototypeSetBigInt64 = DataViewPrototype.setBigInt64;
export const DataViewPrototypeSetBigUint64 = DataViewPrototype.setBigUint64;
export const DataViewPrototypeSetFloat32 = DataViewPrototype.setFloat32;
export const DataViewPrototypeSetFloat64 = DataViewPrototype.setFloat64;
export const DataViewPrototypeSetInt8 = DataViewPrototype.setInt8;
export const DataViewPrototypeSetInt16 = DataViewPrototype.setInt16;
export const DataViewPrototypeSetInt32 = DataViewPrototype.setInt32;
export const DataViewPrototypeSetUint8 = DataViewPrototype.setUint8;
export const DataViewPrototypeSetUint16 = DataViewPrototype.setUint16;
export const DataViewPrototypeSetUint32 = DataViewPrototype.setUint32;

export const DateNow = Date.now;
export const DateParse = Date.parse;
export const DatePrototype = Date.prototype;
export const DateUTC = Date.UTC;
export const DatePrototypeGetDate = DatePrototype.getDate;
export const DatePrototypeGetDay = DatePrototype.getDay;
export const DatePrototypeGetFullYear = DatePrototype.getFullYear;
export const DatePrototypeGetHours = DatePrototype.getHours;
export const DatePrototypeGetMilliseconds = DatePrototype.getMilliseconds;
export const DatePrototypeGetMinutes = DatePrototype.getMinutes;
export const DatePrototypeGetMonth = DatePrototype.getMonth;
export const DatePrototypeGetSeconds = DatePrototype.getSeconds;
export const DatePrototypeGetTime = DatePrototype.getTime;
export const DatePrototypeGetTimezoneOffset = DatePrototype.getTimezoneOffset;
export const DatePrototypeGetUTCDate = DatePrototype.getUTCDate;
export const DatePrototypeGetUTCDay = DatePrototype.getUTCDay;
export const DatePrototypeGetUTCFullYear = DatePrototype.getUTCFullYear;
export const DatePrototypeGetUTCHours = DatePrototype.getUTCHours;
export const DatePrototypeGetUTCMilliseconds = DatePrototype.getUTCMilliseconds;
export const DatePrototypeGetUTCMinutes = DatePrototype.getUTCMinutes;
export const DatePrototypeGetUTCMonth = DatePrototype.getUTCMonth;
export const DatePrototypeGetUTCSeconds = DatePrototype.getUTCSeconds;
export const DatePrototypeSetDate = DatePrototype.setDate;
export const DatePrototypeSetFullYear = DatePrototype.setFullYear;
export const DatePrototypeSetHours = DatePrototype.setHours;
export const DatePrototypeSetMilliseconds = DatePrototype.setMilliseconds;
export const DatePrototypeSetMinutes = DatePrototype.setMinutes;
export const DatePrototypeSetMonth = DatePrototype.setMonth;
export const DatePrototypeSetSeconds = DatePrototype.setSeconds;
export const DatePrototypeSetTime = DatePrototype.setTime;
export const DatePrototypeSetUTCDate = DatePrototype.setUTCDate;
export const DatePrototypeSetUTCFullYear = DatePrototype.setUTCFullYear;
export const DatePrototypeSetUTCHours = DatePrototype.setUTCHours;
export const DatePrototypeSetUTCMilliseconds = DatePrototype.setUTCMilliseconds;
export const DatePrototypeSetUTCMinutes = DatePrototype.setUTCMinutes;
export const DatePrototypeSetUTCMonth = DatePrototype.setUTCMonth;
export const DatePrototypeSetUTCSeconds = DatePrototype.setUTCSeconds;
export const DatePrototypeToDateString = DatePrototype.toDateString;
export const DatePrototypeToISOString = DatePrototype.toISOString;
export const DatePrototypeToJSON = DatePrototype.toJSON;
export const DatePrototypeToLocaleDateString = DatePrototype.toLocaleDateString;
export const DatePrototypeToLocaleString = DatePrototype.toLocaleString;
export const DatePrototypeToLocaleTimeString = DatePrototype.toLocaleTimeString;
export const DatePrototypeToString = DatePrototype.toString;
export const DatePrototypeToTimeString = DatePrototype.toTimeString;
export const DatePrototypeToUTCString = DatePrototype.toUTCString;
export const DatePrototypeValueOf = DatePrototype.valueOf;

export const ErrorPrototype = Error.prototype;
export const ErrorPrototypeToString = ErrorPrototype.toString;

export const EvalErrorPrototype = EvalError.prototype;

export const FinalizationRegistryPrototype = FinalizationRegistry ? FinalizationRegistry.prototype : undefined;
export const FinalizationRegistryPrototypeRegister = FinalizationRegistryPrototype ? FinalizationRegistryPrototype.register : undefined;
export const FinalizationRegistryPrototypeUnregister = FinalizationRegistryPrototype ? FinalizationRegistryPrototype.unregister : undefined;

export const Float32ArrayBYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
export const Float32ArrayPrototype = Float32Array.prototype;

export const Float64ArrayBYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT;
export const Float64ArrayPrototype = Float64Array.prototype;

export const FunctionPrototype = Function.prototype;
export const FunctionPrototypeApply = FunctionPrototype.apply;
export const FunctionPrototypeBind = FunctionPrototype.bind;
export const FunctionPrototypeCall = FunctionPrototype.call;
export const FunctionPrototypeToString = FunctionPrototype.toString;

export const Int8ArrayBYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT;
export const Int8ArrayPrototype = Int8Array.prototype;

export const Int16ArrayBYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT;
export const Int16ArrayPrototype = Int16Array.prototype;

export const Int32ArrayBYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT;
export const Int32ArrayPrototype = Int32Array.prototype;

export const JSONParse = JSON.parse;
export const JSONStringify = JSON.stringify;

export const MapPrototype = Map.prototype;
export const MapPrototypeClear = MapPrototype.clear;
export const MapPrototypeDelete = MapPrototype.delete;
export const MapPrototypeEntries = MapPrototype.entries;
export const MapPrototypeForEach = MapPrototype.forEach;
export const MapPrototypeGet = MapPrototype.get;
export const MapPrototypeHas = MapPrototype.has;
export const MapPrototypeKeys = MapPrototype.keys;
export const MapPrototypeSet = MapPrototype.set;
export const MapPrototypeValues = MapPrototype.values;
export const MapPrototypeSymbolIterator = MapPrototypeEntries;

export const MathE = Math.E;
export const MathLN10 = Math.LN10;
export const MathLN2 = Math.LN2;
export const MathLOG10E = Math.LOG10E;
export const MathLOG2E = Math.LOG2E;
export const MathPI = Math.PI;
export const MathSQRT1_2 = Math.SQRT1_2;
export const MathSQRT2 = Math.SQRT2;
export const MathAbs = Math.abs;
export const MathAcos = Math.acos;
export const MathAcosh = Math.acosh;
export const MathAsin = Math.asin;
export const MathAsinh = Math.asinh;
export const MathAtan = Math.atan;
export const MathAtanh = Math.atanh;
export const MathAtan2 = Math.atan2;
export const MathCbrt = Math.cbrt;
export const MathCeil = Math.ceil;
export const MathClz32 = Math.clz32;
export const MathCos = Math.cos;
export const MathCosh = Math.cosh;
export const MathExp = Math.exp;
export const MathExpm1 = Math.expm1;
export const MathFloor = Math.floor;
export const MathFround = Math.fround;
export const MathHypot = Math.hypot;
export const MathImul = Math.imul;
export const MathLog = Math.log;
export const MathLog1p = Math.log1p;
export const MathLog10 = Math.log10;
export const MathLog2 = Math.log2;
export const MathMax = Math.max;
export const MathMin = Math.min;
export const MathPow = Math.pow;
export const MathRandom = Math.random;
export const MathRound = Math.round;
export const MathSign = Math.sign;
export const MathSin = Math.sin;
export const MathSinh = Math.sinh;
export const MathSqrt = Math.sqrt;
export const MathTan = Math.tan;
export const MathTanh = Math.tanh;
export const MathTrunc = Math.trunc;

export const NumberEPSILON = Number.EPSILON;
export const NumberMAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
export const NumberMAX_VALUE = Number.MAX_VALUE;
export const NumberMIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
export const NumberMIN_VALUE = Number.MIN_VALUE;
export const NumberNaN = Number.NaN;
export const NumberNEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
export const NumberPOSITIVE_INFINITY = Number.POSITIVE_INFINITY;
export const NumberIsFinite = Number.isFinite;
export const NumberIsInteger = Number.isInteger;
export const NumberIsNaN = Number.isNaN;
export const NumberIsSafeInteger = Number.isSafeInteger;
export const NumberParseFloat = parseFloat;
export const NumberParseInt = parseInt;
export const NumberPrototype = Number.prototype;
export const NumberPrototypeToExponential = NumberPrototype.toExponential;
export const NumberPrototypeToFixed = NumberPrototype.toFixed;
export const NumberPrototypeToLocaleString = NumberPrototype.toLocaleString;
export const NumberPrototypeToPrecision = NumberPrototype.toPrecision;
export const NumberPrototypeToString = NumberPrototype.toString;
export const NumberPrototypeValueOf = NumberPrototype.valueOf;

export const ObjectAssign = Object.assign;
export const ObjectCreate = Object.create;
export const ObjectDefineProperties = Object.defineProperties;
export const ObjectDefineProperty = Object.defineProperty;
export const ObjectEntries = Object.entries;
export const ObjectFreeze = Object.freeze;
export const ObjectFromEntries = Object.fromEntries;
export const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
export const ObjectGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
export const ObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
export const ObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
export const ObjectGetPrototypeOf = Object.getPrototypeOf;
export const ObjectHasOwn = Object.hasOwn;
export const ObjectIs = Object.is;
export const ObjectIsExtensible = Object.isExtensible;
export const ObjectIsFrozen = Object.isFrozen;
export const ObjectIsSealed = Object.isSealed;
export const ObjectKeys = Object.keys;
export const ObjectPreventExtensions = Object.preventExtensions;
export const ObjectPrototype = Object.prototype;
export const ObjectSeal = Object.seal;
export const ObjectSetPrototypeOf = Object.setPrototypeOf;
export const ObjectValues = Object.values;
export const ObjectPrototypeHasOwnProperty = ObjectPrototype.hasOwnProperty;
export const ObjectPrototypeIsPrototypeOf = ObjectPrototype.isPrototypeOf;
export const ObjectPrototypePropertyIsEnumerable = ObjectPrototype.propertyIsEnumerable;
export const ObjectPrototypeToLocaleString = ObjectPrototype.toLocaleString;
export const ObjectPrototypeToString = ObjectPrototype.toString;
export const ObjectPrototypeValueOf = ObjectPrototype.valueOf;

export const $PromiseAll = Promise.all;
export const $PromiseAllSettled = Promise.allSettled;
export const $PromiseAny = Promise.any;
export const PromisePrototype = Promise.prototype;
export const $PromiseRace = Promise.race;
export const $PromiseReject = Promise.reject;
export const $PromiseResolve = Promise.resolve;
export const PromisePrototypeCatch = PromisePrototype.catch;
export const PromisePrototypeFinally = PromisePrototype.finally;
export const PromisePrototypeThen = PromisePrototype.then;

export const ProxyRevocable = Proxy.revocable;

export const RangeErrorPrototype = RangeError.prototype;

export const ReferenceErrorPrototype = ReferenceError.prototype;

export const ReflectApply = Reflect.apply;
export const ReflectConstruct = Reflect.construct;
export const ReflectDefineProperty = Reflect.defineProperty;
export const ReflectDeleteProperty = Reflect.deleteProperty;
export const ReflectGet = Reflect.get;
export const ReflectGetOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
export const ReflectGetPrototypeOf = Reflect.getPrototypeOf;
export const ReflectHas = Reflect.has;
export const ReflectIsExtensible = Reflect.isExtensible;
export const ReflectOwnKeys = Reflect.ownKeys;
export const ReflectPreventExtensions = Reflect.preventExtensions;
export const ReflectSet = Reflect.set;
export const ReflectSetPrototypeOf = Reflect.setPrototypeOf;

export const RegExpPrototype = RegExp.prototype;
export const RegExpPrototypeExec = RegExpPrototype.exec;
export const RegExpPrototypeTest = RegExpPrototype.test;
export const RegExpPrototypeToString = RegExpPrototype.toString;

export const SetPrototype = Set.prototype;
export const SetPrototypeAdd = SetPrototype.add;
export const SetPrototypeClear = SetPrototype.clear;
export const SetPrototypeDelete = SetPrototype.delete;
export const SetPrototypeEntries = SetPrototype.entries;
export const SetPrototypeForEach = SetPrototype.forEach;
export const SetPrototypeHas = SetPrototype.has;
export const SetPrototypeKeys = SetPrototype.keys;
export const SetPrototypeValues = SetPrototype.values;
export const SetPrototypeSymbolIterator = SetPrototypeValues;

export const SharedArrayBufferPrototype = SharedArrayBuffer ? SharedArrayBuffer.prototype : undefined;
export const SharedArrayBufferPrototypeSlice = SharedArrayBufferPrototype ? SharedArrayBufferPrototype.slice : undefined;

export const StringFromCharCode = String.fromCharCode;
export const StringFromCodePoint = String.fromCodePoint;
export const StringPrototype = String.prototype;
export const StringRaw = String.raw;
export const StringPrototypeAt = StringPrototype.at;
export const StringPrototypeCharAt = StringPrototype.charAt;
export const StringPrototypeCharCodeAt = StringPrototype.charCodeAt;
export const StringPrototypeCodePointAt = StringPrototype.codePointAt;
export const StringPrototypeConcat = StringPrototype.concat;
export const StringPrototypeEndsWith = StringPrototype.endsWith;
export const StringPrototypeIncludes = StringPrototype.includes;
export const StringPrototypeIndexOf = StringPrototype.indexOf;
export const StringPrototypeLastIndexOf = StringPrototype.lastIndexOf;
export const StringPrototypeLocaleCompare = StringPrototype.localeCompare;
export const StringPrototypeMatch = StringPrototype.match;
export const StringPrototypeMatchAll = StringPrototype.matchAll;
export const StringPrototypeNormalize = StringPrototype.normalize;
export const StringPrototypePadEnd = StringPrototype.padEnd;
export const StringPrototypePadStart = StringPrototype.padStart;
export const StringPrototypeRepeat = StringPrototype.repeat;
export const StringPrototypeReplace = StringPrototype.replace;
export const StringPrototypeReplaceAll = StringPrototype.replaceAll;
export const StringPrototypeSearch = StringPrototype.search;
export const StringPrototypeSlice = StringPrototype.slice;
export const StringPrototypeSplit = StringPrototype.split;
export const StringPrototypeStartsWith = StringPrototype.startsWith;
export const StringPrototypeSubstring = StringPrototype.substring;
export const StringPrototypeToLocaleLowerCase = StringPrototype.toLocaleLowerCase;
export const StringPrototypeToLocaleUpperCase = StringPrototype.toLocaleUpperCase;
export const StringPrototypeToLowerCase = StringPrototype.toLowerCase;
export const StringPrototypeToString = StringPrototype.toString;
export const StringPrototypeToUpperCase = StringPrototype.toUpperCase;
export const StringPrototypeTrim = StringPrototype.trim;
export const StringPrototypeTrimEnd = StringPrototype.trimEnd;
export const StringPrototypeTrimStart = StringPrototype.trimStart;
export const StringPrototypeValueOf = StringPrototype.valueOf;

export const SymbolAsyncIterator = Symbol.asyncIterator;
export const SymbolFor = Symbol.for;
export const SymbolHasInstance = Symbol.hasInstance;
export const SymbolIsConcatSpreadable = Symbol.isConcatSpreadable;
export const SymbolIterator = Symbol.iterator;
export const SymbolKeyFor = Symbol.keyFor;
export const SymbolMatch = Symbol.match;
export const SymbolMatchAll = Symbol.matchAll;
export const SymbolPrototype = Symbol.prototype;
export const SymbolReplace = Symbol.replace;
export const SymbolSearch = Symbol.search;
export const SymbolSpecies = Symbol.species;
export const SymbolSplit = Symbol.split;
export const SymbolToPrimitive = Symbol.toPrimitive;
export const SymbolToStringTag = Symbol.toStringTag;
export const SymbolUnscopables = Symbol.unscopables;
export const SymbolPrototypeToString = SymbolPrototype.toString;
export const SymbolPrototypeValueOf = SymbolPrototype.valueOf;

export const SyntaxErrorPrototype = SyntaxError.prototype;

export const TypeErrorPrototype = TypeError.prototype;

export const Uint8ArrayBYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
export const Uint8ArrayPrototype = Uint8Array.prototype;

export const Uint8ClampedArrayBYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT;
export const Uint8ClampedArrayPrototype = Uint8ClampedArray.prototype;

export const Uint16ArrayBYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT;
export const Uint16ArrayPrototype = Uint16Array.prototype;

export const Uint32ArrayBYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT;
export const Uint32ArrayPrototype = Uint32Array.prototype;

export const URIErrorPrototype = URIError.prototype;

export const WeakMapPrototype = WeakMap.prototype;
export const WeakMapPrototypeDelete = WeakMapPrototype.delete;
export const WeakMapPrototypeGet = WeakMapPrototype.get;
export const WeakMapPrototypeHas = WeakMapPrototype.has;
export const WeakMapPrototypeSet = WeakMapPrototype.set;

export const WeakRefPrototype = WeakRef ? WeakRef.prototype : undefined;
export const WeakRefPrototypeDeref = WeakRefPrototype ? WeakRefPrototype.deref : undefined;

export const WeakSetPrototype = WeakSet.prototype;
export const WeakSetPrototypeAdd = WeakSetPrototype.add;
export const WeakSetPrototypeDelete = WeakSetPrototype.delete;
export const WeakSetPrototypeHas = WeakSetPrototype.has;

export const ArrayPrototypeSymbolUnscopables = ArrayPrototype[SymbolUnscopables];

export const ArrayBufferPrototypeByteLength = ReflectGetOwnPropertyDescriptor(ArrayBufferPrototype, 'byteLength').get;
export const ArrayBufferPrototypeSymbolToStringTag = ArrayBufferPrototype[SymbolToStringTag];

export const AtomicsSymbolToStringTag = Atomics ? Atomics[SymbolToStringTag] : undefined;

export const BigIntPrototypeSymbolToStringTag = BigIntPrototype ? BigIntPrototype[SymbolToStringTag] : undefined;

export const DataViewPrototypeBuffer = ReflectGetOwnPropertyDescriptor(DataViewPrototype, 'buffer').get;
export const DataViewPrototypeByteLength = ReflectGetOwnPropertyDescriptor(DataViewPrototype, 'byteLength').get;
export const DataViewPrototypeByteOffset = ReflectGetOwnPropertyDescriptor(DataViewPrototype, 'byteOffset').get;
export const DataViewPrototypeSymbolToStringTag = DataViewPrototype[SymbolToStringTag];

export const DatePrototypeSymbolToPrimitive = DatePrototype[SymbolToPrimitive];

export const FinalizationRegistryPrototypeSymbolToStringTag = FinalizationRegistryPrototype ? FinalizationRegistryPrototype[SymbolToStringTag] : undefined;

export const FunctionPrototypeSymbolHasInstance = FunctionPrototype[SymbolHasInstance];

export const JSONSymbolToStringTag = JSON[SymbolToStringTag];

export const MapPrototypeSize = ReflectGetOwnPropertyDescriptor(MapPrototype, 'size').get;
export const MapPrototypeSymbolToStringTag = MapPrototype[SymbolToStringTag];

export const MathSymbolToStringTag = Math[SymbolToStringTag];

export const PromisePrototypeSymbolToStringTag = PromisePrototype[SymbolToStringTag];

export const ReflectSymbolToStringTag = Reflect[SymbolToStringTag];

export const RegExpPrototypeDotAll = ReflectHas(RegExpPrototype, 'dotAll') ? ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'dotAll').get : undefined;
export const RegExpPrototypeFlags = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'flags').get;
export const RegExpPrototypeGlobal = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'global').get;
export const RegExpPrototypeIgnoreCase = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'ignoreCase').get;
export const RegExpPrototypeMultiline = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'multiline').get;
export const RegExpPrototypeSource = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'source').get;
export const RegExpPrototypeSticky = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'sticky').get;
export const RegExpPrototypeUnicode = ReflectGetOwnPropertyDescriptor(RegExpPrototype, 'unicode').get;
export const RegExpPrototypeSymbolMatch = RegExpPrototype[SymbolMatch];
export const RegExpPrototypeSymbolMatchAll = SymbolMatchAll ? RegExpPrototype[SymbolMatchAll] : undefined;
export const RegExpPrototypeSymbolReplace = RegExpPrototype[SymbolReplace];
export const RegExpPrototypeSymbolSearch = RegExpPrototype[SymbolSearch];
export const RegExpPrototypeSymbolSplit = RegExpPrototype[SymbolSplit];

export const SetPrototypeSize = ReflectGetOwnPropertyDescriptor(SetPrototype, 'size').get;
export const SetPrototypeSymbolToStringTag = SetPrototype[SymbolToStringTag];

export const SharedArrayBufferPrototypeByteLength = SharedArrayBufferPrototype ? ReflectGetOwnPropertyDescriptor(SharedArrayBufferPrototype, 'byteLength').get : undefined;
export const SharedArrayBufferPrototypeSymbolToStringTag = SharedArrayBufferPrototype ? SharedArrayBufferPrototype[SymbolToStringTag] : undefined;

export const StringPrototypeSymbolIterator = StringPrototype[SymbolIterator];

export const SymbolPrototypeDescription = ReflectHas(SymbolPrototype, 'description') ? ReflectGetOwnPropertyDescriptor(SymbolPrototype, 'description').get : undefined;
export const SymbolPrototypeSymbolToPrimitive = SymbolPrototype[SymbolToPrimitive];
export const SymbolPrototypeSymbolToStringTag = SymbolPrototype[SymbolToStringTag];

export const WeakMapPrototypeSymbolToStringTag = WeakMapPrototype[SymbolToStringTag];

export const WeakRefPrototypeSymbolToStringTag = WeakRefPrototype ? WeakRefPrototype[SymbolToStringTag] : WeakRefPrototype;

export const WeakSetPrototypeSymbolToStringTag = WeakSetPrototype[SymbolToStringTag];

export const uncurryThis = FunctionPrototypeBind.bind(FunctionPrototypeCall);

export const ArrayAt = ArrayPrototypeAt ? uncurryThis(ArrayPrototypeAt) : undefined;
export const ArrayConcat = uncurryThis(ArrayPrototypeConcat);
export const ArrayCopyWithin = uncurryThis(ArrayPrototypeCopyWithin);
export const ArrayEntries = uncurryThis(ArrayPrototypeEntries);
export const ArrayEvery = uncurryThis(ArrayPrototypeEvery);
export const ArrayFill = uncurryThis(ArrayPrototypeFill);
export const ArrayFilter = uncurryThis(ArrayPrototypeFilter);
export const ArrayFind = uncurryThis(ArrayPrototypeFind);
export const ArrayFindIndex = uncurryThis(ArrayPrototypeFindIndex);
export const ArrayFlat = ArrayPrototypeFlat ? uncurryThis(ArrayPrototypeFlat) : undefined;
export const ArrayFlatMap = ArrayPrototypeFlatMap ? uncurryThis(ArrayPrototypeFlatMap) : undefined;
export const ArrayForEach = uncurryThis(ArrayPrototypeForEach);
export const ArrayIncludes = ArrayPrototypeIncludes ? uncurryThis(ArrayPrototypeIncludes) : undefined;
export const ArrayIndexOf = uncurryThis(ArrayPrototypeIndexOf);
export const ArrayJoin = uncurryThis(ArrayPrototypeJoin);
export const ArrayKeys = uncurryThis(ArrayPrototypeKeys);
export const ArrayLastIndexOf = uncurryThis(ArrayPrototypeLastIndexOf);
export const ArrayMap = uncurryThis(ArrayPrototypeMap);
export const ArrayPop = uncurryThis(ArrayPrototypePop);
export const ArrayPush = uncurryThis(ArrayPrototypePush);
export const ArrayReduce = uncurryThis(ArrayPrototypeReduce);
export const ArrayReduceRight = uncurryThis(ArrayPrototypeReduceRight);
export const ArrayReverse = uncurryThis(ArrayPrototypeReverse);
export const ArrayShift = uncurryThis(ArrayPrototypeShift);
export const ArraySlice = uncurryThis(ArrayPrototypeSlice);
export const ArraySome = uncurryThis(ArrayPrototypeSome);
export const ArraySort = uncurryThis(ArrayPrototypeSort);
export const ArraySplice = uncurryThis(ArrayPrototypeSplice);
export const ArrayToLocaleString = uncurryThis(ArrayPrototypeToLocaleString);
export const ArrayToString = uncurryThis(ArrayPrototypeToString);
export const ArrayUnshift = uncurryThis(ArrayPrototypeUnshift);
export const ArrayValues = uncurryThis(ArrayPrototypeValues);
export const ArraySymbolIterator = ArrayValues;

export const ArrayBufferByteLength = uncurryThis(ArrayBufferPrototypeByteLength);
export const ArrayBufferSlice = uncurryThis(ArrayBufferPrototypeSlice);

export const BigIntToLocaleString = BigIntPrototypeToLocaleString ? uncurryThis(BigIntPrototypeToLocaleString) : undefined;
export const BigIntToString = BigIntPrototypeToString ? uncurryThis(BigIntPrototypeToString) : undefined;
export const BigIntValueOf = BigIntPrototypeValueOf ? uncurryThis(BigIntPrototypeValueOf) : undefined;

export const BooleanToString = uncurryThis(BooleanPrototypeToString);
export const BooleanValueOf = uncurryThis(BooleanPrototypeValueOf);

export const DataViewBuffer = uncurryThis(DataViewPrototypeBuffer);
export const DataViewByteLength = uncurryThis(DataViewPrototypeByteLength);
export const DataViewByteOffset = uncurryThis(DataViewPrototypeByteOffset);
export const DataViewGetBigInt64 = DataViewPrototypeGetBigInt64 ? uncurryThis(DataViewPrototypeGetBigInt64) : undefined;
export const DataViewGetBigUint64 = DataViewPrototypeGetBigUint64 ? uncurryThis(DataViewPrototypeGetBigUint64) : undefined;
export const DataViewGetFloat32 = uncurryThis(DataViewPrototypeGetFloat32);
export const DataViewGetFloat64 = uncurryThis(DataViewPrototypeGetFloat64);
export const DataViewGetInt8 = uncurryThis(DataViewPrototypeGetInt8);
export const DataViewGetInt16 = uncurryThis(DataViewPrototypeGetInt16);
export const DataViewGetInt32 = uncurryThis(DataViewPrototypeGetInt32);
export const DataViewGetUint8 = uncurryThis(DataViewPrototypeGetUint8);
export const DataViewGetUint16 = uncurryThis(DataViewPrototypeGetUint16);
export const DataViewGetUint32 = uncurryThis(DataViewPrototypeGetUint32);
export const DataViewSetBigInt64 = DataViewPrototypeSetBigInt64 ? uncurryThis(DataViewPrototypeSetBigInt64) : undefined;
export const DataViewSetBigUint64 = DataViewPrototypeSetBigUint64 ? uncurryThis(DataViewPrototypeSetBigUint64) : undefined;
export const DataViewSetFloat32 = uncurryThis(DataViewPrototypeSetFloat32);
export const DataViewSetFloat64 = uncurryThis(DataViewPrototypeSetFloat64);
export const DataViewSetInt8 = uncurryThis(DataViewPrototypeSetInt8);
export const DataViewSetInt16 = uncurryThis(DataViewPrototypeSetInt16);
export const DataViewSetInt32 = uncurryThis(DataViewPrototypeSetInt32);
export const DataViewSetUint8 = uncurryThis(DataViewPrototypeSetUint8);
export const DataViewSetUint16 = uncurryThis(DataViewPrototypeSetUint16);
export const DataViewSetUint32 = uncurryThis(DataViewPrototypeSetUint32);

export const DateGetDate = uncurryThis(DatePrototypeGetDate);
export const DateGetDay = uncurryThis(DatePrototypeGetDay);
export const DateGetFullYear = uncurryThis(DatePrototypeGetFullYear);
export const DateGetHours = uncurryThis(DatePrototypeGetHours);
export const DateGetMilliseconds = uncurryThis(DatePrototypeGetMilliseconds);
export const DateGetMinutes = uncurryThis(DatePrototypeGetMinutes);
export const DateGetMonth = uncurryThis(DatePrototypeGetMonth);
export const DateGetSeconds = uncurryThis(DatePrototypeGetSeconds);
export const DateGetTime = uncurryThis(DatePrototypeGetTime);
export const DateGetTimezoneOffset = uncurryThis(DatePrototypeGetTimezoneOffset);
export const DateGetUTCDate = uncurryThis(DatePrototypeGetUTCDate);
export const DateGetUTCDay = uncurryThis(DatePrototypeGetUTCDay);
export const DateGetUTCFullYear = uncurryThis(DatePrototypeGetUTCFullYear);
export const DateGetUTCHours = uncurryThis(DatePrototypeGetUTCHours);
export const DateGetUTCMilliseconds = uncurryThis(DatePrototypeGetUTCMilliseconds);
export const DateGetUTCMinutes = uncurryThis(DatePrototypeGetUTCMinutes);
export const DateGetUTCMonth = uncurryThis(DatePrototypeGetUTCMonth);
export const DateGetUTCSeconds = uncurryThis(DatePrototypeGetUTCSeconds);
export const DateSetDate = uncurryThis(DatePrototypeSetDate);
export const DateSetFullYear = uncurryThis(DatePrototypeSetFullYear);
export const DateSetHours = uncurryThis(DatePrototypeSetHours);
export const DateSetMilliseconds = uncurryThis(DatePrototypeSetMilliseconds);
export const DateSetMinutes = uncurryThis(DatePrototypeSetMinutes);
export const DateSetMonth = uncurryThis(DatePrototypeSetMonth);
export const DateSetSeconds = uncurryThis(DatePrototypeSetSeconds);
export const DateSetTime = uncurryThis(DatePrototypeSetTime);
export const DateSetUTCDate = uncurryThis(DatePrototypeSetUTCDate);
export const DateSetUTCFullYear = uncurryThis(DatePrototypeSetUTCFullYear);
export const DateSetUTCHours = uncurryThis(DatePrototypeSetUTCHours);
export const DateSetUTCMilliseconds = uncurryThis(DatePrototypeSetUTCMilliseconds);
export const DateSetUTCMinutes = uncurryThis(DatePrototypeSetUTCMinutes);
export const DateSetUTCMonth = uncurryThis(DatePrototypeSetUTCMonth);
export const DateSetUTCSeconds = uncurryThis(DatePrototypeSetUTCSeconds);
export const DateToDateString = uncurryThis(DatePrototypeToDateString);
export const DateToISOString = uncurryThis(DatePrototypeToISOString);
export const DateToJSON = uncurryThis(DatePrototypeToJSON);
export const DateToLocaleDateString = uncurryThis(DatePrototypeToLocaleDateString);
export const DateToLocaleString = uncurryThis(DatePrototypeToLocaleString);
export const DateToLocaleTimeString = uncurryThis(DatePrototypeToLocaleTimeString);
export const DateToString = uncurryThis(DatePrototypeToString);
export const DateToTimeString = uncurryThis(DatePrototypeToTimeString);
export const DateToUTCString = uncurryThis(DatePrototypeToUTCString);
export const DateValueOf = uncurryThis(DatePrototypeValueOf);
export const DateSymbolToPrimitive = uncurryThis(DatePrototypeSymbolToPrimitive);

export const ErrorToString = uncurryThis(ErrorPrototypeToString);

export const FinalizationRegistryRegister = FinalizationRegistryPrototypeRegister ? uncurryThis(FinalizationRegistryPrototypeRegister) : undefined;
export const FinalizationRegistryUnregister = FinalizationRegistryPrototypeUnregister ? uncurryThis(FinalizationRegistryPrototypeUnregister) : undefined;

export const FunctionApply = uncurryThis(FunctionPrototypeApply);
export const FunctionBind = uncurryThis(FunctionPrototypeBind);
export const FunctionCall = uncurryThis(FunctionPrototypeCall);
export const FunctionToString = uncurryThis(FunctionPrototypeToString);
export const FunctionSymbolHasInstance = uncurryThis(FunctionPrototypeSymbolHasInstance);

export const MapClear = uncurryThis(MapPrototypeClear);
export const MapDelete = uncurryThis(MapPrototypeDelete);
export const MapEntries = uncurryThis(MapPrototypeEntries);
export const MapForEach = uncurryThis(MapPrototypeForEach);
export const MapGet = uncurryThis(MapPrototypeGet);
export const MapHas = uncurryThis(MapPrototypeHas);
export const MapKeys = uncurryThis(MapPrototypeKeys);
export const MapSet = uncurryThis(MapPrototypeSet);
export const MapSize = uncurryThis(MapPrototypeSize);
export const MapValues = uncurryThis(MapPrototypeValues);
export const MapSymbolIterator = MapEntries;

export const NumberToExponential = uncurryThis(NumberPrototypeToExponential);
export const NumberToFixed = uncurryThis(NumberPrototypeToFixed);
export const NumberToLocaleString = uncurryThis(NumberPrototypeToLocaleString);
export const NumberToPrecision = uncurryThis(NumberPrototypeToPrecision);
export const NumberToString = uncurryThis(NumberPrototypeToString);
export const NumberValueOf = uncurryThis(NumberPrototypeValueOf);

export const ObjectHasOwnProperty = uncurryThis(ObjectPrototypeHasOwnProperty);
export const ObjectIsPrototypeOf = uncurryThis(ObjectPrototypeIsPrototypeOf);
export const ObjectPropertyIsEnumerable = uncurryThis(ObjectPrototypePropertyIsEnumerable);
export const ObjectToLocaleString = uncurryThis(ObjectPrototypeToLocaleString);
export const ObjectToString = uncurryThis(ObjectPrototypeToString);
export const ObjectValueOf = uncurryThis(ObjectPrototypeValueOf);

export const PromiseCatch = uncurryThis(PromisePrototypeCatch);
export const PromiseFinally = uncurryThis(PromisePrototypeFinally);
export const PromiseThen = uncurryThis(PromisePrototypeThen);

export const RegExpExec = uncurryThis(RegExpPrototypeExec);
export const RegExpDotAll = RegExpPrototypeDotAll ? uncurryThis(RegExpPrototypeDotAll) : undefined;
export const RegExpFlags = uncurryThis(RegExpPrototypeFlags);
export const RegExpGlobal = uncurryThis(RegExpPrototypeGlobal);
export const RegExpIgnoreCase = uncurryThis(RegExpPrototypeIgnoreCase);
export const RegExpMultiline = uncurryThis(RegExpPrototypeMultiline);
export const RegExpSource = uncurryThis(RegExpPrototypeSource);
export const RegExpSticky = uncurryThis(RegExpPrototypeSticky);
export const RegExpTest = uncurryThis(RegExpPrototypeTest);
export const RegExpToString = uncurryThis(RegExpPrototypeToString);
export const RegExpUnicode = uncurryThis(RegExpPrototypeUnicode);
export const RegExpSymbolMatch = uncurryThis(RegExpPrototypeSymbolMatch);
export const RegExpSymbolMatchAll = RegExpPrototypeSymbolMatchAll ? uncurryThis(RegExpPrototypeSymbolMatchAll) : undefined;
export const RegExpSymbolReplace = uncurryThis(RegExpPrototypeSymbolReplace);
export const RegExpSymbolSearch = uncurryThis(RegExpPrototypeSymbolSearch);
export const RegExpSymbolSplit = uncurryThis(RegExpPrototypeSymbolSplit);

export const SetAdd = uncurryThis(SetPrototypeAdd);
export const SetClear = uncurryThis(SetPrototypeClear);
export const SetDelete = uncurryThis(SetPrototypeDelete);
export const SetEntries = uncurryThis(SetPrototypeEntries);
export const SetForEach = uncurryThis(SetPrototypeForEach);
export const SetHas = uncurryThis(SetPrototypeHas);
export const SetKeys = uncurryThis(SetPrototypeKeys);
export const SetSize = uncurryThis(SetPrototypeSize);
export const SetValues = uncurryThis(SetPrototypeValues);
export const SetSymbolIterator = SetValues;

export const SharedArrayBufferByteLength = SharedArrayBufferPrototypeByteLength ? uncurryThis(SharedArrayBufferPrototypeByteLength) : undefined;
export const SharedArrayBufferSlice = SharedArrayBufferPrototypeSlice ? uncurryThis(SharedArrayBufferPrototypeSlice) : undefined;

export const StringAt = StringPrototypeAt ? uncurryThis(StringPrototypeAt) : undefined;
export const StringCharAt = uncurryThis(StringPrototypeCharAt);
export const StringCharCodeAt = uncurryThis(StringPrototypeCharCodeAt);
export const StringCodePointAt = uncurryThis(StringPrototypeCodePointAt);
export const StringConcat = uncurryThis(StringPrototypeConcat);
export const StringEndsWith = uncurryThis(StringPrototypeEndsWith);
export const StringIncludes = uncurryThis(StringPrototypeIncludes);
export const StringIndexOf = uncurryThis(StringPrototypeIndexOf);
export const StringLastIndexOf = uncurryThis(StringPrototypeLastIndexOf);
export const StringLocaleCompare = uncurryThis(StringPrototypeLocaleCompare);
export const StringMatch = uncurryThis(StringPrototypeMatch);
export const StringMatchAll = StringPrototypeMatchAll ? uncurryThis(StringPrototypeMatchAll) : undefined;
export const StringNormalize = uncurryThis(StringPrototypeNormalize);
export const StringPadEnd = StringPrototypePadEnd ? uncurryThis(StringPrototypePadEnd) : undefined;
export const StringPadStart = StringPrototypePadStart ? uncurryThis(StringPrototypePadStart) : undefined;
export const StringRepeat = uncurryThis(StringPrototypeRepeat);
export const StringReplace = uncurryThis(StringPrototypeReplace);
export const StringReplaceAll = StringPrototypeReplaceAll ? uncurryThis(StringPrototypeReplaceAll) : undefined;
export const StringSearch = uncurryThis(StringPrototypeSearch);
export const StringSlice = uncurryThis(StringPrototypeSlice);
export const StringSplit = uncurryThis(StringPrototypeSplit);
export const StringStartsWith = uncurryThis(StringPrototypeStartsWith);
export const StringSubstring = uncurryThis(StringPrototypeSubstring);
export const StringToLocaleLowerCase = uncurryThis(StringPrototypeToLocaleLowerCase);
export const StringToLocaleUpperCase = uncurryThis(StringPrototypeToLocaleUpperCase);
export const StringToLowerCase = uncurryThis(StringPrototypeToLowerCase);
export const StringToString = uncurryThis(StringPrototypeToString);
export const StringToUpperCase = uncurryThis(StringPrototypeToUpperCase);
export const StringTrim = uncurryThis(StringPrototypeTrim);
export const StringTrimEnd = StringPrototypeTrimEnd ? uncurryThis(StringPrototypeTrimEnd) : undefined;
export const StringTrimStart = StringPrototypeTrimStart ? uncurryThis(StringPrototypeTrimStart) : undefined;
export const StringValueOf = uncurryThis(StringPrototypeValueOf);
export const StringSymbolIterator = uncurryThis(StringPrototypeSymbolIterator);

export const SymbolDescription = SymbolPrototypeDescription ? uncurryThis(SymbolPrototypeDescription) : undefined;
export const SymbolToString = uncurryThis(SymbolPrototypeToString);
export const SymbolValueOf = uncurryThis(SymbolPrototypeValueOf);
export const SymbolSymbolToPrimitive = uncurryThis(SymbolPrototypeSymbolToPrimitive);

export const WeakMapDelete = uncurryThis(WeakMapPrototypeDelete);
export const WeakMapGet = uncurryThis(WeakMapPrototypeGet);
export const WeakMapHas = uncurryThis(WeakMapPrototypeHas);
export const WeakMapSet = uncurryThis(WeakMapPrototypeSet);

export const WeakRefDeref = WeakRefPrototypeDeref ? uncurryThis(WeakRefPrototypeDeref) : undefined;

export const WeakSetAdd = uncurryThis(WeakSetPrototypeAdd);
export const WeakSetDelete = uncurryThis(WeakSetPrototypeDelete);
export const WeakSetHas = uncurryThis(WeakSetPrototypeHas);

export const PromiseAll = FunctionBind($PromiseAll, Promise);
export const PromiseAllSettled = $PromiseAllSettled ? FunctionBind($PromiseAllSettled, Promise) : undefined;
export const PromiseAny = $PromiseAny ? FunctionBind($PromiseAny, Promise) : undefined;
export const PromiseRace = FunctionBind($PromiseRace, Promise);
export const PromiseReject = FunctionBind($PromiseReject, Promise);
export const PromiseResolve = FunctionBind($PromiseResolve, Promise);

export const TypedArray = ReflectGetPrototypeOf(Uint8Array);

export const $TypedArrayFrom = TypedArray.from;
export const $TypedArrayOf = TypedArray.of;
export const TypedArrayPrototype = TypedArray.prototype;
export const TypedArrayPrototypeAt = TypedArrayPrototype.at;
export const TypedArrayPrototypeCopyWithin = TypedArrayPrototype.copyWithin;
export const TypedArrayPrototypeEntries = TypedArrayPrototype.entries;
export const TypedArrayPrototypeEvery = TypedArrayPrototype.every;
export const TypedArrayPrototypeFill = TypedArrayPrototype.fill;
export const TypedArrayPrototypeFilter = TypedArrayPrototype.filter;
export const TypedArrayPrototypeFind = TypedArrayPrototype.find;
export const TypedArrayPrototypeFindIndex = TypedArrayPrototype.findIndex;
export const TypedArrayPrototypeForEach = TypedArrayPrototype.forEach;
export const TypedArrayPrototypeIncludes = TypedArrayPrototype.includes;
export const TypedArrayPrototypeIndexOf = TypedArrayPrototype.indexOf;
export const TypedArrayPrototypeJoin = TypedArrayPrototype.join;
export const TypedArrayPrototypeKeys = TypedArrayPrototype.keys;
export const TypedArrayPrototypeLastIndexOf = TypedArrayPrototype.lastIndexOf;
export const TypedArrayPrototypeMap = TypedArrayPrototype.map;
export const TypedArrayPrototypeReduce = TypedArrayPrototype.reduce;
export const TypedArrayPrototypeReduceRight = TypedArrayPrototype.reduceRight;
export const TypedArrayPrototypeReverse = TypedArrayPrototype.reverse;
export const TypedArrayPrototypeSet = TypedArrayPrototype.set;
export const TypedArrayPrototypeSlice = TypedArrayPrototype.slice;
export const TypedArrayPrototypeSome = TypedArrayPrototype.some;
export const TypedArrayPrototypeSort = TypedArrayPrototype.sort;
export const TypedArrayPrototypeSubarray = TypedArrayPrototype.subarray;
export const TypedArrayPrototypeToLocaleString = TypedArrayPrototype.toLocaleString;
export const TypedArrayPrototypeToString = ArrayPrototypeToString;
export const TypedArrayPrototypeValues = TypedArrayPrototype.values;
export const TypedArrayPrototypeSymbolIterator = TypedArrayPrototypeValues;

export const TypedArrayPrototypeBuffer = ReflectGetOwnPropertyDescriptor(TypedArrayPrototype, 'buffer').get;
export const TypedArrayPrototypeByteLength = ReflectGetOwnPropertyDescriptor(TypedArrayPrototype, 'byteLength').get;
export const TypedArrayPrototypeByteOffset = ReflectGetOwnPropertyDescriptor(TypedArrayPrototype, 'byteOffset').get;
export const TypedArrayPrototypeLength = ReflectGetOwnPropertyDescriptor(TypedArrayPrototype, 'length').get;
export const TypedArrayPrototypeSymbolToStringTag = ReflectGetOwnPropertyDescriptor(TypedArrayPrototype, SymbolToStringTag).get;

export const TypedArrayFrom = uncurryThis($TypedArrayFrom);
export const TypedArrayOf = uncurryThis($TypedArrayOf);
export const TypedArrayAt = TypedArrayPrototypeAt ? uncurryThis(TypedArrayPrototypeAt) : undefined;
export const TypedArrayBuffer = uncurryThis(TypedArrayPrototypeBuffer);
export const TypedArrayByteLength = uncurryThis(TypedArrayPrototypeByteLength);
export const TypedArrayByteOffset = uncurryThis(TypedArrayPrototypeByteOffset);
export const TypedArrayCopyWithin = uncurryThis(TypedArrayPrototypeCopyWithin);
export const TypedArrayEntries = uncurryThis(TypedArrayPrototypeEntries);
export const TypedArrayEvery = uncurryThis(TypedArrayPrototypeEvery);
export const TypedArrayFill = uncurryThis(TypedArrayPrototypeFill);
export const TypedArrayFind = uncurryThis(TypedArrayPrototypeFind);
export const TypedArrayFindIndex = uncurryThis(TypedArrayPrototypeFindIndex);
export const TypedArrayForEach = uncurryThis(TypedArrayPrototypeForEach);
export const TypedArrayIncludes = TypedArrayPrototypeIncludes ? uncurryThis(TypedArrayPrototypeIncludes) : undefined;
export const TypedArrayIndexOf = uncurryThis(TypedArrayPrototypeIndexOf);
export const TypedArrayJoin = uncurryThis(TypedArrayPrototypeJoin);
export const TypedArrayLength = uncurryThis(TypedArrayPrototypeLength);
export const TypedArrayMap = uncurryThis(TypedArrayPrototypeMap);
export const TypedArrayReduce = uncurryThis(TypedArrayPrototypeReduce);
export const TypedArrayReduceRight = uncurryThis(TypedArrayPrototypeReduceRight);
export const TypedArrayReverse = uncurryThis(TypedArrayPrototypeReverse);
export const TypedArraySet = uncurryThis(TypedArrayPrototypeSet);
export const TypedArraySlice = uncurryThis(TypedArrayPrototypeSlice);
export const TypedArraySome = uncurryThis(TypedArrayPrototypeSome);
export const TypedArraySort = uncurryThis(TypedArrayPrototypeSort);
export const TypedArraySubarray = uncurryThis(TypedArrayPrototypeSubarray);
export const TypedArrayToLocaleString = uncurryThis(TypedArrayPrototypeToLocaleString);
export const TypedArrayToString = ArrayToString;
export const TypedArrayValues = uncurryThis(TypedArrayPrototypeValues);
export const TypedArraySymbolIterator = TypedArrayValues;
export const TypedArraySymbolToStringTag = uncurryThis(TypedArrayPrototypeSymbolToStringTag);

export const BigInt64ArrayFrom = BigInt64Array ? FunctionBind($TypedArrayFrom, BigInt64Array) : undefined;
export const BigInt64ArrayOf = BigInt64Array ? FunctionBind($TypedArrayOf, BigInt64Array) : undefined;
export const BigInt64PrototypeSymbolToStringTag = BigInt64Array ? TypedArraySymbolToStringTag(new BigInt64Array) : undefined;

export const BigUint64ArrayFrom = BigUint64Array ? FunctionBind($TypedArrayFrom, BigUint64Array) : undefined;
export const BigUint64ArrayOf = BigUint64Array ? FunctionBind($TypedArrayOf, BigUint64Array) : undefined;
export const BigUint64ArrayPrototypeSymbolToStringTag = BigUint64ArrayPrototype ? TypedArraySymbolToStringTag(new BigUint64Array) : undefined;

export const Float32ArrayFrom = FunctionBind($TypedArrayFrom, Float32Array);
export const Float32ArrayOf = FunctionBind($TypedArrayOf, Float32Array);
export const Float32ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Float32Array);

export const Float64ArrayFrom = FunctionBind($TypedArrayFrom, Float64Array);
export const Float64ArrayOf = FunctionBind($TypedArrayOf, Float64Array);
export const Float64ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Float64Array);

export const Int8ArrayFrom = FunctionBind($TypedArrayFrom, Int8Array);
export const Int8ArrayOf = FunctionBind($TypedArrayOf, Int8Array);
export const Int8ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Int8Array);

export const Int16ArrayFrom = FunctionBind($TypedArrayFrom, Int16Array);
export const Int16ArrayOf = FunctionBind($TypedArrayOf, Int16Array);
export const Int16ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Int16Array);

export const Int32ArrayFrom = FunctionBind($TypedArrayFrom, Int32Array);
export const Int32ArrayOf = FunctionBind($TypedArrayOf, Int32Array);
export const Int32ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Int32Array);

export const Uint8ArrayFrom = FunctionBind($TypedArrayFrom, Uint8Array);
export const Uint8ArrayOf = FunctionBind($TypedArrayOf, Uint8Array);
export const Uint8ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Uint8Array);

export const Uint8ClampedArrayFrom = FunctionBind($TypedArrayFrom, Uint8ClampedArray);
export const Uint8ClampedArrayOf = FunctionBind($TypedArrayOf, Uint8ClampedArray);
export const Uint8ClampedArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Uint8ClampedArray);

export const Uint16ArrayFrom = FunctionBind($TypedArrayFrom, Uint16Array);
export const Uint16ArrayOf = FunctionBind($TypedArrayOf, Uint16Array);
export const Uint16ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Uint16Array);

export const Uint32ArrayFrom = FunctionBind($TypedArrayFrom, Uint32Array);
export const Uint32ArrayOf = FunctionBind($TypedArrayOf, Uint32Array);
export const Uint32ArrayPrototypeSymbolToStringTag = TypedArraySymbolToStringTag(new Uint32Array);

const getEvaluatedConstructor = expression => {
  try {
    return new Function(`'use strict'; return (${expression}).constructor;`)();
  } catch (e) {}
}

export const GeneratorFunction = getEvaluatedConstructor('function* () {}');
export const AsyncFunction = getEvaluatedConstructor('async function () {}');
export const AsyncGeneratorFunction = getEvaluatedConstructor('async function* () {}');

export const GeneratorFunctionPrototype = GeneratorFunction.prototype;
export const GeneratorFunctionPrototypeSymbolToStringTag = GeneratorFunctionPrototype[SymbolToStringTag];

export const GeneratorPrototype = GeneratorFunctionPrototype.prototype;
export const GeneratorPrototypeNext = GeneratorPrototype.next;
export const GeneratorPrototypeReturn = GeneratorPrototype.return;
export const GeneratorPrototypeThrow = GeneratorPrototype.throw;
export const GeneratorPrototypeSymbolToStringTag = GeneratorPrototype[SymbolToStringTag];

export const AsyncFunctionPrototype = AsyncFunction ? AsyncFunction.prototype : undefined;
export const AsyncFunctionPrototypeSymbolToStringTag = AsyncFunctionPrototype ? AsyncFunctionPrototype[SymbolToStringTag] : undefined;

export const AsyncGeneratorFunctionPrototype = AsyncGeneratorFunction ? AsyncGeneratorFunction.prototype : undefined;
export const AsyncGeneratorFunctionPrototypeSymbolToStringTag = AsyncGeneratorFunctionPrototype ? AsyncGeneratorFunctionPrototype[SymbolToStringTag] : undefined;

export const AsyncGeneratorPrototype = AsyncGeneratorFunctionPrototype ? AsyncGeneratorFunctionPrototype.prototype : undefined;
export const AsyncGeneratorPrototypeNext = AsyncGeneratorPrototype ? AsyncGeneratorPrototype.next : undefined;
export const AsyncGeneratorPrototypeReturn = AsyncGeneratorPrototype ? AsyncGeneratorPrototype.return : undefined;
export const AsyncGeneratorPrototypeThrow = AsyncGeneratorPrototype ? AsyncGeneratorPrototype.throw : undefined;
export const AsyncGeneratorPrototypeSymbolToStringTag = AsyncGeneratorPrototype ? AsyncGeneratorPrototype[SymbolToStringTag] : undefined;

export const ArrayIteratorPrototype = ReflectGetPrototypeOf(ArraySymbolIterator([]));
export const ArrayIteratorPrototypeNext = ArrayIteratorPrototype.next;
export const ArrayIteratorPrototypeSymbolToStringTag = ArrayIteratorPrototype[SymbolToStringTag];

export const AsyncIteratorPrototype = AsyncGeneratorPrototype ? ReflectGetPrototypeOf(AsyncGeneratorPrototype) : undefined;
export const AsyncIteratorPrototypeSymbolAsyncIterator = AsyncIteratorPrototype ? AsyncIteratorPrototype[SymbolAsyncIterator] : undefined;

export const IteratorPrototype = ReflectGetPrototypeOf(ArrayIteratorPrototype);
export const IteratorPrototypeSymbolIterator = IteratorPrototype[SymbolIterator];

export const MapIteratorPrototype = ReflectGetPrototypeOf(MapSymbolIterator(new Map));
export const MapIteratorPrototypeNext = MapIteratorPrototype.next;
export const MapIteratorPrototypeSymbolToStringTag = MapIteratorPrototype[SymbolToStringTag];

export const RegExpStringIteratorPrototype = RegExpSymbolMatchAll ? ReflectGetPrototypeOf(RegExpSymbolMatchAll(/(?:)/)) : undefined;
export const RegExpStringIteratorPrototypeNext = RegExpStringIteratorPrototype ? RegExpStringIteratorPrototype.next : undefined;
export const RegExpStringIteratorPrototypeSymbolToStringTag = RegExpStringIteratorPrototype ? RegExpStringIteratorPrototype[SymbolToStringTag] : undefined;

export const SetIteratorPrototype = ReflectGetPrototypeOf(SetSymbolIterator(new Set));
export const SetIteratorPrototypeNext = SetIteratorPrototype.next;
export const SetIteratorPrototypeSymbolToStringTag = SetIteratorPrototype[SymbolToStringTag];

export const StringIteratorPrototype = ReflectGetPrototypeOf(StringSymbolIterator(''));
export const StringIteratorPrototypeNext = StringIteratorPrototype.next;
export const StringIteratorPrototypeSymbolToStringTag = StringIteratorPrototype[SymbolToStringTag];

export const ArrayIteratorNext = uncurryThis(ArrayIteratorPrototypeNext);

export const AsyncGeneratorNext = AsyncGeneratorPrototypeNext ? uncurryThis(AsyncGeneratorPrototypeNext) : undefined;
export const AsyncGeneratorReturn = AsyncGeneratorPrototypeReturn ? uncurryThis(AsyncGeneratorPrototypeReturn) : undefined;
export const AsyncGeneratorThrow = AsyncGeneratorPrototypeThrow ? uncurryThis(AsyncGeneratorPrototypeThrow) : undefined;

export const AsyncIteratorSymbolAsyncIterator = AsyncIteratorPrototypeSymbolAsyncIterator ? uncurryThis(AsyncIteratorPrototypeSymbolAsyncIterator) : undefined;

export const GeneratorNext = uncurryThis(GeneratorPrototypeNext);
export const GeneratorReturn = uncurryThis(GeneratorPrototypeReturn);
export const GeneratorThrow = uncurryThis(GeneratorPrototypeThrow);

export const IteratorSymbolIterator = uncurryThis(IteratorPrototypeSymbolIterator);

export const MapIteratorNext = uncurryThis(MapIteratorPrototypeNext);

export const RegExpStringIteratorNext = RegExpStringIteratorPrototypeNext ? uncurryThis(RegExpStringIteratorPrototypeNext) : undefined;

export const SetIteratorNext = uncurryThis(SetIteratorPrototypeNext);

export const StringIteratorNext = uncurryThis(StringIteratorPrototypeNext);

export const FunctionApplyBind = FunctionBind(FunctionPrototypeBind, FunctionPrototypeApply);

export const ArrayOfApply = FunctionApplyBind(ArrayOf, Array);
export const ArrayPushApply = FunctionApplyBind(ArrayPrototypePush);
export const ArrayUnshiftApply = FunctionApplyBind(ArrayPrototypeUnshift);

export const BigInt64ArrayOfApply = BigInt64Array ? FunctionApplyBind($TypedArrayOf, BigInt64Array) : undefined;

export const BigUint64ArrayOfApply = BigUint64Array ? FunctionApplyBind($TypedArrayOf, BigUint64Array) : undefined;

export const Float32ArrayOfApply = FunctionApplyBind($TypedArrayOf, Float32Array);

export const Float64ArrayOfApply = FunctionApplyBind($TypedArrayOf, Float64Array);

export const Int8ArrayOfApply = FunctionApplyBind($TypedArrayOf, Int8Array);

export const Int16ArrayOfApply = FunctionApplyBind($TypedArrayOf, Int16Array);

export const Int32ArrayOfApply = FunctionApplyBind($TypedArrayOf, Int32Array);

export const MathHypotApply = FunctionApplyBind(MathHypot, Math);
export const MathMaxApply = FunctionApplyBind(MathMax, Math);
export const MathMinApply = FunctionApplyBind(MathMin, Math);

export const StringConcatApply = FunctionApplyBind(StringPrototypeConcat);

export const TypedArrayOfApply = FunctionApplyBind($TypedArrayOf);

export const Uint8ArrayOfApply = FunctionApplyBind($TypedArrayOf, Uint8Array);

export const Uint8ClampedArrayOfApply = FunctionApplyBind($TypedArrayOf, Uint8ClampedArray);

export const Uint16ArrayOfApply = FunctionApplyBind($TypedArrayOf, Uint16Array);

export const Uint32ArrayOfApply = FunctionApplyBind($TypedArrayOf, Uint32Array);
