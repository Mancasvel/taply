# Taply - Pre-registration Landing Page

![Taply Logo](public/taply.png)

## 🎯 Description

Premium landing page for Taply, the smart card with NFC technology that connects professionals and creatives in an innovative way. This application is built with Next.js 14, TypeScript, Tailwind CSS and connected to MongoDB Atlas to manage pre-registrations.

## ✨ Features

### Design and UX
- **Premium aesthetics**: Dark background with electric blue (#007AFF) and lime green (#A8FF60) accents
- **Fluid animations**: Micro-interactions with Framer Motion
- **Responsive design**: Optimized for all devices
- **Modern typography**: Montserrat (headings) and Inter (body)

### Sections
1. **Hero**: Logo, tagline, NFC animation and main CTA
2. **Benefits**: 5 key features with minimalist iconography
3. **How it works**: 4-step process with interactive visualization
4. **Pre-registration**: Form connected to MongoDB Atlas
5. **Footer**: Legal links and social networks

### Technical features
- **Complete pre-registration**: Data validation and MongoDB storage
- **API Routes**: Secure endpoints for data management
- **Validations**: Email, phone and required fields
- **Visual feedback**: Success/error messages in real time
- **SEO optimized**: Metadata and semantic structure

## 🚀 Installation and Configuration

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account

### 1. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Configure MongoDB Atlas

1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (the free tier is sufficient)
3. Create a database user with read/write permissions
4. Get your connection string (should look like: `mongodb+srv://user:password@cluster.mongodb.net/`)

### 3. Environment variables

Create a `.env.local` file in the project root with the following variables:

\`\`\`env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# Database Name
MONGODB_DB=taply
\`\`\`

**Important**: Replace `<username>`, `<password>`, `<cluster>` and `<database>` with your real data.

### 4. Run in development

\`\`\`bash
npm run dev
\`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
taply/
├── app/
│   ├── api/
│   │   └── preregister/
│   │       └── route.ts          # API endpoint for pre-registrations
│   ├── globals.css               # Global styles and utilities
│   ├── layout.tsx                # Main layout with fonts
│   └── page.tsx                  # Main page
├── components/
│   ├── Hero.tsx                  # Hero section with animations
│   ├── Benefits.tsx              # Taply benefits
│   ├── HowItWorks.tsx           # 4-step process
│   ├── PreRegister.tsx          # Pre-registration form
│   └── Footer.tsx               # Footer with links and social networks
├── lib/
│   ├── mongodb.ts               # MongoDB configuration
│   └── models/
│       └── PreRegister.ts       # Model and validations
├── public/
│   └── taply.png                # Taply logo
├── .env.local.example           # Example of environment variables
├── package.json
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json
\`\`\`

## 🎨 Brand Guide

### Colors
- **Electric blue**: #007AFF (primary)
- **Lime green**: #A8FF60 (accent)
- **Carbon black**: #111111 (background)
- **Dark gray**: #1C1C1E (secondary)
- **White**: #FFFFFF (text)

### Typography
- **Montserrat Bold**: Logos and headings
- **Inter**: Body text

### Design principles
- Minimalist and technological
- Subtle and elegant animations
- Micro-interactions on hover and tap
- Spacious layout and clear hierarchy

## 🔧 Available Scripts

\`\`\`bash
npm run dev      # Runs the development server
npm run build    # Builds the application for production
npm run start    # Runs the application in production mode
npm run lint     # Runs the linter
\`\`\`

## 📊 API Endpoints

### POST /api/preregister
Registers a new user on the waiting list.

**Request body:**
\`\`\`json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1 555 123 456" // optional
}
\`\`\`

**Response (201):**
\`\`\`json
{
  "success": true,
  "message": "Pre-registration successful",
  "id": "..."
}
\`\`\`

**Response (400/409/500):**
\`\`\`json
{
  "error": "Error message"
}
\`\`\`

### GET /api/preregister
Gets pre-registration statistics (protect in production).

**Response (200):**
\`\`\`json
{
  "totalPreregisters": 42
}
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel configuration
4. Deploy automatically

### Other platforms
- Netlify
- Railway
- Render
- DigitalOcean App Platform

**Important**: Don't forget to configure environment variables on your hosting platform.

## 🔒 Security

- Environment variables are never committed to the repository
- Data validation is done on both client and server
- Emails are stored in lowercase to avoid duplicates
- The statistics endpoint should be protected with authentication in production

## 🎯 Next Steps

- [ ] Implement admin authentication system
- [ ] Dashboard to visualize pre-registrations
- [ ] Email notification system
- [ ] A/B testing of CTAs
- [ ] Analytics and conversion tracking
- [ ] Referral system
- [ ] CRM integration

## 🤝 Contributions

This is a private Taply project. To contribute, contact the development team.

## 📄 License

© 2025 Taply. All rights reserved.

## 📞 Contact

For more information about Taply, visit our landing page or contact us through our social networks.

---

**Developed with ❤️ for the professional of the future**

