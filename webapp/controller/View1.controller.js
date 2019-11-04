sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("qwerty.gitproject.controller.View1", {
		onInit: function () {

		},
		officeLocation: function (oEvent) {
				// alert("hi");\
				var oDialog = new sap.ui.xmlfragment("qwerty.gitproject.fragment.reusableFragment", this);
				this.getView().addDependent(oDialog);
				oDialog.bindAggregation("items", {
					path: "city>/city",	
					template: new sap.m.StandardListItem({
						title: "{city>name}"
					}
						)
				});
				oDialog.open();
			},
			// onSave: function () {
			// 	this.oDialog.close();
			// },
			_handleValueHelpClose: function (evt) {

				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productInput = this.byId("input1");
					productInput.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			} 
	});
});