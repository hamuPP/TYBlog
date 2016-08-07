/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%

	//设置宽高
	config.width = 800;
	config.height = 600;
	//默认字体
	config.font_names = '宋体;' +
		'黑体;' +
		'仿宋/仿宋_GB2312;' +
		'楷体/楷体_GB2312' +
		'Arial/Arial, Helvetica, sans-serif;' +
		'Times New Roman/Times New Roman, Times, serif';
	//config.font_defaultLabel = '宋体';
	//
	////字体默认大小 plugins/font/plugin.js
	//config.fontSize_sizes = '56px/初号;48px/小初;34px/一号;32px/小一;29px/二号;24px/小二;21px/三号;20px/小三;18px/四号;16px/小四;14px/五号;12px/小五;10px/六号;8px/小六';
	//config.fontSize_defaultLabel = '五号';
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
