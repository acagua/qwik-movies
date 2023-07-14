import { component$ } from "@builder.io/qwik";
import QwikLogo from "~/media/QwikLogo";

export const Header = component$(() => {
  return (
    <nav class="bg-movies-black py-2 px-16">
      <QwikLogo
        class="inline"
        width={40}
        height={40}
        leftColor="#fff"
        thunderColor="#424242"
        rightColor="#fff"
      />
      <h1 class="inline text-xl text-movies-white"> Movies for All </h1>
    </nav>
  );
});
