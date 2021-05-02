import ClinicCard from "./ClinicCard";
import { uniqueClinicsData } from "./App";
import { Link } from "wouter";

export default function ShowClinic({ id }: { id: string }) {
  const clinicId = decodeURI(id);
  const clinic = uniqueClinicsData.find((clinic) => clinic.id === clinicId);
  if (!clinic) return <h3>sorry, this clinic is not found..</h3>;
  return (
    <div className="mx-auto p-8 max-w-xl h-screen">
      <ClinicCard clinic={clinic} show />
      <div className="mt-5">
        <Link className={"underline text-blue-500"} to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
