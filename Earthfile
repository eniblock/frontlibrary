VERSION 0.6

FROM node:14.15.3

build:
    WORKDIR /app
    COPY . .
    RUN npm install -g @angular/cli
    RUN npm install @angular-devkit/build-angular
    RUN ng build --prod
    SAVE ARTIFACT dist/xdev-lib/

deploy:
    WORKDIR /app
    COPY . .
    COPY --dir +build/xdev-lib/ dist/
    RUN --no-cache --secret token cd dist/xdev-lib/ && echo "//npm.pkg.github.com/:_authToken=${token}" > .npmrc
    RUN --no-cache --push cd dist/xdev-lib/ && npm publish
