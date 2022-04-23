#!/bin/sh

sleep 15

echo start migrations
npm run db:migrate

echo start seeders
npm run db:seeds

echo start app
npm start
