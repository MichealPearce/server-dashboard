yarn install
yarn start

to add this as a service on ubuntu, I'd suggest pm2 or something
to do this with pm2:
pm2 --name ServerDashboard src/start.js
pm2 startup
pm2 save