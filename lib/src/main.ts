import "dotenv/config";

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY NOT SET");
}
