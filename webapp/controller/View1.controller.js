sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("FullScreenApp.controller.View1", {

		onInit: function () {

			this._oView = this.getView();

			var oViewModel = new JSONModel({
				PoNumber: "",
				Lifnr: "",
				Waers: "",
				Bukrs: ""
			});

			this._oView.setModel(oViewModel, "viewModel");
			this._oTable = this._oView.byId("table0");
			debugger;

		},

		onAddPurchaseOrder: function () {

			debugger;

			var oModel = this._oView.getModel(),
				sPath = "/SatinalmaSiparisiSet",
				oData = {},
				mParameters = {};

			oData.Ponumber = this._oView.getModel("viewModel").getProperty("/PoNumber");
			oData.Lifnr    = this._oView.getModel("viewModel").getProperty("/Lifnr");
			oData.Waers    = this._oView.getModel("viewModel").getProperty("/Waers");
			oData.Bukrs    = this._oView.getModel("viewModel").getProperty("/Bukrs");

			mParameters.success = function (oData2, oResponse) {
				debugger;
				var oBinding = this._oTable.getBinding("items");
				oBinding.filter([]); //Yeniden getEntityset çağrılır.
				MessageBox.success("Sas başarıyla yaratıldı.");
			}.bind(this);
			mParameters.error = function (oError) {
				debugger;
				MessageBox.error("Sas yaratılamadı!");
			};
			oModel.create(sPath, oData, mParameters);
		}
	});

});