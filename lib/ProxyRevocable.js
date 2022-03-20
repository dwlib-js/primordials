'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ProxyRevocable = GetIntrinsicOrThrow('Proxy.revocable');

module.exports = ProxyRevocable;
