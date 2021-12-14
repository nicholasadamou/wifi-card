# pull official base image
FROM arm64v8/node:lts-alpine

# install python3 for use by node packages
RUN apk add python3

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn global add react-scripts

# add app
COPY . ./

# start app
CMD ["npm", "start"]
