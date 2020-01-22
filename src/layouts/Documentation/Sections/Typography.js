import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";

const typoDep = `import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";`;
const typo = `<Muted>muted text (<code>Muted</code> component)</Muted>
<Quote
  text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
  author=" Kanye West, Musician"
/>
<Danger>danger text (<code>Danger</code> component)</Danger>
<Info>info text (<code>Info</code> component)</Info>
<Primary>primary text (<code>Primary</code> component)</Primary>
<Success>success text (<code>Success</code> component)</Success>
<Warning>warning text (<code>Warning</code> component)</Warning>`;

class Typography extends React.Component {
  render() {
    return (
      <div>
        <h1>Typography</h1>
        <p>
          Beacause of the jss styling (see{" "}
          <Link to={"/documentation/styles"}>styles section</Link>) we had to
          create some special components so that they have our fonts.
        </p>
        <p>These components are as follows:</p>
        <Muted>
          muted text (<code>Muted</code> component)
        </Muted>
        <Quote
          text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
          author=" Kanye West, Musician"
        />
        <Danger>
          danger text (<code>Danger</code> component)
        </Danger>
        <Info>
          info text (<code>Info</code> component)
        </Info>
        <Primary>
          primary text (<code>Primary</code> component)
        </Primary>
        <Success>
          success text (<code>Success</code> component)
        </Success>
        <Warning>
          warning text (<code>Warning</code> component)
        </Warning>
        <SyntaxHighlighter language="jsx" style={prism}>
          {typoDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {typo}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Typography;