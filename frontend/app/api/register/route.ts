import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        console.log("name", name)
        console.log("Email", email)
        console.log("Password", password)
        return NextResponse.json({message:"User registered."}, {status: 201});
        
    }catch(error){

        return NextResponse.json({message:"An error occured"}, {status:500})
    }
}