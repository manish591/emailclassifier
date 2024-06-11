"use server"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { google } from "googleapis";

export async function doFetchEmails(numEmails: number) {
  try {
    const session = await getServerSession(authOptions);

    if(!session) {
      return redirect("/");
    }

    const { accessToken } = session;

    const auth = new google.auth.OAuth2({});
    auth.setCredentials({ access_token: accessToken });

    const gmail = google.gmail({ version: "v1", auth});

    const result = await gmail.users.messages.list({
      maxResults: numEmails,
      userId: "me"
    });

    const messages = result.data.messages || [];

    const emailData = await Promise.all(messages.map(async message => {
      const data =  await gmail.users.messages.get({
        id: String(message.id),
        userId: "me"
      });

      const email = data.data;

      const subject = email.payload?.headers?.find(item => item.name === "Subject");

      return {id: email.id, description: email.snippet, title: subject ? subject.value : "(No Subject)"};
    }));

    return emailData;
  } catch(err) {
    console.log("the error is: ", err);
    return [];
  }
}