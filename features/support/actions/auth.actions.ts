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
        //var jsonPayload = JSON.stringify(payload);

        request(baseModel.baseUrl)
            .post(authModel.loginEndPoint)
            .set('Accept', 'application/json')
            .send(payload)
            .then(response => {
                //console.log(response.statusCode);
                expect(200).to.be.equal(response.statusCode);
                setAccessToken(response.body.access_token);
            });
    }

}
