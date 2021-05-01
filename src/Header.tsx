import React from "react";
import { Link } from "wouter";

export default function Header() {
  return (
    <div className=" text-indigo-500 font-semibold p-4 text-center w-full max-w-xl">
      <h1>Berlin fights Corona</h1>
      <p className="text-gray-900 text-sm text-left mt-3 mb-1">
        Berlin clinics data from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline"
          href="https://www.kvberlin.de/fileadmin/user_upload/fuer_patienten/corona/uebersicht_AstraZeneca-Impfpraxen.pdf"
        >
          kvberlin.de
        </a>{" "}
        for requesting corona vaccine made easier to access and search.{" "}
        <Link className="text-blue-700 underline" to="/more">
          more info
        </Link>
      </p>
    </div>
  );
}
