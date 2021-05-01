import copyToClipboard from "./copyToClipboard";
import { Clinic, keyToHeaderMap } from "./data";

const keysOrder: (keyof Clinic)[] = [
  "key_0",
  "key_1",
  "key_2",
  "key_7",
  "key_8",
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

export default function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <div className=" p-3 bg-white rounded-lg w-full subpixel-antialiased shadow-md">
      {keysOrder.map((key) => {
        let value =
          key === "key_8" ? removeWhiteSpace(clinic[key]) : clinic[key];
        if (!value || value.trim().length === 0) return null;

        if (key === "key_2") value = `${value}, ${clinic.key_1}`;
        if (key === "key_1") return null;

        return (
          <div className="leading-6">
            <span className="text-sm font-medium capitalize font-mono">
              {keyToHeaderMap[key]}:{" "}
            </span>

            <DetailsRow field={key} value={value} />
          </div>
        );
      })}
    </div>
  );
}

function DetailsRow({ field, value }: { field: keyof Clinic; value: string }) {
  return (
    <span className="text-md text-gray-900 font-normal text-base text-gray-600 text-md font-serif">
      {field === "key_9" || field === "key_12" ? (
        <a
          className="text-blue-400"
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
          style={{ cursor: "copy" }}
          className={
            field === "key_8" ? "font-semibold text-indigo-400  text-md" : ""
          }
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
