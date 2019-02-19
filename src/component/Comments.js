import React from 'react';
import Disqus from 'disqus-react';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Comments extends React.Component {
    render() {
        const url = "https://mybjjgameplan.com/";
        const id = '345';
        const title = "my blog";
        const body = "this is a test";

        const disqusShortname = 'example';
        const disqusConfig = {
            url: url,
            identifier: id,
            title: title,
        };

        return (
            <div className="article">
                <h1>{title}</h1>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <p>{body}</p>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}

export default Comments;