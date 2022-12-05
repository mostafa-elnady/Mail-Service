const domain = `http://localhost:3000`;

export const APIpaths = {
  emailsSent: domain + "/api/mail/emailsSent",
  scheduledEmails: domain + "/api/mail/scheduledEmails",
  numSentEmails: domain + "/api/mail/numOfSentEmails",
  numScheduledEmails: domain + "/api/mail/numOfEmailsToSend",
  allTemplates: domain + "/api/templates",
  templateById: domain + "/api/templates",
  sendMail: domain + "/api/mail/sendMail",
  creatTemplate: domain + "/api/templates",
  editTemplate: domain + "/api/templates",
  deleteTemplate: domain + "/api/templates",
};
