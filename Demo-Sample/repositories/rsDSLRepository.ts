/**
 * Created by AbhishekG on 7/12/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {RSDSLModel} from '../models/rsDSLModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';
import * as DSLService from "../dslServices/dslService";
import {service,inject} from 'nodedata/di/decorators';

@decorator.repository({ path: 'rsDSL', model: RSDSLModel })

export class RSDSLRepository extends DynamicRepository {

    @inject(DSLService)
    dslService : DSLService.dslService;
    
    public doCreateDSL(expression){
        return this.dslService.createDSL(expression)
        .then((result) =>{
            return result;
        });
    }

}

export default RSDSLRepository;