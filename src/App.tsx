import React, { useState, useCallback } from "react";
import "./index.css";
import SearchBar from "./SearchBar";
import clinicsData, { Clinic } from "./data";
import ClinicCard from "./ClinicCard";
import Header from "./Header";

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
  const filterClinicsOnSearch = useCallback(
    (input: string) => setClinics(searchClinics(input)),
    []
  );
  return (
    <div className="p-3 max-w-xl mx-auto">
      <Header />
      <SearchBar onSearch={filterClinicsOnSearch} />
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
