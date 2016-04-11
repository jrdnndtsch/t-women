<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Foxhound
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic|PT+Serif:400italic,700italic' rel='stylesheet' type='text/css'>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'foxhound' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="hero">
			<div class="container">
				<img src="<?php bloginfo('template_directory'); ?>/assets/triumphant-women-logo.svg" alt="<?php bloginfo( 'name' ); ?>">
				<h2>Empowering others to become more successful and confident with their finances</h2>
			</div>
		</div>	
		<nav class="nav--main">
			<div class="container container--flex">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo('template_directory'); ?>/assets/triumphant-women-logo.svg" alt="<?php bloginfo( 'name' ); ?>"></a>
				<div class="nav--search">
					<div  id="search-bar" class="search-bar"><?php dynamic_sidebar( 'sidebar-1' ); ?></div>
					<span class="search" id="search-icon">Search</span>
				</div>
			</div>
			
		</nav>

		<nav id="site-navigation" class="main-navigation" role="navigation" aria-live="assertive"></nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
