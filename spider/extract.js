/*
 * @Author: JindaiKirin 
 * @Date: 2018-05-21 17:37:44 
 * @Last Modified by: JindaiKirin
 * @Last Modified time: 2018-06-19 14:42:05
 */

const cheerio = require('cheerio');

/**
 * 提取目录中所有文章的超链接
 * 
 * @param {string} html 目录html
 * @returns 超链接数组
 */
function extractCatalog(html) {
	var $ = cheerio.load(html, {
		decodeEntities: false
	});
	var _main = $('#main>ul a');

	var hrefs = Array();
	for (var i = 0; i < _main.length; i++) {
		hrefs.push($(_main[i]).attr('href'));
	}
	return hrefs;
}

/**
 * 提取公文通文章标题和正文
 * 
 * @param {string} html 文章列表html
 * @returns 超链接数组
 */
function extractArticle(html) {
	var $ = cheerio.load(html, {
		decodeEntities: false
	});
	var _main = $('.body>ul a');
	var hrefs = Array();
	for (var i = 0; i < _main.length; i++) {
		var href = $(_main[i]).attr('href');
		if (href.substr(href.length - 3, 3) == 'xml')
			hrefs.push(href);
	}
	return hrefs;
}

exports.article = extractArticle;
exports.catalog = extractCatalog;
