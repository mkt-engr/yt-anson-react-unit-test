"use client";
import { UserProfile } from "@/components/UserProfile";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div className="">
        <label htmlFor="randomText">
          Enter Random Text:
          <input type="text" id="randomText" />
        </label>
      </div>
      <div className="">
        <label htmlFor="specificText">
          Enter Specific Text:
          <input type="text" id="specificText" />
        </label>
      </div>

      <div className="">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="">
        <input type="text" value="AUDI Q5" onChange={() => {}} />
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            setShowText((prev) => !prev);
          }, 1100);
        }}
      >
        Show text
      </button>
      {showText && <span>This is the text</span>}
      <UserProfile
        displayName="Makito The Developer"
        userName="Makito Mori"
        email="makito@example.com"
        isEmailVerified={false}
      />
    </main>
  );
}
