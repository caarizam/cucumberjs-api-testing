import {LoginInterface, AuthModel} from '../models/auth.model';
import {BaseModel} from '../models/base.model';
import { setAccessToken } from '../common/singleton.model';
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

export class AuthActions {

    async requestLogin(payload: LoginInterface) {
        let baseModel = new BaseModel();
        let authModel = new AuthModel();
        let loginResponse: LoginResponseInterface;
        //var jsonPayload = JSON.stringify(payload);

        await request(baseModel.baseUrl)
            .post(authModel.loginEndPoint)
            .set('Accept', 'application/json')
            .send(payload)
            .then(response => {
                console.log("Login Status Code: " + response.statusCode);
                //expect(expectedStatus).to.be.equal(response.statusCode);
                if(response.statusCode == 200){
                    loginResponse = {status: response.statusCode, token:response.body.access_token };
                    setAccessToken(loginResponse);
                }else{
                    loginResponse = {status: response.statusCode, token: "not_found" };
                    setAccessToken(loginResponse);
                }
            });
    }

}

export interface LoginResponseInterface {
    status: number;
    token: string;
}
