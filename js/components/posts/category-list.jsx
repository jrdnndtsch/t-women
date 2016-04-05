// External dependencies
import React from 'react';
import classNames from 'classnames';

// Internal dependencies
import Category from './single-category'
import ContentMixin from 'utils/content-mixin';

let CategoryList = React.createClass( {
	mixins: [ ContentMixin ],

	render: function() {
		let categories = this.props.data.map(function( cat, i ){
			return <Category key={ 'cat-' + i } { ...cat } />
		});

		return (
			<div className="post--categories">
				{ categories }
			</div>
		);
	}
} );



export default CategoryList;
