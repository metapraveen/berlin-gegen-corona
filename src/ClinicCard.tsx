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
    <div className="p-5 w-auto border border-purple-100 bg-white rounded-lg overflow-y-scroll">
      {keysOrder.map((key) => {
        const value = clinic[key];
        if (!value || value.trim().length === 0) return null;

        return (
          <div className="leading-normal">
            <span className="text-sm text-grey-400 font-bold lowercase">
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
    <span className="text-md text-grey-100 font-normal text-base">
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
        >
          {value}
        </span>
      )}
    </span>
  );
}

function sanitizeLink(link: string): string {
  const url = link.includes("http") ? link : `http://${link}`;
  return url.replace(/\s+/g, "");
}
