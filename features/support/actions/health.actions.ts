import {BaseModel} from "../models/base.model";
import {AuthModel} from "../models/auth.model";
import { getAccessToken } from '../common/singleton.model';
import {HealthModel} from "../models/health.model";
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');


export class HealthActions {

    async requestHealthCheck(type: string){
        let baseModel = new BaseModel();
        let healthModel = new HealthModel();

        request(baseModel.baseUrl)
            .post(healthModel.healthEndPoint + type)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + getAccessToken())
            .then(response => {
                //console.log(response.statusCode);
                expect(200).to.be.equal(response.statusCode);

            });
    }

}
