<h1 align="center"> Arc Crypto Monitor</h1>

[![build](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/build.yaml/badge.svg)](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/build.yaml)
&nbsp;&nbsp;&nbsp;&nbsp; [![lint](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/lint.yaml/badge.svg)](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/lint.yaml)
&nbsp;&nbsp;&nbsp;&nbsp; [![unit tests](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/test-unit.yaml/badge.svg)](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/test-unit.yaml)
&nbsp;&nbsp;&nbsp;&nbsp; [![e2e tests](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/test-e2e.yaml/badge.svg)](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/test-e2e.yaml)
&nbsp;&nbsp;&nbsp;&nbsp; [![deploy](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/deploy.yaml/badge.svg)](https://github.com/arcbjorn/arc-crypto-monitor/actions/workflows/deploy.yaml)

SPA for real-time monitoring of 25 cryptocoins with following functions:

- search / filter coins by ticker & name
- sort coins
- switch between usd/eur/rub coin value

## Development setup (Docker version)

**Important**: Distroless docker node.js image is used - it is experimental: app is only exposed to localhost & not to network.

#### Docker Compose

```bash
cd <project-folder>
# Clean up docker-compose environment:
# - remove local containers
# - remove named volumes declared in the compose file and anonymous volumes attached to containers
# - remove containers for services not defined in the compose file
$ docker-compose down --rmi local --volumes --remove-orphans

# Rebuild containers:
$ docker-compose build --no-cache

# Run the application in the development mode:
$ docker-compose up

# Also you can run only needed services:
$ docker-compose up <service_name1> <service_name2>

# View service logs:
$ docker-compose logs <service_name>

```

#### Docker (alternative way)

Build, run and stop the service:

```bash
# Build docker image:
$ cd <project-folder>
$ docker build --tag arc-crypto-monitor .

# Create and run the container:
$ docker run --name arc-crypto-monitor --network="host" arc-crypto-monitor node_modules/.bin/vue-cli-service serve

# If container is already created, just start it:
$ docker start arc-crypto-monitor

# Stop and remove container:
$ docker rm --force arc-crypto-monitor

# Delete all images/containers/networks/cache
$ docker system prune -a
```

## Development setup (no Docker version)

```bash
# Install dependencies:
cd <project-folder>
yarn
```

```bash
# Compile and hot-reload for development:
yarn serve
```

```bash
# Compile and minify for production:
yarn build
```

```bash
# Run unit tests (Jest):
yarn test:unit
```

```bash
# Run end-to-end tests (Cypress):
yarn test:e2e
```

```bash
# Lint and fixes files (Eslint):
yarn lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
