# AI Loyalty & Voucher Automation - Skills Used

## Project Summary

Built a production n8n workflow for a client who needed a usable customer database for loyalty and future marketing campaigns, plus a simple way to distribute voucher codes directly through customer communication channels.

The workflow connects WhatsApp, Telegram, SMS-ready messaging, Google Sheets, webhook registration, GPT-4o vision receipt validation, points calculation, voucher assignment, and code usage tracking into one automated customer-retention system.

## Core Skills Demonstrated

- Applied AI workflow design
- GenAI integration with GPT-4o vision
- Receipt OCR and validation logic
- Prompt engineering for strict structured outputs
- n8n workflow architecture
- Multi-channel automation with WhatsApp and Telegram
- SMS-ready customer messaging for marketing campaigns
- Customer registration and duplicate detection
- Google Sheets as a lightweight CRM/database
- Voucher inventory lookup and assignment
- Code usage tracking and status updates
- Business rule implementation for loyalty points
- Webhook and form-based user onboarding
- API integration and HTTP request handling
- JavaScript logic inside n8n Code nodes
- Error-aware branching with IF and Switch nodes
- Production automation documentation

## Technical Stack

- n8n
- OpenAI GPT-4o vision
- WhatsApp Business API
- Telegram Bot API
- Google Sheets
- Webhooks
- JavaScript
- HTTP APIs

## Workflow Capabilities

- Registers new customers from a web form.
- Checks whether a customer already exists before creating a record.
- Receives receipt images through WhatsApp and Telegram.
- Uses GPT-4o vision to validate whether a receipt belongs to the client brand.
- Extracts receipt payment amount and maps it to loyalty points.
- Updates each customer's total points.
- Retrieves available voucher codes from a Google Sheet.
- Sends voucher codes back to customers through WhatsApp or Telegram.
- Marks voucher codes as used with timestamp, customer identifier, and platform.
- Lets customers request their current points balance.

## Business Value

- Replaced manual customer identification with automated customer capture.
- Created a customer database for future loyalty and marketing campaigns.
- Turned discount-code distribution into a direct customer communication flow.
- Created a reusable customer history for future campaigns.
- Reduced manual work around receipt verification, point calculation, and voucher delivery.
- Made loyalty activity visible through structured Google Sheets data.

## Portfolio Positioning

This is a strong Applied AI / GenAI Engineer project because it combines a real business problem with AI vision, automation architecture, API integrations, customer data handling, and production workflow design.

Recommended portfolio title: **AI Loyalty & Voucher Automation**.

Recommended short description: **A multi-channel n8n system that validates receipts with GPT-4o vision, calculates loyalty points, tracks customers in Google Sheets, and delivers voucher codes through WhatsApp and Telegram.**

## Public Sharing Checklist

- Remove secrets, tokens, app IDs, phone IDs, and private spreadsheet URLs before publishing workflow JSON.
- Replace customer data with anonymized examples.
- Use screenshots with private identifiers blurred.
- Include an architecture diagram instead of raw exported credentials or live production links.
