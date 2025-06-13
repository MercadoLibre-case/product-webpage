# Etapa de build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# Etapa final
FROM node:22-alpine
WORKDIR /app

# 1) Instala o pnpm no container final
RUN npm install -g pnpm

# 2) Copia os artefatos já gerados pelo builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
# (opcional) se você realmente precisar do next.config.ts em runtime
# COPY --from=builder /app/next.config.ts ./

# 3) Faz o Next ouvir em todas as interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# 4) Usa o pnpm que agora está instalado
CMD ["pnpm", "start", "-p", "3000", "-H", "0.0.0.0"]
