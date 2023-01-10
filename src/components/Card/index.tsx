interface Content {
  icon: string;
  color: string;
  title: string;
  description: string;
}

interface CardProps {
  content: Content;
}

const Card = (props: CardProps) => {
  const { content } = props;
  return (
    <section
      class="flex h-[27.625rem] w-[20.5rem] flex-col justify-between p-12 lg:h-[31.25rem] lg:w-[19.25rem]"
      style={{ 'background-color': content.color }}
    >
      <figure class="h-[2.625rem] object-cover">
        <img alt={`${content.title} icon`} src={content.icon} />
      </figure>
      <h1 class="mt-8 font-display text-4xl font-bold uppercase">
        {content.title}
      </h1>
      <p class="mt-8 grow">{content.description}</p>
      <button
        class={` w-fit select-none rounded-full border-2 border-white bg-white py-2 px-8 hover:bg-transparent hover:text-white btn-learn-more-${content.title}`}
      >
        Learn More
      </button>
    </section>
  );
};

export default Card;
