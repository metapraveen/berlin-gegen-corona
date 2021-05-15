const clinicsData = require("./clinics.json");
export const keyToHeaderMap = {
  key_0: "District",
  key_1: "PIN",
  key_2: "Address",
  key_3: "Clinic",
  key_4: "Doctor",
  key_5: "Expertise",
  key_6: "Timings",
  key_7: "Phone",
  key_8: "Email",
  key_9: "Online link",
  key_11: "More information",
  key_12: "Website",
  key_10: "info 1",
  key_13: "info 2",
  key_14: "info 3",
};

export type Clinic = {
  id?: string;
  key_0: string;
  key_1: string;
  key_2: string;
  key_3: string;
  key_4: string;
  key_5: string;
  key_6: string;
  key_7: string;
  key_8: string;
  key_9: string;
  key_11: string;
  key_12?: string;
  key_10?: string;
  key_13?: string;
  key_14?: string;
};

const data: Clinic[] = clinicsData;

export default data;
