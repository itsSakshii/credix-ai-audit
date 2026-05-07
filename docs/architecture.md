# System Architecture

```mermaid
graph TD
A[User] --> B[Next.js Frontend]
B --> C[API Routes]
C --> D[Supabase DB]
C --> E[AI Services]
E --> F[ChatGPT / Claude APIs]
D --> G[Stored Leads & Logs]


### 📌 Meaning:
- Frontend = UI
- API routes = backend logic
- Supabase = database
- AI layer = intelligence engine

---
