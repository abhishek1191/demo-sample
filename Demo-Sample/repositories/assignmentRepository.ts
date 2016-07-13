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
import {pathRepoMap, getEntity, getModel} from 'nodedata/core/dynamic/model-entity';
import {repositoryMap} from "nodedata/core/exports/repositories";
import {ExecutionService} from "../services/executionService";
import {DSLExecutionModel} from "../models/dslExecutionModel";


@decorator.repository({path: 'assignment', model: AssignmentModel})

export default class AssignmentRepository extends DynamicRepository {

    @inject()
    rsDSLRepository:RSDSLRepository;

    @inject()
    dslExecutionRepository:DSLExecutionRepository;

    @inject()
    executionService:ExecutionService;

    doExecuteDSL(assignmentId:string) {

        return this.findOne(assignmentId)
            .then((assignmentObj:AssignmentModel)=> {
                //get model and repo(assignRepo) from node data using this type (assignModel)
                //todo : write framework service to get repo here. don't use repositoryMap directly
                var assignedRepo = repositoryMap()[assignmentObj.type].repo;
                //assignRepo.findone(assignId)
                return assignedRepo.findOne(assignmentObj.typeId).then((assignedModel) => {
                    //execute DSL on the assigned model
                    return this.executionService.executeDSL(assignmentObj.dsl, assignedModel);
                }).then((assignedModel)=> {
                    //save assignedModel back
                    return assignedRepo.put(assignmentObj.typeId, assignedModel);
                }).then((result)=> {
                    //post the results to execution model
                    let executionModel = new DSLExecutionModel();
                    executionModel.response = result;
                    executionModel.status = 1;
                    executionModel.success = true;
                    return this.dslExecutionRepository.post(executionModel);
                })
            }).catch((err)=> {
                return err;
            })
    }
}
