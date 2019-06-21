import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';

import CKEditorInspector from '@ckeditor/ckeditor5-inspector';


ClassicEditor
	.create(document.querySelector('#editor'), {
		plugins: [Essentials,
			Autoformat,
			Bold,
			Italic,
			BlockQuote,
			Heading,
			// ImageUpload,
			Image,
			ImageCaption,
			ImageStyle,
			ImageToolbar,
			Link,
			List,
			Paragraph,
			PasteFromOffice,
			Table,
			TableToolbar,
			Font,
			Alignment
		],
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'fontColor',
				'fontSize',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'insertTable',
				'alignment',
				'undo'
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:side',
				'|',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	})
	.then(editor => {
		console.log('Editor was initialized', editor);
		CKEditorInspector.attach(editor)
	})
	.catch(error => {
		console.error(error.stack);
	});