'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ajax = undefined;

var _ajax = require('neoui-sparrow/js/ajax');

var ajax = function ajax(params) {
    params = this._wrapAjax(params);
    (0, _ajax.ajax)(params);
}; /**
    * Module : kero app ajax
    * Author : liuyk(liuyk@yonyou.com)
    * Date   : 2016-07-29 09:34:01
    */

var _wrapAjax = function _wrapAjax(params) {
    var self = this;
    this.serverEventObj = this.serverEvent();
    var orignSuccess = params.success;
    var orignError = params.error;
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function resolve() {}, reject: function reject() {}
        };
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignSuccess.call(null, data);
            self._successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    params.error = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignError.call(null, data);
            self._successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    if (params.data) params.data.environment = ko.utils.stringifyJson(window.iweb.Core.collectEnvironment());else params.data = { environment: ko.utils.stringifyJson(window.iweb.Core.collectEnvironment()) };
    return params;
};

var _successFunc = function _successFunc(data, deferred) {
    deferred.resolve();
};

exports.ajax = ajax;