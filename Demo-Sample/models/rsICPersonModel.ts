/**
 * Created by AbhishekG on 7/13/2016.
 */
import {onetomany, manytoone, manytomany} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {Types} from 'mongoose';
import {Strict} from 'nodedata/mongoose/enums';

@document({ name: 'rsICPerson', strict: Strict.false })
export class RSICPersonModel {
    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @field()
    name: string;

    @field()
    title: string;

    @field()
    company: string;

}

export default RSICPersonModel;