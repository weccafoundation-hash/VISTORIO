# Vistorio

## Project overview
Vistorio is a SaaS platform with a Next.js frontend and a Laravel backend.

## Frontend (Next.js)
```bash
cd apps/web
npm install
npm run dev
```
The frontend runs at http://localhost:3000.

## Backend (Laravel)
```bash
cd apps/api
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```
The API runs at http://localhost:8000.
