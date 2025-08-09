FROM node:20-bullseye
WORKDIR /app
COPY package.json package-lock.json* ./
RUN apt-get update && apt-get install -y build-essential python3 && npm install --production
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
