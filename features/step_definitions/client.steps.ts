import {Given, When, Then} from '@cucumber/cucumber';
import {LoginInterface} from '../support/models/auth.model';
import {AuthActions, LoginResponseInterface} from '../support/actions/auth.actions';
import { getAccessToken } from '../support/common/singleton.model';
const chai = require('chai');
const expect = chai.expect;

let authActions = new AuthActions();

Given('The client request for login with {string} and {string}',
    async function(username: string, password: string) {

        let payload: LoginInterface = {username: username, password: password};
        await authActions.requestLogin(payload);

    });

When('The client should be logged',
    async function() {
        let loginResponse: LoginResponseInterface;
        loginResponse = (await getAccessToken());
        await expect(200).to.be.equal(loginResponse.status);
        this.log("->Status: " + loginResponse.status);
    });
