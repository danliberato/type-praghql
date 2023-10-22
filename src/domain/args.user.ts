import { type } from "os";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
class CreateUserArgs{

    @Field(type => String, {nullable: false})
    name?: string

    @Field(type => String, {nullable: false})
    birthdate?: string

}