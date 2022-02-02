<?php
/**
 * Plugin Name:       Custom Blocks Test
 * Description:       Testing block plugin
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Made Gilang Aditya
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-blocks-test
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */

function custom_blocks_test_plugin_block_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'custom-blocks-test',
                'title' => __( 'Custom Block Test', 'custom-blocks-test' ),
            ],
        ]
    );
}
add_action( 'block_categories', 'custom_blocks_test_plugin_block_categories', 10, 2 );

function create_block_custom_blocks_test_block_init() {
	$blocks = array(
		'services-block/',
		'contact-cta/',
		'contact-form/',
        'custom-slider/',
	);

	foreach( $blocks as $block ){
		register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/' . $block );
	}
}
add_action( 'init', 'create_block_custom_blocks_test_block_init' );

function custom_block_test_slider_on() {
    if ( has_block( 'create-block/custom-slider' ) ) {
        wp_enqueue_script( 'slick-init-js', plugin_dir_url( __FILE__ ). 'lib/slick/slick.min.js', array('jquery') , time(), true );
        wp_enqueue_style( 'slick-init-css', plugin_dir_url( __FILE__ ). 'lib/slick/slick.css', array() , time() );
        wp_enqueue_style( 'slick-theme-css', plugin_dir_url( __FILE__ ). 'lib/slick/slick.theme.css', array() , time() );
        wp_enqueue_script( 'slider-main', plugin_dir_url( __FILE__ ). 'blocks/custom-slider/main.js', array('jquery') , time(), true );
    }
}
add_action( 'wp_enqueue_scripts', 'custom_block_test_slider_on' );


wp_enqueue_script( 'demo-filter-js', plugin_dir_url( __FILE__ ). 'filter.js', array('jquery') , time(), true );
