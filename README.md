# Github Webhook Listener + Viewer

A system that receives POST requests from github webhooks to a backend server, store the data in a database, takes a screenshot of the pull request html page and present the data as a datagrid.

Frontend - Reactjs
Backend - Nodejs, Express
Helpers - puppeteer ,cloudinary CDN
Database - MongoDB

- Demo link : https://github-webhooks-auditech.netlify.app/
  Enter and give it a few second to wake up (heroku)
- Demo repository link : https://github.com/Yefid/demo-repository/pulls
  for making pull requests

## Architecture Diagram

![alt text](https://res.cloudinary.com/dnbuonpih/image/upload/v1642178101/arch_zl1qlk.png)

## Instructions

In order to make use of the system you need to:

1. Download the repository
2. Create mongodb cluster with a connection string copy it to MONGOURI varible in a .env file
3. Create "webhooks" collection and add document as follow :

4. Create cloudinary account and copy CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET to a .env file.
5. Install client and server dependencies with
   . `npm i`

6. "npm start" both server and client

### Hookdeck CLI

7. Install Hookdeck CLI in order to allow webhook forwording to your localhost server.

8. Listen to the localhost server in port 8000 with this command : "hookdeck listen 8000"
9. Create the "webhook url" with the path of "/github-webhook-listener"

10. Copy the generated "webhook url" and save it for later.

### Github webhook config

11. Go to your repo > settings > webhooks - and paste the webhook url in the Payload URL field.

### Show time

12. Make a pull request
13. Go to localhost:3000

## Screen Shots

![alt text](https://res.cloudinary.com/dnbuonpih/image/upload/v1642187499/Capture_usyruv.png)
