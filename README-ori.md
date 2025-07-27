## Required Environment Variables

Before deploying this blog, you need to set up the following GitHub repository secrets:

| Key | Description | How to Get |
|-----|-------------|------------|
| `VERCEL_TOKEN` | Your Vercel API token | Go to [Vercel Settings > Tokens](https://vercel.com/account/tokens) and create a new token |
| `VERCEL_ORG_ID` | Your Vercel organization ID | Found in your [Vercel team settings](https://vercel.com/teams) or run `vercel whoami` in CLI |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Create a project on Vercel first, then find the ID in project settings |

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add each of the three secrets listed above

**Important:** Without these secrets, the GitHub Actions deployment will fail.
