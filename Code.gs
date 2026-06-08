/**
 * Fameboat — Google Apps Script Web App
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this entire file into the editor
 * 3. Run setup() once to create the sheet headers
 * 4. Click Deploy > New deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL
 * 6. Add it to Netlify env vars as GOOGLE_SCRIPT_URL
 */

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName('Leads')
  if (!sheet) sheet = ss.insertSheet('Leads')

  sheet.getRange(1, 1, 1, 7).setValues([[
    'Timestamp', 'Name', 'Phone', 'Email', 'Business', 'Service Interested', 'Message'
  ]])

  sheet.getRange(1, 1, 1, 7)
    .setBackground('#FF5C38')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')

  sheet.setColumnWidths(1, 7, 180)
  sheet.setFrozenRows(1)

  SpreadsheetApp.getUi().alert('Fameboat Leads sheet is ready!')
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    const ss = SpreadsheetApp.getActiveSpreadsheet()
    let sheet = ss.getSheetByName('Leads')
    if (!sheet) sheet = ss.insertSheet('Leads')

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name    || '',
      data.phone   || '',
      data.email   || '',
      data.business || '',
      data.service || '',
      data.message || '',
    ])

    sendNotificationEmail(data)

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Fameboat leads script is running.' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function sendNotificationEmail(data) {
  const ownerEmail = Session.getActiveUser().getEmail()
  const subject = `🚀 New Lead: ${data.name} — ${data.service || 'General Enquiry'}`
  const body = `
New lead from fameboat.com

Name:     ${data.name}
Phone:    ${data.phone}
Email:    ${data.email || 'Not provided'}
Business: ${data.business || 'Not provided'}
Service:  ${data.service || 'Not specified'}

Message:
${data.message || 'No message provided'}

---
Open your leads sheet to view all enquiries.
  `.trim()

  MailApp.sendEmail(ownerEmail, subject, body)
}
