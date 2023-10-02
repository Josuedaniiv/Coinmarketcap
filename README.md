# Coinmarketcap

# To install cypress after npm init, do the command: 
npm install cypress --save-dev


# install typescript 

npm install typescript --save-dev
npm install @types/cypress --save-dev

# create a file tsconfig.json

{
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress"]
  },
  "include": ["cypress/**/*.ts"]
}

# Installation cucumber 
$ npm install @badeball/cypress-cucumber-preprocessor

#To run it use
cypress run --headed
