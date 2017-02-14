jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/snp/handylist/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/snp/handylist/test/integration/pages/Worklist",
		"com/snp/handylist/test/integration/pages/Object",
		"com/snp/handylist/test/integration/pages/NotFound",
		"com/snp/handylist/test/integration/pages/Browser",
		"com/snp/handylist/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.snp.handylist.view."
	});

	sap.ui.require([
		"com/snp/handylist/test/integration/WorklistJourney",
		"com/snp/handylist/test/integration/ObjectJourney",
		"com/snp/handylist/test/integration/NavigationJourney",
		"com/snp/handylist/test/integration/NotFoundJourney",
		"com/snp/handylist/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
