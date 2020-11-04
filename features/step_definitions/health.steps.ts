import {Given, When, Then} from '@cucumber/cucumber';
import {HealthActions} from "../support/actions/health.actions";
import {LastResponseInterface} from "../support/models/base.model";
import { getLastResponse} from '../support/common/singleton.model';

const chai = require('chai');
const expect = chai.expect;

let healthActions = new HealthActions();

When('The client requests for {string} status',
    async function (healthType: string) {
        console.log("healthType: " + healthType);
        await healthActions.requestHealthCheck(healthType);
    });

Then('The response should be message {string} and status {string}',
    async function (message: string, status: string) {

        let lastResponse: LastResponseInterface;
        lastResponse = getLastResponse();
        expect(200).to.be.equal(lastResponse.status_code);
        expect(message).to.be.equal(lastResponse.body.message);
        expect(status).to.be.equal(lastResponse.body.status);

    });
