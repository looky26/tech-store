import { getXataClient } from "@/src/xata";

const xata = getXataClient()

export async function createUser(user:any) {
    try {
        const newUser = await xata.db.accounts.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
  
}