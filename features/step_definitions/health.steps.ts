import {Given, When, Then} from '@cucumber/cucumber';
import {HealthActions} from "../support/actions/health.actions";

let healthActions = new HealthActions();

When('The client requests for {string} status',
    async (healthType: string) => {
        console.log("healthType: " + healthType);
        await healthActions.requestHealthCheck(healthType);
    });

Then('The response should be message {string} and status {string}',
    async (message: string, status: string) => {
        console.log("message: " + message);
        console.log("status: " + status);

    });
