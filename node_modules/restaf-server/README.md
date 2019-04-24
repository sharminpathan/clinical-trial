
# restaf-server - web server in nodejs

## Introduction

restaf-server is a nodejs based app server for use with SAS Viya Applications.
restaf-server uses the configuration-based [hapi.js](http://hapijs.com)

## Features

*   Alow users to access your app with a friendly name. ex: http://myserver/dashboard
*   Use the env file to manage the configurations in a portable manner.
*   Supports SAS Viya OAUTH2 authentication
*   Will work on windows and unix.
*   Will support apps running running on Edge and Chrome. I have not tested others


## CLI

You can install restaf-server as a cli using the --global option
Usage:

Issue the command as follows:

```
restaf-server your-env-file
```

The single parameter is an env file which is a portable way to specify the configurations for restaf-server.
Below is an example that you can cut and paste into a file. Some recommendations

* Name the env file the same as your app (ex: dashboard.env )

* Put the env file in the same repo as your application so that it travels. Your users can then copy it and modify it as needed.


## Customization Environment Variables set thru restaf.env file

```

################################################################################
# specify environment variables                                                #
# using an env file to be portable between windows and unix                    #
################################################################################
#
# Values are examples - replace them with the values appropriate for your use case
#

#
# APPNAME - the name you want the user to use to invoke it
#           For example if APPNAME is myapp then user will invoke the app as <host:port>/myapp.
#           If you are using restaf-server as a proxy make sure your appname is not same as onf ot the points
#           in the  downstream server(ex: Do not name your app "reports', 'files' etc...
#
APPNAME=myapp

#
# Location of the application resources(html, shared resources etc...)
# each APPNAME corresponds to a sub-directory directory in this location with the same name as APPNAME.
# if current directory then set APPLOC to .
#
APPLOC=./public/myapp

#
# Specify the html that is the entry point to your app.
# A good standard is to use index.html
#
APPENTRY=index.html
#
# APPHOST - Leave this as specified below
# The service will use the hostname where restaf-server is running.
#
APPHOST=*

#
# The port on which this app is expected to run
# 8080 is probably taken so use any valid available port no.
#
APPPORT=5008

#
# You can turn off OAUTH2 base authentication
#
OAUTH2=YES

#
# If you want the server to act like a proxy server to the Viya Server
# If this set to YES, restaf-server will override OAUTH2 to be YES
#
PROXYSERVER=NO

#
# your Viya Server
# ex: http://project.openstack.sas.com
#

VIYA_SERVER=

#
# Clientid and clientsecret
# You need to obtain it either thru your admin or by using ways described in the Viya Admin doc.
# Ignored if PROXYSERVER is NO
#
CLIENTID=
CLIENTSECRET=
```

## Notes on using restaf-server as a proxy server

If you are using restaf-server as a proxy make sure your appname is not same as one of the end points
in the  downstream Viya server(ex: Do not name your app "reports', 'files' etc...
Also "shared" is reserved by restaf-server for the shared modules for all applications.

### Why use the shared subdirectory?
Many times (ex: restaf based apps) you want to store the libraries in a shared place for all the apps running on this server.
You can put such shared resources in this directory. Of course the idea way to get some of these artifacts is from an CDN  - which  is not
a sure thing for your homegrown shared libraries.


## Running in docker using Dockerfile

### Quick start 

Assuming you have installed docker do the following

```
docker build -t myapp .
```

then to run it

```
docker run -p 5000:8080 -t myapp
```

In your browser you can access the myapp application in one of the following ways

```
http://localhost:5000/myapp

or

http://<your-client-machine-address>:5000/myapp

```

# Additional features you can try

## TLS Support

To turn on TLS support add the following line to your env file. Each item is separated by blanks. Embedded blanks in the values will cause errors.


      TLS=passphrase <cert location> <key location>

      Ex:

      TLS=coolSASUsers ../myssl/cert.pem  ../myssl/key.pem

## To Be Documented

-  SAMESITE option

-  User-defined routes
      
      - Adding to default routes

      - Overriding the defaults with custom routes





