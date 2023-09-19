import LanguagePicker from './LanguagePicker';
import Banner from "./Banner";

export default function Header() {

  return (
    <header className="relative">
      <Banner />
      <header className="grid grid-cols-3 gap-4">
        <LanguagePicker />
        {/* <Nav /> */}
      </header>
    </header>
  );
}
