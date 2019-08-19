FROM node:10-alpine as build

RUN mkdir -p /app/ui

COPY ./new-ui /app/ui

RUN cd /app/ui \
  && npm install \
  && npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/ui/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]