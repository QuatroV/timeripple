import { HeaderTitle } from "../../components";
import BoostersPanel from "./components/BoostersPanel";

const BoostersApp = (): JSX.Element => {
  return (
    <>
      <HeaderTitle hasBackButton>Boosters</HeaderTitle>
      <BoostersPanel />
    </>
  );
};

export default BoostersApp;
