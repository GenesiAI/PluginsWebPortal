# Genesi AI Portal

UI to create plugins for the Genesi AI platform

Landing and styling with tailwindcss, mui, API cals with generated axios

## Getting Started

Install dependencies

```
npm install
```

Start the development server (you must have the backend running)

```
npm start
```

Start the staging development (you will be connected with the staging backend)

```
npm run staging
```

## APIs

The Api calls are generated using openAPI generator for axios,
to use it you need to copy the swagger from the backend into `/specs` folder with the correct version name and run the following command on the right swagger.

```
openapi-generator-cli generate -i .\specs\V{YOURVERSION}.json -g typescript-axios -o ./generated-client
```

NB: If you don't have installed yet you can open a bash command line and use this command:

```
npx @openapitools/openapi-generator-cli generate -i ./specs/V{YOURVERSION}.json -g typescript-axios -o ./generated-client
```

Than move api, base to the apis folder than delete the generated-client folder
Remember to replace in file ./src/apis/base.ts, this row:

```
export const BASE_PATH = "http://localhost".replace(/\/+$/, "");
```

with this:

```
export const BASE_PATH = process.env.REACT_APP_BACKEND_URL!;
```
