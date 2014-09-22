    var <%= sectionName%><%= funcName%>AfterRequest = function(ret, res){
<%= afterRequest %>
        };
    <%= sectionName%>.<%= sectionName%>.<%= funcName%> = handler(<%= sectionName%><%= funcName%>AfterRequest);