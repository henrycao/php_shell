var apiConfig = {
    "Add1Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Add7Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Add14Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Add30Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Reduce1Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Reduce7Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Reduce14Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "Reduce30Day" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
    "ResetRealTime" : {
        "apiDescription" : "",
        "parameters" : {
	}
    },
}


function switchAPI(el) {
    var apiName = $(el).attr('id');
    var config = apiConfig[apiName];

    var h = '', input;
    h += '<div>' + apiName + '</div>';
    for (var i in config['parameters']) {
        h += '<div>';
        h += i;
        h += ' : ';
        /*
        input = document.createElement('input');
        input.classList.add('paramInput');
        input.id = 'param-' + i;
        input.value = config['parameters'][i];
        console.dir(input);
        input = $('<input class="paramInput" id="param-' + i + '" value="" style="width: 280px;">');
        console.log(input);
        input[0].value = ;
        console.log(input.outerHTML());
        h += input.outerHTML;
        */
        h += '<input class="paramInput" id="param-' + i + '" value="' + config['parameters'][i] + '" style="width: 280px;">';
        h += '</div>';
    }
    h += '<input class="paramInput" id="param-req" value="' + apiName + '" type="hidden">';
    h += '<input class="paramInput" id="param-app" value="Pnotify" type="hidden">';

    $('#apiDescription').html(config['apiDescription']);
    $('#parameters').html(h);
}
function call() {
    var id;
    var param = {};
    $(".paramInput").each(function(i, n) {
        n = $(n);
        id = n.attr('id').substr(6);
        // cut param-
        if (id === 'session_key' && n.val() === '') { // deal with sessionKey
            param[id] = $('#sessionKey').val();
        } else {
            param[id] = n.val();
        }
    });
    $.post('index.php',
        param,
        function(data) {
            try {
                var obj = JSON.parse(data);
                listHTML = '';
                convertObjectToList(0, 'result', obj);
            } catch (e) {
                listHTML = data;
            }

            $('#result').html(listHTML);
        }
    ).fail(function() {
$.post('index.php',{},function(data){
            $('#result').html(data);
});

	});
}

var listHTML = '';
function convertObjectToList(level, key, obj) {
    if (typeof obj === "object") {
        listHTML += '<div>' + makeSpace(level) + key + '</div>';
        ++level;
        for (var i in obj) {
            convertObjectToList(level, i, obj[i]);
        }
    } else {
        listHTML += '<div>' + makeSpace(level) + key + ':' + obj + '</div>';
    }
}
function makeSpace(level) {
    var space = '';
    for (var x = 0; x < level; ++x) {
        space += '&nbsp&nbsp&nbsp&nbsp';
    }
    return space;
}
function getTime(time) {
    var date = time ? new Date(time) : new Date();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var mi = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + "-" + month + "-" + currentDate+" "+hh + ":" + mm + ":" + mi;
}
function getDate(time) {
    var date = time ? new Date(time) : new Date();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate+" 00:00:00";
}
