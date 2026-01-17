---
description: How to verify and fix n8n workflow connection
---

# N8N Workflow Connection Verification Guide

## Current Status (Last tested: 2026-01-17 16:00 UTC)
- **N8N Instance:** https://n8n.ninadnj.me ✅ (Online, requires login)
- **Webhook URL:** https://n8n.ninadnj.me/webhook/portfolio-chatbot
- **Workflow Name:** portfolio-chatbot
- **Connection Test:** ✅ HTTP 200 OK (0.256s response time)
- **Issue:** ⚠️ Webhook responds but returns **EMPTY DATA**

### What This Means:
The n8n workflow is receiving requests successfully, but it's not returning any response data. This typically means:
1. ✅ The workflow IS active (otherwise you'd get 404)
2. ✅ The webhook node is configured correctly
3. ❌ The workflow is not returning data (missing "Respond to Webhook" node or misconfigured)
4. ❌ OR the workflow has an error in execution

---

## 🔥 PRIORITY FIX: Empty Response Issue

Since the webhook is responding with HTTP 200 but no data, follow these steps:

### 1. Check the Executions Tab FIRST
1. Login to https://n8n.ninadnj.me
2. Click **"Executions"** in the left sidebar
3. Look for recent executions (you should see test requests from just now)
4. Click on the most recent execution
5. **Look for:**
   - ❌ Red error indicators on any nodes
   - ⚠️ Yellow warning indicators
   - ✅ Green checkmarks (means nodes executed successfully)

### 2. Verify "Respond to Webhook" Node
Your workflow MUST have a "Respond to Webhook" node to return data:

1. Open the workflow editor
2. Look for a node called **"Respond to Webhook"** or **"Webhook Response"**
3. If it's missing:
   - Click the **+** button to add a new node
   - Search for "Respond to Webhook"
   - Add it as the LAST node in your workflow
   - Connect it to your last processing node
4. Configure it:
   - **Respond:** Using 'Respond to Webhook' Node
   - **Response Data:** Choose how to format your response (usually "First Entry JSON")

### 3. Check Response Data Format
If you have a "Respond to Webhook" node but still getting empty responses:

1. Click on the "Respond to Webhook" node
2. Check the **"Response Data"** setting
3. Make sure it's set to return JSON
4. Verify the previous node is outputting data (check execution logs)

### 4. Test After Each Change
After making changes:
```bash
curl -X POST https://n8n.ninadnj.me/webhook/portfolio-chatbot \
  -H "Content-Type: application/json" \
  -d '{"chatInput": "test"}' -s | jq .
```

---

## Step 1: Login to N8N Instance

1. Open your browser and go to: **https://n8n.ninadnj.me**
2. Login with your credentials
3. You should see your n8n dashboard with a list of workflows

## Step 2: Locate the Portfolio Chatbot Workflow

1. Look for a workflow named **"portfolio-chatbot"** or similar
2. Click on it to open the workflow editor

## Step 3: Activate the Workflow (MOST COMMON FIX)

**This is the #1 reason webhooks don't work!**

1. Look at the **top right corner** of the workflow editor
2. Find the toggle switch that says **"Inactive"** or **"Active"**
3. If it says **"Inactive"**, click it to switch to **"Active"**
4. You should see a confirmation that the workflow is now active

## Step 4: Verify Webhook Configuration

1. In the workflow, find the **Webhook node** (usually the first node)
2. Click on it to open settings
3. Verify these settings:
   - **HTTP Method:** POST
   - **Path:** portfolio-chatbot
   - **Authentication:** None (or as configured)
   - **Response Mode:** Last Node (or as needed)

## Step 5: Check CORS Settings (If Needed)

If you're getting CORS errors in the browser console:

1. SSH into your n8n server or access environment variables
2. Ensure these variables are set:
   ```bash
   N8N_EDITOR_BASE_URL=https://n8n.ninadnj.me
   WEBHOOK_URL=https://n8n.ninadnj.me/webhook
   N8N_CORS_ORIGIN=*
   ```
3. Restart n8n after changing environment variables

## Step 6: Test the Webhook

### Option A: Test from Browser Console

1. Open your portfolio website
2. Right-click → Inspect → Console
3. Paste this code:
   ```javascript
   fetch('https://n8n.ninadnj.me/webhook/portfolio-chatbot', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({chatInput: "Test message"})
   })
   .then(r => r.json())
   .then(data => console.log('Success:', data))
   .catch(e => console.error('Error:', e));
   ```
4. Press Enter
5. Check the response in the console

### Option B: Test from Terminal

Run this command:
```bash
curl -X POST https://n8n.ninadnj.me/webhook/portfolio-chatbot \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"chatInput": "Hello from terminal"}' \
  -v
```

Expected response should be JSON with your chatbot's reply.

## Step 7: Check Executions

1. In n8n, click **"Executions"** in the left sidebar
2. You should see recent executions of your workflow
3. If you see errors, click on them to see details
4. Common errors:
   - **Timeout:** Workflow takes too long (increase timeout)
   - **API Error:** External API (OpenAI, etc.) is failing
   - **Missing Credentials:** API keys not configured

## Troubleshooting Checklist

- [ ] Workflow is **Active** (not Inactive)
- [ ] Webhook node is configured correctly
- [ ] Webhook URL matches: `https://n8n.ninadnj.me/webhook/portfolio-chatbot`
- [ ] HTTP Method is **POST**
- [ ] Test webhook returns a response (not timeout)
- [ ] Check Executions tab for errors
- [ ] CORS is configured if accessing from browser
- [ ] API credentials (OpenAI, etc.) are valid

## Common Issues & Solutions

### Issue: Webhook times out
**Solution:** Workflow is probably not Active. Toggle it on.

### Issue: CORS error in browser
**Solution:** Set `N8N_CORS_ORIGIN=*` in environment variables and restart n8n.

### Issue: 404 Not Found
**Solution:** Check webhook path. Should be `/webhook/portfolio-chatbot` (production) or `/webhook-test/portfolio-chatbot` (test).

### Issue: Workflow executes but returns error
**Solution:** Check the Executions tab for detailed error messages. Usually API credentials or node configuration.

### Issue: Using test URL instead of production
**Solution:** 
- **Test URL:** `https://n8n.ninadnj.me/webhook-test/portfolio-chatbot` (requires manual execution)
- **Production URL:** `https://n8n.ninadnj.me/webhook/portfolio-chatbot` (requires Active workflow)

## Next Steps After Fixing

Once the webhook is working:
1. Test it from your portfolio website
2. Verify responses are coming through correctly
3. Consider adding the chatbot to your Next.js portfolio (currently only in legacy static site)

## Need Help?

If you're still having issues:
1. Check the n8n server logs
2. Verify your n8n instance is properly configured
3. Test with a simple workflow first (just webhook → respond node)
