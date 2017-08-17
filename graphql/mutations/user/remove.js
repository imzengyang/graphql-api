import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql'

import {userType} from '../../types/user'
import UserModel from '../../../models/user'

export default{
    type: userType,
    args:{
        id:{
            name:'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const removeUser = new UserModel.findByIdAndRemove(params.id).exec();
        if(!removeUser){
            throw new Error('Romve user error')
        }
        return removeUser;
    }
}