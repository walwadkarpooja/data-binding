sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "indexit/org/databinding/utils/formatter"
],
    function(Controller,formatter){
        "use strict";
        return Controller.extend("indexit.org.databinding.controller.View2",{
            formatter: formatter,
            onInit: function () {
                const oRoute = this.getOwnerComponent().getRouter();
                oRoute.getRoute("RouteView2").attachPatternMatched(this.ObjectMatched, this)
            },
            ObjectMatched: function (oEvent){

                let prodId = oEvent.getParameter("arguments").prodId;

                // this.getView().byId('_IDGenInput').setValue(prodId)
                let sPath = "/ProductSet('" + prodId + "')";
                let oModel = this.getOwnerComponent().getModel();

                oModel.read(sPath,{
                    success : function (oData, res){
                        let jModel = new sap.ui.model.json.JSONModel(oData);
                        this.getView().setModel(jModel)
                    }.bind(this),
                    error: function (oError) {

                    }
                    
                })
            }
        })
    }
)