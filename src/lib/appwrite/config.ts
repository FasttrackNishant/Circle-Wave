// here we can import all the client functionlaties
import { Client, Account, Storage, Databases, Avatars } from 'appwrite';
import exp from 'constants';
 

export const appwriteConfig = {
	projectId: import.meta.env.VITE_PROJECT_APPWRITE_ID,
	url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();


client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);


export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);