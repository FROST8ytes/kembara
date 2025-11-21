import type { ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  envSchema: ZodObject<T>,
  // eslint-disable-next-line node/no-process-env
  buildEnv: Record<string, string | undefined> = process.env,
) {
  let parsedEnv;

  try {
    parsedEnv = envSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      error.issues.forEach((issue) => {
        message += `\t- ${String(issue.path[0])}\n`;
      });
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error(error);
    }
  }
  return parsedEnv;
}
