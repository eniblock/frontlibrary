VERSION 0.6

FROM node:14.15.3

build-xdev-lib:
    WORKDIR /app
    COPY . .
    RUN npm install -g @angular/cli
    RUN npm install @angular-devkit/build-angular
    RUN ng build xdev-lib -c production
    SAVE ARTIFACT dist/xdev-lib/

build-eniblock:
    WORKDIR /app
    COPY . .
    RUN npm install -g @angular/cli
    RUN npm install @angular-devkit/build-angular
    RUN ng build eniblock -c production
    SAVE ARTIFACT dist/eniblock/

deploy:
    WORKDIR /app
    COPY . .
    COPY --dir +build-xdev-lib/xdev-lib/ +build-eniblock/eniblock/ dist/
    RUN --secret token cd dist/xdev-lib/ && echo "//npm.pkg.github.com/:_authToken=${token}" > .npmrc
    RUN --push cd dist/xdev-lib/ && npm publish
