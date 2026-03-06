 Installasi Backend Laravel 
 1. Buat folder dulu (contoh : Tes Fullstack Developer Energeek)
 2. Install laravel : composer create-project laravel/laravel backend
 3. Install fitur API routing dan Laravel Sanctum (PAT) : php artisan install:api

 Instllasi Frontend Vue 3 + TypeScript
 1. npm create vue@latest frontend

Cara jalankan websitenya yaitu dengan cara menjalakan semua server baik backend ataupun frontend
- Backend : php artisan serve
- Frontend : npm run dev
(Jalankan website di server lokal frontend (http://localhost:5173/))

 Setup ENV Backend Laravel
 1. Ubah ENV seperti ini : 
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432 (port default postgreeSQL)
DB_DATABASE= (masukkan nama database kalian)
DB_USERNAME=postgres  # Sesuaikan dengan username postgres-mu
DB_PASSWORD=password  # Sesuaikan dengan password postgres-mu

Setup Backend
1. Buat controller, model, migrations, seeders sesuai dengan kebutuhan

- command make controller
php artisan make:controller (sesuaikan nama controller kalian)

- command make model
php artisan make:model (sesuaikan nama model kalian) -m

- command make seeder
php artisan make:seeder (sesuaikan nama seeder kalian)

- Untuk Unit Test Backend bisa mengetikkan command berikut di terminal backend
php artisan test

-Untuk Unit Test Frontend bisa mengetikkan command berikut di terminal frontend
npm run test

- Mohon maaf tidak sempat mendeploy karena keterbatasan waktu