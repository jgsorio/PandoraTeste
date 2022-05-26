FROM node:16.15

WORKDIR /app

# install app dependencies
COPY package.json .

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start", "--host"]