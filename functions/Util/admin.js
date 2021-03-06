const admin = require("firebase-admin");
var serviceAccount = {
  type: "service_account",
  project_id: "studup-dc5db",
  private_key_id: "c33c3a934441cbb23e2a051299b7d8be8431fcd0",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmoHvIVAemJDs4\nf07nNIqkw8bRPxYh5N/aPiz0V+/GdDKPL4RQ4Q3u19fpuCwMu3ScI2hS3+OgVoeA\nQww5qvYg5vwXRDP589b9OXNqHGe4JtILdcF1T5sk2wNBBYL2D/VjJ9IkBV5RDeV+\n+99K8xKaAnYNwkId19fjy7bkIOLD2mcm+BAIBDnyTUgRPz7Eppv54YwDBYjfwGX5\nt+2UEVKXiLKUhpF7c3Gko/N/MfNW4nLeeALB8hgVngUC9qC52w32lOy8MKCwpyhN\nTEg3hl7/+WiQVDjw1Ntm+gpcR2J/uI/Z1vhkE67xa39poTIvN8xWT3mHqRwzWhBu\n++3K/iUHAgMBAAECggEADBZEJGoEDAdAzH5fqOHk1MLm3zLmVhsWKeyssiTW3dx7\n9msJ/Bv3OMYrgWa8u0e108W1wZ1AE9dzCNjUQDKonAZlbwKhipYnmELcnmvlEjSu\ns+oc2Hen12qTt9nAgDz0Hfc7hSVmjBan+SgoMHWlecqH6cOXrDaGEJ4sbCv+hxpo\nisDHt2kgfzv1SBHPVSEjUgZlc1hAcUrulQ5h3DYBZLa3VxoKqBzz6j2/vGhLdXJ5\n1+IXvE3QjKRSE10kmGqAY0SjsTn/5urTE/uK+SOX4MCRUm0XyCooNqeBOO2NaJAD\nhSHEURD/diD4CUEY9rMJBiKqMKCk9hhAU5H1nTKFoQKBgQDn6rr80EwuX8EH1Aub\nmM868Zk4NgaMZExBynFCD16Q5bC7P4JeO8vApbrwAc0hG1U0FDBdP7jte1UQ9Cv1\n85Oe6Xfv/nDc2Up6YUcSEnzgbo0IzOsdxTJ/LJcijl6Y00jeO50kgAcF016RC/wp\n3QCXHBKRHBWWnA1EtHHVV8BaWQKBgQC37hX0g2LAs81hhDlgq6eJW1VjG6HWmMgL\noUbxmSsT1IRIAh8jTQfdaTocrtNvYQjQYStXnwDLQ8GJj4imYfPQ9jnMf9bAdAZO\nIl/zOh2UTfrbBmB6oazk9jpq2bbntyEtTWHr3N7cNrC7aYnF4cc3UYSCk0WtgekL\nR9MowhHOXwKBgQDDEmDoB/kcRLSj9gsxfM5KgS9k5aSKcE7oQ/USIMVlUZ5fUiNB\nSkCvMXfVK160iz4WySiJNvFA6C18TjWv8orn7u9Qcg/S4/7Og4Z5QA3D5ZlBnsPh\nTZ6U9BfIHEKbf5TaQQCD1CCUGN+BV7hqKhe2Awnm/t11ypsqgDEDx4TnOQKBgFbO\n3LfZZrtSYSWcNURl352ZaLRs7zYMR6YNiSEvzEAAtioSLkYH7iVWq6Gr9YiEwJcw\ntTcWiVZl9SsKflEgu+UswNy+nUmZuPwZhzWRgTJkl3fWC6T1N1ecyrdxZ7z3FoZ+\nFjAuv1Qpz8G0Lt0hEVgPdj32ahVY0feL/6Il7id7AoGAeKrR4EDJjjtKNfIXm5vH\ntK0hYeMPEmfZZf2jBMhKVu0K3op9TVUuW4nAx11NEjQnP7ynHW7rU8OP0aotQ4HS\nA2XGsrl1XyL5bgILRzkPStZ4+5XK3l2Gi40detu83bduxPqqSi/TZkiPu7a/TKZJ\nh0Bs+zRImydLtY+UPtD7a/s=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-mped1@studup-dc5db.iam.gserviceaccount.com",
  client_id: "113697755442737729989",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mped1%40studup-dc5db.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://studup-dc5db-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.firestore();

module.exports = { admin, db };
