sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("indexit.org.databinding.controller.View1", {
        onInit: function () {

        },
        onNav: function(){
            const oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteView2")
        },
        onItemDetails: function(oEvent){
            const itemTitle = oEvent.getParameter("listItem").getProperty('title');
            const oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteView2",{
                prodId : itemTitle
            });
        }
    });
});
