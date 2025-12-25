# TechRow - React Website

A modern React website built with Vite and Tailwind CSS.

## 🚀 Auto Deployment Setup

This project is configured for automatic deployment to your FTP server when changes are pushed to the main branch.

### Setting up GitHub Secrets

To enable automatic deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository: `https://github.com/creativehandz/techrow`
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

| Secret Name | Value |
|-------------|-------|
| `FTP_HOST` | `107.180.56.150` |
| `FTP_USERNAME` | `devpranav@dev.techrowfund.org` |
| `FTP_PASSWORD` | `IlFPIosmE5Oi` |

### How it works

- **Trigger**: Automatically runs when code is pushed to `main` branch
- **Process**: 
  1. Installs dependencies (`npm ci`)
  2. Builds the project (`npm run build`)
  3. Uploads the `dist` folder to your FTP server
- **Destination**: Files are uploaded to `/public_html/` on your server

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
techrow/
├── public/
│   └── media/
│       ├── images/
│       │   ├── logo/
│       │   ├── hero/
│       │   ├── sections/
│       │   ├── icons/
│       │   └── backgrounds/
│       └── videos/
│           ├── hero/
│           └── demos/
├── src/
│   ├── components/
│   │   └── HomePage.tsx
│   ├── App.tsx
│   └── main.tsx
└── .github/
    └── workflows/
        └── deploy.yml
```

## 🎨 Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **GitHub Actions** - CI/CD deployment

## 📝 Deployment

Every push to the `main` branch automatically triggers deployment to your live server. Check the **Actions** tab in your GitHub repository to monitor deployment status.