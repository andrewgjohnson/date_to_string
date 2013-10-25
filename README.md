# date_to_string

## Description

date_to_string is a Javscript function for transforming a date object into a formatted string.  It is designed to function similarly to PHP's date() function.

## Usage

Reference either the minified or un-minified Javascript source file of date_to_string then you can immediately begin using the date_to_string function.  It accepts two parameters; the first should be a string describing the format you would like returned while the second is an optional date object.  When the second parameter is omitted `new Date()` will be used to define the date formatted.

## Example

    date_to_string("Y-m-d")                    // returns "2013-10-25" (or whatever the current date is)
    date_to_string("Y-m-d",new Date())         // same as above
    date_to_string("Y-m-d",new Date(2000,0,1)) // returns "2000-01-01"

There is also an interactive example to allow you to quickly experiment that is included in the repository.

## Acknowledgements

This project was started by [Andrew G. Johnson](https://github.com/andrewgjohnson), contact via [Twitter](http://twitter.com/andrewgjohnson), [Email](mailto:andrew@andrewgjohnson.com), [GitHub](https://github.com/andrewgjohnson) or [Online](http://www.andrewgjohnson.com/)

## Changelog

######v1.0.0 (October 25, 2013)
 * Intial release of date_to_string
