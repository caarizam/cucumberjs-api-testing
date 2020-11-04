import { Before, BeforeAll, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import {CucumberReportExtension} from "../../reporting/CucumberReportExtension";

BeforeAll(async function() {
    console.log("Hooks:BeforeAll");
    //CucumberReportExtension.CreateDirectory(CucumberReportExtension.jsonDir);
});

Before( async function(scenario) {
    console.log("Hooks:Before");
});

After( async function(scenario) {
    console.log("Hooks:After");
    this.attach("this is an attachement");
    if (scenario.result.status === Status.FAILED) {

    }
});

AfterAll(async function() {
    console.log("Hooks:AfterAll");
    //CucumberReportExtension.GenerateCucucumberReport(CucumberReportExtension.cucumberReporterOptions);
});
