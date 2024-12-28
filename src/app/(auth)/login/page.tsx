import { lucia, validateRequest } from "@/config/auth";
import Login from "./login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LoginPage = async () => {
  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (sessionId) {
    redirect("/");
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
