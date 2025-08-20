const { SMTPServer } = require("smtp-server");
const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    logger: true,
    onConnect: (session, callback) => {
        console.log("OnConnect", session);
        callback(null, { accepted: true });
    },
    onMailFrom: (address, session, callback) => {
        console.log("OnMailFrom", address);
        callback(null, { accepted: true });
    },
    onRcptTo: (address, session, callback) => {
        console.log("OnRcptTo", address, session);
        callback(null, { accepted: true });
    },
    onData: (stream, session, callback) => {
        console.log("OnData", stream, session);
        stream.on('data', (chunk) => {
            console.log('OnData', chunk.toString());
        });
        stream.on('end', () => {
            console.log('OnDataEnd');
        });
        stream.on('error', (error) => {
            console.log('OnDataError', error);
        });
        callback(null, { accepted: true });
    },
    onEnd: (session, callback) => {
        console.log("OnEnd", session);
        callback(null, { accepted: true });
    },
});
server.listen(587, "localhost", () => {
    console.log("Server is running on port 587");
}); 
 Yes right
 You can use react
 It needs to be fast
 Handle millions of email each day say 5 - 6M each day
 Multi threading system
 Have capability to work on api as well as any smtp
 Have power to utilize any port for sending
 Depending upon server capabilities;