import {Given, When, Then} from 'cucumber';
import {LoginInterface} from '../support/models/auth.model';
import {AuthActions} from '../support/actions/auth.actions';

let authActions = new AuthActions();

Given('The client request for login with {string} and {string}',
    async (username: string, password: string) => {

        let payload: LoginInterface = {username: username, password: password};
        await authActions.requestLogin(payload);

    });

Then('The client should be logged',
    async () => {
        console.log("Then step");
    });
