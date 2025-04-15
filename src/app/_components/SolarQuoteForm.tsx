import { EnergyBill } from "./EnergyBill";
import { LeadForm } from "./LeadForm";
import { MonthlySaving } from "./MonthlySaving";
import { RoofSize } from "./RoofSize";

export const SolarQuoteForm = () => {
  return (
    <div>
      <h1>SolarQuoteForm</h1>
      <EnergyBill />
      <RoofSize />
      <MonthlySaving />
      <LeadForm />
    </div>
  );
};
