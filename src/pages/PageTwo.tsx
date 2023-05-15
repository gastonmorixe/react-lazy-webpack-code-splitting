import BigFatForm from "../components/BigFatForm";

const Page = () => {
  return (
    <article>
      <h2>Page Two</h2>
      <p>
        This is my page 2 with <strong>BigFatForm</strong>
      </p>
      <BigFatForm />
    </article>
  );
};

// Page.componentName = "Page"

export default Page;

export const Component = Page;
