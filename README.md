# 🎟️ Event Platform

<div align="center">

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Monorepo](https://img.shields.io/badge/monorepo-turborepo-black)
![Backend](https://img.shields.io/badge/backend-Next.js%20%2B%20Prisma-blue)
![Database](https://img.shields.io/badge/database-PostgreSQL-blue)
![Mobile](https://img.shields.io/badge/mobile-Flutter-blue)

**A modern, secure event management platform with QR-based access control**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Docs](#-api-documentation) • [Roadmap](#-roadmap)

</div>

---

## 📖 Overview

Event Platform is a comprehensive event management and access control system designed for real-world operations. Built with security, auditability, and scalability at its core, it enables organizers to create events, issue invitations, and validate entry using secure QR codes with transaction-safe scanning.

---

## ✨ Features

### 🔐 **Authentication & Authorization**
- JWT-based secure authentication
- Role-based access control with three distinct roles:
  - **ADMIN** – Complete system administration
  - **ORGANIZER** – Event and invitation management
  - **SCANNER** – QR code validation at entry points

### 🗓️ **Event Lifecycle Management**
- Explicit event state machine with controlled transitions:
  ```
  DRAFT → LIVE → COMPLETED
          ↓
       CANCELLED
  ```
- Events must be published (`LIVE`) before scanning is enabled
- Prevents premature or invalid entry attempts

### 🎫 **Smart Invitation System**
- Unique invitation per guest with secure QR token generation
- Comprehensive invitation states: `CREATED`, `SENT`, `CHECKED_IN`, `CANCELLED`, `EXPIRED`
- Multiple ticket types: `REGULAR`, `VIP`, `STAFF`, `FREE`
- Configurable entry limits and re-entry policies

### 📱 **Transaction-Safe QR Validation**
- Atomic scan validation using database transactions
- Real-time duplicate scan detection
- Strict event and invitation state enforcement
- Complete audit trail with scanner identity tracking

### 🧾 **Full Audit & Traceability**
- Every scan attempt logged with timestamp and metadata
- Scanner identity, IP address, and result tracking
- Built-in fraud detection and reporting capabilities

---

## 🧱 Tech Stack

<table>
<tr>
<td width="50%">

**Backend**
- Next.js (App Router)
- Prisma ORM
- PostgreSQL
- JWT Authentication
- pnpm + Turborepo

</td>
<td width="50%">

**Frontend**
- Next.js (Web Dashboard)
- Flutter (Mobile Scanner)

</td>
</tr>
</table>

---

## 🗂️ Project Structure

```
event-platform/
├── apps/
│   ├── api/              # Backend API (Next.js)
│   ├── web/              # Web dashboard (Next.js)
│   └── mobile/           # Scanner app (Flutter)
│
├── packages/
│   └── db/               # Prisma schema & database client
│
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18 or higher
- **pnpm** package manager
- **PostgreSQL** database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/event-platform.git
   cd event-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `apps/api` directory:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/event_platform
   JWT_SECRET=your-secret-key
   ```

4. **Generate Prisma client**
   ```bash
   pnpm --filter @event-platform/db prisma generate
   ```

5. **Run database migrations**
   ```bash
   pnpm --filter @event-platform/db prisma migrate dev
   ```

6. **Start development servers**
   ```bash
   pnpm dev
   ```

Your applications will be available at:
- **Web Dashboard**: http://localhost:3000
- **API Server**: http://localhost:4000

---

## 📡 API Documentation

### 🔐 Authentication

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "phone": "255712345678",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "uuid",
    "fullName": "John Doe",
    "role": "ORGANIZER"
  }
}
```

---

### 🗓️ Events

#### Create Event
```http
POST /api/events
Authorization: Bearer <token>
Roles: ADMIN, ORGANIZER

{
  "title": "Afro Night",
  "venue": "City Hall",
  "eventDate": "2026-01-20T18:00:00Z",
  "allowReentry": false
}
```

#### Publish Event
```http
POST /api/events/{eventId}/publish
Authorization: Bearer <token>
```
Transitions event from `DRAFT` to `LIVE` status.

#### List Events
```http
GET /api/events
Authorization: Bearer <token>
```

---

### 🎫 Invitations

#### Create Invitation
```http
POST /api/events/{eventId}/invitations
Authorization: Bearer <token>

{
  "guestName": "Jane Doe",
  "guestPhone": "255712345678",
  "ticketType": "VIP",
  "price": 20000,
  "maxEntries": 1
}
```

#### List Invitations
```http
GET /api/events/{eventId}/invitations
Authorization: Bearer <token>
```

---

### 📱 Scan Validation

#### Validate QR Code
```http
POST /api/scans/validate
Authorization: Bearer <token>
Role: SCANNER

{
  "qrToken": "6d7aa4e0052c92a3294949d91cf148ba"
}
```

**Possible Responses:**
```json
{ "result": "SUCCESS", "guestName": "Jane Doe" }
{ "result": "DUPLICATE", "message": "Already checked in" }
{ "result": "EXPIRED", "message": "Invitation expired" }
{ "result": "INVALID", "message": "Invalid QR code" }
```

---

## 🛣️ Roadmap

- [x] Authentication & role-based access control
- [x] Event lifecycle management
- [x] Invitation & QR generation
- [x] Transaction-safe scan validation
- [ ] Web dashboard UI
- [ ] Invitation delivery (SMS / WhatsApp)
- [ ] Flutter scanner mobile app
- [ ] Reports & analytics dashboard
- [ ] Offline scanning support
- [ ] Multi-language support
- [ ] Email notifications

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For questions or support, please open an issue or contact the maintainers.

---

<div align="center">

**Built with ❤️ using Next.js, Prisma, and Flutter**

</div>