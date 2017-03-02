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
		'wysiwygarea';// %REMOVE_END%
	console.log(555);
	console.log(config);
	//设置宽高
	config.width = "100%";
	config.height = 500;
	//默认字体
	config.font_names = '宋体/SimSun;' +
		'微软雅黑/weiruanyahei, Microsoft YaHei;' +
		'仿宋/仿宋_GB2312;' +
		'楷体/楷体_GB2312' +
		'Arial/Arial, Helvetica, sans-serif;' +
		'Times New Roman/Times New Roman, Times, serif;' +
		'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
		'Verdana/Verdana, Geneva, sans-serif';
	config.font_defaultLabel = '微软雅黑';
	////字体默认大小 plugins/font/plugin.js
	//config.fontSize_sizes = '一号/34px;小一/32px;二号/29px;小二/24px;三号/21px;小三/20px;四号/18px;小四/16px;五号/14px;小五/12px;六号/10px;/小六/8px';
	config.fontSize_defaultLabel = '14px';

	//添加行距图标：此功能需要额外在plugins下加入lineheight文件夹

};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
