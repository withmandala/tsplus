TypeScript Project Boilerplate
===============================

This is a TypeScript project boilerplate with complete test suite, continuous
integration, and coverage for Node.JS.

## Features

- Full-fledged TypeScript project with dev hot reloading support
- Suitable for standalone or package projects
- Complete test suite with Mocha and Chai with Promise
- Code coverage embedded in `npm test`
- Travis-CI and Coveralls support

## Getting Started

To download project boilerplate, use `git` command to clone this repository
into your destination project folder.

```sh
# Create new directory
~$ mkdir myProject

# Clone this repository to myProject folder
~$ git clone https://github.com/adzil/tsplus myProject
Cloning into 'myProject'...
```

Then, `cd` to the project directory and remove the `.git` folder so you can
initialize your own git repository.

```sh
# Enter project folder
~$ cd myProject

# Remove this repository information
~/myProject$ rm -Rf .git 

# Create new git repository
~/myProject$ git init

# Initialize node modules
~/myProject$ npm install --only=dev
```

Don't forget to change `package.json` information to match your project info
and fine tune the `tsconfig.json` to match your TypeScript compilation needs.

## Basic Compile and Run

You can also run standalone app by compile the project first.

```sh
# Compile the project
npm run compile

# And then let's run the project
npm start
```

### Run Without Compile

If you want to run the project with in-memory compiler, use

```
npm run project
```

## Development Hot Reload

You can instantly reload your project after saving file by simply running

```
npm run dev
```

This command will do in-memory compilation so if you planning on run the app
with `npm start` later, please compile it first using `npm run compile`.

Please **DO NOT** use this command for production. You can use process manager
such as PM2 to manage your production code.

If you running REPL or using stdin on your project, turn off nodemon stdin
by adding `nodemon.json` in the root project directory with this configuration

```json
{
  "restartable": false
}
```

## Publishing TypeScript Packages

TypeScript packages will automatically compiled before you publish them with

```
npm publish
```

## Test and Code Coverage

You can write test code in `test/` folder and create new test file with
`.spec.ts` extension (the .spec is important). Example test file is included
in `test/index.spec.test` and can be removed later.

Test and code coverage can be initiated by using

```
npm test
```

The coverage report is written in HTML and can be located in `coverage/`
folder.

## Travis-CI and Coveralls

The `.travis.yml` contains default configuration to run proper test on Travis
and automatically send coverage report to Coveralls. If you don't want the
coveralls integration, please delete `after_success` configuration in
`.travis.yml` or your build will failing.
