import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"

export const options:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     name:"Credentials",
        //     credentials:{
        //         username:{label:"username", type:"text", placeholder:""},
        //         password:{label:"password", type:"password"}
        //     }
        // })
    ]
    
}