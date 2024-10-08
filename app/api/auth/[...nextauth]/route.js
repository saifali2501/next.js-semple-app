

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log('GITHUB_ID:', process.env.NEXT_PUBLIC_GITHUB_ID);
console.log('GITHUB_SECRET:', process.env.NEXT_PUBLIC_GITHUB_SECRET);

const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        clientSecret : process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
      
    }),
    
  ],
  debug: true,
});

export { handler as GET, handler as POST };
