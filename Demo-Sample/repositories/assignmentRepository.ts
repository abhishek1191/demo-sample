/**
 * Created by AbhishekG on 7/12/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {AssignmentModel} from '../models/assignmentModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';
import RSDSLRepository from "./rsDSLRepository";
import {service, inject} from 'nodedata/di/decorators';
import {RSDSLModel} from "../models/rsDSLModel";
import DSLExecutionRepository from "./dslExecutionRepository";



@decorator.repository({ path: 'assignment', model: AssignmentModel })

export default class AssignmentRepository extends DynamicRepository {

    @inject()
    rsDSLRepository:RSDSLRepository;

    @inject()
    dslExecutionRepository:DSLExecutionRepository;

    doExecuteDSL(assignmentId:string){
        return this.findOne(assignmentId).then((assignmentObj:AssignmentModel)=>{
            //get assigned object(assignObject) from dslObj using type and id from current repository
            console.log(assignmentObj.dsl);
            //get model and repo(assignRepo) from node data using this type (assignModel)
            //assignRepo.findone(assignId)
            //call DSL Executionservice.executeDSL(dsl,assignModel)
            //assignRepo.put(assignModel)
            //perform action and return results
        }).then((results)=>{
            //prepare the execution object
                
            //save the results to DSL Execution

            return this.dslExecutionRepository.post(results);

        }).catch((err)=>{
            return err;
        })
    }
}
