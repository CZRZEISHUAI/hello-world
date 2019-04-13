
//封装a-b的随机整数，包含a,包含b
function getRandomNum(a, b) {
	return parseInt(Math.random() * (b - a + 1) + a);
}
//封装随机色
function getRandomColor() {
	var r = getRandomNum(0, 255);
	var g = getRandomNum(0, 255);
	var b = getRandomNum(0, 255);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}


// 封装只得到元素节点
var Element = {
	// 1.从节点数组中，过滤出元素节点
	getElement: function (nodes) {
		var arr = [];
		nodes.forEach(function (item) {
			if (item.nodeType == 1) {
				arr.push(item);
			}
		})
		return arr;
	},
	//2.获取子元素节点
	getChildElement: function (parent) {
		var sons = parent.childNodes; //所有的子节点
		return Element.getElement(sons);
	},
	//3.获取兄弟元素节点
	getNextElement: function (ele) {
		var next = ele.nextSibling;
		if (next.nodeType == 3) {
			next = next.nextSibling;
		}
		return next;
	}
}


function bufferAnimation(ele, obj, timer, fn) {
	var count = 0;
	for (var key in obj) {
		count++;
		var target = obj[key];
		donghua(key, target);
	}

	function donghua(key, target) {
		target = key == "opacity" ? target * 100 : target;
		clearInterval(ele[key + "timer"]);
		ele[key + "timer"] = setInterval(function () {
			var current = window.getComputedStyle(ele)[key]; //120px
			var unit = current.match(/[a-z]+/);
			unit = unit ? unit[0] : "";
			current = parseFloat(current);
			current = key == "opacity" ? current * 100 : current;
			var speed = (target - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			current += speed;
			if (current == target) {
				clearInterval(ele[key + "timer"]);
				count--;
			}
			current = key == "opacity" ? current / 100 : current;
			ele.style[key] = current + unit;
			if (count == 0) {
				typeof fn == "function" ? fn() : fn;
			}
		}, timer)

	}

}
