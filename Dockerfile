# Etapa 1: Build
FROM node:20-alpine AS builder

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json* pnpm-lock.yaml* ./
COPY . .

# Instala dependências
RUN npm install

# Gera o build de produção
RUN npm run build

# Etapa 2: Runtime
FROM node:20-alpine

# Diretório da aplicação
WORKDIR /app

# Copia arquivos do build
COPY --from=builder /app ./

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
