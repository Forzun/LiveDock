'use server';

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

export const getClerkUser = async ({ userIds } : {userIds: string[]}) => { 
    try{
        const client = await clerkClient();
        const { data } = await client.users.getUserList({ 
            emailAddress: userIds,
        });

        console.log(data);

        const users = data.map((user) => ({
            id:user.id, 
            name: `${user.firstName} ${user.lastName}`, 
            email: user.emailAddresses[0].emailAddress, 
            avatar: user.imageUrl
        }))
        
        const sortedUser = userIds.map((email) => users.find((user) => user.email === email))

        return parseStringify(sortedUser)
    }catch(error){ 
        console.log(`Error fetching users: ${error}`)
    }

}




