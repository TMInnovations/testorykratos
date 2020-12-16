# Test of ory/kratos sdk for javascript/typescript/angular

## How you can run the project (Feel free to modify this section as I did'nt verify it yet)
- Be sure to have the @angular/cli installed globally via npm (if you need to, download and install nodejs in advance to use npm)
- `git clone` the repository to your machine
- `cd` into it
- run `npm i`
- run `ng build --watch`
- run `docker-compose -f docker/docker-compose.yml up -d` to start up the api server (if not successfull, try `docker-compose -f docker/docker-compose.yml up` and watch out for errors)
- open your browser at `http://localhost:4200`

## How I set up the project:
- Via `npm i -g @angular/cli` globally
- Install docker on a windows machine
- Started an angular project with ng new
- Set up the ./docker/docker-compose.yml file and corresponding config files to be able to easily startup the ory/kratos api server.
- Installed the ory/kratos sdk (https://www.npmjs.com/package/@oryd/kratos-client)
- Provided the PublicApi Class inside the app.module.ts and wrote a litte factory function to be have only one instance of it in the whole project and to be able to inject it reg. to dependency injection.
- Defined the basepath in the environment file to point at the api.

# Contribution very appreciated
Please help me and the ory developers to test and discover difficulties with the typescript sdk for ory/kratos
