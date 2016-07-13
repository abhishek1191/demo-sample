/**
 * Created by AbhishekG on 7/12/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {MasterDataModel} from '../models/masterDataModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'masterData', model: MasterDataModel })

export default class MasterDataRepository extends DynamicRepository {

}
