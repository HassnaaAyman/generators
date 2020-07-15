## README.md 

this package created to help most of us as a developers to generate 
the most common code we can write it every day like (components, pages, gql schema and environment and if your project contais forms)
with this package you can run one command and generate the fully structured components folder with the whole structure .

## Avaliable Scripts

# first to use the package into your project you need to add some scripts  to your package.json to can run the bellow commands : 

 - "plop": "plop --plopfile node_modules/generators-packages/index.js",
 - "plop-gql": "plop --plopfile node_modules/generators-packages/index.js & & yarn add graphql && yarn add react-relay && yarn add relay-hooks && yarn add relay-runtime && yarn add relay-compiler && yarn add relay-config && yarn add babel-plugin-relay",
 - "plop-form":"plop --plopfile node_modules/generators-packages/index.js"

in the project directory, you can run :

### `npm i generators-cli` to install it into your directory

if you need to create components or pages, you can run :

### `npm run plop`

it wil ask you some questions, like : 

- your component name
- if you want to add an internal state will create also a useCallback for   every state
- if you want to wrap your component with React.memo 
- finally if you want to add a gql structure and syntex 

if you need to add a gql to your project, you can run : 

### `npm run plop-gql`

- it will install all the dependencies which needs to let you use gql using relay in your project such as react-relay , relay-compiler and so on ...

- also will create a folder called gql contains an environmentjs file with the fully configration and a schemajs file with an example . 

finally if you need to use a form in your project, you can run :

### `npm run plop-form`

it will help you to generate a form component 