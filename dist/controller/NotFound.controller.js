sap.ui.define([
		"com/snp/handylist/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.snp.handylist.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);