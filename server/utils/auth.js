const { GraphQLError } = require('graphql');
const tokenizer = require('jsonwebtoken');
require('dotenv').config();

const secret = 'mysecretsshhhhh';
const expiration = '2h';

// token secret check 
// if (process.env.TOKEN_SECRET && process.env.TOKEN_SECRET.length > 3) {
//     console.log('VALID TOKEN_SECRET');
// } else {
//     console.log('MISSING TOKEN_SECRET');
// }

module.exports = {
    AuthenicationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }

        try {
            const {data} = tokenizer.verify(token, secret, { maxAge: expiration });
            req.user = data
        } catch {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function ({username, email, _id}) {
        const payload = { username, email, _id};
        return tokenizer.sign({ data: payload }, secret, {expiresIn: expiration});
    },
};


