import { lucia, validateRequest } from "@/config/auth";
import Login from "./login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LoginPage = async () => {
  const user = await validateRequest();

  if (user.user) {
    return redirect("/");
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
