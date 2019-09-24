# The builder from node image
FROM node:alpine as builder

# build-time variables 
# prod|sandbox its value will be come from outside 
ARG env=prod

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN npm install @angular/cli@6.0.8 -g
RUN cd /app && npm install
COPY .  /app

# Build with $env variable from outside
RUN cd /app && npm run build:$env

# Build a small nginx image with static website
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/simple-project-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

### ou encore


#########
# Stage 1
# Create image based on the latest node image
#FROM node:latest as build-stage

# Create a directory where our app will be placed
#RUN mkdir /srv/telerys-front

# Change directory so that our commands run inside this new directory
#WORKDIR /srv/telerys-front

# Copy dependency definitions
#COPY package*.json ./

# Install dependnecies
#RUN npm install

# Copy all the code needed to run the app
#COPY . .

# Build the app
#RUN npm run build

# Stage 2
#FROM nginx:latest

#Copy dist content to html nginx folder, config nginx to point to index.html
#COPY --from=build-stage /srv/telerys-front/dist /usr/share/nginx/html

#COPY --from=build-stage /srv/telerys-front/nginx.conf /etc/nginx/conf.d/default.conf





###########