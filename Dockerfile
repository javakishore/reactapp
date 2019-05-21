FROM node:alpine as nodeapp

WORKDIR /app
COPY ./ /
RUN npm install
RUN npm run build

FROM ngnix
COPY --from=nodeapp /app/build /usr/share/ngnix/html