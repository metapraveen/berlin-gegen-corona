import React, { useState, useCallback } from "react";
import { Link } from "wouter";
import "./index.css";
import SearchBar from "./SearchBar";
import clinicsData, { Clinic } from "./data";
import ClinicCard from "./ClinicCard";

const searchableKeys = [
  "key_0",
  "key_1",
  "key_2",
  "key_3",
  "key_4",
  "key_7",
  "key_8",
];

function App() {
  const [clinics, setClinics] = useState<Clinic[]>(clinicsData);
  const callback = useCallback(
    (input: string) => setClinics(searchClinics(input)),
    []
  );
  return (
    <div className="pt-2 p-5 flex flex-col items-center">
      <div className=" text-indigo-500  font-bold p-4 text-center">
        Berlin gegen corona
        <p className="text-gray-500 text-xs text-left">
          Data from{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
            href="https://www.kvberlin.de/fileadmin/user_upload/fuer_patienten/corona/uebersicht_AstraZeneca-Impfpraxen.pdf"
          >
            kvberlin.de
          </a>{" "}
          for booking corona vaccine in Berlin made easier to access and search
          on mobile{" "}
          <Link className="text-blue-700 underline" to="/more">
            More info
          </Link>
        </p>
      </div>
      <SearchBar onSearch={callback} />
      <div className="mt-8 space-y-4 w-full h-full">
        {clinics.map((clinic) => {
          return <ClinicCard clinic={clinic} />;
        })}
      </div>
    </div>
  );
}

const searchClinics = (input: string) => {
  if (input.trim().length === 0) {
    return clinicsData;
  }

  const filteredClinics = clinicsData.filter((clinic) =>
    Object.entries(clinic).some(
      ([key, value]) =>
        searchableKeys.includes(key) &&
        value?.toLocaleLowerCase().includes(input)
    )
  );
  return filteredClinics;
};

export default App;
