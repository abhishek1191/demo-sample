/**
 * Created by AbhishekG on 7/12/2016.
 */
import {onetoone} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {Types} from 'mongoose';
import {Strict} from 'nodedata/mongoose/enums';
import {RSDSLModel} from "./rsDSLModel";

@document({ name: 'assignment', strict: Strict.false })
export class AssignmentModel {
    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @onetoone({ rel: 'roles', itemType: RSDSLModel, embedded: false, persist: true, eagerLoading: true })
    dsl:RSDSLModel;

    @field()
    type: string;

    @field()
    typeId: string;


}
export default AssignmentModel;