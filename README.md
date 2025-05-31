<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Report Server

A NestJS backend for generating and streaming PDF reports (employment letters, country lists, order receipts, etc.) using Prisma, pdfmake, and Express.

---

## Features

- Generate PDF reports for employment letters, countries, and orders
- Stream PDFs directly to the client
- Modular structure with dependency injection
- Prisma ORM for PostgreSQL database access

---

### Setup

1. **Clone the repository**

2. **Install dependencies**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.template` to `.env` and fill in the required values.

4. **Start the database**
   ```sh
   docker compose up -d
   ```

5. **Generate Prisma client**
   ```sh
   npx prisma generate
   ```

6. **Run database migrations (if needed)**
   ```sh
   npx prisma migrate deploy
   ```

7. **Start the development server**
   ```sh
   yarn run start:dev
   # or
   npm run start:dev
   ```

---

## Usage

### Endpoints

- `GET /basic-reports/employment-letter`  
  Download a generic employment letter PDF.

- `GET /basic-reports/employment-letter/:id`  
  Download a personalized employment letter for an employee by ID.

- `GET /basic-reports/countries?continent=Europe`  
  Download a PDF report of countries filtered by continent.

### Example Request

```sh
curl http://localhost:3000/basic-reports/employment-letter/1 --output employment-letter.pdf
```

---

## Project Structure

```
src/
  basic-reports/      # Controllers, services for basic reports
  printer/            # PDF generation service (pdfmake)
  reports/            # PDF report definitions
  helpers/            # Utility classes (date, currency formatting)
  store-reports/      # (Additional report modules)
prisma/
  schema.prisma       # Prisma schema
queries/              # SQL scripts for seeding/testing
fonts/                # Fonts for pdfmake
```

---