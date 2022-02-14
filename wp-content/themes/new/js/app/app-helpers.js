(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL) {var helpers = {


    logError: function(msg,error) {

        var request_data = {};
        request_data.action = 'logwperror'; //adds php action name
        request_data.msg = msg;
        request_data.error = error;

            jQuery.ajax({
                url: ajax_object.ajax_url,
                data: request_data,
                type: 'POST',
                success: function(data) {

                        alertify.error('Something went wrong. Sorry!. <b>' + msg + '</b>');

                }
        });

    }

}

module.exports = helpers;
}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);