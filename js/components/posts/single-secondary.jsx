// External dependencies
import React from 'react';
import classNames from 'classnames';

// Internal dependencies
import ContentMixin from 'utils/content-mixin';

let Secondarypost = React.createClass( {
	mixins: [ ContentMixin ],

	render: function() {
		let post = this.props;

		if ( 'attachment' === post.type ) {
			return null;
		}

		let classes = classNames( {
			entry: true
		} );

		return (
			<article id={ `post-${this.props.id}` } className="post post--secondary col--two">

				<h2>
					<a href={ this.props.link } rel="bookmark" dangerouslySetInnerHTML={ this.getTitle( this.props ) } />
				</h2>
				<a href={ post.link } rel="bookmark">
					<time dateTime={ post.date } className="post--date">{ this.getDate( post ) }</time>
				</a>
				<p>{this.getCategory( post )}</p>
				<div className="entry-content" dangerouslySetInnerHTML={ this.getShortExcerpt( post ) } />

				<a href={ post.link } rel="bookmark" className="button button--read-more">
					read more
				</a>
			</article>
		);
	}
} );



export default Secondarypost;
