/**
 * Created by AbhishekG on 7/13/2016.
 */
import * as decorator from "nodedata/core/decorators/repository";
import {RSICPersonModel} from '../models/rsICPersonModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'rsICPerson', model: RSICPersonModel })

export default class RSICPersonRepository extends DynamicRepository {

}
