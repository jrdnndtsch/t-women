/* global FoxhoundSettings */
// External dependencies
import React from 'react';
import isEqual from 'lodash/lang/isEqual';

// Internal dependencies
import API from 'utils/api';
import PostsStore from '../../stores/posts-store';
import PostList from '../posts/list';
import SearchForm from './form';

/*
 * Method to retrieve state from Stores
 */
function getState() {
	return {
		data: PostsStore.getPosts(),
		paginationLimit: PostsStore.getPaginationLimit(),
	};
}

let Search = React.createClass( {

	propTypes: {
		page: React.PropTypes.number.isRequired,
	},

	getInitialState: function() {
		return getState();
	},

	componentDidMount: function() {
		PostsStore.addChangeListener( this._onChange );

		let filter = {
			s: this.getSearchValue(),
		};
		API.getPosts( { filter: filter, page: this.props.page } );
	},

	componentDidUpdate: function( prevProps ) {
		if ( ! isEqual( prevProps, this.props ) ) {
			let filter = {
				s: this.getSearchValue(),
			};
			API.getPosts( { filter: filter, page: this.props.page } );
		}
	},

	componentWillUnmount: function() {
		PostsStore.removeChangeListener( this._onChange );
	},

	_onChange: function() {
		this.setState( getState() );
	},

	getSearchValue: function() {
		if ( 'undefined' !== typeof this.refs.searchForm ) {
			return this.refs.searchForm.getValue();
		}
		return '';
	},

	setTitle: function() {
		let term = this.getSearchValue();
		document.title = `Search results for ${term} — ${FoxhoundSettings.title}`;
	},

	render: function() {
		let posts = this.state.data;
		let term = this.getSearchValue();
		this.setTitle();
	

		return (
			<div className='site-content'>
				<header className="container">
					<h1>Search results for &ldquo;{ this.props.term }&rdquo;</h1>
					<SearchForm ref='searchForm' initialSearch={ this.props.term } onChange={ this.search } data="hello" />
				</header>

				{ posts.length ?
					<PostList posts={ posts } /> :
					null
				}
			</div>
		);
	}
} );

export default Search;
