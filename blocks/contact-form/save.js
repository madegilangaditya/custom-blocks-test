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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	const { name, email, phone, message } = attributes

	return (
		<div {...blockProps}>
			<form class="ex-form mx-auto">
				<div class="form-group">
					<label htmlFor="name" className='name'>{name}</label>
					<input type="text" class="form-control" id="name"/>
				</div>
				<div class="form-group">
					<label htmlFor="email" className='email'>{email}</label>
					<input type="email" class="form-control" id="email"/>
				</div>
				<div class="form-group">
					<label htmlFor="phone" className='phone'>{phone}</label>
					<input type="number" class="form-control" id="phone"/>
				</div>
				<div class="form-group">
					<label htmlFor="message" className='message'>{message}</label>
					<textarea class="form-control" id="message" rows="7"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
			
		</div>	
		
	);
}
