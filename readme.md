# 🌾 Krishi-Setu

A backend-first agricultural marketplace platform built to learn and implement modern backend engineering, scalable architectures, distributed systems, and production-grade development practices.

---

# Project Status

**Phase:** Foundation Setup

Current focus:

* Monorepo Architecture
* TypeScript Strict Mode
* ESLint & Prettier
* Environment Validation
* Development Tooling

---

# Repository Structure

```text
krishi-setu/
│
├── app/
│   └── api/
│       ├── src/
│       │   ├── config/
│       │   │   └── env.ts
│       │   └── index.ts
│       │
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── shared/
│       ├── src/
│       │   └── index.ts
│       │
│       ├── package.json
│       └── tsconfig.json
│
├── worker/
│   └── match-worker/
│       ├── src/
│       └── package.json
│
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.ts
├── package.json
├── package-lock.json
├── readme.md
├── tsconfig.base.json
└── tsconfig.json
```

---

# Architecture Overview

Krishi-Setu follows a monorepo architecture using npm workspaces.

### API Layer

Location:

```text
app/api
```

Responsibilities:

* HTTP APIs
* Authentication
* Business Logic
* Database Access
* Redis Integration
* External Services

---

### Shared Package

Location:

```text
packages/shared
```

Responsibilities:

* Shared Types
* Utility Functions
* Constants
* Reusable Schemas

---

### Worker Services

Location:

```text
worker/match-worker
```

Responsibilities:

* Background Jobs
* Queue Processing
* Matching Algorithms
* Scheduled Tasks

---

# Technology Stack

## Runtime

* Node.js
* TypeScript
* ESM Modules

## Development

* npm Workspaces
* tsx

## Configuration

* dotenv
* Zod

## Code Quality

* ESLint v9
* TypeScript ESLint
* Prettier

---

# Engineering Decisions

## Monorepo

All services live in a single repository.

Benefits:

* Shared tooling
* Shared types
* Easier dependency management
* Better developer experience

---

## TypeScript Strict Mode

Enabled:

```json
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

Benefits:

* Fewer runtime bugs
* Safer refactoring
* Better maintainability

---

## Zero-Any Policy

The codebase enforces:

```ts
@typescript-eslint/no-explicit-any
```

Explicit `any` types are prohibited.

Benefits:

* Strong type safety
* Better IntelliSense
* Reduced technical debt

---

## Environment Validation

Environment variables are validated using Zod before application startup.

Benefits:

* Fail-fast configuration
* Safer deployments
* Clear startup errors

---

## ESM-First Development

The repository uses:

```json
{
  "type": "module"
}
```

Benefits:

* Modern JavaScript standards
* Future-proof architecture
* Better ecosystem compatibility

---

# Environment Variables

Create a `.env` file from `.env.example`.

Required variables:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/krishi_setu
REDIS_URL=redis://localhost:6379
```

---

# Development Commands

## Install Dependencies

```bash
npm install
```

## Type Checking

```bash
npx tsc --noEmit
```

## Linting

```bash
npm run lint
```

## Format Code

```bash
npm run format
```

## Check Formatting

```bash
npm run format:check
```

## Run API (Development)

```bash
npx tsx app/api/src/index.ts
```

---

# Quality Gates

Before every commit:

```bash
npm run lint
npm run format:check
npx tsc --noEmit
```

All commands must pass successfully.

---

# Current Progress

## Completed

* Git Repository Setup
* npm Workspace Configuration
* Monorepo Structure
* TypeScript Configuration
* ESLint Configuration
* Prettier Configuration
* Zod Environment Validation
* tsx Development Runtime

## Next Milestones

* Express Server Setup
* Global Error Handling
* Request Validation
* PostgreSQL Integration
* Redis Integration
* Authentication System
* Queue Processing
* Domain Modules

---

# Vision

Krishi-Setu is a long-term backend engineering project focused on learning and implementing:

* Backend Architecture
* Distributed Systems
* Event-Driven Design
* Scalability Patterns
* Production-Grade Development Practices

while solving real-world agricultural marketplace problems.
