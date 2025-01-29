
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache \
    openssl \
    zlib \
    libgcc \
    && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so  # Create symlink for compatibility
WORKDIR /app


COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1


RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public

RUN adduser -D ghost


COPY --from=builder --chown=ghost:ghost /app/.next/standalone ./
COPY --from=builder --chown=ghost:ghost /app/.next/static ./.next/static

USER ghost

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV PLATFORM="production"
CMD ["node", "server.js"]