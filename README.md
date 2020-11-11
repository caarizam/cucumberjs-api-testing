# cucumberjs-api-testing
## runing test
```npm test```

## Building the container
```docker build -t cucumber-api .```

## Running the container
```docker run -p 8888:8888 -d cucumber-api```

## Docker container logs
```docker logs <container-id>```

## Enter the container
```docker exec -it <container-id> /bin/bash```
