import { gql } from "@apollo/client";
import { Header, NavigationMenu, SEO } from "../components";
import * as MENUS from "../constants/menus";

export default function SingleMovie(props) {
  const { title, content } = props.data.nodeByUri;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  console.log({ title, content });

  return (
    <>
      <SEO title="Grand SE E o" description="Los pollos de mi cazuela" />
      <Header
        title="JA JA y me"
        description="El secreto del sabor"
        menuItems={primaryMenu}
      />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

SingleMovie.variables = ({ uri }) => {
  return { uri };
};

SingleMovie.query = gql`
  ${NavigationMenu.fragments.entry}
  query GetMovieByUri($uri: String!, $headerLocation: MenuLocationEnum) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }

    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

SingleMovie.variables = ({ uri }) => {
  return {
    uri,
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};
