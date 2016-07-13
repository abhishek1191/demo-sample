/**
 * Created by AbhishekG on 7/12/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {RSDSLModel} from '../models/rsDSLModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'rsDSL', model: RSDSLModel })

export default class RSDSLRepository extends DynamicRepository {

}
