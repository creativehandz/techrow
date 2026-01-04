# Gmail Email Setup Instructions (Using Formspree)

To enable email functionality that sends directly to your Gmail account using Formspree:

## 1. Create Formspree Account
- Go to [Formspree.io](https://formspree.io)
- Sign up for a free account (free plan allows 50 submissions/month)

## 2. Create a New Form
- In your Formspree dashboard, click "New Form"
- Set form name: "TechRow Contact Form" 
- Set email address: `prasharpranav@gmail.com`
- Click "Create Form"

## 3. Get Form Endpoint
- After creating the form, you'll get a form endpoint like: `https://formspree.io/f/xpzgkqzr`
- Note down the form ID (the part after `/f/` - e.g., `xpzgkqzr`)

## 4. Update Environment Variables
Edit the `.env` file in your project root:

```env
VITE_ADMIN_EMAIL=prasharpranav@gmail.com
VITE_FORMSPREE_FORM_ID=your_form_id_here
```

## 5. Configure Form Settings (Optional)
In your Formspree dashboard, you can:
- Set up custom thank you page
- Add spam protection
- Configure email templates
- Set up webhooks

## 6. Test the Form
- Start your development server: `npm run dev`
- Fill out and submit the contact form  
- Check that emails are being sent to `prasharpranav@gmail.com`
- Check your Formspree dashboard for submission logs

## How It Works
- Form submissions are sent to Formspree's servers
- Formspree forwards the submission as an email to your Gmail
- No backend server required
- All form data is included in the email
- Reply-to is set to the submitter's email for easy replies

## Security & Privacy
- Formspree handles all email delivery securely
- Form data is encrypted in transit
- No sensitive credentials needed in frontend code
- GDPR compliant data handling

## Free Plan Limits
- 50 submissions per month
- Formspree branding in emails
- Basic spam protection

## Upgrade Options
- Paid plans available for higher volume
- Remove Formspree branding
- Advanced spam protection
- Custom integrations

## Troubleshooting
- Check Formspree dashboard for delivery logs
- Ensure form endpoint URL is correct
- Check Gmail spam folder for first few emails
- Verify environment variables are set correctly