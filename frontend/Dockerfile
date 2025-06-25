FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:20
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]