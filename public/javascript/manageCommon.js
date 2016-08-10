/**
 * Created by ty on 2016/8/9.
 */
$(document).ready(function(){

	var addNewPaperBtn = $("#addNewPaper"),
		rightContent = $("#contentArea");

	addNewPaperBtn.on("click",function(){
		rightContent.load("html/ckeditor.html", function(){
			CKEDITOR.replace("ck", {
				extraPlugins: "codesnippet",
				codeSnippet_theme: "monokai_sublime"
			});
		});
	});
});