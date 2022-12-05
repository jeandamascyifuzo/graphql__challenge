import { mergeResolvers } from '@graphql-tools/merge'
import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
// import { context } from './context'
import { connect } from './database/db.config'
import nationResolvers from './resolvers/nationResolver'
import typeDefs from './schema/index'


// import createRatingSystemresolver from './resolvers/createRatingSystemresolver'
const PORT = process.env.PORT || 4000

const resolvers = mergeResolvers([nationResolvers])

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
    cache: 'bounded',
    // context: context,
    csrfPrevention: true,
})
connect().then(() => {
    console.log('Database connected')
    server
        .listen({ port: PORT })
        .then(({ url }) => console.log(`Server ready at ${url}`))
})