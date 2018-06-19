/*
 * @Author: JindaiKirin 
 * @Date: 2018-05-21 18:04:15 
 * @Last Modified by: JindaiKirin
 * @Last Modified time: 2018-06-19 15:38:32
 */

const Spider = require("./spider/main");

Spider.spide([
	"https://dblp.uni-trier.de/db/journals/tiis/",
	"https://dblp.uni-trier.de/db/journals/tist/",
	"https://dblp.uni-trier.de/db/journals/tkdd/",
	"https://dblp.uni-trier.de/db/journals/tois/",
	"https://dblp.uni-trier.de/db/journals/toit/",
	"https://dblp.uni-trier.de/db/journals/tweb/"
]);
