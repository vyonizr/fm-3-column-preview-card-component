import { Component, For } from 'solid-js'

import Card from './components/Card';
import Footer from './components/Footer';
import { CONTENTS } from './constants';

const App: Component = () => {
  return (
    <>
      <main class="lg:items-center; w-max overflow-hidden rounded-xl text-white lg:grid lg:grid-flow-col">
        <For each={CONTENTS}>{(content) => <Card content={content} />}</For>
      </main>
      <Footer />
    </>
  );
};

export default App
