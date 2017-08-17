import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} from 'graphql'

import PostModel from '../../models/post';
import { PostType } from './post';

export const userType = new GraphQLObjectType({
    name: 'user',
    description: 'User api',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        posts: {
            type: new GraphQLList(userType), resolve(user) {
                const { _id } = user;
                return PostModel.find({ uid: _id }).exec();
            }
        }
    })
})

export const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Insert User',
    fields: () => ({
        email: { type: GraphQLString },
        name: { type: GraphQLString }

    })
})