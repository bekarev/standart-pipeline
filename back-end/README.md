### Node v18.17.1

`npx cross-env PORT=5000 jest --testTimeout=5000` - run tests

`npx cross-env PORT=5000 node index.js` - start server

`docker build -t backend-pipeline:latest .` - build docker image

`docker run -p 5000:5000 back-end-pipeline` - run docker container
