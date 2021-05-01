import { Link } from "wouter";

export default function More() {
  return (
    <div className="h-full h-screen mx-auto max-w-xl text-gray-900">
      <div className="text-indigo-500  font-bold p-5 text-center">
        Berlin fights Corona
      </div>
      <p className="space-y-4 p-4">
        <p>
          {" "}
          I was trying to get an appointment for corona vaccination using the
          clinics data on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
            href="https://www.kvberlin.de/fileadmin/user_upload/fuer_patienten/corona/uebersicht_AstraZeneca-Impfpraxen.pdf"
          >
            kvberlin.de
          </a>{" "}
          But it is hard to search and copy email/phone number from the PDF,
          especially on mobile.
        </p>
        <p>
          {" "}
          Hence I built this site which shows the same data but easy to access
          on mobile. You can search clinics using district, address, doctor name
          and pin code. Clicking on any field copies the data. I will add couple
          of features like grouping by districts and bookmarking the clinic
          where you have already got into waiting list soon.
        </p>
        <p>
          I have put together this in couple of hours, if any data is wrong or
          you have suggestion for improvement feel free to write me know on my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
            href="https://twitter.com/metapraveen"
          >
            twitter
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
            href="https://t.me/metapraveen"
          >
            telegram
          </a>{" "}
        </p>
        <p>
          <Link className={"underline text-blue-500"} to="/">
            Back to home
          </Link>
        </p>
      </p>
    </div>
  );
}
