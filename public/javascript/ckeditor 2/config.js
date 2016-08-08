/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
console.log(CKEDITOR.tools.callFunction);
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.language = 'zh-cn';
	// config.uiColor = '#AADC6E';
	//config.image_repviewText='';
	config.toolbar = 'Basic';

	//config.filebrowserImageUploadUrl= "/jx_web/editor/uploadFile.do";

	console.log(config.extraPlugins);
	//设置宽高
	config.width = 800;
	config.height = 600;

	//默认字体
	config.font_names = '宋体/SimSun;' +
		'黑体;' +
		'仿宋/仿宋_GB2312;' +
		'楷体/楷体_GB2312' +
		'Arial/Arial, Helvetica, sans-serif;' +
		'Times New Roman/Times New Roman, Times, serif;' +
		'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
		'Verdana/Verdana, Geneva, sans-serif';
	config.font_defaultLabel = '宋体';
	////字体默认大小 plugins/font/plugin.js
	config.fontSize_sizes = '一号/34px;小一/32px;二号/29px;小二/24px;三号/21px;小三/20px;四号/18px;小四/16px;五号/14px;小五/12px;六号/10px;/小六/8px';
	config.fontSize_defaultLabel = '五号/14px';
};
