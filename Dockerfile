# ...
# antes do EXPOSE/ENV/CMD

# (assegure-se de ter instalado o pnpm globalmente,
# como vimos na iteração anterior)
RUN npm install -g pnpm

# força o Next.js a ouvir em todas as interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# aqui tiramos o “--” e passamos os flags direto
CMD ["pnpm", "start", "-p", "3000", "-H", "0.0.0.0"]
