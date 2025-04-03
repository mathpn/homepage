# Personal Website Infrastructure

This repository contains the infrastructure code for a personal website built with Eleventy (11ty) and Python-based social media syndication.

## Project Structure

```
.
├── .eleventy.js          # Eleventy configuration
├── src/                  # Source files
│   ├── _includes/       # Layout templates
│   ├── _layouts/        # Base layouts
│   ├── assets/         # Static assets (CSS, JS, images)
│   └── content/        # Content files (markdown)
├── scripts/            # Python scripts for syndication
├── _site/             # Generated site (gitignored)
├── package.json       # Node.js dependencies
└── requirements.txt   # Python dependencies
```

## Prerequisites

- Node.js (v18 or higher)
- Python 3.8 or higher
- uv (Python package installer)
- Git

## Setup

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Install Python dependencies using uv:
   ```bash
   uv pip install -r requirements.txt
   ```

3. Configure environment variables:
   Create a `.env` file with the following variables:
   ```
   TWITTER_API_KEY=your_twitter_api_key
   TWITTER_API_SECRET=your_twitter_api_secret
   TWITTER_ACCESS_TOKEN=your_twitter_access_token
   TWITTER_ACCESS_SECRET=your_twitter_access_secret
   BLUESKY_IDENTIFIER=your_bluesky_identifier
   BLUESKY_PASSWORD=your_bluesky_password
   ```

## Development

1. Start the development server with live reload:
   ```bash
   npm run dev
   ```

2. Build the site for production:
   ```bash
   npm run build
   ```

3. Run social media syndication:
   ```bash
   python scripts/syndicate.py
   ```

## Deployment

The site can be deployed to various platforms:

- GitHub Pages
- Netlify
- Vercel

See the deployment documentation for specific instructions.

## Content Management

Content is managed in a separate repository. See the content repository documentation for details on:

- Post structure
- Front matter requirements
- Media asset management
- Content organization

## License

MIT License - See LICENSE file for details
