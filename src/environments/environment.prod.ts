export const environment = {
  production: true,
  name: 'production',
  app: {
    port: {
      http: 3000,
      https: 8443
    },
    httpsEnabled: false,
    privateKey: 'sslcert/server.key',
    certificate: 'sslcert/server.crt'
  },
  db: {
    name: 'test-storage',
    path: 'mongodb://localhost',
    user: 'admin',
    password: 'admin',
    port: 27017
  },
  errorHandlerOptions: {
    dumpExceptions: true,
    showStack: true
  },
  logger: {
    api: 'logs/api.log',
    exception: 'logs/exceptions.log'
  }
};
