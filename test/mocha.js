'use strict';

//Load dependencies
const axios = require('axios');
const StellarSdk = require('stellar-sdk');
const testUtils = require('./test-utils');
const chaiAsPromised = require('chai-as-promised');

if (typeof window === 'undefined') {
  global.AriariWallet = require("../lib/");
  global.axios = axios;
  global.testUtils = testUtils;
  global.StellarSdk = StellarSdk;
  global.chai = require('chai');
  global.chai.should();
  global.chai.use(chaiAsPromised);
  global.expect = global.chai.expect;
} else {
  // eslint-disable-next-line no-undef
  window.StellarSdk = StellarSdk;
  window.axios = AriariWallet.axios;
  StellarSdk.axios = AriariWallet.axios;
  window.testUtils = testUtils;
  chai.use(chaiAsPromised);
}
