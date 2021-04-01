FROM node:latest AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@7.3.10

COPY . /app

RUN ng build --prod --output-path=dist

# base image
FROM nginx:1.19.3
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]