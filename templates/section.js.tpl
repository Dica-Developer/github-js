/**
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <info@mikedeboer.nl>
 **/
define(
    /**
    * @exports <%sectionName%>
    */
    function(){
        'use strict';

        var <%sectionName%> = {
            <%sectionName%>: {}
        };

        <%sectionBody%>

        return <%sectionName%>;
    });

