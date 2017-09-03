# altranBackend
This is a Demo to Altran

# Installation

1. First clone or download the repo

```
git clone https://github.com/FreakDroid/altranBackend.git altranBackend
```

2. Run the npm install on the path cloned.

```
Casas-MacBook-Pro:altranBackend setHouse$ npm install
```

3. Start the server

```
Casas-MacBook-Pro:altranBackend setHouse$ npm start
```

4. The site will be on http://localhost:9000/


# How to use it

## log in

1. To access, its neccessary a valid email, you can see a valid email here http://www.mocky.io/v2/5808862710000087232b75ac

2. The pass is not required to access, As you saw on the json in the ulr above the user doesn't have any password, so I decieded
not use it (It's a test/demo site, not a production site).

3. You have 2 different roles, admin or user.

## Searcher API

The searcher has been splitted in 2 pages, UserSearcher and PoliciesSearcher.

The UserSearcher let you look for User by Name and User by Id, these both rotes can be access by *Admin and User*

The PoliciesSearcher let you look for Policies by user name, this can be access by user and admin. And User by policy number this route is only for admin.

