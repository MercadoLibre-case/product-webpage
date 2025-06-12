# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

# Instala pnpm
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# Instala dependências
RUN pnpm install

COPY . .

# Builda o projeto
RUN pnpm run build

# Etapa de produção
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
