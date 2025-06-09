sap.ui.define([], function () {
    "use strict";
    return {
        formatedDate: function(date) {
            if (!date) return "";
            return new Date(date).toLocaleDateString();
        }
    };
});