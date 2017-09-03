# altranBackend
This is a Demo to Altran

# Installation

1. First clone or download the repo

```
git clone https://github.com/FreakDroid/altranBackend.git altranBackend
```

2. Run the npm install on the path cloned the repo. You must have node 6 or later

```
 npm install
```

3. Start the server

```
 npm start
```

4. The site will be on http://localhost:9000/


# How to use it

## Login

1. To login, is neccessary a valid email, you can see a valid email [here](http://www.mocky.io/v2/5808862710000087232b75ac)

2. The pass for all the user is 12345.

3. You have 2 different roles to choice, admin or user. And you can check the role on the json checking the role field:

```
{
    "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "admin" <----- This field
},
{
    "id": "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
    "name": "Barnett",
    "email": "barnettblankenship@quotezart.com",
    "role": "user" <----- This field
},
```

## Searcher API

The searcher has been splited in 2 pages, UserSearcher and PoliciesSearcher.

The UserSearcher let you search for User by Name or User by Id, these both routes can be accessed by **Admin and User**

The PoliciesSearcher let you search for Policies by user name, this can be accessed by **User and Admin**. And also User by policy number this route is only for **Admin**.

If you need some info to search or use the api, like user name, user id or policy id, remember that you can check it [here for user](http://www.mocky.io/v2/5808862710000087232b75ac) and [here policies](http://www.mocky.io/v2/580891a4100000e8242b75c5)

## Technologies used

1. body-parser
2. bootstrap
3. ejs
4. express
5. express-flash
6. express-handlebars
7. express-session
8. lodash
9. passport
10. passport-local
11. promise
12. request


## Notes

For any suggestion, send me a PR or open a Issue.


