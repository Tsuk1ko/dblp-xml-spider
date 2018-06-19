/*
 * @Author: JindaiKirin 
 * @Date: 2018-05-21 16:39:24 
 * @Last Modified by: JindaiKirin
 * @Last Modified time: 2018-06-19 15:36:32
 */

const fs = require('fs');
const GetReq = require("./getReq");
const Extractor = require("./extract");

var cnt = 0;

/**
 * 从目录爬取所有文章
 * 
 * @param {Array<string>} urls 目录网址
 * @param {string} [filename=new Date().getTime()] 保存文件名
 */
async function spide(urls, filename = new Date().getTime()) {
	for (i in urls) {
		await GetReq.get(url[i]).then(async chtml => {
			//取得文章超链接
			var hrefs = Extractor.catalog(chtml);
			//得到文章内容
			for (i in hrefs) {
				await GetReq.get(hrefs[i]).then(ahtml => {
					var articles = Extractor.article(ahtml);
					writeToFile(articles, filename);
				});
			}
		});
	}
}

/**
 * 将爬取到的文章写入文件
 * 
 * @param {Array<string>} articles 文章XML链接
 * @param {string} filename 文件名
 */
function writeToFile(articles, filename) {
	for (i in articles)
		fs.appendFileSync(filename + ".txt", articles[i] + "\n");
}

exports.spide = spide;
