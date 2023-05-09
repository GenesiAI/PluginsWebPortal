#generate apis

copy the swagger in specs
run code generation on the right swagger
```
openapi-generator-cli generate -i .\specs\V1.0.json -g typescript-axios -o ./generated-client
```
than move api, base and configuration to the apis folder than delete the generated-client folder