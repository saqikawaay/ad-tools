
# Advitals #
Advitals is a tool for managing google ads accounts at scale. 

Pending heaps more stuff.

## Theming ##

We're using Material UI with Emotion for styling. 
Docs[https://mui.com/material-ui/getting-started/usage/] for material. 

Remember that MUI is mobile first, and you handle growth by media queries. 


Font: Inter is heading, Roboto is everything else. It's classic for a reason. 

Colours: 
TODO - probably should get Tailwind involved at some point. 

## Google Ads API ##
Using Opteo's repackage of the Google Ads API from Node Package Manager. The NPM package covers most anything the API can do, but contributions to that API system are surely welcome. 

## Routes ##

Routes need work, using React Router DOM for it. 

## database ##

We're using Supabase. It's great. Find the docs read up. Fancy PostGRES (possibly overkill, but easy to organise and scales horizontally). 

There's local and production which i don't quite yet understand but they're set up that way for now. You'll need .env.local and .env.production keys to get things up and running. 

Need to have the database syncing somehow to the production; unclear how to do that (see fireship course on the topic). 

Whole lot of architecture work is needed to make this easier to deal with. 

## Authentication ##
Authentication is actually done through the supabase auth, and ui is partially provided there. People can sign in with Google with the login. Currently more scopes need to be added as well as the handling of authentication, session tokens, and more. 


