import BigFatFormLazy from "../components/BigFatFormLazy";

const Page = () => {
  return (
    <article>
      <h2>Page One</h2>
      <p>
        This is my page 1 with <strong>BigFatFormLazy</strong>
      </p>
      <BigFatFormLazy />
    </article>
  );
};

// Page.componentName = "Page"

export default Page;

export const Component = Page;
