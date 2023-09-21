import React from 'react'
import LanguagePicker from './LanguagePicker';
import { Navigation } from './navigation';

export default function Header() {

  return (
    <header className="">
      <section className="grid grid-cols-3 gap-4">
        <LanguagePicker />
      </section>
      <Navigation />
    </header>
  );
}
