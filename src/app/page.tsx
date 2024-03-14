"use client";

import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isUserAuthorized = getCookie("isUserAuthorized") || false;

  const handleSignIn = () => {
    setCookie("isUserAuthorized", "true", {sameSite:'none'});
    router.refresh();
  };
  const handleSignOut = () => {
    deleteCookie("isUserAuthorized");
    router.refresh();
  };
  return (
    <main>
      <h1> {isUserAuthorized ? "User loggedin" : "User not logged in"}</h1>
      {!isUserAuthorized ? (
        <button onClick={handleSignIn}>Sign In</button>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </main>
  );
}
