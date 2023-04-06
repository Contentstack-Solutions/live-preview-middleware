import { getEntries } from './app/src/entries.js'

export const handler = async function (event, context, callback) {
    if (event.requestContext.http.path == '/entries') {
        const response = await getEntries(event.queryStringParameters);
        callback(null, {
            statusCode: 200,
            body: response,
        });
    }
}