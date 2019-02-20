import React from 'react';
import Disqus from 'disqus-react';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Comments extends React.Component {
    render() {
        const disqusShortname = 'mybjjgameplan-com';
        const disqusConfig = {
            url: this.props.url,
            identifier: this.props.id,
            title: this.props.title,
        };

        return (
            <div className="article">
                <h1>{this.props.title}</h1>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig} />
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}

export default Comments;