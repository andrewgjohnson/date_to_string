/*
 * date_to_string v1.0.0
 *
 * Copyright (c) 2013 Andrew G. Johnson <andrew@andrewgjohnson.com>
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author Andrew G. Johnson <andrew@andrewgjohnson.com>
 * @copyright Copyright (c) 2013 Andrew G. Johnson <andrew@andrewgjohnson.com>
 * @link http://github.com/andrewgjohnson/date_to_string
 * @license http://www.opensource.org/licenses/mit-license.php The MIT License
 * @version 1.0.0
 * @package date_to_string
 *
 */

if (typeof date_to_string == "undefined")
{
	var date_to_string = function(format,date) {
		format = String(format);
		date = typeof date != "undefined" && date instanceof Date ? date : new Date();

		var formats = {
			a:function(date) {
				return date.getHours() < 12 ? "am" : "pm";
			},
			A:function(date) {
				return date.getHours() < 12 ? "AM" : "PM";
			},
			B:function(date) {
				return ("000" + Math.floor((date.getHours() * 60 * 60 + (date.getMinutes() + 60 + date.getTimezoneOffset()) * 60 + date.getSeconds()) / 86.4) % 1000).slice(-3);
			},
			c:function(date) {
				return date_to_string("Y-m-d\\TH:i:s",date);
			},
			d:function(date) {
				return (date.getDate() < 10 ? "0" : "") + date.getDate();
			},
			D:function(date) {
				switch (date.getDay())
				{
					case 0:
						return "Sun";

					case 1:
						return "Mon";

					case 2:
						return "Tue";

					case 3:
						return "Wed";

					case 4:
						return "Thu";

					case 5:
						return "Fri";

					case 6:
						return "Sat";
				}
			},
			e:function(date) {
				var
					first = parseInt(Math.abs(date.getTimezoneOffset() / 60),10),
					second = Math.abs(date.getTimezoneOffset() % 60);
				return (new Date().getTimezoneOffset() < 0 ? "+" : "-") + (first < 10 ? "0" : "") + first + (second < 10 ? "0" : "") + second;
			},
			F:function(date) {
				switch (date.getMonth())
				{
					case 0:
						return "January";

					case 1:
						return "February";

					case 2:
						return "March";

					case 3:
						return "April";

					case 4:
						return "May";

					case 5:
						return "June";

					case 6:
						return "July";

					case 7:
						return "August";

					case 8:
						return "September";

					case 9:
						return "October";

					case 10:
						return "November";

					case 11:
						return "December";
				}
			},
			g:function(date) {
				return date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
			},
			G:function(date) {
				return date.getHours();
			},
			h:function(date) {
				var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
				return (hour < 10 ? "0" : "") + hour;
			},
			H:function(date) {
				return (date.getHours() < 10 ? "0" : "") + date.getHours();
			},
			i:function(date) {
				return (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
			},
			I:function(date) {
				return date.getTimezoneOffset() < Math.max(new Date(date.getFullYear(),0,1).getTimezoneOffset(),new Date(date.getFullYear(),6,1).getTimezoneOffset()) ? 1 : 0;
			},
			j:function(date) {
				return date.getDate();
			},
			l:function(date) {
				switch (date.getDay())
				{
					case 0:
						return "Sunday";

					case 1:
						return "Monday";

					case 2:
						return "Tuesday";

					case 3:
						return "Wednesday";

					case 4:
						return "Thursday";

					case 5:
						return "Friday";

					case 6:
						return "Saturday";
				}
			},
			L:function(date) {
				return new Date(date.getFullYear(),1,29).getMonth() == 1 ? 1 : 0;
			},
			m:function(date) {
				return (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
			},
			M:function(date) {
				switch (date.getMonth())
				{
					case 0:
						return "Jan";

					case 1:
						return "Feb";

					case 2:
						return "Mar";

					case 3:
						return "Apr";

					case 4:
						return "May";

					case 5:
						return "Jun";

					case 6:
						return "Jul";

					case 7:
						return "Aug";

					case 8:
						return "Sep";

					case 9:
						return "Oct";

					case 10:
						return "Nov";

					case 11:
						return "Dec";
				}
			},
			n:function(date) {
				return date.getMonth() + 1;
			},
			N:function(date) {
				return date.getDay() == 0 ? 7 : date.getDay();
			},
			o:function(date) {
				return date.getWeekYear();
			},
			O:function(date) {
				var
					first = parseInt(Math.abs(date.getTimezoneOffset() / 60),10),
					second = Math.abs(date.getTimezoneOffset() % 60);
				return (new Date().getTimezoneOffset() < 0 ? "+" : "-") + (first < 10 ? "0" : "") + first + (second < 10 ? "0" : "") + second;
			},
			P:function(date) {
				var
					first = parseInt(Math.abs(date.getTimezoneOffset() / 60),10),
					second = Math.abs(date.getTimezoneOffset() % 60);
				return (new Date().getTimezoneOffset() < 0 ? "+" : "-") + (first < 10 ? "0" : "") + first + ":" + (second < 10 ? "0" : "") + second;
			},
			r:function(date) {
				return date_to_string("D, d M Y H:i:s O",date);
			},
			s:function(date) {
				return (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
			},
			S:function(date) {
				switch (date.getDate())
				{
					case 1:
					case 21:
					case 31:
						return "st";

					case 2:
					case 22:
						return "nd";

					case 3:
					case 23:
						return "rd";

					default:
						return "th";
				}
			},
			t:function(date) {
				return new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
			},
			T:function(date) {
				var abbreviation = String(date).match(/\(([^\)]+)\)$/) || String(date).match(/([A-Z]+) [\d]{4}$/);
				if (abbreviation)
					abbreviation = abbreviation[1].match(/[A-Z]/g).join("");
				return abbreviation;
			},
			u:function(date) {
				return date.getMilliseconds() * 1000;
			},
			U:function(date) {
				return date.getTime() * 1000;
			},
			w:function(date) {
				return date.getDay();
			},
			W:function(date) {
				return date.getWeek();
			},
			y:function(date) {
				return String(date.getFullYear()).substring(2,4);
			},
			Y:function(date) {
				return date.getFullYear();
			},
			z:function(date) {
				return Math.floor((date.getTime() - new Date(date.getFullYear(),0,1).getTime()) / (1000 * 60 * 60 * 24));
			},
			Z:function(date) {
				return (date.getTimezoneOffset() < 0 ? "+" : "-") + (date.getTimezoneOffset() * 24);
			}
		};

		var
			string = "",
			escaped = false;
		for (var position = 0;position < format.length;position++)
		{
			if (!escaped && format.substring(position,position + 1) == "\\")
				escaped = true;
			else if (escaped || typeof formats[format.substring(position,position + 1)] == "undefined")
			{
				string += String(format.substring(position,position + 1));
				escaped = false;
			}
			else
				string += String(formats[format.substring(position,position + 1)](date));
		}
		return string;
	};
}

// http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
Date.prototype.getWeek = function() {
	var target = new Date(this.valueOf());
	var dayNr = (this.getDay() + 6) % 7;
	target.setDate(target.getDate() - dayNr + 3);
	var firstThursday = target.valueOf();
	target.setMonth(0,1);
	if (target.getDay() != 4) {
	    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
	}
	return 1 + Math.ceil((firstThursday - target) / (1000 * 60 * 60 * 24 * 7));
};
Date.prototype.getWeekYear = function() {
    var target  = new Date(this.valueOf());
    target.setDate(target.getDate() - ((this.getDay() + 6) % 7) + 3);
    return target.getFullYear();
};