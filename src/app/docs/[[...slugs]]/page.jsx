export default function DocsPage({ params }) {
  if (params.slugs?.length === 2) {
    return (
      <h1>
        Viewing Docs for feature {params.slugs[0]} and concept {params.slugs[1]}
      </h1>
    );
  } else if (params.slugs?.length === 1) {
    return <h1>Viewing Docs for feature {params.slugs[0]}</h1>;
  }

  return <h1>Docs Page</h1>;
}
