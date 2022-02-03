/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, IconButton, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

// const MY_TEMPLATE = [
// 	["core/image", {}],
// 	["core/heading", {placeholder:"Service Title"}],
// 	["core/paragraph", {placeholder:"Service Description"}]
// ]

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const handleAddLocation = () => {
		const locations = [attributes.locations ];
		locations.push( {
			address: '',
		} );
		setAttributes( { locations } );
	};

	const handleRemoveLocation = ( index ) => {
		const locations = [attributes.locations ];
		locations.splice( index, 1 );
		setAttributes( { locations } );
	};

	const handleLocationChange = ( address, index ) => {
		const locations = [attributes.locations ];
		locations[ index ].address = address;
		setAttributes( { locations } );
	};

	let locationFields,
		locationDisplay;

	console.log(attributes.locations);

	if ( attributes.locations.length ) {
		locationFields = attributes.locations.map( ( location, index ) => {
			return <Fragment key={ index }>
				<TextControl
					className="grf__location-address"
					id={ index }
					placeholder="350 Fifth Avenue New York NY"
					value={ attributes.locations[ index ].address }
					onChange={ ( address ) => handleLocationChange( address, index ) }
				/>
				<IconButton
					className="grf__remove-location-address"
					icon="no-alt"
					label="Delete location"
					onClick={ () => handleRemoveLocation( index ) }
				/>
			</Fragment>;
		} );

		locationDisplay = attributes.locations.map( ( location, index ) => {
			return <p key={ index }>{ location.address }</p>;
		} );
	}

	return [
		<InspectorControls key="1">
			<PanelBody title={ __( 'Locations' ) }>
				{ locationFields }
				<Button
					isDefault
					onClick={ handleAddLocation.bind( this ) }
				>
					{ __( 'Add Location' ) }
				</Button>
			</PanelBody>
		</InspectorControls>,
		<div key="2" { ...useBlockProps() }>
			<h2>Block</h2>
			{ locationDisplay }
		</div>,
	];
}
	// return (
	// 	<div {...useBlockProps()}>
	// 		{/* <InnerBlocks template={MY_TEMPLATE} templateLock="all"/> */}
	// 		<TextControl
    //             label={ __( 'Title', 'custom-blocks-test' ) }
    //             value={ attributes.title }
    //             onChange={ ( val ) => setAttributes( { message: val } ) }
    //         />
	// 	</div>		
	// );
//}
