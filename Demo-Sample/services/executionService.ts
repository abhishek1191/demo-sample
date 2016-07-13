/**
 * Created by AbhishekG on 7/13/2016.
 */

import {service, inject} from 'nodedata/di/decorators';
import {RSDSLModel} from "../models/rsDSLModel";

@service()
export class ExecutionService {
   executeDSL(dsl:RSDSLModel,assignModel){
       return assignModel;
   }
}
