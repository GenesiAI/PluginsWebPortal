# Genesi AI Portal

UI to create plugins for the Genesi AI platform  

Landing and styling with tailwindcss, mui, API cals with generated  axios

## Getting Started
Install dependencies
```
npm install
```

Start the development server
```
npm start
```

## APIs

The Api calls are generated using openAPI generator for axios, 
to use it you need to copy the swagger from the backend into `/specs` folder with the correct version name and run the following command on the right swagger.
```
openapi-generator-cli generate -i .\specs\V{YOURVERSION}.json -g typescript-axios -o ./generated-client
```

Than move api, base to the apis folder than delete the generated-client folder

