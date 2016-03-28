import moment from 'moment';
import find from 'lodash/collection/find';

export default {
	getTitle: function( data ) {
		return { __html: data.title.rendered };
	},

	// <a href=${ data.link } class="read-more">Read More <span class="screen-reader-text">${ data.title.rendered }</span></a>
	getExcerpt: function( data ) {
		return { __html: data.excerpt.rendered };
	},

	getShortExcerpt: function( data ) {
		return { __html: data.excerpt.rendered };
	},
	getContent: function( data ) {
		return { __html: data.content.rendered };
	},

	getDate: function( data ) {
		let date = moment( data.date );
		return date.format( 'MMMM Do YYYY' );
	},

	getTime: function( data ) {
		let date = moment( data.date );
		return date.format( 'h:mm a' );
	},

  getFeaturedImage: function( data ) {
    if ( 'undefined' === typeof data._embedded['wp:featuredmedia'] ) {
      return false;
    }
    let image = find( data._embedded['wp:featuredmedia'], function( item ) {
      return ( 'undefined' !== typeof item.source_url);
    } );
    return image;
  },

  getBetterFeaturedImage: function( data ) {
    if ( 'undefined' === typeof data.better_featured_image ) {
      return false;
    } else if ( 'undefine' === typeof data.better_featured_image.source_url) {
      return false;
    } else {
      return data.better_featured_image.source_url;
    }
  },

	getFeaturedMedia: function( data ) {
		if ( 'undefined' === typeof data._embedded['wp:featuredmedia'] ) {
			return false;
		}
		let media = find( data._embedded['wp:featuredmedia'], function( item ) {
			return ( 'undefined' !== typeof item.source_url );
		} );
		return media;
	}

};
