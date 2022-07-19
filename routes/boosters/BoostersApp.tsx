import { HeaderTitle } from "../../components";
import BoosterModal from "./components/BoosterModal";
import BoostersPanel from "./components/BoostersPanel";

const BoostersApp = (): JSX.Element => {
  return (
    <>
      <BoosterModal />
      <HeaderTitle hasBackButton>Boosters</HeaderTitle>
      <BoostersPanel />
    </>
  );
};

export default BoostersApp;
