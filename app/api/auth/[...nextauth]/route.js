import NextAuth from "next-auth"
import connect from "../../../../utils/db"
import User from "../../../../models/User"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const handler =  NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id:"credentails",
      user:"credentials",
      async authorize(credentails){
        await connect();
        try{
          const user = new User.findOne({email: credentails.email} )

          if(user){
            // check password 
            const matchpassword = await bcrypt.compare(
              credentails.password,
              user.password
            )
            if(matchpassword){
              return user;

            } else {
              throw new Error("Wrong Credentials!");
            }

          }else{
            throw new Error("user not found")
          }

        } catch(err){
          throw new Error(err)
        }

      }
       
     

    })
  ],
  pages: {
    error: "/dashboard/login",
  },
})

export {handler as GET, handler as POST}