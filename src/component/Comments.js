import React from 'react';
import Disqus from 'disqus-react';
import './comments.scss';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Comments extends React.Component {
    render() {
        const disqusShortname = 'mybjjgameplan';
        const disqusConfig = {
            url: this.props.url,
            identifier: this.props.id,
            title: this.props.title,
        };
        console.log(this.props.url, this.props.id, this.props.title , "lets see")
        return (
            <div className="comments">
                <h2>Let's have a discussion</h2>
                <p>Leave your comments and questions below.</p>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig} />
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}

export default Comments;