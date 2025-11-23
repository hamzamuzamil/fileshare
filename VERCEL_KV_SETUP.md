# Vercel KV Setup Instructions

This project uses Vercel KV for persistent channel storage on Vercel deployments. Follow these steps to set it up:

## Step 1: Create Vercel KV Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: `fileshare`
3. Go to the **Storage** tab
4. Click **Create Database**
5. Select **KV** (Key-Value store)
6. Give it a name (e.g., `fileshare-kv`)
7. Click **Create**

## Step 2: Link KV to Your Project

1. After creating the KV database, click **Connect** or **Link to Project**
2. Select your `fileshare` project
3. Vercel will automatically add the environment variables:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_URL` (optional, for Redis protocol)

## Step 3: Verify Environment Variables

1. Go to your project **Settings** → **Environment Variables**
2. Verify these variables are present:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`

## Step 4: Redeploy

1. After linking the KV database, Vercel will automatically trigger a new deployment
2. Or you can manually trigger a redeploy from the **Deployments** tab

## How It Works

The application automatically detects Vercel KV and uses it for channel storage:
- **Priority 1**: Vercel KV (if `KV_URL` or `KV_REST_API_URL` is set)
- **Priority 2**: Redis (if `REDIS_URL` is set)
- **Priority 3**: In-memory (fallback, only works within same function invocation)

## Testing

After deployment, test file sharing:
1. Upload a file on the main page
2. Copy the share link
3. Open the link in a new tab/browser
4. The download should work because channels are now persisted in Vercel KV

## Pricing

- **Hobby Plan**: 1 database, 30,000 requests/month, 256 MB storage
- **Pro Plan**: 1 database, 150,000 requests/month, 512 MB storage

For this file sharing app, the Hobby plan should be sufficient for testing and moderate use.

