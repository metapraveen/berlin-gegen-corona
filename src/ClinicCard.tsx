import { Link } from "wouter";
import copyToClipboard from "./copyToClipboard";
import { Clinic, keyToHeaderMap } from "./data";
import { useState } from "react";

const keysOrder: (keyof Clinic)[] = [
  "key_0",
  "key_2",
  "key_1",
  "key_8",
  "key_7",
  "key_3",
  "key_4",
  "key_12",
  "key_9",
  "key_5",
  "key_6",
  "key_11",
  "key_10",
  "key_13",
  "key_14",
];

export default function ClinicCard({
  clinic,
  show = false,
}: {
  clinic: Clinic;
  show?: boolean;
}) {
  const [bookMarked, setBookMarked] = useState<boolean>(
    localStorage.getItem(clinic.id!) === "true"
  );
  const toggleBookmark = () => {
    if (bookMarked) {
      localStorage.removeItem(clinic.id!);
      setBookMarked(false);
    } else {
      localStorage.setItem(clinic.id!, "true");
      setBookMarked(true);
    }
  };

  return (
    <div className=" p-3 bg-white rounded-lg w-full subpixel-antialiased shadow-md">
      <div className="float-right cursor-pointer" onClick={toggleBookmark}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={bookMarked ? "fill" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
      {keysOrder.map((key) => {
        if (key === "key_1" || key === "id") return null;

        let value =
          key === "key_8" ? removeWhiteSpace(clinic[key]) : clinic[key];
        if (!value || value.trim().length === 0) return null;

        if (key === "key_2") value = `${value}, ${clinic.key_1}`;

        return (
          <div key={key}>
            <span className="text-sm font-medium capitalize font-mono">
              {keyToHeaderMap[key]}:{" "}
            </span>

            {!show && (key === "key_3" || key === "key_4") ? (
              <Link to={`/doctor/${clinic.id}`}>
                <span className="text-blue-400 underline cursor-pointer">
                  <DetailsRow field={key} value={value} />
                </span>
              </Link>
            ) : (
              <DetailsRow field={key} value={value} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function DetailsRow({ field, value }: { field: keyof Clinic; value: string }) {
  return (
    <span className="text-base leading-relaxed">
      {field === "key_9" || field === "key_12" ? (
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href={sanitizeLink(value)}
        >
          {sanitizeLink(value)}
        </a>
      ) : (
        <span
          data-value={value}
          onClick={copyToClipboard}
          className={field === "key_8" ? "font-semibold" : ""}
        >
          {value}
        </span>
      )}
    </span>
  );
}

function sanitizeLink(link: string): string {
  const url = link.includes("http") ? link : `http://${link}`;
  return removeWhiteSpace(url);
}

function removeWhiteSpace(value: string): string {
  return value.replace(/\s+/g, "");
}
