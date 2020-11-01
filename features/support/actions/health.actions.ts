import {BaseModel} from "../models/base.model";
import {AuthModel} from "../models/auth.model";
import { getAccessToken } from '../common';
import {HealthModel} from "../models/health.model";
import {LoginResponseInterface} from "./auth.actions";
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');


export class HealthActions {

    async requestHealthCheck(type: string){
        let baseModel = new BaseModel();
        let healthModel = new HealthModel();
        let loginResponse: LoginResponseInterface;

        loginResponse = (await getAccessToken());

        await request(baseModel.baseUrl)
            .get(healthModel.healthEndPoint + type)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + loginResponse.token)
            .then(response => {
                //console.log(response.statusCode);
                expect(200).to.be.equal(response.statusCode);

            });
    }

}
