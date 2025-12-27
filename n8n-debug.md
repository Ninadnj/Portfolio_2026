# n8n Webhook Troubleshooting

If your messages are not showing up in n8n, please check the following:

## 1. Production vs. Test URL
*   **Production URL:** `https://n8n.ninadnj.me/webhook/portfolio-chatbot`
    *   **Requirement:** The workflow MUST be switched to **Active** (toggle in top right of n8n).
    *   **Where to see data:** Go to the "Executions" tab on the left sidebar.
*   **Test URL:** `https://n8n.ninadnj.me/webhook-test/portfolio-chatbot`
    *   **Requirement:** You must click the **"Execute Workflow"** button at the bottom of the editor.
    *   **Where to see data:** It will appear directly on the canvas.

**Current Setup:** The website is using the **Production** URL.
**Solution:** Make sure you have activated the workflow (Toggle: Active).

## 2. CORS Issues (Cross-Origin Resource Sharing)
If you see a red error in your browser console (Right-click > Inspect > Console) mentioning "CORS" or "Access-Control-Allow-Origin":
*   You need to set environment variables on your n8n server.
*   **Variable:** `N8N_EDITOR_BASE_URL=https://n8n.ninadnj.me`
*   **Variable:** `WEBHOOK_URL=https://n8n.ninadnj.me/webhook`
*   **Variable:** `N8N_CORS_ORIGIN=*` (or your specific domain)

## 3. Webhook Method
*   Open your n8n workflow.
*   Click the **Webhook** node.
*   Ensure **HTTP Method** is set to `POST`.
*   Ensure **Authentication** is set to `None` (or handle auth headers in script.js).

## 4. Quick Test
Run this in your browser console to test connectivity:
```javascript
fetch('https://n8n.ninadnj.me/webhook/portfolio-chatbot', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({chatInput: "Test message"})
}).then(r => console.log(r.status)).catch(e => console.error(e));
```
