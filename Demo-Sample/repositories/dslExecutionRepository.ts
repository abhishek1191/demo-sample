/**
 * Created by AbhishekG on 7/12/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';
import {DSLExecutionModel} from "../models/dslExecutionModel";



@decorator.repository({ path: 'dslExecution', model: DSLExecutionModel })

export default class DSLExecutionRepository extends DynamicRepository {

}
