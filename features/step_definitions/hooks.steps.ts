import { Before, BeforeAll, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import {CucumberReportExtension} from "../../reporting/CucumberReportExtension";

BeforeAll(async () => {
    console.log("Hooks:BeforeAll");
    CucumberReportExtension.CreateDirectory(CucumberReportExtension.jsonDir);
});

Before( async (scenario) => {
    console.log("Hooks:Before");
});

After( async (scenario) => {
    console.log("Hooks:After");
    if (scenario.result.status === Status.FAILED) {

    }
});

AfterAll(async () => {
    console.log("Hooks:AfterAll");
    CucumberReportExtension.GenerateCucucumberReport(CucumberReportExtension.cucumberReporterOptions);
});
