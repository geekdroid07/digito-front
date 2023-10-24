import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: 'token_secret_suhhh',
  providers: [
    GoogleProvider({
      clientId: '813686813254-8vpmn05jm03g5s7td83rvimeumqv66rb.apps.googleusercontent.com',
      clientSecret: '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'
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
    async session({session, token}) {
      session.user = token;
      return session;
    }
  }
});
