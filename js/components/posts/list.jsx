// External dependencies
import React from 'react';

// Internal dependencies
import Post from './single';
import Secondarypost from './single-secondary'
import Tertiarypost from './single-tertiary'

let PostList = React.createClass( {
	propTypes: {
		posts: React.PropTypes.array.isRequired,
	},

	render: function() {
		let posts = this.props.posts.map( function( post, i ) {
			if( i < 3 ) {
				return <Post key={ 'post-' + i } { ...post } />
			} else if( 3 <= i && i < 7	 ){
				return <Secondarypost key={ 'post-' + i } { ...post } />
			} else {
				return <Tertiarypost key={ 'post-' + i } { ...post } />
			}
		} );

		return (
			<div className="site-main container container--flex">
				{ posts }
			</div>
		);
	}
} );

export default PostList;
