FROM node:16.13.2
WORKDIR /usr/src/app
ADD ./package*.json ./
VOLUME ./:/usr/src/app
RUN chown -R node:node /usr/src/app
USER node
RUN npm install
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
USER root
CMD ["npm", "run", "serve"]