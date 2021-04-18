FROM node:14 AS build-env

WORKDIR /app
RUN chown node:node /app
USER node
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY ./ ./

FROM gcr.io/distroless/nodejs:14 AS develop-env
COPY --from=build-env /app /app
WORKDIR /app