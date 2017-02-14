sap.ui.define([
	"com/snp/handylist/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"com/snp/handylist/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(BaseController, JSONModel, formatter, Filter, FilterOperator, History, MessageToast) {
	"use strict";

	return BaseController.extend("com.snp.handylist.controller.Create", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the create controller is instantiated.
		 * @public
		 */
		onInit: function() {
			var oDisplayModel = new sap.ui.model.json.JSONModel();
			var mData = {
				"display": [{
					"key": "AMOLED",
					"name": "AMOLED"
				}, {
					"key": "LCD",
					"name": "LCD"
				}, {
					"key": "OLED",
					"name": "OLED"
				}]
			};
			oDisplayModel.setData(mData);
			this.setModel(oDisplayModel, "displayModel");

			/**
			 * fetch all input fields by id
			 */
			this.oIdInput = this.byId("idInput");
			this.oPriceInput = this.byId("priceInput");
			this.oCurrencyInput = this.byId("currencyInput");
			this.oProcessorInput = this.byId("processorInput");
			this.oBatteryInput = this.byId("batteryInput");
			this.oWeightInput = this.byId("weightInput");
			this.oDisplayInput = this.byId("displayComboBox");
			this.oDiagonalInput = this.byId("diagonalInput");
		},

		onAddPress: function() {

			var oModel = this.getModel();

			var ivId = this.oIdInput.getValue();
			var ivPrice = this.oPriceInput.getValue();
			var ivCurrency = this.oCurrencyInput.getValue();
			var ivProcessor = this.oProcessorInput.getValue();
			var ivBattery = this.oBatteryInput.getValue();
			var ivWeight = this.oWeightInput.getValue();
			var ivDisplay = this.oDisplayInput.getSelectedKey();
			var ivDiagonal = this.oDiagonalInput.getValue();

			var oData = {};
			oData.Id = ivId;
			oData.Preis = ivPrice;
			oData.Currency = ivCurrency;
			oData.Prozessor = ivProcessor;
			oData.Akku = ivBattery;
			oData.Weight = ivWeight;
			oData.Display = ivDisplay;
			oData.Diagonale = ivDiagonal;

			oModel.setHeaders({
				"Content-Type": "application/atom+xml"
			});
			oModel.create("/HandySet", oData, {
				success: function(oSuccess) {
					MessageToast.show("Success");
				},
				error: function(oError) {
					MessageToast.show(oError.statusCode + " " + oError.statusText + ": " + oError.message);
				}
			});
		},

		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("worklist", true);
			}
		}

	});
});