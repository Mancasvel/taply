# MongoDB Atlas Configuration Guide for Taply

This guide will help you configure MongoDB Atlas step by step for the Taply landing page.

## 🎯 Steps to Configure MongoDB Atlas

### 1. Create a MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" or "Start Free"
3. Register with your email or Google/GitHub account
4. Verify your email if necessary

### 2. Create a New Cluster

1. After logging in, you'll see the "Build a Database" option
2. Select **"M0 FREE"** (the free tier is perfect for getting started)
3. Choose a cloud provider:
   - **AWS** (recommended)
   - Google Cloud Platform
   - Microsoft Azure
4. Select the region closest to your users (e.g., Europe - Frankfurt for Spain)
5. Cluster name: you can leave it as "Cluster0" or change it to "taply-cluster"
6. Click **"Create"**
7. Wait 3-5 minutes while the cluster is created

### 3. Configure Security - Database User

1. You'll see a "Security Quickstart" window
2. In the **"How would you like to authenticate your connection?"** section:
   - Select "Username and Password"
   - Username: `taply-admin` (or whatever you prefer)
   - Password: Click "Autogenerate Secure Password" or create a secure password
   - **⚠️ IMPORTANT**: Copy and save the password, you'll need it later
3. Click "Create User"

### 4. Configure Network Access

1. In the **"Where would you like to connect from?"** section:
   - During development, select "My Local Environment"
   - Click "Add My Current IP Address"
   - Or if you want access from anywhere (for production on Vercel, etc):
     - IP Address: `0.0.0.0/0`
     - Description: "Allow all (for development/production)"
     - **⚠️ Note**: In real production, it's better to limit specific IPs
2. Click "Finish and Close"

### 5. Get the Connection String

1. In the Dashboard, click **"Connect"** on your cluster
2. Select **"Drivers"**
3. Select:
   - Driver: "Node.js"
   - Version: "5.5 or later"
4. Copy the connection string that looks like this:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Configure the Connection String

1. Replace `<username>` with the username you created (e.g., `taply-admin`)
2. Replace `<password>` with the password you saved
3. Add the database name after `.net/`:
   ```
   mongodb+srv://taply-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/taply?retryWrites=true&w=majority
   ```

### 7. Create the .env.local file

In the root of your Taply project, create a file called `.env.local`:

```env
MONGODB_URI=mongodb+srv://taply-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/taply?retryWrites=true&w=majority
MONGODB_DB=taply
```

**⚠️ IMPORTANT**:
- DO NOT share this file
- DO NOT upload it to GitHub (it's already in .gitignore)
- Replace `YOUR_PASSWORD` with your real password

### 8. Create the Database and Collection (Optional)

MongoDB will automatically create the database and collection when you insert the first document, but if you prefer to create it manually:

1. In MongoDB Atlas, go to "Browse Collections"
2. Click "Create Database"
3. Database name: `taply`
4. Collection name: `preregisters`
5. Click "Create"

### 9. Verify the Connection

Run your application:

```bash
npm run dev
```

Visit `http://localhost:3000` and test the pre-registration form. If it works correctly, you'll see a success message.

To verify that the data was saved:
1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. You should see the `taply` database and `preregisters` collection with your records

## 🔍 Data Structure

Pre-registrations are saved with this structure:

```json
{
  "_id": "ObjectId automatically generated",
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1 555 123 456",
  "createdAt": "2025-10-01T10:30:00.000Z",
  "source": "landing"
}
```

## 📊 View Pre-registrations

### From MongoDB Atlas:
1. Go to "Browse Collections"
2. Select the `taply` database
3. Click on the `preregisters` collection
4. You'll see all records with options to filter, edit or delete

### From your application:
Visit `http://localhost:3000/api/preregister` to see the total number of pre-registrations (GET endpoint).

## 🚀 Production Configuration (Vercel)

When you deploy to Vercel:

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add the variables:
   - Name: `MONGODB_URI`
   - Value: your complete connection string
   - Name: `MONGODB_DB`
   - Value: `taply`
4. Redeploy your application

## 🔒 Security Best Practices

1. **Never share your connection string** - It contains your password
2. **Use environment variables** - Never hardcode credentials
3. **Limit IP access** - In production, use specific IPs
4. **Change passwords regularly** - Especially if compromised
5. **Enable auditing** - MongoDB Atlas offers activity logs
6. **Use appropriate roles** - The user only needs read/write access to the taply DB

## ❓ Troubleshooting

### Error: "MongoServerError: bad auth"
- Verify that the username and password are correct
- If the password has special characters, encode them (use %XX)

### Error: "MongooseServerSelectionError"
- Verify that your IP is in the allowed IPs list
- Check that the connection string is correct

### Error: "Cannot read property 'db' of null"
- Make sure `MONGODB_URI` is configured in `.env.local`
- Restart the development server after creating `.env.local`

## 📚 Additional Resources

- [Official MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MongoDB University - Free courses](https://university.mongodb.com/)
- [Community forum](https://www.mongodb.com/community/forums/)

---

Need help? Check the main README.md or contact the development team.

