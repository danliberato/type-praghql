import { Field, ID, ObjectType } from 'type-graphql';
import { InterfaceUser } from './interfaces/interface.user';

@ObjectType()
export class User implements InterfaceUser{
    @Field(_type => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    birthdate: Date;
}