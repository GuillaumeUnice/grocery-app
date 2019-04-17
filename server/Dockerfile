FROM node:10

WORKDIR /usr/src/app

# package.json AND package-lock.json
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]