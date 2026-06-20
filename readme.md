# 🌾 Krishi-Setu

A backend-first agricultural marketplace platform designed to connect farmers, buyers, and logistics providers through scalable, production-grade distributed systems.

> Current Status: Foundation Setup (Day 1)

---

## Overview

Krishi-Setu is being built as a modern backend engineering project focused on:

* Scalable API architecture
* Distributed systems concepts
* Type-safe development
* Production-grade configuration management
* Shared packages through a monorepo architecture
* Future microservices and worker-based processing

The project follows engineering practices commonly used by companies such as Stripe, Linear, and Shopify.

---

## Architecture

### Monorepo Structure

```text
krishi-setu/
├── package.json
├── tsconfig.base.json
├── eslint.config.ts
├── .prettierrc
├── .env.example
├── .gitignore
│
├── apps/
│   └── api/
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           └── config/
│               └── env.ts
│
├── workers/
│   └── match-worker/
│
└── packages/
    └── shared/
        ├── package.json
        ├── tsconfig.json
        └── src/
            └── index.ts
```

---

## Technology Stack

### Runtime

* Node.js
* TypeScript
* ESM Modules

### Code Quality

* ESLint v9
* TypeScript ESLint
* Prettier

### Configuration

* dotenv
* Zod

### Development Tooling

* npm Workspaces
* tsx

---

## Engineering Decisions

### 1. Monorepo Architecture

The project uses npm workspaces to manage multiple applications and packages from a single repository.

Benefits:

* Shared types across services
* Shared utilities
* Centralized tooling
* Easier scaling to microservices

---

### 2. TypeScript Strict Mode

TypeScript is configured with strict settings:

```json
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

Benefits:

* Earlier bug detection
* Better maintainability
* Safer refactoring

---

### 3. Zero-Any Policy

The codebase enforces:

```ts
@typescript-eslint/no-explicit-any
```

No explicit `any` types are allowed.

Benefits:

* Strong type safety
* Better IDE support
* Reduced runtime errors

---

### 4. Environment Validation

All environment variables are validated at startup using Zod.

Benefits:

* Fail fast on misconfiguration
* Clear error messages
* Consistent environments

---

### 5. ESM-First Development

The project uses:

```json
{
  "type": "module"
}
```

Benefits:

* Modern JavaScript standards
* Better interoperability
* Future-proof architecture

---

## Development Commands

### Install Dependencies

```bash
npm install
```

### Type Check

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

### Check Formatting

```bash
npm run format:check
```

### Run API

```bash
npx tsx apps/api/src/index.ts
```

---

## Environment Setup

Copy:

```bash
cp .env.example .env
```

Required variables:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/krishi_setu
REDIS_URL=redis://localhost:6379
```

---

## Quality Gates

Before every commit:

```bash
npm run lint
npm run format:check
npx tsc --noEmit
```

All commands must pass successfully.

---

## Current Progress

### Completed

* Git Repository Initialization
* npm Workspaces Setup
* Monorepo Structure
* TypeScript Configuration
* ESLint Configuration
* Prettier Configuration
* Environment Validation with Zod
* Development Tooling Setup

### Upcoming

* Express Server
* Request Validation
* Error Handling Middleware
* PostgreSQL Integration
* Redis Integration
* Authentication System
* Domain Modules
* Background Workers

---

## Vision

Build a production-grade agricultural marketplace platform while learning modern backend engineering, distributed systems, and scalable architecture through hands-on implementation.
