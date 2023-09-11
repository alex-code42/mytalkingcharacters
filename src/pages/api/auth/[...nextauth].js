import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers here as needed
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  ...authOptions, // Spread the authOptions object
});
