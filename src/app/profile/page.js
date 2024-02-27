"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const session = useSession();
  const userData = session?.data?.user;
  const userImage = userData?.image;
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [userName, setUserName] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  // Updating Profile Info

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  };

  // Updating Profile Picture

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: null,
      });
    }
  };

  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  if (status === "authenticated") {
    return (
      <section className="mt-8">
        <h1 className="text-primary text-4xl text-center mb-16">Profile</h1>
        <div className="max-w-md mx-auto">
          {isSaving && (
            <h2 className="my-2 text-center text-gray-800 bg-orange-300/40 rounded-lg w-3/4 mx-auto p-2 border-orange-300 border-2 text-sm">
              Saving...
            </h2>
          )}
          {saved && (
            <h2 className="my-2 text-center text-gray-800 bg-green-300/40 rounded-lg w-3/4 mx-auto p-2 border-green-300 border-2 text-sm">
              Profile Updated Successfully
            </h2>
          )}

          <div className="flex gap-4 items-center">
            <div className="p-2 0 rounded-full">
              <Image
                src={userImage}
                alt="profile-picture"
                className="rounded-full relative w-full h-full mb-2 bg-primary p-1"
                width={96}
                height={96}
              />
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="rounded-lg border p-2 block text-center text-gray-700 border-gray-300 cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
            <form className="grow" onSubmit={handleProfileInfoUpdate}>
              <input
                type="text"
                placeholder="First and last name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input type="email" value={session.data.user.email} disabled />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfilePage;
