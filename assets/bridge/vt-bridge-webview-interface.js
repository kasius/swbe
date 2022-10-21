'use strict';

(function () {
    'use strict';

    // console.log("RPM Tercero");
    var vtBridge = window.VTWidgetBridge.Bridge;
    window.VTWidgetBridge.BridgeConfig.init();

    var eventNamesMap = new Map().set('secureStorageResponse', 'vtgettext').set('responseAllContacts', 'vtgetAllContactsmsg').set('vtGenerateOtpResponse', 'vtGenerateOtpmsg').set('vtEnrollResponse', 'vtEnrollmsg').set('vtSetPasswordResponse', 'vtSetPasswordmsg').set('responseCamera', 'getCameramsg').set('imagePickerResponse', 'imagePickermsg');

    var dataTransformationMap = new Map().set('setValueInSecureStorage', function (_ref) {
        var key = _ref.key,
            value = _ref.value;
        return { secureStorageRequest: key, valueSecureStorageRequest: value };
    }).set('getValueFromSecureStorage', function (_ref2) {
        var key = _ref2.key;
        return { secureStorageRequest: key };
    }).set('secureStorageResponse', function (_ref3) {
        var secureStorageResponse = _ref3.secureStorageResponse;
        return {
            statusCode: 0,
            statusDescription: 'OK',
            data: secureStorageResponse.substring(5, secureStorageResponse.length)
        };
    });
    var emit = function emit(event) {
        var dataObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return vtBridge.raiseEvent(eventNamesMap.get(event) || event, (dataTransformationMap.get(event) || function (x) {
            return x;
        })(dataObject));
    };
    var defaultOutputTransformation = function defaultOutputTransformation(object) {
        return {
            statusCode: 0,
            statusDescription: 'OK',
            data: object
        };
    };
    var on = function on(event, cb) {
        return vtBridge.subscribe(eventNamesMap.get(event) || event, function (_, data) {
            return cb((dataTransformationMap.get(event) || defaultOutputTransformation)(data));
        });
    };

    var off = function off(evt) {
        if (window.nsWebViewInterface.hasOwnProperty(evt)) {
            window.nsWebViewInterface[evt] = [];
        }
    };

    var isEventBrowser = function isEventBrowser() {
        return !vtBridge.bridgeExists();
    };

    window.nsWebViewInterface = {
        on: on,
        emit: emit,
        off: off,
        isEventBrowser: isEventBrowser
    };
})();