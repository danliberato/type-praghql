import { v4 as uuidV4} from 'uuid';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../domain/user";
import { CreateUserArgs } from '../domain/args.user';
import { UserResponse } from '../domain/response.user';


@Resolver()
export class UserResolver {

    private data: User[] = [];

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(@Args()): Promise<UserResponse> {
    // async createUser(): Promise<User> {
        const user = { id: uuidV4(), name: name, birthdate: "09-20-1991" };
        this.data.push(user);
        return user;
        // UserResponse response = user;
        // return response;
    }

}