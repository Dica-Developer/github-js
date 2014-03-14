/*global console*/
/**
 *  @overview
 *  @copyright Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

define(
    /**
     * @exports Util
     */
        function () {
        'use strict';

        /**
         *
         * @constructor
         */
        function Util() {}

        /**
         *  Shallow copy of properties from the `src` object to the `dest` object. If the
         *  `overwrite` argument is set to to `true`, the value of a property in `src`
         *  will be overwritten if it already exists.
         *  @param {Object} dest destination object
         *  @param {Object} src  source object
         *  @param {Boolean} [overwrite=false] set to `true` to overwrite values in `src`
         *  @returns {Object}
         **/
        Util.prototype.extend = function (dest, src, overwrite) {
            overwrite = overwrite || false;
            for (var prop in src) {
                if (overwrite || typeof dest[prop] === 'undefined') {
                    dest[prop] = src[prop];
                }
            }
            return dest;
        };

        /**
         *  Escapes characters inside a string that will an error when it is used as part
         *  of a regex upon instantiation like in `new RegExp("[0-9" + str + "]")`
         *  @param {String} str string to escape
         *  @returns {String}
         **/
        Util.prototype.escapeRegExp = function (str) {
            return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
        };

        /**
         *
         *  Transform a string that contains spaces or dashes to camelCase. If `upper` is
         *  set to `true`, the string will be transformed to CamelCase.
         *
         *  @example
         *  Util.toCamelCase("why U no-work");
         *  // returns 'whyUNoWork'
         *  @example
         *  Util.toCamelCase("why U no-work", true);
         *  // returns 'WhyUNoWork'
         *  @param {String} str string to transform
         *  @param {Boolean} [upper=false] set to `true` to transform to CamelCase
         *  @returns {String}
         **/
        Util.prototype.toCamelCase = function (str, upper) {
            upper = upper || false;
            str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.))/g, function (match) {
                return match.charAt(match.length - 1).toUpperCase();
            });
            if (!upper) {
                str = str.charAt(0).toLowerCase() + str.substr(1);
            }
            return str;
        };

        /**
         *  Determines whether a string is true in the html attribute sense.
         *  @example <caption>Possible values:</caption>
         *  Util.isTrue(true); // returns true
         *  Util.isTrue('true'); // returns true
         *  Util.isTrue('on'); // returns true
         *  Util.isTrue(1); // returns true
         *  Util.isTrue('1'); // returns true
         *  @params {*} value
         *  @return {Boolean}
         **/
        Util.prototype.isTrue = function (value) {
            return (value === true || value === 'true' || value === 'on' || typeof value === 'number' && value > 0 || value === '1');
        };

        /**
         *  Determines whether a string is false in the html attribute sense.
         *  @example <caption>Possible values:</caption>
         *  Util.isFalse(false); // returns true
         *  Util.isFalse('false'); // returns true
         *  Util.isFalse('off'); // returns true
         *  Util.isFalse(0); // returns true
         *  Util.isFalse('0'); // returns true
         *  @param {*} value
         *  @returns {Boolean}
         **/
        Util.prototype.isFalse = function (value) {
            return (value === false || value === 'false' || value === 'off' || value === 0 || value === '0');
        };

        var consoleTypes = ['info', 'log', 'warn', 'error'];

        consoleTypes.forEach(function(type){
            Util.prototype[type] = function(){
                if (typeof console !== 'undefined' && typeof console[type] !== 'undefined') {
                    return console[type];
                } else {
                    return null;
                }
            };
        });

        console.log(new Util());
        return new Util();
    });