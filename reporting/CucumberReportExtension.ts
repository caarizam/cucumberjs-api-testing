import * as fs from 'fs';
import { mkdirp } from 'mkdirp';
import * as report from 'cucumber-html-reporter';

/**
 * This class is used to set up and create the report parameters
 */
export class CucumberReportExtension {
    static jsonDir = process.cwd() + "/reports/json";
    static htmlDir = process.cwd() + "/reports/html";
    static jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";

    static cucumberReporterOptions = {
        theme: 'bootstrap',
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "/cucumber_report.html",
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        metadata: {
            "Test Environment": "Sample API Testing",
            "Platform": "REST API with Flask",
            "Executed": "Local"
        }
    };

    static CreateDirectory(dirName) {
        try {
            if (!fs.existsSync(dirName)) {
                mkdirp.sync(dirName);
            }

        } catch (message) {
            console.log("Fail to create File / Directory, message : " + message);
        }
    }

    static GenerateCucucumberReport(cucumberReportOption) {
        report.generate(cucumberReportOption);
    }

}
