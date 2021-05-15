import React from "react";
import { Link } from "wouter";

export default function Header() {
  return (
    <div className="p-4 text-center w-full max-w-xl">
      <h1 className="text-indigo-600 font-bold">Berlin Gegen Corona</h1>
      <p className="text-sm text-left mt-3 mb-1">
        Berlin doctors information from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline"
          href="https://www.kvberlin.de/fileadmin/user_upload/fuer_patienten/corona/uebersicht_AstraZeneca-Impfpraxen.pdf"
        >
          kvberlin.de
        </a>{" "}
        for requesting vaccine for covid{" "}
        <Link className="text-blue-700 underline" to="/about">
          more info
        </Link>
      </p>
    </div>
  );
}
