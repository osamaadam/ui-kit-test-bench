import CountrySelect from "@saloodo/ui-kit/es/molecules/country_select";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("GER");
  return (
    <CountrySelect
      countries={[{ label: "Germany", value: "GER" }]}
      name="country"
      label={"Country"}
      labelSettings={{ required: true }}
      value={country}
      handleChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        const country = event?.target?.value;
        setCountry(country);
      }}
      touched={false}
      isLoading={false}
    />
  );
}

export default App;
