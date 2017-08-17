import {
    GraphQLNonNull
}from 'graphql'

import {postType ,postInputType} from '../../types/post';
import PostModel from '../../../models/post'

export default{
    type:postType,
    args:{
        data:{
            name:'data',
            type:new GraphQLNonNull(postInputType)
        }
    },
    resolve(root,params){
        const pModel = new PostModel(params.data);
        const newModel = pModel.save();
        if(!newModel){
            throw new Error('Error adding post')
        }
        return newModel;
    }
    
}