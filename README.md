# React Confirm Email

## Demo
[Live demo](http://hv-email-confirmation.surge.sh/)

## Getting Started

```
git clone https://github.com/Hasham-dev/react-email-confirmation
cd react-confirm-email/client
npm i && npm start
// open another terminal tab
cd react-confirm-email/server
npm i && npm run dev
// open another terminal tab (if running mongo locally)
mongod
```
#### To run MongoDB 
* [Run mongo locally](https://medium.com/@peaonunes/how-to-install-mongodb-mac-1c70dc240f5b)
or
* [Use a third party service like mLab](https://medium.com/@alialhaddad/how-to-setup-a-online-mongo-db-database-using-mlab-24bb583720ba)

#### Create a new gmail account. 
You can sign up for a new gmail account [here](https://accounts.google.com/signup?hl=en-GB). Afterwards you will need to plug the credentials for your new account into a *.env* file on the server.

```shell
// server/.env
MAIL_USER=your_new_email_address@gmail.com
MAIL_PASS=your_password
```
#### Very Important!!!
In order for your newly created account to be able to send emails on your behalf (and allow this application to run), you will likely need to allow 'Less secure app access' on your new gmail account as described [here](https://support.google.com/accounts/answer/6010255?hl=en). 
