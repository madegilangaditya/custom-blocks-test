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
import { TextControl  } from '@wordpress/components';




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
	const blockProps = useBlockProps();
	// const updateNameLabel = ( val ) => {
    //     setAttributes( { name: val } );
    // }
	const { name, email, phone, message } = attributes

	return (
		<div {...blockProps}>
				<TextControl
					label="Name Label"
					value={ name }
					onChange={ (val)=>{ setAttributes( {name:val} ) } }
					className='name'
				/>

				<TextControl
					label="Email Label"
					value={ email }
					onChange={ (val)=>{ setAttributes( {email:val} ) } }
					className='email'
				/>

				<TextControl
					label="Phone Label"
					value={ phone }
					onChange={ (val)=>{ setAttributes( {phone:val} ) } }
					className='phone'
				/>

				<TextControl
					label="Message Label"
					value={ message }
					onChange={ (val)=>{ setAttributes( {message:val} ) } }
					className='message'
				/>
			
			
			
			
		</div>		
	);
}
