import { WordPressTemplate } from "@faustwp/core";

export default function Preview(props) {
  return (
    <>
      <pre>{JSON.stringify(props, null, 3)}</pre>
      <h2>El preview de la recontraputa que te remilparió</h2>
      <WordPressTemplate {...props} />
    </>
  );
}
