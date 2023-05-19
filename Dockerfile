FROM node:16 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
COPY --from=builder /app/dist .
# ENTRYPOINT [ "nginx", "-g","daemon off;" ]

# docker exec -it react-desck bash
# docker rm react-desck -f
# docker image ls 
# ENV SOME_ENV_VAR = defaultValue
# --env-file ./.env ------ pass file of envs