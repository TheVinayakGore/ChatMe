"use client";
import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "d9x6bkjy8je5";
const userId = "user_2rzkhQPkqoMWeOMRWgcjDK9xd4I";
const userName = "Vinayak";
const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycnpraFFQa3FvTVdlT01SV2djakRLOXhkNEkifQ.AOXG28ahzgtgGU-r3BiRIK3J3za_hdyAXwrt7TaTRmk";

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

export default function ChatForum({ slug }) {

  function toTitleCase(str) {
    return str.replace(
      /\b\w/g,
      (match) => match.toUpperCase()
    );
  }

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: toTitleCase(slug.replace(/-/g, " ")) + ' Discussion',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <>
      <main className="p-20">
        <section className="p-10 bg-zinc-50 shadow-xl rounded-xl">
          <Chat client={client}>
            <Channel channel={channel}>
              <Window className="bg-red-500">
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </Chat>
        </section>
      </main>
    </>
  );
}
