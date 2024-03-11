import Emails from "./components/organisms/Emails/Emails";
import { Email } from "./types/email-types";
import { readEmailsDTO } from "./utils/read-emails-dto";

export default async function Home() {
  const emails = await readEmailsDTO<Email[]>();

  // use SSR here for now
  // if/when middleware for caching is introduced then revalidate
  // on relevant requests instead
  const revalidate = 0;
  return (
    <>
      <Emails emails={emails} />
    </>
  );
}
