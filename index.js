var webshot = require("webshot");

var options = {
	siteType: "file",
	streamType: "png",
	shotSize: {
		width: "all",
		height: "all"
	}
};

webshot("homepage.html", "zuam-cv1.png", options, (err) =>{
	if (err) {
		return console.log(err);
	}
});