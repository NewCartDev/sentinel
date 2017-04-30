import winston from 'winston';


const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      handleExceptions: true,
      json: true,
      timestamp: (() => new Date().toLocaleTimeString()),
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
