#generate apis

copy the swagger in specs
run code generation on the right swagger
```
openapi-generator-cli generate -i .\specs\V{YOURVERSION}.json -g typescript-axios -o ./generated-client
```
than move api, base and configuration to the apis folder than delete the generated-client folder

in configuration update the base path to export const BASE_PATH = "3fa85f64-5717-4562-b3fc-2c963f66afa6.genesi.ai"; 
