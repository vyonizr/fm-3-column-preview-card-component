import { Component, For } from 'solid-js'

import { iconLuxury, iconSedans, iconSuvs } from './assets/icons'

const CONTENTS = [
  {
    icon: iconSedans,
    color: 'hsl(31, 77%, 52%)',
    title: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
  },
  {
    icon: iconSuvs,
    color: 'hsl(184, 100%, 22%)',
    title: 'suvs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
  },
  {
    icon: iconLuxury,
    color: 'hsl(179, 100%, 13%)',
    title: 'luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  },
]

const App: Component = () => {
  return (
    <main class='rounded-xl overflow-hidden text-white w-max lg:grid lg:grid-flow-col lg:items-center;'>
      <For each={CONTENTS}>
        {(content) => (
          <section
            class='p-12 w-[20.5rem] h-[27.625rem] flex flex-col justify-between'
            style={{ 'background-color': content.color }}
          >
            <figure class='h-[2.625rem] object-cover'>
              <img alt={`${content.title} icon`} src={content.icon} />
            </figure>
            <h1 class='text-5xl font-display uppercase font-bold'>
              {content.title}
            </h1>
            <p>{content.description}</p>
            <button
              class={`py-2 px-8 border-2 w-fit border-white rounded-full hover:text-white bg-white hover:bg-transparent btn-learn-more-${content.title}`}
            >
              Learn More
            </button>
          </section>
        )}
      </For>
    </main>
  )
}

export default App
