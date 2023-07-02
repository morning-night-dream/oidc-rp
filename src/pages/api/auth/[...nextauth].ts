import NextAuth from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    {
        id: 'MorningNightDream',
        name: 'MorningNightDream',
        type: 'oauth' as const,
        version: '2.0',
        scope: 'openid profile',
        issuer: process.env.OP_URL,
        params: { grant_type: 'authorization_code' },
        token: process.env.OP_URL + '/op/token',
        authorization: process.env.OP_URL + '/op/authorize?response_type=code',
        userInfo: process.env.OP_URL + '/op/userinfo',
        jwks_endpoint: process.env.OP_URL + '/op/jwks',
        profile: (profile : any) => {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
          };
        },
        idToken: true,
        clientId: process.env.OP_CLIENT_ID,
        clientSecret: process.env.OP_CLIENT_SECRET,
    },
  ],
};
export default NextAuth(authOptions);
