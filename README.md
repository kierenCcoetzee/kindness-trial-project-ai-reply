# Kindness AI Reply Component - Trial Project

![GitHub version](https://badgen.net/badge/latest%20tag/0.0.1-alpha.0) ![JavaScript](https://badgen.net/badge/JavaScript/es5/yellow?) ![TypeScript](https://badgen.net/badge/TypeScript/5.1.3/blue?) ![Node.js](https://badgen.net/badge/Node.js/20.11/green?) ![React](https://badgen.net/badge/React/18^/cyan?) ![Next.js](https://badgen.net/badge/Next.js/14.1.3/black?)

> This is a trial project by me, Kieren Coetzee, for Kindness.ai to showcase
> my front-end abilities. The product I've decided to build is an email reply
> component that allows users to markup replies using a WYSIWYG editor, with
> an AI aspect that let's the user easily identify the sender's tone of voice,
> and that generates an auto-reply that the user can edit.

## Installing and running the app

### Clone the repo and install dependencies

```
git clone https://github.com/kierenCcoetzee/kindness-trial-project-ai-reply.git
cd kindness-trial-project-ai-reply
npm install
```

### Environment variables

Create a file in the project root called `.env` or `.env.local` and add your openai api key

```
NEXT_PUBLIC_OPENAI_API_KEY={your_key_here}
```

### Run the application

```
npm run dev
```

## Some challenges I faced

There were a few challenges along the way when developing this application, other than my cat opening
chrome help when he so felt like it.

First was the time limit of 8 hours. I found this difficult to adhere to but as it was an essential
part of the trial, I tried my best. I must admit to spending around 10 hours on this, and this was mainly
due to unforseen obstacles, like integrating with openai and finding a suitable WYSIWYG library
(I almost built one from scratch, phew, glad I didn't go that route!). There were also some key aspects,
namely unit and e2e testing, and better error handling that I would have liked to have included but couldn't
due to time constraints. I also wasn't really sure what I was building until I'd built some of it, c'est la vie.

Next I found the rate limits on openai's free tier frustrating while testing responses. Most of the time it didn't
make much sense to do any caching as I was deliberately generating new ones. This, however, did
force me to pay attention to the performance of the application, so as not to call the api too regularly by
some code mishap (queue useMemo!).

I also ate up around an hour on boilerplate devops stuff like circleci lint and build checks, branch protection,
and sticking as much to convention here as I could.

There was also a tricky problem using the fetchApi on a local emails.json file. I would call fetch('http://localhost:3000/api/emails.json')
and would get a great response in my dev environment. But as the file was located in the /public directory, this
wasn't available during build-time, and as such my CI pipelines would fail. I scrapped using fetch() in favour
of loading the file from the filesystem.

## How I might extend the application

The AI aspect of the task asked for spelling and grammer overlay checks in the reply text editor, this would be
my next call of action. I did wonder, however, how the spelling checks would fit in with regular browser spellchecking.

Currently the application calls emails from a JSON file, and we cannot send responses. I'd probably try and integrate
with an email provider, or multiple, like GMail (they have a nicely documented API for this). Feel free to edit the emails
in /app/data/emails.json and add more, the application should be able to handle multiple.

I would also want the user to be able to auto-generate parts of the reply instead of the entire thing. And let the user
know that the tone/mood of their reply is appropriate to the sender's request.

## Last words

Thank you kindly for the opportunity to work on this and to showcase my skillset, I had a lot of fun and learned a bunch, which
is a mega win for me!
